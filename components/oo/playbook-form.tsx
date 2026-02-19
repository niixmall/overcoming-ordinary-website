"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Download, Loader2, CheckCircle2 } from "lucide-react"

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzZSp1x7IpyFxmO1ZuymohbE4cWz8_IhmBAzns_uywvB0zOPnbl8bZRAveX1kY9jWpOlQ/exec"

export function PlaybookForm() {
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
          formType: "playbook",
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          role: formData.get("role"),
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
      <div className="flex flex-col items-center border border-accent/20 bg-accent/5 p-10 text-center sm:p-14">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mb-3 font-display text-4xl tracking-wider text-foreground sm:text-5xl">
          {"YOU'RE ON THE TEAM"}
        </h3>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
          Welcome aboard. Your personalized Focus Playbook is unlocked and
          ready to go. Training starts now.
        </p>
        <a
          href="https://docs.google.com/document/d/17dE0ItJ1AjEAQtRMzetFDjfxSWsckbWFSoh70uH09kw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent px-10 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Download className="h-5 w-5" />
          Open Your Playbook
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          Opens in Google Docs. You can download or print from there.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card p-8 sm:p-10">
      <h3 className="mb-2 font-display text-2xl tracking-wider text-foreground sm:text-3xl">
        GET YOUR FREE PLAYBOOK
      </h3>
      <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
        Enter your info below and get instant access to the Focus Playbook.
        Training starts today.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="pb-firstName"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            First Name *
          </Label>
          <Input
            id="pb-firstName"
            name="firstName"
            required
            placeholder="John"
            className="border-border bg-background text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="pb-lastName"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Last Name *
          </Label>
          <Input
            id="pb-lastName"
            name="lastName"
            required
            placeholder="Doe"
            className="border-border bg-background text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label
            htmlFor="pb-email"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Email *
          </Label>
          <Input
            id="pb-email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="border-border bg-background text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label
            htmlFor="pb-role"
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            What do you do?
          </Label>
          <Input
            id="pb-role"
            name="role"
            placeholder="Athlete, Coach, Leader, Parent..."
            className="border-border bg-background text-foreground placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-8 h-12 w-full bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground hover:bg-accent/90 sm:w-auto"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Get the Playbook
          </>
        )}
      </Button>
    </form>
  )
}
