import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Reveal from "../../../components/Reveal";
import BlogCard from "../../../components/BlogCard";
import { AppTile } from "../../../components/AppCard";
import { Breadcrumb, ButtonLink, FaqList, Icon, JsonLd, SectionHead, TextLink, type IconName } from "../../../components/ui";
import { getAllApps, getAppById, getAllAppIds } from "../../../data/apps";
import { getAllPosts } from "../../../lib/posts";
import { formatDate } from "../../../lib/postUtils";
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
    title: { absolute: `${app.seoTitle} | DuoStrick` },
    description: app.seoDescription,
    keywords: [...app.keywords, "duostrick", "free android app", "google play"],
    alternates: { canonical: url },
    openGraph: {
      title: app.seoTitle,
      description: app.seoDescription,
      url,
      siteName: "DuoStrick",
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

const TINT = { blue: "var(--chip-blue-bg)", green: "var(--chip-green-bg)", amber: "var(--chip-amber-bg)" } as const;
const FEATURE_CHIPS = ["chip-violet", "chip-green", "chip-amber", "chip-blue", "chip-pink"];
const FEATURE_ICONS: IconName[] = ["sparkle", "star", "heart", "shield", "check"];

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppById(slug);
  if (!app) notFound();

  const otherApps = getAllApps().filter((a) => a.id !== app.id);
  /* Posts about this app, matched on the same tags the blog CTA uses */
  const relatedPosts = getAllPosts()
    .filter((p) => app.postTags.some((t) => p.tags.includes(t)))
    .slice(0, 3);
  const updated = formatDate(app.storeUpdated);

  /* Key facts — the on-page echo of the SoftwareApplication schema, phrased for answer engines */
  const facts: [string, string][] = [
    ["Developer", "DuoStrick"],
    ["Price", app.inAppPurchases ? "Free, with optional in-app purchases" : "Free"],
    ["Ads", app.containsAds ? "Contains ads" : "No ads"],
    ["Works offline", "Yes"],
    ["Content rating", "Everyone"],
    ["Category", app.applicationSubCategory],
    ["Platform", app.operatingSystem],
    ["Last updated", updated],
    ["Package", app.packageName],
  ];

  return (
    <>
      <JsonLd data={[softwareApplicationSchema(app), appFaqSchema(app), appBreadcrumbSchema(app)]} />

      {/* ── Hero ─── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
          style={{ background: "radial-gradient(60% 70% at 70% 0%, var(--bg-tint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 md:pt-14 pb-16 md:pb-24">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Apps", href: "/apps" }, { label: app.shortName }]} />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <Image
                  src={app.iconUrl}
                  alt={`${app.title} app icon`}
                  width={76} height={76}
                  className="rounded-[20px]"
                  style={{ boxShadow: "0 12px 30px rgba(23, 22, 28, 0.18)" }}
                  priority
                />
                <div>
                  <p className="eyebrow">{app.genre}</p>
                  <p className="small mt-1" style={{ color: "var(--muted)" }}>by DuoStrick · Updated {updated}</p>
                </div>
              </div>
              <h1 className="display-2" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>{app.title}</h1>
              <p className="lead mt-5" style={{ maxWidth: 560 }}>{app.tagline}</p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <ButtonLink href={app.playStoreUrl} external>Get it on Google Play</ButtonLink>
                <ButtonLink href="/support" variant="light" chip={false}>Support &amp; FAQ</ButtonLink>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                <span className="tag">Free</span>
                <span className={`tag ${app.containsAds ? "tag-amber" : "tag-green"}`}>{app.containsAds ? "Contains ads" : "No ads"}</span>
                {app.inAppPurchases && <span className="tag tag-blue">In-app purchases</span>}
                <span className="tag tag-brand">Works offline</span>
                <span className="tag">{app.operatingSystem}</span>
              </div>
            </div>

            {/* Showcase: two store screenshots on the app's tint */}
            <div className="relative rounded-[32px] p-6 sm:p-10 overflow-hidden" style={{ background: TINT[app.accent] }}>
              <div className="flex justify-center gap-4 sm:gap-6">
                {app.screenshots.slice(0, 2).map((shot, i) => (
                  <div
                    key={shot.src}
                    className="rounded-[22px] overflow-hidden w-[46%] max-w-[230px]"
                    style={{
                      boxShadow: "0 24px 50px rgba(23, 22, 28, 0.22)",
                      transform: i === 0 ? "rotate(-3deg) translateY(8px)" : "rotate(3deg) translateY(-8px)",
                    }}
                  >
                    <Image src={shot.src} alt={shot.alt} width={540} height={1100} className="w-full h-auto" sizes="230px" priority={i === 0} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is it? + key facts ─── */}
      <section className="section bg-soft">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
          <div>
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="display-2">{`What is ${app.shortName}?`}</h2>
            <div className="mt-7 flex flex-col gap-5 body" style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "62ch" }}>
              {app.intro.map((para) => <p key={para.slice(0, 40)}>{para}</p>)}
            </div>
          </div>
          <aside className="card-outline p-6 md:p-7" aria-label={`${app.shortName} key facts`}>
            <p className="eyebrow mb-4">Key facts</p>
            <dl className="small">
              {facts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 py-3" style={{ borderTop: "1px solid var(--line)" }}>
                  <dt style={{ color: "var(--muted)" }}>{label}</dt>
                  <dd className="text-right" style={{ fontWeight: 650, wordBreak: "break-word" }}>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ── Screenshots ─── */}
      <section className="section-sm">
        <div className="wrap">
          <h2 className="title-3 mb-6">{`${app.shortName} screenshots`}</h2>
        </div>
        <div className="wrap">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {app.screenshots.map((shot, i) => (
              <div key={shot.src} className="shrink-0 w-[200px] sm:w-[220px] rounded-[20px] overflow-hidden" style={{ background: "var(--card)" }}>
                <Image
                  src={shot.src} alt={shot.alt} width={540} height={1100}
                  loading={i < 3 ? "eager" : "lazy"} className="w-full h-auto" sizes="220px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─── */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Features" title={`What can you do`} accent={`with ${app.shortName}?`} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {app.features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 80}>
                <div className="card p-7 h-full">
                  <span className={`icon-chip ${FEATURE_CHIPS[i % FEATURE_CHIPS.length]}`}>
                    <Icon name={FEATURE_ICONS[i % FEATURE_ICONS.length]} size={22} />
                  </span>
                  <h3 className="mt-6" style={{ fontSize: "1.2rem", fontWeight: 750, letterSpacing: "-0.03em" }}>{feature.title}</h3>
                  <p className="body small mt-2" style={{ lineHeight: 1.75 }}>{feature.body}</p>
                  {feature.bullets && (
                    <ul className="mt-4 flex flex-col gap-2 small">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 items-start body">
                          <span className="mt-[3px] shrink-0" style={{ color: "var(--brand)" }}><Icon name="check" size={15} /></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─── */}
      <section id="faq" className="section hairline" style={{ scrollMarginTop: 72 }}>
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead eyebrow="FAQ" title={`${app.shortName}`} accent="questions, answered." />
            <p className="body mt-6">Still stuck?</p>
            <div className="mt-2"><TextLink href="/support" brand>Visit Support &amp; FAQ</TextLink></div>
          </div>
          <FaqList items={app.faq} openFirst />
        </div>
      </section>

      {/* ── Related reading ─── */}
      {relatedPosts.length > 0 && (
        <section className="section bg-soft">
          <div className="wrap">
            <SectionHead eyebrow="From the blog" title={`Read more about`} accent={`${app.shortName}.`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-12">
              {relatedPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── More apps ─── */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHead eyebrow="More from DuoStrick" title="You might" accent="also like." />
            <div className="shrink-0"><ButtonLink href="/apps" size="sm" variant="light">All apps</ButtonLink></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {otherApps.map((other) => <AppTile key={other.id} app={other} />)}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─── */}
      <section className="wrap pb-24">
        <div className="rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8" style={{ background: "#17132b" }}>
          <div className="flex items-center gap-5">
            <Image src={app.iconUrl} alt="" width={72} height={72} className="rounded-[18px] shrink-0" />
            <div>
              <p className="eyebrow" style={{ color: "#b3a5ff" }}>Free on Google Play</p>
              <p className="mt-2" style={{ color: "#fff", fontWeight: 780, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.04em", lineHeight: 1.15 }}>
                {`Get ${app.shortName} today.`}
              </p>
            </div>
          </div>
          <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-chip self-start md:self-auto" style={{ background: "#fff", color: "#17161c" }}>
            <span>Download free</span>
            <span className="chip"><Icon name="arrow-up-right" size={16} /></span>
          </a>
        </div>
      </section>
    </>
  );
}
