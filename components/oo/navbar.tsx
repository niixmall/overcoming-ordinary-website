"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Domains", href: "#domains" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false)
        menuButtonRef.current?.focus()
      }
    },
    [mobileOpen]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Focus first link when mobile menu opens
  useEffect(() => {
    if (mobileOpen) {
      const firstLink = mobileMenuRef.current?.querySelector("a")
      firstLink?.focus()
    }
  }, [mobileOpen])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center">
          <Image
            src="/images/oo-logo.png"
            alt="Overcoming Ordinary - Home"
            width={48}
            height={48}
            className="h-10 w-10 invert"
            priority
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-[0.25em] transition-colors ${
                link.label === "Contact"
                  ? "text-accent hover:text-accent/80"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/playbook"
            className="bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Free Playbook
          </a>
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="menu"
          className="border-t border-border/50 bg-background/95 backdrop-blur-md px-6 pb-8 pt-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="menuitem"
                className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                  link.label === "Contact"
                    ? "text-accent hover:text-accent/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/playbook"
              role="menuitem"
              className="mt-2 bg-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Free Playbook
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
