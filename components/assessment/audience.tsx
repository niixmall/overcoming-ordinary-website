"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const audiences = [
  {
    id: "military",
    title: "Military & Tactical",
    subhead: "Active duty. Guard and Reserve. Veterans. Law enforcement. First responders.",
    body: "You operate in environments where performance isn't optional and mental clarity isn't a luxury. Our assessment tools include military-normed instruments validated for high-stress, high-stakes populations — interpreted by a licensed psychologist who has served alongside you.",
    footer: "This isn't civilian performance coaching rebranded for the military. It's built from the inside.",
  },
  {
    id: "sport",
    title: "Sport & Athletic",
    subhead: "Collegiate. Professional. Elite amateur. Coaches.",
    body: "Sport is where The Durable Mindset framework was sharpened. Whether you're an athlete looking for a mental edge or a coach trying to understand what's limiting your roster, our sport psychology-grounded assessment gives you specific, actionable data — not a motivational speech.",
    footer: "Backed by applied sport psychology practice at the Division I and US Air Force Academy level.",
  },
  {
    id: "leaders",
    title: "Leaders & Organizations",
    subhead: "Executives. Team leads. High-stakes decision-makers. Leadership teams.",
    body: "Leadership performance degrades under the same conditions that crush athletic and military performance — chronic stress, poor recovery, unclear values, and unexamined blind spots. Our leadership-track assessment surfaces exactly where those vulnerabilities live, with a 360-feedback process and values-mapping that gives you a clear picture of how you're actually leading.",
    footer: "Individual and team-level reporting available.",
  },
]

export function AssessmentAudience() {
  return (
    <section id="audience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Who we work with
          </p>
          <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
            Built for performers who operate under pressure.
          </h2>
          <div className="mx-auto mb-8 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            OO Performance Assessment was built for populations where the margin between good and exceptional is razor-thin — and where the cost of underperformance is real.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="military" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3 bg-card border border-border p-1">
            {audiences.map((audience) => (
              <TabsTrigger
                key={audience.id}
                value={audience.id}
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-xs uppercase tracking-wider py-3 transition-colors"
              >
                {audience.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {audiences.map((audience) => (
            <TabsContent
              key={audience.id}
              value={audience.id}
              className="border border-border bg-card p-8 sm:p-12"
            >
              <h3 className="mb-2 font-display text-2xl tracking-wider text-foreground sm:text-3xl">
                {audience.title.toUpperCase()}
              </h3>
              <p className="mb-6 text-sm uppercase tracking-wider text-accent">
                {audience.subhead}
              </p>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {audience.body}
              </p>
              <p className="text-sm font-medium text-foreground">
                {audience.footer}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
