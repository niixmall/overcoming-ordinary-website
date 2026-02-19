import Image from "next/image"

const domains = [
  {
    title: "Athletics",
    description:
      "From elite athletes to weekend warriors, Dr. Dillon helps competitors unlock peak performance and develop the mental edge that wins.",
    image: "/images/domain-athletics.jpg",
  },
  {
    title: "Business",
    description:
      "Executives and entrepreneurs leverage O/o principles to lead with clarity, make better decisions under pressure, and build resilient organizations.",
    image: "/images/domain-business.jpg",
  },
  {
    title: "Academics",
    description:
      "Students and scholars develop the focus, discipline, and strategic thinking required to excel in demanding academic environments.",
    image: "/images/domain-academics.jpg",
  },
  {
    title: "Parenting",
    description:
      "Parents gain the tools to raise resilient, driven children while modeling the grit and intentionality that defines the O/o philosophy.",
    image: "/images/domain-parenting.jpg",
  },
]

export function Domains() {
  return (
    <section id="domains" className="relative bg-card py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
            Where We Dominate
          </p>
          <h2 className="font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            FOUR DOMAINS.
            <span className="block text-muted-foreground">ONE STANDARD.</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-accent" />
        </div>

        {/* Domains Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden sm:min-h-[440px]"
            >
              <Image
                src={domain.image}
                alt={`${domain.title} performance coaching -- Dr. Dillon Small helping ${domain.title.toLowerCase()} professionals dominate average`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

              <div className="relative z-10 p-8 sm:p-10">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  {String(domains.indexOf(domain) + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-display text-4xl tracking-wider text-foreground">
                  {domain.title.toUpperCase()}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
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
