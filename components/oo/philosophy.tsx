import Image from "next/image"
import { Brain, Zap, Shield, Compass } from "lucide-react"

const frameworkPillars = [
  {
    icon: Brain,
    title: "Mental Toughness",
    description:
      "Build unshakable focus and cognitive resilience under the highest-pressure environments.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Sustain elite output through intentional training, recovery, and disciplined daily habits.",
  },
  {
    icon: Shield,
    title: "Resilience",
    description:
      "Develop the capacity to absorb adversity, adapt quickly, and emerge stronger on the other side.",
  },
  {
    icon: Compass,
    title: "Purpose-Driven",
    description:
      "Cultivate deep purpose and authentic connection that fuels sustained excellence across every domain.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden py-28 sm:py-36">
      {/* Background image */}
      <Image
        src="/images/philosophy-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
            The Philosophy
          </p>
          <h2 className="font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            NO MAGIC BULLET.
            <span className="block text-muted-foreground">JUST THE WORK.</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            There is no single path for lifelong change. The O/o philosophy is
            built on the integration of mind, body, and soul -- a framework
            forged through 16+ years working alongside the world{"'"}s highest
            performers.
          </p>
        </div>

        {/* The Durable Mindset Framework */}
        <h3 className="mb-10 font-display text-2xl tracking-wider text-accent sm:text-3xl">
          THE DURABLE MINDSET FRAMEWORK
        </h3>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {frameworkPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group bg-background p-8 transition-colors hover:bg-card sm:p-10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h4 className="mb-4 font-display text-lg font-bold uppercase tracking-wider text-foreground">
                  {pillar.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
