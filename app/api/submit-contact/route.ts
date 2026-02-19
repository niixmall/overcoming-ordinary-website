import { NextRequest, NextResponse } from "next/server"
import { runProtectionChecks } from "@/lib/spam-protection"

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzZSp1x7IpyFxmO1ZuymohbE4cWz8_IhmBAzns_uywvB0zOPnbl8bZRAveX1kY9jWpOlQ/exec"

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const {
    intent,
    firstName,
    lastName,
    email,
    organization,
    details,
    _turnstileToken,
    _hp_company,
    _formStartTime,
  } = body

  // Validate required fields
  if (!firstName || !lastName || !email || !details) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Run all protection checks
  const protection = await runProtectionChecks({
    honeypotValue: _hp_company,
    startTimestamp: parseInt(_formStartTime || "0", 10),
    email,
    turnstileToken: _turnstileToken || "",
    ip,
  })

  if (!protection.ok) {
    if (protection.code === "HONEYPOT") {
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: protection.error }, { status: 429 })
  }

  // Forward to Google Apps Script
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "contact",
        intent: intent || "Other",
        firstName,
        lastName,
        email,
        organization: organization || "",
        details,
      }),
    })
  } catch {
    // Google Apps Script may not respond cleanly
  }

  return NextResponse.json({ success: true })
}
