"use client"

import Image from "next/image"
import { useConsent } from "@/lib/consent"

export function Footer() {
  const { openPreferences } = useConsent()

  return (
    <footer className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/oo-logo.png"
              alt="Overcoming Ordinary"
              width={48}
              height={48}
              className="h-12 w-12 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Dominating average through enduring, gritty, resilient wellbeing in
              mind, body, and soul.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#philosophy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Dr. Dillon
                </a>
              </li>
              <li>
                <a href="#training" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Training
                </a>
              </li>
              <li>
                <a href="#domains" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Domains
                </a>
              </li>
              <li>
                <a href="/playbook" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Free Playbook
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact Dr. Dillon
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/data-rights" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Data Rights
                </a>
              </li>
              <li>
                <a href="/accessibility" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Accessibility
                </a>
              </li>
              <li>
                <button
                  onClick={openPreferences}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-foreground font-semibold">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:Business@overcomingordinary.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Business@overcomingordinary.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Follow us on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Connect on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Overcoming Ordinary. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Performance over Pathology.
          </p>
        </div>
      </div>
    </footer>
  )
}
