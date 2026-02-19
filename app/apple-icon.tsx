import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e2c662",
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-4px",
        }}
      >
        O/o
      </div>
    ),
    {
      ...size,
    }
  )
}
