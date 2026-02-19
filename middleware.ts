import { NextRequest, NextResponse } from "next/server"

/**
 * Middleware for API route protection:
 * - Blocks suspicious user agents on /api/* routes
 * - Adds security headers to all responses
 * - Allowlists legitimate search crawlers on public routes
 */

// Known bad bot patterns (scraper bots, spam tools)
const BAD_BOT_PATTERNS = [
  /curl\//i,
  /python-requests/i,
  /scrapy/i,
  /httpclient/i,
  /java\//i,
  /libwww-perl/i,
  /wget/i,
  /nikto/i,
  /sqlmap/i,
  /masscan/i,
  /zgrab/i,
  /gobuster/i,
  /dirbuster/i,
  /nmap/i,
  /ahrefs/i,
  /semrush/i,
  /mj12bot/i,
  /dotbot/i,
]

// Legitimate crawlers that should always be allowed on public pages
const GOOD_CRAWLERS = [
  /googlebot/i,
  /bingbot/i,
  /slurp/i, // Yahoo
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /whatsapp/i,
  /telegrambot/i,
  /applebot/i,
]

function isBadBot(ua: string): boolean {
  return BAD_BOT_PATTERNS.some((pattern) => pattern.test(ua))
}

function isGoodCrawler(ua: string): boolean {
  return GOOD_CRAWLERS.some((pattern) => pattern.test(ua))
}

// In-memory burst limiter for API routes only
const apiBurstMap = new Map<string, { count: number; resetAt: number }>()
const API_BURST_WINDOW_MS = 10_000 // 10 seconds
const API_BURST_MAX = 10 // max 10 API requests per 10 seconds per IP

function isApiBurstLimited(ip: string): boolean {
  const now = Date.now()
  const entry = apiBurstMap.get(ip)

  if (!entry || now > entry.resetAt) {
    apiBurstMap.set(ip, { count: 1, resetAt: now + API_BURST_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > API_BURST_MAX
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ua = request.headers.get("user-agent") || ""
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  // --- API route protection ---
  if (pathname.startsWith("/api/")) {
    // Block bad bots from API entirely
    if (isBadBot(ua)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Block requests with no user agent
    if (!ua || ua.length < 5) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Burst rate limit for API routes
    if (isApiBurstLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": "10" } }
      )
    }

    // Only allow POST for submit endpoints
    if (
      (pathname === "/api/submit-playbook" || pathname === "/api/submit-contact") &&
      request.method !== "POST"
    ) {
      return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
  }

  // --- Security headers for all responses ---
  const response = NextResponse.next()

  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  )

  // Allow Turnstile in CSP - use report-only to avoid blocking Next.js scripts
  if (!pathname.startsWith("/api/")) {
    response.headers.set(
      "Content-Security-Policy-Report-Only",
      "frame-src 'self' https://challenges.cloudflare.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com;"
    )
  }

  return response
}

export const config = {
  matcher: [
    // Match API routes
    "/api/:path*",
    // Match page routes (not static files)
    "/((?!_next/static|_next/image|images|favicon.ico).*)",
  ],
}
