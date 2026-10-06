import { ImageResponse } from "next/og";
import { getAppById, getAllAppIds } from "../../../data/apps";

export const alt         = "Duostrick Android apps — free on Google Play";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllAppIds();
}

const ACCENTS: Record<string, { fg: string; bg: string; border: string }> = {
  blue:  { fg: "#93c5fd", bg: "rgba(26,111,168,0.18)", border: "rgba(26,111,168,0.40)" },
  green: { fg: "#86efac", bg: "rgba(26,122,74,0.18)",  border: "rgba(26,122,74,0.40)"  },
  amber: { fg: "#fcd34d", bg: "rgba(168,120,26,0.18)", border: "rgba(168,120,26,0.40)" },
};

export default async function AppOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppById(slug);

  const title   = app?.title ?? "Duostrick";
  const tagline = app?.tagline ?? "Free Android apps and games";
  const genre   = app?.genre ?? "Google Play";
  const accent  = ACCENTS[app?.accent ?? "blue"] ?? ACCENTS.blue;

  const titleSize = title.length > 34 ? 62 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #0d1520 60%, #080f0a 100%)",
          width: "100%", height: "100%",
          display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, sans-serif",
          position: "relative", overflow: "hidden",
          padding: "66px 76px",
        }}
      >
        <div style={{
          position: "absolute", top: -140, right: -140,
          width: 620, height: 620, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,111,168,0.52) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />
        <div style={{
          position: "absolute", bottom: -150, left: -150,
          width: 540, height: 540, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,74,0.46) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />

        {/* Category pill */}
        <div style={{ display: "flex", zIndex: 1 }}>
          <div style={{
            background: accent.bg,
            border: `1px solid ${accent.border}`,
            borderRadius: 999, padding: "10px 28px",
            color: accent.fg, fontSize: 22, fontWeight: 600,
          }}>
            {genre}
          </div>
        </div>

        {/* Name + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22, zIndex: 1, maxWidth: 1040 }}>
          <div style={{
            display: "flex",
            fontSize: titleSize, fontWeight: 800, color: "#f3f4f6",
            letterSpacing: "-2.5px", lineHeight: 1.1,
          }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9a9a9a", lineHeight: 1.35 }}>
            {tagline}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 26,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#e8e8e8" }}>
              Duostrick Studio
            </div>
            <div style={{ fontSize: 20, color: "#666666" }}>
              {`duostrick.vercel.app/apps/${slug}`}
            </div>
          </div>
          <div style={{ fontSize: 22, color: "#888888" }}>
            Free on Google Play
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
