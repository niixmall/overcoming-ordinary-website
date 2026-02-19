"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="font-display text-3xl tracking-wide text-primary">
            O/o
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Overcoming Ordinary
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#philosophy"
            className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            Philosophy
          </a>
          <a
            href="#domains"
            className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            Domains
          </a>
          <a
            href="#about"
            className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#playbook"
            className="flex items-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get the Playbook
          </a>
        </div>

        <button
          className="text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#philosophy"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Philosophy
            </a>
            <a
              href="#domains"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              Domains
            </a>
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#playbook"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-accent-foreground"
            >
              Get the Playbook
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
