import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ContactForm } from "@/components/oo/contact-form"

export const metadata: Metadata = {
  title: "Contact Dr. Dillon Small",
  description:
    "Book Dr. Dillon Small for keynote speaking, custom curriculum development, or personalized high-performance coaching. Dominate average.",
  openGraph: {
    title: "Work With Dr. Dillon Small",
    description:
      "Book Dr. Dillon Small for keynote speaking, custom training, or one-on-one coaching.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header bar */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
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

      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        {/* Page intro */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Get In Touch
          </p>
          <h1 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl lg:text-7xl">
            WORK WITH
            <br />
            DR. DILLON
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Whether you need a keynote speaker who will transform how your
            audience thinks about performance, a custom curriculum built for your
            organization, or one-on-one coaching to reach the next level --
            {" it starts here."}
          </p>
        </div>

        {/* Speaking photo */}
        <div className="relative mb-14 aspect-[21/9] overflow-hidden">
          <Image
            src="/images/dillon-stage-group.jpg"
            alt="Dr. Dillon Small with colleagues on stage in front of a packed theater audience"
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </main>
  )
}
