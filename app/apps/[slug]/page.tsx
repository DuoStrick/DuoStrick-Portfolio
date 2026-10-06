import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SectionContainer from "../../../components/SectionContainer";
import Reveal from "../../../components/Reveal";
import BlogCard from "../../../components/BlogCard";
import { getAllApps, getAppById, getAllAppIds } from "../../../data/apps";
import { getAllPosts } from "../../../lib/posts";
import {
  appPageUrl,
  softwareApplicationSchema,
  appFaqSchema,
  appBreadcrumbSchema,
} from "../../../lib/appSchema";

export function generateStaticParams() {
  return getAllAppIds();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppById(slug);
  if (!app) return { title: "App not found" };

  const url = appPageUrl(app);
  const ogImage = {
    url: `${url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `${app.title} — free on Google Play`,
  };

  return {
    title: { absolute: `${app.seoTitle} | Duostrick` },
    description: app.seoDescription,
    keywords: [...app.keywords, "duostrick", "free android app", "google play"],
    alternates: { canonical: url },
    openGraph: {
      title: app.seoTitle,
      description: app.seoDescription,
      url,
      siteName: "Duostrick Game Studio",
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: app.seoTitle,
      description: app.seoDescription,
      images: [ogImage.url],
    },
  };
}

/* Accent → the existing utility classes in globals.css */
const ACCENT_BAR: Record<string, string> = {
  blue:  "accent-bar-blue",
  green: "accent-bar-green",
  amber: "accent-bar-gradient",
};
const ACCENT_BADGE: Record<string, string> = {
  blue:  "badge-info",
  green: "badge-success",
  amber: "badge-warn",
};

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppById(slug);
  if (!app) notFound();

  const barClass  = ACCENT_BAR[app.accent] ?? "accent-bar-blue";
  const badgeCls  = ACCENT_BADGE[app.accent] ?? "badge-info";
  const otherApps = getAllApps().filter((a) => a.id !== app.id);

  /* Posts about this app, matched on the same tags the blog CTA uses */
  const relatedPosts = getAllPosts()
    .filter((p) => app.postTags.some((t) => p.tags.includes(t)))
    .slice(0, 3);

  const updated = new Date(app.storeUpdated).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(app)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appFaqSchema(app)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appBreadcrumbSchema(app)) }}
      />

      <div className="w-full flex flex-col items-center">
        {/* ── Hero ─── */}
        <SectionContainer>
          <nav
            className="flex items-center gap-2 text-sm mb-8 flex-wrap"
            aria-label="Breadcrumb"
            style={{ color: "var(--muted)" }}
          >
            <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/apps" style={{ color: "var(--muted)" }}>Apps</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--fg)", fontWeight: 500 }} aria-current="page">{app.shortName}</span>
          </nav>

          <div className="flex flex-col sm:flex-row gap-7 items-start">
            <div
              className="shrink-0 w-24 h-24 rounded-[22px] overflow-hidden flex items-center justify-center"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            >
              <Image
                src={app.iconUrl}
                alt={`${app.title} app icon`}
                width={96} height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <span className={`badge ${badgeCls} mb-4`}>{app.genre}</span>
              <h1
                className="font-black mb-2"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(1.9rem, 4.5vw, 2.9rem)",
                  color: "var(--fg)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.12,
                }}
              >
                {app.title}
              </h1>
              <div className={`${barClass} mb-4`} />
              <p className="mb-6" style={{ color: "var(--body-text)", fontSize: "1.05rem", maxWidth: "62ch", lineHeight: 1.8 }}>
                {app.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href={app.playStoreUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.76a2 2 0 0 0 2.85.1l.08-.07 10.15-10.17-2.96-2.97-10.12 10.1a2 2 0 0 0 0 3.01zm15.5-14.87-2.46-2.47-2.05 2.05 2.46 2.47 2.05-2.05zm1.3-1.3 1.07-1.08a2 2 0 0 0 0-2.84L18.5 1.13a2 2 0 0 0-2.83 0L14.6 2.2l5.38 5.39zM1.64 1.43A1 1 0 0 0 0 2.27v19.46a1 1 0 0 0 1.64.77l11.2-9.73-11.2-9.74-.01-.6z" />
                  </svg>
                  Get on Google Play
                </a>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ background: "var(--surface)", color: "var(--body-text)", border: "1px solid var(--border)" }}
                >
                  Support &amp; FAQ
                </Link>
              </div>

              {/* Quick facts — also the on-page echo of the SoftwareApplication schema */}
              <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {[
                  ["Price",    "Free"],
                  ["Platform", app.operatingSystem],
                  ["Category", app.applicationSubCategory],
                  ["Ads",      app.containsAds ? "Contains ads" : "No ads"],
                  ["Updated",  updated],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{label}</dt>
                    <dd style={{ color: "var(--fg)", fontWeight: 600 }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </SectionContainer>

        {/* ── Intro + screenshots ─── */}
        <SectionContainer style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="prose mb-10" style={{ maxWidth: "70ch" }}>
            {app.intro.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>

          <h2
            className="font-bold mb-6"
            style={{ fontFamily: "var(--font-syne)", fontSize: "1.45rem", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            {`${app.shortName} screenshots`}
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "thin" }}>
            {app.screenshots.map((shot, i) => (
              <div
                key={shot.src}
                className="shrink-0 rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border)", background: "var(--surface)", width: 220 }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={540}
                  height={1100}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-auto"
                  sizes="220px"
                />
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* ── Features ─── */}
        <SectionContainer>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            {`What ${app.shortName} does`}
          </h2>
          <div className={`${barClass} mb-10`} />

          <div className="grid md:grid-cols-2 gap-5">
            {app.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80} direction="up">
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", color: "var(--fg)", letterSpacing: "-0.01em" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--body-text)", lineHeight: 1.75 }}>
                    {feature.body}
                  </p>
                  {feature.bullets && (
                    <ul className="text-sm flex flex-col gap-2" style={{ color: "var(--body-text)" }}>
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start">
                          <span aria-hidden="true" style={{ color: "var(--badge-info-text)", lineHeight: 1.6 }}>•</span>
                          <span style={{ lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </SectionContainer>

        {/* ── FAQ ─── */}
        <SectionContainer style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            {`${app.shortName} — frequently asked questions`}
          </h2>
          <div className={`${barClass} mb-10`} />

          <div className="flex flex-col gap-4" style={{ maxWidth: "76ch" }}>
            {app.faq.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-2xl p-5"
                style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
              >
                <summary
                  className="font-semibold cursor-pointer"
                  style={{ fontFamily: "var(--font-syne)", color: "var(--fg)", fontSize: "1rem" }}
                >
                  {q}
                </summary>
                <p className="text-sm mt-3" style={{ color: "var(--body-text)", lineHeight: 1.8 }}>
                  {a}
                </p>
              </details>
            ))}
          </div>

          <p className="text-sm mt-8" style={{ color: "var(--muted)" }}>
            Still stuck? Head to{" "}
            <Link href="/support" style={{ color: "var(--badge-info-text)" }}>Support &amp; FAQ</Link>{" "}
            or email{" "}
            <a href="mailto:support@tradeslook.com" style={{ color: "var(--badge-info-text)" }}>support@tradeslook.com</a>.
          </p>
        </SectionContainer>

        {/* ── Related reading ─── */}
        {relatedPosts.length > 0 && (
          <SectionContainer>
            <h2
              className="font-bold mb-2"
              style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}
            >
              {`Read more about ${app.shortName}`}
            </h2>
            <div className={`${barClass} mb-8`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </SectionContainer>
        )}

        {/* ── Other apps ─── */}
        <SectionContainer style={{ borderTop: "1px solid var(--border)" }}>
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            More from Duostrick
          </h2>
          <div className="accent-bar-gradient mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherApps.map((other) => (
              <Link
                key={other.id}
                href={`/apps/${other.id}`}
                className="card-hover-blue flex gap-4 items-center rounded-2xl p-5"
                style={{ background: "var(--card)", border: "1px solid var(--card-border)", textDecoration: "none" }}
              >
                <div
                  className="shrink-0 w-14 h-14 rounded-[14px] overflow-hidden"
                  style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                >
                  <Image
                    src={other.iconUrl}
                    alt={`${other.title} icon`}
                    width={56} height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div
                    className="font-bold mb-1"
                    style={{ fontFamily: "var(--font-syne)", color: "var(--fg)", fontSize: "1rem", letterSpacing: "-0.01em" }}
                  >
                    {other.title}
                  </div>
                  <div className="text-sm" style={{ color: "var(--body-text)" }}>
                    {other.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-sm mt-8" style={{ color: "var(--muted)" }}>
            <Link href="/apps" style={{ color: "var(--badge-info-text)" }}>See all Duostrick apps →</Link>
          </p>
        </SectionContainer>
      </div>
    </>
  );
}
