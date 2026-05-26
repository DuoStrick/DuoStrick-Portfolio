import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "../lib/types";
import { formatDate, categoryClass } from "../lib/postUtils";

function GradientThumb({ category, alt }: { category: string; alt: string }) {
  const gradients: Record<string, string> = {
    "Game Dev":      "linear-gradient(135deg, var(--badge-info-bg) 0%, #c3dff8 100%)",
    "Tips & Tricks": "linear-gradient(135deg, var(--badge-success-bg) 0%, #c6ebd4 100%)",
    "Studio News":   "linear-gradient(135deg, var(--badge-warn-bg) 0%, #fddba8 100%)",
    Updates:         "linear-gradient(135deg, var(--badge-default-bg) 0%, var(--border) 100%)",
  };
  const gradient = gradients[category] ?? gradients["Updates"];
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: gradient }} aria-label={alt}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" opacity="0.35">
        <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 28 L16 18 L22 24 L28 14 L34 28 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

interface BlogCardProps { post: PostMeta; featured?: boolean; }

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const catClass = categoryClass(post.category);
  const dateStr  = formatDate(post.date);
  const hasRealImage = post.image && post.image !== "/og-image.png";

  if (featured) {
    return (
      <article className="card-hover-green rounded-2xl overflow-hidden" style={{ border: "1px solid var(--card-border)", background: "var(--card)" }}>
        <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row" style={{ textDecoration: "none" }}>
          <div className="md:w-2/5 relative aspect-video md:aspect-auto" style={{ minHeight: 240 }}>
            {hasRealImage ? (
              <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            ) : (
              <GradientThumb category={post.category} alt={post.imageAlt || post.title} />
            )}
          </div>
          <div className="flex-1 p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`badge ${catClass}`}>{post.category}</span>
                <span className="badge badge-default">Featured</span>
              </div>
              <h2 className="font-bold mb-3" style={{ fontFamily: "var(--font-syne)", fontSize: "1.45rem", color: "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
                {post.title}
              </h2>
              <p className="text-sm mb-4 line-clamp-3" style={{ color: "var(--body-text)", lineHeight: 1.7 }}>
                {post.description}
              </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3 text-xs" style={{ color: "var(--muted)" }}>
                <time dateTime={post.date}>{dateStr}</time>
                <span>·</span>
                <span>{post.readTime} min read</span>
                <span>·</span>
                <span>{post.author}</span>
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--badge-info-text)" }}>Read article →</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card-hover-blue rounded-2xl overflow-hidden flex flex-col" style={{ border: "1px solid var(--card-border)", background: "var(--card)" }}>
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full" style={{ textDecoration: "none" }}>
        <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "var(--surface)" }}>
          <div className="absolute inset-0">
            {hasRealImage ? (
              <Image src={post.image} alt={post.imageAlt || post.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            ) : (
              <GradientThumb category={post.category} alt={post.imageAlt || post.title} />
            )}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <span className={`badge ${catClass} mb-3 self-start`}>{post.category}</span>
          <h3 className="font-bold mb-2 line-clamp-2" style={{ fontFamily: "var(--font-syne)", fontSize: "1.0rem", color: "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1.35 }}>
            {post.title}
          </h3>
          <p className="text-sm mb-4 line-clamp-2 flex-1" style={{ color: "var(--body-text)", lineHeight: 1.65 }}>
            {post.description}
          </p>
          <div className="flex items-center gap-2 text-xs mt-auto" style={{ color: "var(--muted)" }}>
            <time dateTime={post.date}>{dateStr}</time>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
