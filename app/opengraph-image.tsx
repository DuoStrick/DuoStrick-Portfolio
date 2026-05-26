import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Duostrick — Indie Android Game Studio";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        {/* Blue glow — top right */}
        <div style={{
          position: "absolute", top: -140, right: -140,
          width: 640, height: 640, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,111,168,0.55) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />
        {/* Green glow — bottom left */}
        <div style={{
          position: "absolute", bottom: -140, left: -140,
          width: 560, height: 560, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,74,0.50) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />

        {/* Content */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 22, padding: "0 100px",
          zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{
            background: "rgba(26,111,168,0.18)",
            border: "1px solid rgba(26,111,168,0.38)",
            borderRadius: 999, padding: "9px 28px",
            color: "#93c5fd", fontSize: 20, fontWeight: 600,
            letterSpacing: "0.3px",
          }}>
            Independent Mobile Studio
          </div>

          {/* Wordmark */}
          <div style={{
            fontSize: 96, fontWeight: 800, color: "#f3f4f6",
            letterSpacing: "-4px", lineHeight: 1.05,
            textAlign: "center",
          }}>
            Duostrick
          </div>

          {/* Tagline */}
          <div style={{
            fontSize: 30, color: "#777777",
            textAlign: "center", letterSpacing: "0px",
          }}>
            Indie Android Game Studio
          </div>

          {/* App chips */}
          <div style={{ display: "flex", gap: 18, marginTop: 12 }}>
            <div style={{
              background: "rgba(26,111,168,0.18)",
              border: "1px solid rgba(26,111,168,0.38)",
              borderRadius: 999, padding: "11px 28px",
              color: "#93c5fd", fontSize: 22, fontWeight: 700,
            }}>
              🎮 2048 Puzzle Game
            </div>
            <div style={{
              background: "rgba(26,122,74,0.18)",
              border: "1px solid rgba(26,122,74,0.38)",
              borderRadius: 999, padding: "11px 28px",
              color: "#86efac", fontSize: 22, fontWeight: 700,
            }}>
              🎵 AV Player
            </div>
          </div>

          {/* URL */}
          <div style={{ fontSize: 20, color: "#444444", marginTop: 4 }}>
            duostrick.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
