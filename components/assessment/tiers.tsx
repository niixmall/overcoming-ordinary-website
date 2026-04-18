import { Check } from "lucide-react"

const tiers = [
  {
    label: "Start here.",
    title: "Intake Assessment",
    description:
      "Get an objective baseline on your performance across all five domains. The Intake Assessment is your entry point — a single, structured engagement that produces a written performance report and a personalized goal map.",
    features: [
      "90-minute intake interview",
      "Validated psychometric battery (population-specific)",
      "Written performance report delivered within 5 business days",
      "One goal-mapping session with an OO-trained coach",
    ],
    investment: "$250–$450 · One-time",
    cta: "Book Your Intake",
    ctaHref: "#book",
    featured: false,
  },
  {
    label: "Most popular.",
    title: "Performance Coaching Package",
    description:
      "For performers ready to go beyond a snapshot. The Performance Coaching Package pairs ongoing re-assessment with structured coaching support — so you're not just measuring where you are, you're systematically moving the needle.",
    features: [
      "Everything in Tier 1",
      "Re-assessment every 6–8 weeks",
      "Monthly metrics review session",
      "Ongoing debrief and strategy sessions",
      "Direct access to your assigned OO coach",
    ],
    investment: "$600–$1,200/mo · 3-month minimum",
    cta: "Book a Discovery Call",
    ctaHref: "#book",
    featured: true,
  },
  {
    label: "For teams and organizations.",
    title: "Elite Intensive",
    description:
      "A fully customized engagement designed for units, athletic programs, leadership teams, and organizations that want a team-level performance picture. Includes on-site options, custom assessment batteries, and a keynote-style debrief your entire group can act on.",
    features: [
      "Custom assessment battery scoped to your team's context",
      "Individual and team-level reporting",
      "Leadership 360s",
      "Full-group debrief session (in-person or virtual)",
      "Strategic recommendations document",
    ],
    investment: "$3,500–$8,000 · Custom scope",
    cta: "Inquire About Your Team",
    ctaHref: "#book",
    featured: false,
  },
]

export function AssessmentTiers() {
  return (
    <section id="tiers" className="relative bg-card py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Assessment pathways
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
            Choose how deep you want to go.
          </h2>
          <div className="mx-auto mb-8 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you&apos;re an individual performer looking for a clear starting point or an organization investing in your team&apos;s edge — there&apos;s a pathway built for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative flex flex-col border bg-background p-8 sm:p-10 ${
                tier.featured
                  ? "border-accent"
                  : "border-border"
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Label */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {tier.label}
              </p>

              {/* Title */}
              <h3 className="mb-4 font-display text-2xl tracking-wider text-foreground sm:text-3xl">
                {tier.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Investment */}
              <p className="mb-6 text-sm font-semibold text-foreground">
                {tier.investment}
              </p>

              {/* CTA */}
              <a
                href={tier.ctaHref}
                className={`w-full py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-90 ${
                  tier.featured
                    ? "bg-accent text-accent-foreground"
                    : "border border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/5"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
