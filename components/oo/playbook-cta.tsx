import { ArrowRight } from "lucide-react"

export function PlaybookCta() {
  return (
    <section id="playbook" className="relative bg-card py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Join The O/o Team
          </p>
          <h2 className="font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            DOMINATE AVERAGE.
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-accent" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get your free Focus Playbook -- a personalized training program for
            expert focus. No fluff. No shortcuts. Just the proven framework used
            by high performers across every domain.
          </p>

          <a
            href="/playbook"
            className="mt-12 inline-flex items-center gap-3 bg-accent px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Your Free Playbook
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-6 text-xs text-muted-foreground">
            Fill out a quick form and get instant access.
          </p>
        </div>
      </div>
    </section>
  )
}
