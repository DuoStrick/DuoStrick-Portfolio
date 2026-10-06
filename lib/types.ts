/** Shared type definitions — safe to import in both Server and Client components */

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: number;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

/* ── Published apps ──────────────────────────────────────────── */

export interface AppScreenshot {
  src: string;
  alt: string;
}

export interface AppFaq {
  q: string;
  a: string;
}

export interface AppFeature {
  title: string;
  body: string;
  bullets?: string[];
}

export interface AppEntry {
  /** Slug — also the /apps/[slug] route segment */
  id: string;
  /** Exact Google Play listing title */
  title: string;
  /** Short form used in nav, breadcrumbs and OG cards */
  shortName: string;
  /** Former or secondary name, emitted as schema alternateName */
  alternateName?: string;
  genre: string;
  accent: "blue" | "green" | "amber";
  packageName: string;
  playStoreUrl: string;
  iconUrl: string;
  operatingSystem: string;
  applicationCategory: string;
  applicationSubCategory: string;
  /** ISO date of the last Play Store update */
  storeUpdated: string;
  containsAds: boolean;
  /** Blog post tags that mark a post as being about this app */
  postTags: string[];
  /** Play Store short description */
  tagline: string;
  /** Card copy on the home grid and /apps index */
  description: string;
  seoTitle: string;
  seoDescription: string;
  schemaDescription: string;
  keywords: string[];
  intro: string[];
  features: AppFeature[];
  faq: AppFaq[];
  screenshots: AppScreenshot[];
}
