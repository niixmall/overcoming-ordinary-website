"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Credentials", href: "#about" },
  { label: "The Framework", href: "#training" },
  { label: "Domains", href: "#domains" },
  { label: "Work With Dr. Dillon", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    setScrolled(window.scrollY > 50)
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

  // Lock body scroll & focus first link when mobile menu opens
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      const firstLink = mobileMenuRef.current?.querySelector("a")
      firstLink?.focus()
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        mounted && scrolled
          ? "bg-background border-b border-border/50 shadow-lg"
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
                link.href === "/contact"
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
          {...(mobileOpen ? { "aria-controls": "mobile-menu" } : {})}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Full-screen mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between px-6 py-5">
            <a href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/oo-logo.png"
                alt="Overcoming Ordinary - Home"
                width={48}
                height={48}
                className="h-10 w-10 invert"
              />
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-foreground"
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-1 flex-col justify-center gap-8 px-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-lg uppercase tracking-[0.2em] transition-colors ${
                  link.href === "/contact"
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
              className="mt-4 bg-accent px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground"
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
