import Image from "next/image"

const partners = [
  { name: "Liberty University", logo: "/images/partners/liberty-mono.jpg" },
  { name: "U.S. Air Force Academy", logo: "/images/partners/usafa.jpg" },
  { name: "University of Nebraska", logo: "/images/partners/nebraska.jpg" },
  { name: "University of Colorado Boulder", logo: "/images/partners/cu-boulder.jpg" },
  { name: "Denver University", logo: "/images/partners/denver.jpg" },
  { name: "Western Michigan University", logo: "/images/partners/wmu-mono.jpg" },
  { name: "University of North Dakota", logo: "/images/partners/north-dakota.jpg" },
  { name: "4th Judicial District Colorado Springs", logo: "/images/partners/4th-judicial.jpg" },
  { name: "10th Judicial District Boulder", logo: "/images/partners/4th-judicial.jpg" },
  { name: "Youth For Christ", logo: "/images/partners/yfc.jpg" },
  { name: "Undergraduate Aviation Association", logo: "/images/partners/usafa.jpg" },
  { name: "Pikes Peak UND Winter Symposium", logo: "/images/partners/winter-symposium.jpg" },
  { name: "Assoc. of Applied Sport Psychology", logo: "/images/partners/aasp.jpg" },
]

function PartnerItem({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div className="flex shrink-0 items-center gap-4 px-12">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className="object-contain"
          sizes="48px"
          loading="lazy"
        />
      </div>
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-foreground/70">
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

        {/* Scrolling track: two copies side by side, translates -50% for seamless loop */}
        <div className="animate-marquee">
          {partners.map((partner, i) => (
            <PartnerItem key={`a-${i}`} partner={partner} />
          ))}
          {partners.map((partner, i) => (
            <PartnerItem key={`b-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}
