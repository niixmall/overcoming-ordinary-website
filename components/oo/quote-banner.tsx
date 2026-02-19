export function QuoteBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Large decorative O/o */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="font-display text-[20rem] leading-none tracking-wider text-foreground sm:text-[30rem]">
            O/o
          </span>
        </div>

        <div className="relative">
          <p className="font-display text-4xl leading-tight tracking-wider text-foreground sm:text-5xl md:text-6xl">
            {'"'}THE ONLY WAY OUT
            <span className="block text-accent">IS THROUGH.{'"'}</span>
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-border" />
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The O/o Principle
          </p>
        </div>
      </div>
    </section>
  )
}
