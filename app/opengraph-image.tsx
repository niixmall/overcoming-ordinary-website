import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"
export const alt =
  "Overcoming Ordinary | Performance Psychology by Dr. Dillon Small"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "#e2c662",
            letterSpacing: "-4px",
            marginBottom: 24,
          }}
        >
          O/o
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "8px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Overcoming Ordinary
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Dominate Average
        </div>
        {/* Accent line */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#e2c662",
            marginTop: 32,
          }}
        />
        {/* Byline */}
        <div
          style={{
            fontSize: 20,
            color: "#71717a",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginTop: 24,
          }}
        >
          Dr. Dillon Small | Performance Psychology
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
