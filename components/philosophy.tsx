"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Heart, Flame } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Mind",
    description:
      "Sharpening mental resilience and cognitive performance to dominate under pressure and maintain clarity when it matters most.",
  },
  {
    icon: Heart,
    title: "Body",
    description:
      "Building physical excellence through disciplined training, recovery, and the relentless pursuit of peak performance.",
  },
  {
    icon: Flame,
    title: "Soul",
    description:
      "Cultivating purpose, identity, and the inner fire that fuels sustained greatness across every arena of life.",
  },
]

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            The Foundation
          </p>
          <h2 className="font-display text-5xl tracking-wide text-primary sm:text-6xl md:text-7xl">
            PERFORMANCE OVER PATHOLOGY
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {"We don't focus on what's broken. We build on what's strong. Our approach centers on elevating your existing strengths into unstoppable advantages."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group rounded-sm border border-border bg-card p-8 transition-all duration-700 hover:border-accent/50 hover:bg-secondary ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-display text-3xl tracking-wide text-primary">
                {pillar.title.toUpperCase()}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
