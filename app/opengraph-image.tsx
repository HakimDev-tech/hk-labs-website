import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HK Labs — Frontend development studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(circle at 78% 20%, #263e34 0, #10181b 38%, #0b0e12 76%)",
          color: "#edf2f3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, letterSpacing: 7, color: "#b9c5c7" }}>
          <span style={{ fontSize: 58, fontWeight: 800, letterSpacing: -5, color: "#edf2f3" }}>hk<span style={{ color: "#b9f27c" }}>.</span></span>
          <span>HK LABS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: -4 }}>Better websites.</div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, letterSpacing: -4, color: "#b9f27c" }}>Built with intent.</div>
          <div style={{ marginTop: 16, fontSize: 24, color: "#aab7b9" }}>Frontend development · Website improvements · SaaS landing pages</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 3, color: "#879493" }}>
          <span>INDEPENDENT FRONTEND STUDIO</span>
          <span>HK-LABS.NETLIFY.APP</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
