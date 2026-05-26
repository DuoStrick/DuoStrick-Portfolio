import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";
import { getAllSlugs, getPostBySlug, getAllPosts, extractHeadings } from "../../../lib/posts";
import { formatDate, categoryClass } from "../../../lib/postUtils";

/* ── Custom heading renderer (adds id anchors) ─── */
const renderer = new marked.Renderer();
renderer.heading = function ({ text, depth }: { text: string; depth: number }) {
  const clean = text.replace(/<[^>]*>/g, "");
  const id = clean
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};
marked.setOptions({ renderer });

/** Count plain-text words in markdown (strips frontmatter & markdown syntax) */
function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, "")   // code blocks
    .replace(/`[^`]+`/g, "")          // inline code
    .replace(/!\[.*?\]\(.*?\)/g, "")  // images
    .replace(/\[.*?\]\(.*?\)/g, "$1") // links → keep text
    .replace(/[#*_~>|]/g, "")         // markdown symbols
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const postUrl     = `https://duostrick.vercel.app/blog/${post.slug}`;
  const hasBanner   = post.image && post.image !== "/og-image.png";
  const absoluteImg = hasBanner
    ? `https://duostrick.vercel.app${post.image}`
    : undefined; // let app/opengraph-image.tsx handle it when no real banner

  return {
    /* absolute bypasses layout template — avoids "Title | Duostrick Blog | Duostrick" */
    title: { absolute: `${post.title} | Duostrick Blog` },
    description: post.description,
    keywords: [
      ...post.tags,
      "duostrick blog",
      "android tips",
      "mobile game guide",
    ],
    authors: [{ name: post.author, url: "https://duostrick.vercel.app" }],
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "Duostrick Game Studio",
      type: "article",
      publishedTime: `${post.date}T00:00:00+00:00`,
      modifiedTime:  `${post.date}T00:00:00+00:00`,
      authors: [post.author],
      tags: post.tags,
      ...(absoluteImg && {
        images: [{ url: absoluteImg, width: 1200, height: 630, alt: post.imageAlt || post.title }],
      }),
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(absoluteImg && { images: [absoluteImg] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug }  = await params;
  const post      = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent  = await marked.parse(post.content);
  const headings     = extractHeadings(post.content);
  const related      = getAllPosts()
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);
  const dateStr      = formatDate(post.date);
  const catClass     = categoryClass(post.category);
  const postUrl      = `https://duostrick.vercel.app/blog/${post.slug}`;
  const hasRealImage = post.image && post.image !== "/og-image.png";
  const wordCount    = countWords(post.content);
  const imageUrl     = hasRealImage
    ? `https://duostrick.vercel.app${post.image}`
    : "https://duostrick.vercel.app/opengraph-image"; /* auto-generated OG image */

  /* ── Pick the right app CTA based on what the post is about ── */
  const isAvPlayer = post.tags.includes("av-player");
  const ctaApp = isAvPlayer
    ? {
        icon: "/avplayer-icon.png",
        name: "AV Player: Video & MP3 Player",
        desc: "All-format 4K video & offline MP3 player for Android — free, no ads, works offline.",
        url:  "https://play.google.com/store/apps/details?id=com.duostrick.avplayer",
        alt:  "AV Player for Android icon",
      }
    : {
        icon: "https://play-lh.googleusercontent.com/nKHmZOSPR9xV-jWa-fAgQ3tyEUQngnczz6MDAIlHLOyulh8z_MrIkR_0neOGjT8hm_bZGLqTWE6T3oQkdo9n=w240-h480-rw",
        name: "2048 Puzzle Game Offline",
        desc: "Endless infinite-grid puzzle — merge tiles, reach 8192+. No internet required.",
        url:  "https://play.google.com/store/apps/details?id=com.duostrick.infinitygrid",
        alt:  "2048 Puzzle Game Offline icon",
      };

  /* ── Structured data ─────────────────────────────────────── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}/#article`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    inLanguage: "en-US",
    timeRequired: `PT${post.readTime}M`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Organization",
      "@id": "https://duostrick.vercel.app/#organization",
      name: post.author,
      url: "https://duostrick.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://duostrick.vercel.app/#organization",
      name: "Duostrick Studio",
      url: "https://duostrick.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://duostrick.vercel.app/logo.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://duostrick.vercel.app/blog/#blog",
      name: "Duostrick Blog",
      url: "https://duostrick.vercel.app/blog",
    },
    about: {
      "@type": "SoftwareApplication",
      name: ctaApp.name,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${postUrl}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://duostrick.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Blog",  item: "https://duostrick.vercel.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm mb-8 flex-wrap"
          aria-label="Breadcrumb"
          style={{ color: "var(--muted)" }}
        >
          <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" style={{ color: "var(--muted)" }}>Blog</Link>
          <span aria-hidden="true">/</span>
          <span
            className="line-clamp-1"
            style={{ color: "var(--fg)", fontWeight: 500, maxWidth: 280 }}
            aria-current="page"
          >
            {post.title}
          </span>
        </nav>

        <div className="flex gap-12 items-start">
          {/* ── Main article ── */}
          <article className="flex-1 min-w-0" itemScope itemType="https://schema.org/BlogPosting">
            {/* Hidden machine-readable fields */}
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="dateModified"  content={post.date} />
            <meta itemProp="author"        content={post.author} />
            <meta itemProp="wordCount"     content={String(wordCount)} />

            {/* Meta row */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className={`badge ${catClass}`}>{post.category}</span>
              <time dateTime={post.date} className="text-xs" style={{ color: "var(--muted)" }}>
                {dateStr}
              </time>
              <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{post.readTime} min read</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>·</span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>{wordCount} words</span>
            </div>

            {/* H1 */}
            <h1
              className="font-black mb-5"
              itemProp="headline"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
                color: "var(--fg)",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </h1>

            {/* Author / share bar */}
            <div
              className="flex items-center justify-between flex-wrap gap-4 py-4 mb-6"
              style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)", fontFamily: "var(--font-syne)" }}
                  aria-hidden="true"
                >
                  DS
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--fg)" }} itemProp="author">
                    {post.author}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>Indie Studio</div>
                </div>
              </div>
              <div className="flex items-center gap-2" role="group" aria-label="Share this article">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ background: "var(--input)", color: "var(--body-text)", border: "1px solid var(--border)" }}
                  aria-label="Share on X (Twitter)"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.254 5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                  </svg>
                  Share
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ background: "var(--input)", color: "var(--body-text)", border: "1px solid var(--border)" }}
                  aria-label="Share on LinkedIn"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Featured image */}
            {hasRealImage ? (
              <div className="relative w-full mb-8 rounded-xl overflow-hidden" style={{ aspectRatio: "16/8" }}>
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill priority
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  itemProp="image"
                />
              </div>
            ) : (
              <div
                className="w-full mb-8 rounded-xl flex items-center justify-center"
                style={{ aspectRatio: "16/8", background: "linear-gradient(135deg, var(--badge-info-bg) 0%, var(--badge-success-bg) 100%)", border: "1px solid var(--border)" }}
              >
                <div className="text-center" style={{ color: "var(--muted)" }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-2" aria-hidden="true">
                    <rect x="4" y="4" width="40" height="40" rx="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M10 38 L20 22 L28 32 L34 22 L42 38 Z" fill="currentColor" opacity="0.3" />
                    <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
                  </svg>
                  <span className="text-xs">{post.title}</span>
                </div>
              </div>
            )}

            {/* Article body */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} itemProp="articleBody" />

            {/* In-article CTA — matched to this post's app */}
            <div
              className="my-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5"
              style={{ background: "var(--badge-info-bg)", border: "1px solid var(--stat-border)" }}
            >
              <img
                src={ctaApp.icon}
                alt={ctaApp.alt}
                width={60} height={60}
                className="rounded-[14px] shrink-0"
                style={{ border: "1px solid var(--stat-border)" }}
                loading="lazy"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--fg)", fontFamily: "var(--font-syne)" }}>
                  Download {ctaApp.name} — Free
                </p>
                <p className="text-xs" style={{ color: "var(--body-text)" }}>{ctaApp.desc}</p>
              </div>
              <a
                href={ctaApp.url}
                target="_blank" rel="noopener noreferrer"
                className="shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
              >
                Get it free →
              </a>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 mb-10" aria-label="Article tags">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "var(--input)", color: "var(--body-text)", border: "1px solid var(--border)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <section className="pt-8" style={{ borderTop: "1px solid var(--border)" }} aria-label="Related articles">
                <h2
                  className="font-bold mb-5"
                  style={{ fontFamily: "var(--font-syne)", fontSize: "1.15rem", color: "var(--fg)", letterSpacing: "-0.02em" }}
                >
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {related.map(rp => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="card-hover flex gap-4 rounded-xl p-4"
                      style={{ border: "1px solid var(--border)", background: "var(--surface)", textDecoration: "none" }}
                    >
                      <div
                        className="w-14 h-14 rounded-lg shrink-0 flex items-center justify-center"
                        style={{ background: "var(--input)" }}
                        aria-hidden="true"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M7 16 L10 10 L13 13 L16 8 L19 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <span className={`badge ${categoryClass(rp.category)} mb-1`}>{rp.category}</span>
                        <p
                          className="text-sm font-semibold line-clamp-2"
                          style={{ color: "var(--fg)", fontFamily: "var(--font-syne)", lineHeight: 1.35 }}
                        >
                          {rp.title}
                        </p>
                        <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{formatDate(rp.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-6 w-72 shrink-0" aria-label="Article sidebar">
            {/* Table of Contents */}
            {headings.length > 0 && (
              <div
                className="rounded-2xl p-5 sticky top-24"
                style={{ border: "1px solid var(--border)", background: "var(--sidebar-bg)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  Table of Contents
                </p>
                <nav aria-label="Table of contents">
                  <ul className="flex flex-col gap-1">
                    {headings.map(({ id, text, level }) => (
                      <li key={id} style={{ paddingLeft: level === 3 ? "0.75rem" : 0 }}>
                        <a href={`#${id}`} className="toc-link block py-1 text-sm leading-snug">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            {/* Sidebar app CTA */}
            <div
              className="rounded-2xl p-5 text-center sticky top-72"
              style={{ border: "1px solid var(--border)", background: "var(--card)" }}
            >
              <img
                src={ctaApp.icon}
                alt={ctaApp.alt}
                width={64} height={64}
                className="rounded-[14px] mx-auto mb-3"
                style={{ border: "1px solid var(--border)" }}
                loading="lazy"
              />
              <p className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-syne)", color: "var(--fg)" }}>
                {ctaApp.name}
              </p>
              <p className="text-xs mb-4" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {ctaApp.desc}
              </p>
              <a
                href={ctaApp.url}
                target="_blank" rel="noopener noreferrer"
                className="block w-full rounded-full py-2.5 text-sm font-semibold"
                style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
              >
                Download free →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
