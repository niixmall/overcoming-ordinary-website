import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Brain, Target, Zap, Shield, BookOpen } from "lucide-react"
import { PlaybookForm } from "@/components/oo/playbook-form"

export const metadata: Metadata = {
  title:
    "The Focus Playbook | Free Mental Performance Training | Overcoming Ordinary",
  description:
    "Download the free Focus Playbook by Dr. Dillon Small. A personalized training program for expert focus -- tactically leveraging attention and concentration to dominate average. Used by elite athletes, military operators, and high performers.",
  keywords: [
    "focus training",
    "mental performance",
    "attention training",
    "concentration",
    "high performance psychology",
    "Dr. Dillon Small",
    "Overcoming Ordinary",
    "mental toughness",
    "sport psychology",
    "performance playbook",
  ],
  openGraph: {
    title: "The Focus Playbook | Free Mental Performance Training",
    description:
      "Your personalized training program to expert focus. Tactically leverage attention and concentration. Training starts today.",
    type: "website",
  },
}

const WHAT_YOU_GET = [
  {
    icon: Target,
    title: "Personalized Flight Plan",
    description:
      "Not a generic self-help workbook. A structured training regimen you fill in daily, aligned with your Focus Manual.",
  },
  {
    icon: Brain,
    title: "Attention & Concentration Tactics",
    description:
      "Science-backed techniques for tactically leveraging your attention -- the same methods used with elite athletes and special operators.",
  },
  {
    icon: Zap,
    title: "Daily Training Structure",
    description:
      "Each day aligns with your training regimen. Read the training, fill in your targets. Simple, repeatable, effective.",
  },
  {
    icon: Shield,
    title: "Brain Ownership",
    description:
      "You control your brain -- it does not control you. This playbook teaches you how to take back the driver's seat.",
  },
]

const WHO_ITS_FOR = [
  "Athletes looking to sharpen their mental edge and perform under pressure",
  "Military operators and first responders building durable focus",
  "Business leaders who need sustained concentration in high-stakes environments",
  "Coaches who want a proven framework for their teams",
  "Students pursuing academic excellence through better attention management",
  "Parents striving to model and teach focus to their families",
]

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

      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                Free Download
              </p>
              <h1 className="mb-2 font-display text-5xl tracking-wider text-foreground sm:text-6xl lg:text-7xl">
                THE FOCUS
                <br />
                PLAYBOOK
              </h1>
              <p className="mb-6 text-lg font-medium uppercase tracking-wider text-muted-foreground">
                Tactically leveraging attention and concentration
              </p>
              <div className="mb-8 h-px w-16 bg-accent" />
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                This is not another motivational PDF that sits in your downloads
                folder. The Focus Playbook is{" "}
                <span className="font-semibold text-foreground">
                  your personalized training program to expert focus
                </span>{" "}
                -- built by Dr. Dillon Small using the same performance
                psychology frameworks trusted by elite military operators,
                Division I athletes, and high-performing leaders.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                You control your brain -- it does not control you. Training
                starts today.
              </p>
            </div>

            {/* Form */}
            <PlaybookForm />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            {"What's Inside"}
          </p>
          <h2 className="mb-14 text-center font-display text-4xl tracking-wider text-foreground sm:text-5xl">
            YOUR TRAINING PROGRAM
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                className="group border border-border bg-card p-8 transition-colors hover:border-accent/30"
              >
                <item.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-2 font-display text-xl tracking-wider text-foreground">
                  {item.title.toUpperCase()}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Who This Is For
          </p>
          <h2 className="mb-14 text-center font-display text-4xl tracking-wider text-foreground sm:text-5xl">
            IS THIS YOU?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {WHO_ITS_FOR.map((item) => (
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
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className="border-t border-border bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <BookOpen className="mx-auto mb-6 h-8 w-8 text-accent" />
          <blockquote className="mb-6 font-display text-3xl leading-tight tracking-wider text-foreground sm:text-4xl">
            {"\"FOLLOW ALONG IN THIS PLAYBOOK WITH YOUR FOCUS MANUAL. EACH DAY WILL ALIGN PERFECTLY WITH YOUR TRAINING REGIMEN.\""}
          </blockquote>
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            -- Dr. Dillon Small, The Focus Playbook
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            Ready to Train?
          </p>
          <h2 className="mb-4 text-center font-display text-4xl tracking-wider text-foreground sm:text-5xl">
            WELCOME TO THE TEAM
          </h2>
          <p className="mb-10 text-center text-base leading-relaxed text-muted-foreground">
            {"You'll read the training for the day and fill in your targets in this playbook. Training starts today."}
          </p>
          <PlaybookForm />
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
