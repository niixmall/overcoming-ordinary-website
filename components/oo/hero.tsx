"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mq.matches)

    if (mq.matches && videoRef.current) {
      videoRef.current.pause()
    }

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
      if (e.matches) {
        videoRef.current?.pause()
      } else {
        videoRef.current?.play()
      }
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero introduction"
    >
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        style={{ objectPosition: "center 60%" }}
        className="absolute inset-0 h-full w-full object-cover sm:!object-center"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dillon%20BG-67naNHKTr7hVaJIjqKIXFUaSHrVin7.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center pt-20 pb-24">
        {/* Overline */}
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
          Dominating Average
        </p>

        {/* Main Title */}
        <h1 className="font-display leading-[0.85] tracking-wider text-foreground">
          <span className="block text-[clamp(4rem,12vw,10rem)]">OVERCOMING</span>
          <span className="block text-[clamp(3rem,9vw,7.5rem)] text-muted-foreground">
            <span className="text-accent">/</span>ordinary
          </span>
        </h1>

        {/* Accent line */}
        <div className="my-10 h-px w-20 bg-accent" aria-hidden="true" />

        {/* Tagline */}
        <div className="mb-10 flex flex-col items-center">
          <p className="font-display text-4xl tracking-widest text-foreground sm:text-5xl">
            Performance
          </p>
          <p className="my-1 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            over
          </p>
          <p className="font-display text-4xl tracking-widest text-foreground sm:text-5xl">
            Pathology
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A philosophy for success: There is no magic bullet, no golden ticket, no
          single path for lifelong change. But there is a trusted way forward to
          enduring, gritty, resilient wellbeing in mind, body, and soul.
        </p>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-10 motion-safe:animate-bounce"
          aria-label="Scroll to Credentials section"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
        </a>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/playbook"
            className="bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Your Free Playbook
          </a>
          <a
            href="/contact"
            className="border border-foreground/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5"
          >
            Work With Dr. Dillon
          </a>
        </div>
      </div>
    </section>
  )
}
