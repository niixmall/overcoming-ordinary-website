import Image from "next/image"

export function QuoteBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-20 sm:py-28">
      {/* Background image */}
      <Image
        src="/images/dillon-stage-audience.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Large decorative O/o */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <span className="font-display text-[20rem] leading-none tracking-wider text-foreground sm:text-[30rem]">
            O/o
          </span>
        </div>

        <blockquote className="relative">
          <p className="font-display text-4xl leading-tight tracking-wider text-foreground sm:text-5xl md:text-6xl">
            {'"'}THERE ARE FEW CONCEPTS,
            <span className="block text-accent">MANY METHODS, AND NO HACKS.{'"'}</span>
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-border" />
          <cite className="mt-6 block text-xs uppercase tracking-[0.3em] text-muted-foreground not-italic">
            The O/o Principle
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
