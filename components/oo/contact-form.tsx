"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react"

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzZSp1x7IpyFxmO1ZuymohbE4cWz8_IhmBAzns_uywvB0zOPnbl8bZRAveX1kY9jWpOlQ/exec"

const intentMap: Record<string, string> = {
  keynote: "Keynote Speaking",
  curriculum: "Custom Curriculum",
  training: "Personalized Training",
  other: "Other",
}

const SERVICE_OPTIONS = [
  {
    id: "keynote",
    label: "Keynote Speaking",
    description:
      "Book Dr. Dillon for your next event, conference, or leadership summit.",
  },
  {
    id: "curriculum",
    label: "Custom Curriculum",
    description:
      "Tailored mental performance programs for your team or organization.",
  },
  {
    id: "training",
    label: "Personalized Training",
    description:
      "One-on-one or small group high-performance coaching engagements.",
  },
  {
    id: "other",
    label: "Other",
    description:
      "Media requests, partnerships, or anything else.",
  },
]

export function ContactForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          intent: intentMap[selectedService ?? "other"],
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          organization: formData.get("organization"),
          details: formData.get("message"),
        }),
        mode: "no-cors",
      })
    } catch {
      // Webhook may not return CORS headers; submission still goes through
    }

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h2 className="mb-3 font-display text-4xl tracking-wider text-foreground sm:text-5xl">
          MESSAGE RECEIVED
        </h2>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {"Thank you for reaching out. Dr. Dillon's team will review your inquiry and get back to you shortly."}
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent hover:underline"
        >
          Back to Home
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Service Type Selection */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Step 1
        </p>
        <h3 className="mb-6 font-display text-2xl tracking-wider text-foreground sm:text-3xl">
          WHAT ARE YOU LOOKING FOR?
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {SERVICE_OPTIONS.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service.id)}
              className={`group flex flex-col items-start gap-2 border p-5 text-left transition-all ${
                selectedService === service.id
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card hover:border-muted-foreground/30"
              }`}
            >
              <span
                className={`text-sm font-semibold uppercase tracking-wider ${
                  selectedService === service.id
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                {service.label}
              </span>
              <span className="text-xs leading-relaxed text-muted-foreground">
                {service.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      {selectedService && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Step 2
          </p>
          <h3 className="mb-6 font-display text-2xl tracking-wider text-foreground sm:text-3xl">
            YOUR DETAILS
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-muted-foreground">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="John"
                className="border-border bg-card text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-muted-foreground">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Doe"
                className="border-border bg-card text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="border-border bg-card text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-xs uppercase tracking-wider text-muted-foreground">
                Organization
              </Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Your Company or Team"
                className="border-border bg-card text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                Tell us about your needs *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Describe your event, team size, goals, timeline, or any other details that would help Dr. Dillon understand how he can serve you best."
                className="border-border bg-card text-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="mt-8 h-12 bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </form>
  )
}
