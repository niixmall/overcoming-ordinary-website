import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/oo-logo.png"
              alt="Overcoming Ordinary - Home"
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

      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="mb-2 font-display text-4xl tracking-wider text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mb-10 text-xs uppercase tracking-wider text-muted-foreground">
          Last updated: {lastUpdated}
        </p>
        <div className="prose-legal space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-wider [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-foreground [&_a]:text-accent [&_a]:underline [&_a:hover]:text-accent/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_strong]:text-foreground">
          {children}
        </div>
      </article>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Overcoming Ordinary. Dominate Average.
          </p>
        </div>
      </footer>
    </main>
  )
}
