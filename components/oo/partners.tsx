const partners = [
  "United States Air Force Academy",
  "University of Nebraska",
  "University of Colorado Boulder",
  "Denver University",
  "Liberty University",
  "Western Michigan University",
  "University of North Dakota",
  "4th Judicial District Colorado Springs",
  "10th Judicial District Boulder",
  "Youth For Christ",
  "Undergraduate Aviation Association",
  "Winter Symposium",
  "Assoc. of Applied Sport Psychology",
]

export function Partners() {
  return (
    <section className="relative border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Training Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <span
              key={partner}
              className="whitespace-nowrap text-sm tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
