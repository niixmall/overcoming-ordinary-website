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
    title: "Aviation",
    description:
      "Pilots and aircrew sharpen cognitive performance under extreme pressure, building the situational awareness and decision-making that separates good from exceptional.",
    image: "/images/domain-aviation.jpg",
  },
  {
    title: "Military",
    description:
      "Service members and special operators develop the mental toughness, unit cohesion, and resilience required to perform at the highest level in high-stakes environments.",
    image: "/images/domain-military.jpg",
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
          {domains.map((domain, index) => (
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
                  {String(index + 1).padStart(2, "0")}
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
