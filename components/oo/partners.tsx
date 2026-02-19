import Image from "next/image"

const partners = [
  { name: "Liberty University", logo: "/images/partners/liberty.png" },
  { name: "U.S. Air Force Academy", logo: "/images/partners/usafa.jpg" },
  { name: "University of Nebraska", logo: "/images/partners/nebraska.jpg" },
  { name: "University of Colorado Boulder", logo: "/images/partners/cu-boulder.jpg" },
  { name: "Denver University", logo: "/images/partners/denver.jpg" },
  { name: "Western Michigan University", logo: "/images/partners/western-michigan.png" },
  { name: "University of North Dakota", logo: "/images/partners/north-dakota.jpg" },
  { name: "4th Judicial District Colorado Springs", logo: "/images/partners/4th-judicial.jpg" },
  { name: "10th Judicial District Boulder", logo: "/images/partners/4th-judicial.jpg" },
  { name: "Youth For Christ", logo: "/images/partners/yfc.jpg" },
  { name: "Undergraduate Aviation Association", logo: "/images/partners/usafa.jpg" },
  { name: "Winter Symposium", logo: "/images/partners/aasp.jpg" },
  { name: "Assoc. of Applied Sport Psychology", logo: "/images/partners/aasp.jpg" },
]

function PartnerItem({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-10">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain"
          sizes="40px"
          loading="lazy"
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

        {/* Scrolling track */}
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        >
          {/* First copy */}
          {partners.map((partner) => (
            <PartnerItem key={partner.name} partner={partner} />
          ))}
          {/* Second copy for seamless loop */}
          {partners.map((partner) => (
            <PartnerItem key={`dup-${partner.name}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
