"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">
        <p
          className={`mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Dominating Average
        </p>

        <h1
          className={`font-display text-7xl leading-none tracking-wide text-primary sm:text-8xl md:text-9xl lg:text-[10rem] transition-all duration-700 delay-100 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">OVERCOMING</span>
          <span className="block text-accent">/</span>
          <span className="block italic text-muted-foreground">ordinary</span>
        </h1>

        <div
          className={`mt-12 flex flex-col items-center gap-2 transition-all duration-700 delay-300 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px w-16 bg-accent" />
          <p className="font-display text-2xl tracking-wider text-primary sm:text-3xl">
            Performance over Pathology
          </p>
          <div className="h-px w-16 bg-accent" />
        </div>

        <p
          className={`mt-8 max-w-xl text-base leading-relaxed text-muted-foreground transition-all duration-700 delay-500 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          A philosophy for success: There is no magic bullet, no golden ticket,
          no single path for lifelong change. But there is a trusted way forward
          to enduring, gritty, resilient wellbeing in mind, body, and soul.
        </p>

        <a
          href="#playbook"
          className={`mt-10 rounded-sm bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all duration-700 delay-700 hover:opacity-90 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Get Your Free Playbook
        </a>
      </div>

      <a
        href="#philosophy"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to learn more"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
