"use client"

import { useState } from "react"
import { useConsent, type ConsentState } from "@/lib/consent"
import { X } from "lucide-react"

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Necessary",
    description: "Required for the website to function. Cannot be disabled.",
    locked: true,
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    description: "Help us understand how visitors use our site so we can improve it.",
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description: "Used to deliver relevant ads and track campaign performance.",
    locked: false,
  },
]

export function CookieBanner() {
  const {
    showBanner,
    showPreferences,
    setShowPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
  } = useConsent()

  const [prefs, setPrefs] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  if (!showBanner && !showPreferences) return null

  // Preferences modal
  if (showPreferences) {
    return (
      <div
        className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center"
        role="dialog"
        aria-modal="true"
        aria-label="Cookie preferences"
      >
        <div
          className="fixed inset-0 bg-black/60"
          onClick={() => setShowPreferences(false)}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-4 mb-4 w-full max-w-lg border border-border bg-card p-6 shadow-lg sm:mb-0 sm:p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="font-display text-2xl tracking-wider text-foreground">
                COOKIE PREFERENCES
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Choose which cookies you allow. You can change these settings
                anytime via the link in our footer.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPreferences(false)}
              className="ml-4 text-muted-foreground hover:text-foreground"
              aria-label="Close cookie preferences"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {cat.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={cat.locked ? true : prefs[cat.key]}
                    disabled={cat.locked}
                    onChange={(e) =>
                      setPrefs((p) => ({ ...p, [cat.key]: e.target.checked }))
                    }
                    className="peer sr-only"
                    aria-label={`${cat.locked ? "Always on" : `Toggle ${cat.label} cookies`}`}
                  />
                  <div className="h-6 w-11 rounded-full bg-muted after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-foreground after:transition-all peer-checked:bg-accent peer-checked:after:translate-x-full peer-disabled:opacity-50" />
                </label>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row" role="group" aria-label="Save cookie preferences">
            <button
              type="button"
              onClick={() => savePreferences(prefs)}
              className="flex-1 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
            >
              Save Preferences
            </button>
            <button
              type="button"
              onClick={() => {
                acceptAll()
                setShowPreferences(false)
              }}
              className="flex-1 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground/5"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Banner
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] border-t border-border bg-card/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use cookies to improve your experience. By continuing, you agree
          to our{" "}
          <a
            href="/cookie-policy"
            className="underline text-foreground hover:text-accent"
          >
            Cookie Policy
          </a>
          . You can manage your preferences anytime.
        </p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center" role="group" aria-label="Cookie consent options">
          <button
            type="button"
            onClick={rejectAll}
            className="border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground/5"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={() => setShowPreferences(true)}
            className="border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground/5"
          >
            Manage Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-opacity hover:opacity-90"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
