/**
 * Server-side spam protection utilities.
 * Layers: Turnstile verification, honeypot, time-to-submit, disposable email blocking,
 * in-memory burst rate limiting (per-IP).
 */

// --- Disposable email domain blocklist ---
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email",
  "yopmail.com", "sharklasers.com", "guerrillamailblock.com", "grr.la",
  "dispostable.com", "trashmail.com", "fakeinbox.com", "temp-mail.org",
  "maildrop.cc", "10minutemail.com", "getnada.com", "mohmal.com",
  "mailnesia.com", "tempr.email", "discard.email", "tmpmail.net",
])

export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return domain ? DISPOSABLE_DOMAINS.has(domain) : false
}

// --- Honeypot check ---
export function isHoneypotFilled(value: string | null | undefined): boolean {
  return !!value && value.trim().length > 0
}

// --- Time-to-submit check (reject if submitted faster than threshold) ---
const MIN_SUBMIT_TIME_MS = 3000 // 3 seconds minimum

export function isTooFast(startTimestamp: number): boolean {
  const elapsed = Date.now() - startTimestamp
  return elapsed < MIN_SUBMIT_TIME_MS
}

// --- In-memory burst rate limiter (per IP, resets on cold start) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // max 5 submissions per minute per IP

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  if (entry.count > RATE_LIMIT_MAX) {
    return true
  }

  return false
}

// --- Turnstile verification ---
export async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    console.warn("[spam-protection] TURNSTILE_SECRET_KEY not set, skipping verification")
    return true // allow through if not configured
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch {
    console.error("[spam-protection] Turnstile verification failed")
    return false
  }
}

// --- Validation result type ---
export interface ProtectionResult {
  ok: boolean
  error?: string
  code?: "HONEYPOT" | "TOO_FAST" | "DISPOSABLE_EMAIL" | "RATE_LIMITED" | "TURNSTILE_FAILED"
}

// --- Run all checks ---
export async function runProtectionChecks(opts: {
  honeypotValue: string | null | undefined
  startTimestamp: number
  email: string
  turnstileToken: string
  ip: string
}): Promise<ProtectionResult> {
  // 1. Honeypot
  if (isHoneypotFilled(opts.honeypotValue)) {
    return { ok: false, error: "Invalid submission", code: "HONEYPOT" }
  }

  // 2. Time-to-submit
  if (isTooFast(opts.startTimestamp)) {
    return { ok: false, error: "Please take a moment before submitting", code: "TOO_FAST" }
  }

  // 3. Disposable email
  if (isDisposableEmail(opts.email)) {
    return { ok: false, error: "Please use a permanent email address", code: "DISPOSABLE_EMAIL" }
  }

  // 4. Rate limiting
  if (isRateLimited(opts.ip)) {
    return { ok: false, error: "Too many submissions. Please try again later.", code: "RATE_LIMITED" }
  }

  // 5. Turnstile
  const turnstileValid = await verifyTurnstile(opts.turnstileToken, opts.ip)
  if (!turnstileValid) {
    return { ok: false, error: "Bot verification failed. Please try again.", code: "TURNSTILE_FAILED" }
  }

  return { ok: true }
}
