import type { Metadata } from "next";
import { getAllPosts } from "../../lib/posts";
import BlogCard from "../../components/BlogCard";
import BlogFilters from "../../components/BlogFilters";
import { Breadcrumb, JsonLd, SectionHead } from "../../components/ui";

export const metadata: Metadata = {
  title: { absolute: "Blog — Android Game Tips, App Guides & Studio News | DuoStrick" },
  description:
    "Queens puzzle and 2048 strategy guides, offline PDF and warranty-tracking how-tos, and AV Player and Mediqora tips from the DuoStrick indie studio.",
  keywords: [
    "duostrick blog",
    "2048 strategy guide",
    "2048 tips android",
    "how to reach 8192 in 2048",
    "how to solve queens puzzle",
    "queens logic puzzle techniques",
    "compress pdf offline android",
    "how to track warranties",
    "2048 snake pattern",
    "av player tips android",
    "av player hidden features",
    "mediqora guide",
    "mediqora tips",
    "offline video player guide",
    "android series detection player",
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
    title: "Blog — Android Game Tips, App Guides & Studio News | DuoStrick",
    description:
      "Queens logic puzzle techniques, 2048 strategy, offline PDF tools, warranty tracking, and AV Player and Mediqora guides from the DuoStrick indie studio.",
    url: "https://duostrick.vercel.app/blog",
    siteName: "DuoStrick Game Studio",
    type: "website",
    locale: "en_US",
    /* OG image auto-served by app/blog/opengraph-image.tsx */
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoStrick Blog — Android Game Tips & App Guides",
    description:
      "Puzzle strategy, Android app guides and studio updates from DuoStrick.",
  },
};

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://duostrick.vercel.app/blog/#blog",
  name: "DuoStrick Blog",
  description:
    "Android game strategy guides, app tips and tricks, and indie studio updates from DuoStrick.",
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
      <JsonLd data={[blogPageSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
          style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--bg-tint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 md:pt-14 pb-12">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <SectionHead
            as="h1"
            eyebrow="The DuoStrick blog"
            title="Guides, tips"
            accent="and studio notes."
            lead="Puzzle strategies, step-by-step how-tos for our Android apps, and updates from the studio."
          />
        </div>
      </section>

      <div className="wrap pb-24">
        {featured && (
          <div className="mb-16">
            <BlogCard post={featured} featured />
          </div>
        )}

        {rest.length > 0 && <BlogFilters posts={rest} />}

        {posts.length === 0 && (
          <div className="card text-center py-20">
            <p className="title-3 mb-2">No posts yet</p>
            <p style={{ color: "var(--muted)" }}>We&apos;re working on something great. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  );
}
