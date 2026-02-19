import { Brain, Crosshair, Repeat, ShieldCheck, Compass } from "lucide-react"

const frameworks = [
  {
    icon: Brain,
    title: "Mental Toughness Under Pressure",
    description:
      "Build the cognitive resilience to perform when stakes are highest and pressure is crushing.",
  },
  {
    icon: Repeat,
    title: "Sustainable High Performance",
    description:
      "Forge systems that keep you performing at elite levels without burning out or breaking down.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience Through Adversity",
    description:
      "Train your mind to treat obstacles as fuel -- turning setbacks into stepping stones for growth.",
  },
  {
    icon: Compass,
    title: "Purpose-Driven Excellence",
    description:
      "Anchor your performance in deep purpose so every decision, rep, and effort has direction.",
  },
]

export function Training() {
  return (
    <section id="training" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            The Framework
          </p>
          <h2 className="font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            THE DURABLE
            <span className="block text-muted-foreground">MINDSET FRAMEWORK.</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" aria-hidden="true" />
        </div>

        {/* Framework Grid */}
        <div className="grid gap-px bg-border sm:grid-cols-2">
          {frameworks.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex gap-6 bg-background p-10 transition-colors hover:bg-card sm:p-12"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="mb-3 font-display text-2xl tracking-wider text-foreground">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Focus Playbook Highlight */}
        <div className="mt-20 border border-border bg-card p-10 sm:p-14">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center border-2 border-accent">
              <Crosshair className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                The Focus Playbook
              </p>
              <h3 className="mb-4 font-display text-3xl tracking-wider text-foreground sm:text-4xl">
                TACTICALLY LEVERAGING ATTENTION AND CONCENTRATION
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Your personalized 7-day flight plan to expert focus. You control
                your brain -- it does not control you. Follow along day-by-day
                with targeted exercises in autopilot awareness, tactical
                breathing, cue words, recovery optimization, and purpose-driven
                goal setting.
              </p>
            </div>
            <a
              href="/playbook"
              className="inline-flex shrink-0 items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get the Playbook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
