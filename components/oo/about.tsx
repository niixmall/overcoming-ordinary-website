import Image from "next/image"

const stats = [
  { value: "16+", label: "Years of Experience" },
  { value: "1000+", label: "High Performers Coached" },
  { value: "4", label: "Performance Domains" },
]

const gallery = [
  {
    src: "/images/dillon-usafa-group.jpg",
    alt: "Dr. Dillon Small with military personnel at the U.S. Air Force Academy Performance Psychology program",
  },
  {
    src: "/images/dillon-military.jpg",
    alt: "Dr. Dillon Small official U.S. Air Force portrait",
  },
  {
    src: "/images/dillon-speaking-bcm.jpg",
    alt: "Dr. Dillon Small speaking on stage about training Body, Craft, and Mind",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/3]">
              <Image
                src="/images/dillon-stage-front.jpg"
                alt="Dr. Dillon Small posing on stage in front of a packed auditorium"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 border-b-2 border-r-2 border-accent" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 h-32 w-32 border-t-2 border-l-2 border-accent/30" aria-hidden="true" />

            {/* Gallery strip */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Meet The Coach
            </p>
            <h2 className="mb-2 font-display text-5xl tracking-wider text-foreground sm:text-6xl">
              DR. DILLON SMALL
            </h2>
            <p className="mb-6 text-sm uppercase tracking-wider text-muted-foreground">
              Director of Sport Performance Psychology, USAFA
            </p>
            <div className="mb-8 h-px w-16 bg-accent" aria-hidden="true" />

            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Dr. Dillon Small is a licensed clinical psychologist and the
              Director of Sport Performance Psychology at the United States Air
              Force Academy. He has spent over 16 years helping overcome ordinary
              by studying and teaming up with high performers to elevate their
              game in athletics, business, academics, and parenting.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              His expertise has been applied to special operators, elite
              athletes, aircrew, and leaders across the Air Force. His research
              spans mindfulness-based practices, embedded mental health care, and
              building durable mindsets under pressure.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              His approach rejects the pathology model -- the idea that something
              is wrong with you. Instead, the O/o framework focuses on
              performance: building on your strengths, forging mental toughness,
              and creating systems for sustained excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl tracking-wide text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
