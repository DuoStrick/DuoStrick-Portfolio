import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Duostrick Support & FAQ — AV Player, Mediqora & 2048 Game Help";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SupportOgImage() {
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
          position: "absolute", top: -130, right: -130,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,111,168,0.52) 0%, transparent 70%)",
          filter: "blur(85px)",
        }} />
        {/* Green glow */}
        <div style={{
          position: "absolute", bottom: -130, left: -130,
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,74,0.46) 0%, transparent 70%)",
          filter: "blur(85px)",
        }} />

        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 20, padding: "0 100px", zIndex: 1,
        }}>
          <div style={{
            background: "rgba(26,111,168,0.18)",
            border: "1px solid rgba(26,111,168,0.40)",
            borderRadius: 999, padding: "9px 28px",
            color: "#93c5fd", fontSize: 20, fontWeight: 600,
          }}>
            Help Centre
          </div>

          <div style={{
            fontSize: 82, fontWeight: 800, color: "#f3f4f6",
            letterSpacing: "-3px", lineHeight: 1.08, textAlign: "center",
          }}>
            Support &amp; FAQ
          </div>

          <div style={{ fontSize: 28, color: "#777777", textAlign: "center" }}>
            Answers for every Duostrick app
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap", justifyContent: "center" }}>
            {["AV Player", "Mediqora", "2048 Offline"].map((t) => (
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
            duostrick.vercel.app/support
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
