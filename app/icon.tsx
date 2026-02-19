import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e2c662",
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-1px",
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
