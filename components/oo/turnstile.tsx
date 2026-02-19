"use client"

import { useEffect, useRef, useCallback } from "react"

interface TurnstileProps {
  onVerify: (token: string) => void
  onError?: () => void
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          "error-callback"?: () => void
          "expired-callback"?: () => void
          theme: string
          size: string
          appearance: string
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

export function Turnstile({ onVerify, onError }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey) return

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "error-callback": () => onError?.(),
      "expired-callback": () => onError?.(),
      theme: "dark",
      size: "invisible",
      appearance: "interaction-only",
    })
  }, [onVerify, onError])

  useEffect(() => {
    // If the script is already loaded globally
    if (window.turnstile) {
      renderWidget()
      return
    }

    // If another instance is already loading the script
    if (scriptLoadedRef.current) return
    scriptLoadedRef.current = true

    window.onTurnstileLoad = () => {
      renderWidget()
    }

    const script = document.createElement("script")
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [renderWidget])

  return <div ref={containerRef} />
}
