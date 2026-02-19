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

export function PartnersGrid() {
  return (
    <section className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Training Partners
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-sm">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain brightness-0 invert opacity-60"
                  sizes="56px"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium leading-tight tracking-wide text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
