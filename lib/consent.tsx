"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"

export type ConsentCategory = "necessary" | "analytics" | "marketing"

export interface ConsentState {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface ConsentContextValue {
  consent: ConsentState | null
  hasInteracted: boolean
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (prefs: ConsentState) => void
  openPreferences: () => void
  showBanner: boolean
  showPreferences: boolean
  setShowPreferences: (v: boolean) => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

const COOKIE_NAME = "oo_consent"
const STORAGE_KEY = "oo_consent"

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as ConsentState
  } catch { /* ignore */ }
  return null
}

function writeConsent(state: ConsentState) {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  // Also set a cookie so server can read consent status
  const value = encodeURIComponent(JSON.stringify(state))
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (stored) {
      setConsent(stored)
      setHasInteracted(true)
    }
  }, [])

  const acceptAll = useCallback(() => {
    const state: ConsentState = { necessary: true, analytics: true, marketing: true }
    setConsent(state)
    setHasInteracted(true)
    writeConsent(state)
  }, [])

  const rejectAll = useCallback(() => {
    const state: ConsentState = { necessary: true, analytics: false, marketing: false }
    setConsent(state)
    setHasInteracted(true)
    writeConsent(state)
  }, [])

  const savePreferences = useCallback((prefs: ConsentState) => {
    const state = { ...prefs, necessary: true }
    setConsent(state)
    setHasInteracted(true)
    setShowPreferences(false)
    writeConsent(state)
  }, [])

  const openPreferences = useCallback(() => {
    setShowPreferences(true)
  }, [])

  const showBanner = !hasInteracted

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        showBanner,
        showPreferences,
        setShowPreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider")
  return ctx
}
