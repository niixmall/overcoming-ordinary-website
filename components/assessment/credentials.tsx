import Image from "next/image"

const credentials = [
  "PsyD · Licensed Clinical Psychologist",
  "Director of Sports Psychology, US Air Force Academy",
  "Military Aviator · Air National Guard",
  "Founder, Overcoming Ordinary",
  "Architect, The Durable Mindset Framework",
]

export function AssessmentCredentials() {
  return (
    <section id="credentials" className="relative bg-card py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image - matches About section layout */}
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
            {/* Accent corner - matches homepage About section */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 border-b-2 border-r-2 border-accent" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 h-32 w-32 border-t-2 border-l-2 border-accent/30" aria-hidden="true" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Your assessor
            </p>
            <h2 className="mb-2 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
              DR. DILLON SMALL, PSYD
            </h2>
            <div className="mb-8 h-px w-16 bg-accent" aria-hidden="true" />

            <div className="mb-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Dillon Small is a licensed clinical psychologist, military aviator, and performance consultant whose work sits at the intersection of clinical science, high-performance sport, and military/tactical psychology.
              </p>
              <p>
                He currently serves as Director of Sports Psychology at the US Air Force Academy and as an Air National Guard member — bringing a practitioner&apos;s perspective to every assessment he oversees. He is the founder of Overcoming Ordinary and the architect of The Durable Mindset framework, a performance model built from years of applied work with military personnel, collegiate athletes, clinical populations, and organizational leaders.
              </p>
              <p>
                His approach is direct, empirical, and grounded in the same methods he uses with the performers he serves daily.
              </p>
            </div>

            {/* Credential badges */}
            <ul className="mb-10 space-y-2">
              {credentials.map((credential) => (
                <li
                  key={credential}
                  className="text-sm text-muted-foreground"
                >
                  <span className="mr-2 text-accent">—</span>
                  {credential}
                </li>
              ))}
            </ul>

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-base italic leading-relaxed text-foreground">
                &ldquo;The same methodology used with USAFA athletes, Air Force personnel, and high-performing clinical populations — now available to any performer serious about their edge.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
