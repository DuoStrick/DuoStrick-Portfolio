import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "../../../lib/posts";

export const alt         = "Duostrick Blog — Android Game Tips & App Guides";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Pre-render one OG card per post at build time */
export function generateStaticParams() {
  return getAllSlugs();
}

/* Category → accent colour, mirrors the badge palette on the site */
const ACCENTS: Record<string, { fg: string; bg: string; border: string }> = {
  "Game Dev":      { fg: "#93c5fd", bg: "rgba(26,111,168,0.18)", border: "rgba(26,111,168,0.40)" },
  "Tips & Tricks": { fg: "#86efac", bg: "rgba(26,122,74,0.18)",  border: "rgba(26,122,74,0.40)"  },
  "Studio News":   { fg: "#fcd34d", bg: "rgba(168,120,26,0.18)", border: "rgba(168,120,26,0.40)" },
  Updates:         { fg: "#d4d4d4", bg: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.16)" },
};

export default async function PostOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title    = post?.title ?? "Duostrick Blog";
  const category = post?.category ?? "Studio News";
  const readTime = post?.readTime ?? 5;
  const accent   = ACCENTS[category] ?? ACCENTS.Updates;

  /* Long headlines need a smaller face so they stay on three lines */
  const titleSize = title.length > 72 ? 58 : title.length > 48 ? 66 : 76;

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
        {/* Blue glow — top right */}
        <div style={{
          position: "absolute", top: -140, right: -140,
          width: 620, height: 620, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,111,168,0.52) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />
        {/* Green glow — bottom left */}
        <div style={{
          position: "absolute", bottom: -150, left: -150,
          width: 540, height: 540, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,122,74,0.46) 0%, transparent 70%)",
          filter: "blur(90px)",
        }} />

        {/* Top row — category pill */}
        <div style={{ display: "flex", zIndex: 1 }}>
          <div style={{
            background: accent.bg,
            border: `1px solid ${accent.border}`,
            borderRadius: 999, padding: "10px 28px",
            color: accent.fg, fontSize: 22, fontWeight: 600,
          }}>
            {category}
          </div>
        </div>

        {/* Headline */}
        <div style={{
          display: "flex",
          fontSize: titleSize, fontWeight: 800, color: "#f3f4f6",
          letterSpacing: "-2.5px", lineHeight: 1.12,
          zIndex: 1, maxWidth: 1040,
        }}>
          {title}
        </div>

        {/* Bottom row — studio + read time */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 26,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: "#e8e8e8" }}>
              Duostrick Studio
            </div>
            <div style={{ fontSize: 20, color: "#666666" }}>
              duostrick.vercel.app/blog
            </div>
          </div>
          {/* Single text node — Satori treats `{expr} text` as two children */}
          <div style={{ fontSize: 22, color: "#888888" }}>
            {`${readTime} min read`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
