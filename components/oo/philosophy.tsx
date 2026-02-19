import { Target, Flame, Shield } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Mind",
    description:
      "Sharpen mental toughness, build unshakable focus, and develop the cognitive resilience that separates elite performers from the rest.",
  },
  {
    icon: Flame,
    title: "Body",
    description:
      "Optimize physical performance through intentional training, recovery, and the discipline to push past perceived limits every single day.",
  },
  {
    icon: Shield,
    title: "Soul",
    description:
      "Cultivate deep purpose, authentic connection, and the inner fire that fuels sustained excellence across every domain of life.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
            The Philosophy
          </p>
          <h2 className="font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            NO MAGIC BULLET.
            <span className="block text-muted-foreground">JUST THE WORK.</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            There is no single path for lifelong change. The O/o philosophy is
            built on the integration of mind, body, and soul -- a framework
            forged through 16+ years working alongside the world{"'"}s highest
            performers.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="group bg-background p-10 transition-colors hover:bg-card sm:p-12"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mb-4 font-display text-3xl tracking-wider text-foreground">
                  {pillar.title.toUpperCase()}
                </h3>
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
