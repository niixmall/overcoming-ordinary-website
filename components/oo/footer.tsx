"use client"

import Image from "next/image"
import { useConsent } from "@/lib/consent"

export function Footer() {
  const { openPreferences } = useConsent()

  return (
    <footer className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main footer content */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left: Brand + blurb + LinkedIn */}
          <div className="max-w-sm">
            <Image
              src="/images/oo-logo.png"
              alt="Overcoming Ordinary"
              width={48}
              height={48}
              className="h-12 w-12 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Dominating average through enduring, gritty, resilient wellbeing in
              mind, body, and soul.
            </p>
            <a
              href="https://www.linkedin.com/in/dr-dillon-small/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Right: Two columns */}
          <div className="flex gap-16 sm:gap-24">
            {/* Navigate */}
            <nav aria-label="Footer navigation">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                Navigate
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Credentials
                  </a>
                </li>
                <li>
                  <a href="#training" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    The Framework
                  </a>
                </li>
                <li>
                  <a href="#domains" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Domains
                  </a>
                </li>
              </ul>
            </nav>

            {/* Get To Work */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
                Get To Work
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Work With Dr. Dillon
                  </a>
                </li>
                <li>
                  <a href="/playbook" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Free Playbook
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Business@overcomingordinary.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Business@overcomingordinary.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Overcoming Ordinary. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="/cookie-policy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </a>
            <a href="/accessibility" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Accessibility
            </a>
            <a href="/data-rights" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Data Rights
            </a>
            <button
              onClick={openPreferences}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookie Preferences
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
