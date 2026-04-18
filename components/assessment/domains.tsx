import { Brain, Activity, Crosshair, Users, Heart } from "lucide-react"

const domains = [
  {
    icon: Brain,
    title: "Mental Performance",
    description:
      "Mindset, stress response, attentional control, and mental toughness. We measure how your mind operates when the stakes are real.",
  },
  {
    icon: Activity,
    title: "Physical Readiness",
    description:
      "Sleep quality, recovery patterns, HRV, and load management. How well your body is resourced to support your performance demands.",
  },
  {
    icon: Crosshair,
    title: "Tactical Execution",
    description:
      "Decision-making under pressure, performance consistency, and execution under ambiguity. Especially relevant for military, tactical, and competitive sport populations.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Values clarity, influence style, and 360-degree feedback. How you show up for the people you lead — and how they experience you.",
  },
  {
    icon: Heart,
    title: "Resilience & Recovery",
    description:
      "Burnout risk, psychological hardiness, and bounce-back capacity. The difference between performers who last and performers who flame out.",
  },
]

export function AssessmentDomains() {
  return (
    <section id="domains" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            What we assess
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
            Five domains. One complete picture.
          </h2>
          <div className="mx-auto mb-8 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Performance doesn&apos;t live in a single dimension. Our battery covers the full landscape of what drives — and derails — high performance.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {domains.map((domain) => {
            const Icon = domain.icon
            return (
              <div
                key={domain.title}
                className="group border border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-lg tracking-wider text-foreground">
                  {domain.title.toUpperCase()}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {domain.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
