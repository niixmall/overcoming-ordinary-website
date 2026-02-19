import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { PlaybookForm } from "@/components/oo/playbook-form"
import { PLAYBOOKS } from "@/lib/playbooks"

const playbook = PLAYBOOKS[0]

export const metadata: Metadata = {
  title: `${playbook.title} | Free Download | Overcoming Ordinary`,
  description: playbook.metaDescription,
  keywords: playbook.keywords,
  openGraph: {
    title: `${playbook.title} | Free Download`,
    description: playbook.subtitle,
    type: "website",
  },
}

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/oo-logo.png"
              alt="Overcoming Ordinary"
              width={40}
              height={40}
              className="h-8 w-8 invert"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Single Section: Info + Form */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              Free Download
            </p>
            <h1 className="mb-2 font-display text-5xl tracking-wider text-foreground sm:text-6xl lg:text-7xl">
              {playbook.displayTitle.line1}
              <br />
              {playbook.displayTitle.line2}
            </h1>
            <p className="mb-6 text-lg font-medium uppercase tracking-wider text-muted-foreground">
              {playbook.subtitle}
            </p>
            <div className="mb-8 h-px w-16 bg-accent" />
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {playbook.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {playbook.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-l-2 border-accent/30 py-2 pl-5"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <PlaybookForm playbookSlug={playbook.slug} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {"Overcoming Ordinary. Dominate Average."}
          </p>
        </div>
      </footer>
    </main>
  )
}
