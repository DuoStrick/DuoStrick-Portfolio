import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import BlogCard from "../../components/BlogCard";
import BlogFilters from "../../components/BlogFilters";

export const metadata: Metadata = {
  title: { absolute: "Blog — Android Game Tips, App Guides & Studio News | Duostrick" },
  description:
    "Duostrick blog: 2048 strategy guides to reach 8192+, AV Player tips & hidden features, Android app guides, and indie game studio updates. New posts every month.",
  keywords: [
    "duostrick blog",
    "2048 strategy guide",
    "2048 tips android",
    "how to reach 8192 in 2048",
    "2048 snake pattern",
    "av player tips android",
    "av player hidden features",
    "android video player guide",
    "android game tips",
    "puzzle game strategy",
    "indie game dev blog",
    "android app tips",
    "mobile game guide",
    "android media player tutorial",
    "game development blog",
    "android studio news",
  ],
  alternates: { canonical: "https://duostrick.vercel.app/blog" },
  openGraph: {
    title: "Blog — Android Game Tips, App Guides & Studio News | Duostrick",
    description:
      "2048 strategy guides, AV Player hidden features, Android game tips and studio updates from the Duostrick indie game studio.",
    url: "https://duostrick.vercel.app/blog",
    siteName: "Duostrick Game Studio",
    type: "website",
    locale: "en_US",
    /* OG image auto-served by app/blog/opengraph-image.tsx */
  },
  twitter: {
    card: "summary_large_image",
    title: "Duostrick Blog — Android Game Tips & App Guides",
    description:
      "2048 strategy guides, AV Player tips, and indie studio updates from Duostrick.",
  },
};

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://duostrick.vercel.app/blog/#blog",
  name: "Duostrick Blog",
  description:
    "Android game strategy guides, app tips and tricks, and indie studio updates from Duostrick.",
  url: "https://duostrick.vercel.app/blog",
  inLanguage: "en-US",
  publisher: { "@id": "https://duostrick.vercel.app/#organization" },
  isPartOf: { "@id": "https://duostrick.vercel.app/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://duostrick.vercel.app/blog/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://duostrick.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://duostrick.vercel.app/blog",
    },
  ],
};

export default function BlogPage() {
  const posts    = getAllPosts();
  const featured = posts.find(p => p.featured) ?? posts[0];
  const rest     = posts.filter(p => p.slug !== featured?.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb nav */}
        <nav
          className="flex items-center gap-2 text-sm mb-8"
          aria-label="Breadcrumb"
          style={{ color: "var(--muted)" }}
        >
          <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: "var(--fg)", fontWeight: 500 }} aria-current="page">Blog</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="font-black mb-2"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Duostrick Blog
          </h1>
          <div className="accent-bar-gradient mb-4" />
          <p style={{ color: "var(--body-text)", fontSize: "1.05rem" }}>
            Android game strategies, AV Player tips, app guides and studio updates from our indie team.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <div className="mb-12">
            <BlogCard post={featured} featured />
          </div>
        )}

        {/* Filtered grid */}
        {rest.length > 0 && <BlogFilters posts={rest} />}

        {posts.length === 0 && (
          <div
            className="text-center py-20 rounded-2xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p
              className="font-bold mb-2"
              style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", color: "var(--fg)" }}
            >
              No posts yet
            </p>
            <p style={{ color: "var(--muted)" }}>
              We&apos;re working on something great. Check back soon!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
