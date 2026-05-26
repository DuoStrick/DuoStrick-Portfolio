import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Duostrick Blog — Android Game Tips & App Guides";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function BlogOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #0d1520 60%, #080f0a 100%)",
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Blue glow */}
        <div style={{
          position: "absolute", top: -120, right: -120,
          width: 580, height: 580, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,111,168,0.50) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />
        {/* Green glow */}
        <div style={{
          position: "absolute", bottom: -120, left: -120,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,74,0.45) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />

        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 20, padding: "0 100px", zIndex: 1,
        }}>
          {/* Studio label */}
          <div style={{
            background: "rgba(26,122,74,0.18)",
            border: "1px solid rgba(26,122,74,0.38)",
            borderRadius: 999, padding: "9px 28px",
            color: "#86efac", fontSize: 20, fontWeight: 600,
          }}>
            Duostrick Studio
          </div>

          {/* Title */}
          <div style={{
            fontSize: 80, fontWeight: 800, color: "#f3f4f6",
            letterSpacing: "-3px", lineHeight: 1.08,
            textAlign: "center",
          }}>
            Duostrick Blog
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: 28, color: "#777777",
            textAlign: "center",
          }}>
            Android Game Tips · App Guides · Studio Updates
          </div>

          {/* Topic pills */}
          <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {["2048 Strategy", "AV Player Tips", "Game Dev", "App Guides"].map((t) => (
              <div key={t} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 999, padding: "8px 22px",
                color: "#aaaaaa", fontSize: 18, fontWeight: 500,
              }}>
                {t}
              </div>
            ))}
          </div>

          <div style={{ fontSize: 18, color: "#444444", marginTop: 6 }}>
            duostrick.vercel.app/blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
