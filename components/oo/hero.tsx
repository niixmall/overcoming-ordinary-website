import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/dillon-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center pt-20">
        {/* Overline */}
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
          Dominating Average
        </p>

        {/* Main Title */}
        <h1 className="font-display leading-[0.85] tracking-wider text-foreground">
          <span className="block text-[clamp(4rem,12vw,10rem)]">OVERCOMING</span>
          <span className="block text-[clamp(3rem,9vw,7.5rem)] text-muted-foreground">
            <span className="text-accent">/</span>ordinary
          </span>
        </h1>

        {/* Accent line */}
        <div className="my-10 h-px w-20 bg-accent" />

        {/* Tagline */}
        <div className="mb-10 flex flex-col items-center">
          <p className="font-display text-4xl tracking-widest text-foreground sm:text-5xl">
            Performance
          </p>
          <p className="my-1 text-sm tracking-[0.3em] text-muted-foreground uppercase">
            over
          </p>
          <p className="font-display text-4xl tracking-widest text-foreground sm:text-5xl">
            Pathology
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A philosophy for success: There is no magic bullet, no golden ticket, no
          single path for lifelong change. But there is a trusted way forward to
          enduring, gritty, resilient wellbeing in mind, body, and soul.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/playbook"
            className="bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Your Free Playbook
          </a>
          <a
            href="#philosophy"
            className="border border-foreground/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#philosophy"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  )
}
