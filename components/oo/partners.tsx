import Image from "next/image"

const partners = [
  { name: "U.S. Air Force Academy", logo: "/images/partners/usafa.jpg" },
  { name: "University of Nebraska", logo: "/images/partners/nebraska.jpg" },
  { name: "University of Colorado Boulder", logo: "/images/partners/cu-boulder.jpg" },
  { name: "Denver University", logo: "/images/partners/denver.jpg" },
  { name: "Liberty University", logo: "/images/partners/liberty.jpg" },
  { name: "Western Michigan University", logo: "/images/partners/western-michigan.jpg" },
  { name: "University of North Dakota", logo: "/images/partners/north-dakota.jpg" },
  { name: "4th Judicial District", logo: "/images/partners/4th-judicial.jpg" },
  { name: "Youth For Christ", logo: "/images/partners/yfc.jpg" },
  { name: "Assoc. of Applied Sport Psychology", logo: "/images/partners/aasp.jpg" },
]

function PartnerItem({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-cover"
          sizes="40px"
        />
      </div>
      <span className="whitespace-nowrap text-sm font-medium tracking-wide text-muted-foreground">
        {partner.name}
      </span>
    </div>
  )
}

export function Partners() {
  return (
    <section className="relative border-y border-border bg-card py-10 sm:py-12">
      <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
        Training Partners
      </h2>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />

        {/* Scrolling track - duplicated for seamless loop */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex shrink-0">
            {partners.map((partner) => (
              <PartnerItem key={partner.name} partner={partner} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0" aria-hidden="true">
            {partners.map((partner) => (
              <PartnerItem key={`dup-${partner.name}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
