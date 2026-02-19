"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Trophy, Briefcase, GraduationCap, Users } from "lucide-react"

const domains = [
  {
    icon: Trophy,
    title: "Athletics",
    description:
      "Elite athletes pushing beyond limits. Mental game coaching, performance psychology, and the edge that separates good from great.",
    image: "/images/performance-athletics.jpg",
  },
  {
    icon: Briefcase,
    title: "Business",
    description:
      "Leaders and executives who refuse to settle. Strategic clarity, decision-making under pressure, and the mindset to build empires.",
    image: "/images/performance-business.jpg",
  },
  {
    icon: GraduationCap,
    title: "Academics",
    description:
      "Students and scholars who demand more. Focus, discipline, and the cognitive strategies that turn potential into performance.",
    image: null,
  },
  {
    icon: Users,
    title: "Parenting",
    description:
      "Parents who lead at home. Raising resilient, courageous children by modeling the grit and intentionality they want to instill.",
    image: null,
  },
]

export function Domains() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative border-t border-border py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Where We Dominate
          </p>
          <h2 className="font-display text-5xl tracking-wide text-primary sm:text-6xl md:text-7xl">
            FOUR ARENAS
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {"16+ years of teaming up with high performers to elevate their game across every domain that matters."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {domains.map((domain, i) => (
            <div
              key={domain.title}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-700 hover:border-accent/50 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {domain.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={domain.image}
                    alt={`${domain.title} performance`}
                    fill
                    className="object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <div className="relative p-8">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <domain.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-3xl tracking-wide text-primary">
                    {domain.title.toUpperCase()}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
