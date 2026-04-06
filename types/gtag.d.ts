interface Window {
  gtag: (
    command: "config" | "event" | "consent" | "js",
    targetOrAction: string | Date,
    params?: Record<string, unknown>
  ) => void
  dataLayer: unknown[]
}
