import Image from "next/image"

const frameworkItems = [
  "Mental Toughness Under Pressure",
  "Sustainable High Performance",
  "Resilience Through Adversity",
  "Purpose-Driven Excellence",
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
        <div className="max-w-2xl">
          <h3 className="mb-8 font-display text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
            The Durable Mindset Framework
          </h3>
          <ul className="flex flex-col gap-4">
            {frameworkItems.map((item) => (
              <li
                key={item}
                className="text-lg leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
