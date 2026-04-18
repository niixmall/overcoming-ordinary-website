import { BarChart3, MessageSquare, Target } from "lucide-react"

const steps = [
  {
    icon: BarChart3,
    title: "Measure",
    description:
      "We deploy a validated psychometric battery tailored to your population and goals — drawing from clinical psychology, sport science, and military performance research. No guesswork. Real data.",
  },
  {
    icon: MessageSquare,
    title: "Interpret",
    description:
      "Your results are reviewed in a structured debrief with an OO-trained coach. Not generic feedback. Specific, contextualized insight tied to your role, your environment, and your goals.",
  },
  {
    icon: Target,
    title: "Execute",
    description:
      "You leave with a goal-mapped action plan built around your actual data — not a personality type or a motivational tagline. Optional ongoing coaching keeps you accountable and advancing.",
  },
]

export function AssessmentFramework() {
  return (
    <section id="framework" className="relative bg-card py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            The Durable Mindset Framework
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
            A proven process. A clear outcome.
          </h2>
          <div className="mb-8 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every engagement at Overcoming Ordinary is rooted in The Durable Mindset — a framework developed across military aviation, clinical psychology, and elite sport. It doesn&apos;t just describe performance. It measures it, interprets it, and maps a path forward.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="group border border-border bg-background p-8 transition-colors hover:border-accent/50 sm:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-4 font-display text-2xl tracking-wider text-foreground">
                  {step.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
