export function AssessmentProblem() {
  return (
    <section id="problem" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          Why assessment changes everything
        </p>
        <h2 className="mb-8 font-display text-4xl tracking-wider text-foreground sm:text-5xl md:text-6xl text-balance">
          You don&apos;t have a motivation problem. You have a measurement problem.
        </h2>
        <div className="mb-12 h-px w-16 bg-accent" aria-hidden="true" />

        {/* Body Content */}
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            High performers are rarely held back by a lack of effort. They train. They compete. They lead. But most of them have never once gotten an objective picture of what&apos;s actually happening beneath the surface — in their mindset, their recovery, their decision-making, or their leadership.
          </p>
          <p>
            They operate on instinct and anecdote, adjusting on the fly without any real data. And when performance stalls, they do what they know: work harder. Train more. Push through.
          </p>
          <p>
            That cycle has a ceiling.
          </p>
          <p>
            Performance assessment breaks through it. Not by adding more to your plate — but by finally showing you where to direct what you already have.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote className="mt-16 border-l-2 border-accent pl-8">
          <p className="font-display text-3xl leading-tight tracking-wider text-foreground sm:text-4xl">
            &ldquo;Durable performance isn&apos;t built on effort alone. It&apos;s built on clarity.&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
