import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0e12",
          color: "#edf2f3",
          border: "3px solid #b9f27c",
          borderRadius: 14,
          fontSize: 38,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        hk<span style={{ color: "#b9f27c" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
