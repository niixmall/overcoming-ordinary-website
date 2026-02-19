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
  "Pikes Peak UND Winter Symposium",
  "Assoc. of Applied Sport Psychology",
]

export function PartnersGrid() {
  return (
    <section className="relative border-t border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-14 text-center text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Training Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-sm tracking-wide text-muted-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
