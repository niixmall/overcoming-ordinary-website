import { ArrowRight } from "lucide-react"
import Image from "next/image"

const trustBadges = [
  "US Air Force Academy · Director of Sports Psychology",
  "Air National Guard · Military Aviator",
  "The Durable Mindset Framework",
  "Licensed Clinical Psychologist · PsyD",
]

export function AssessmentHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <Image
        src="/images/dillon-stage-audience.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        {/* Overline */}
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
          Overcoming Ordinary · Durable Mindset Assessment
        </p>

        {/* Main Title */}
        <h1 className="mb-8 font-display text-4xl leading-tight tracking-wider text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Most performers train hard. Few ever measure what&apos;s actually limiting them.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Science-based performance assessment for military, tactical, sport, and leadership populations. Built on validated psychology. Delivered by a licensed clinical psychologist and military aviator.
        </p>

        {/* CTA Button */}
        <a
          href="#book"
          className="inline-flex items-center gap-3 bg-accent px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          Book Your Assessment
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        {/* Trust Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustBadges.map((badge, index) => (
            <div key={badge} className="flex items-center gap-4">
              {index > 0 && (
                <div className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              )}
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
