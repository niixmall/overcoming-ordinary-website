import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function AssessmentCta() {
  return (
    <section id="book" className="relative overflow-hidden bg-card py-28 sm:py-36">
      {/* Background image */}
      <Image
        src="/images/dillon-speaking-bcm.jpg"
        alt=""
        fill
        className="object-cover object-top"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          Ready to get a clear picture?
        </p>
        <h2 className="mb-6 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl">
          Stop guessing. Start measuring.
        </h2>
        <div className="mx-auto mb-8 h-px w-16 bg-accent" aria-hidden="true" />
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Book your Intake Assessment and get an objective, data-driven picture of what&apos;s driving — and limiting — your performance. One session. A written report. A clear path forward.
        </p>

        {/* Primary CTA */}
        <a
          href="/contact"
          className="inline-flex items-center gap-3 bg-accent px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          Book Your Assessment
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        {/* Secondary Link */}
        <p className="mt-6">
          <a
            href="/contact"
            className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Not sure which tier is right for you? Let&apos;s talk.
          </a>
        </p>

        {/* Footer Micro-copy */}
        <p className="mt-16 text-xs text-muted-foreground">
          Overcoming Ordinary · overcomingordinary.com · Performance assessment is not clinical treatment. For clinical or mental health services, please contact a licensed provider.
        </p>
      </div>
    </section>
  )
}
