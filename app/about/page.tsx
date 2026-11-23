import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, ButtonLink, FaqList, Icon, JsonLd, SectionHead, faqSchema } from "../../components/ui";
import { getAllApps } from "../../data/apps";
import { ABOUT, FOUNDED, HOME_FAQ, PLAY_DEV_URL, PRINCIPLES, SITE_URL, SUPPORT_EMAIL, TAGLINE } from "../../lib/studio";

const URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: { absolute: "About DuoStrick — Independent Android Studio" },
  description:
    "DuoStrick is an independent Android studio founded in 2024, making cute puzzle games and handy offline apps — Bunny Puzzle, 2048 Offline, Mediqora and more.",
  alternates: { canonical: URL },
  openGraph: {
    title: "About DuoStrick — Independent Android Studio",
    description: ABOUT,
    url: URL,
    siteName: "DuoStrick",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DuoStrick",
    description: ABOUT,
  },
};

export default function AboutPage() {
  const apps = getAllApps();

  /* Entity facts — the same answers in prose, in the list below and in the schema */
  const facts: [string, string][] = [
    ["Name", "DuoStrick"],
    ["What we make", "Puzzle games and offline apps for Android"],
    ["Founded", FOUNDED],
    ["Apps on Google Play", String(apps.length)],
    ["Price", "Every app is free to download"],
    ["Contact", SUPPORT_EMAIL],
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${URL}/#page`,
    url: URL,
    name: "About DuoStrick",
    description: ABOUT,
    mainEntity: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: URL },
    ],
  };

  return (
    <>
      <JsonLd data={[aboutSchema, breadcrumbSchema, faqSchema(HOME_FAQ, `${URL}/#faq`)]} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[460px] pointer-events-none"
          style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--bg-tint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 md:pt-14 pb-16">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            <div>
              <SectionHead
                as="h1"
                eyebrow="About DuoStrick"
                title={`${TAGLINE}.`}
                accent="Made by a small studio."
              />
              <div className="mt-7 flex flex-col gap-5 body" style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "62ch" }}>
                <p>
                  <strong>DuoStrick is an independent Android studio, founded in {FOUNDED}.</strong> We make cute puzzle
                  games and handy offline apps, and publish all of them free on Google Play.
                </p>
                <p>
                  Our games — Bunny Puzzle and 2048 Offline — are calm logic puzzles for a few minutes of thinking
                  without a timer. Our apps — Mediqora, AV Player, Docqora and ReceiptVault — handle the media,
                  documents and receipts already on your phone, and work without an internet connection.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="/apps">See our apps</ButtonLink>
                <ButtonLink href={PLAY_DEV_URL} variant="light" chip={false} external>Google Play page</ButtonLink>
              </div>
            </div>

            <aside className="card-outline p-6 md:p-7" aria-label="DuoStrick at a glance">
              <div className="flex items-center gap-3 mb-5">
                <Image src="/duostrick-logo.png" alt="DuoStrick logo" width={52} height={52} className="rounded-[14px]" />
                <div>
                  <p style={{ fontWeight: 780, fontSize: "1.15rem", letterSpacing: "-0.03em" }}>DuoStrick</p>
                  <p className="small" style={{ color: "var(--muted)" }}>{TAGLINE}</p>
                </div>
              </div>
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
        </div>
      </section>

      <section className="section bg-soft">
        <div className="wrap">
          <SectionHead eyebrow="How we build" title="Small apps," accent="made with care." />
          <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map((p) => (
              <li key={p.n} className="card p-7" style={{ background: "var(--surface)" }}>
                <p className="eyebrow" style={{ color: "var(--brand)" }}>{p.n}</p>
                <p className="mt-3" style={{ fontWeight: 750, fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{p.title}</p>
                <p className="body small mt-2">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What we've made" title="Our games" accent="and apps." />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <li key={app.id}>
                <Link href={`/apps/${app.id}`} className="card flex items-center gap-4 p-4 h-full">
                  <Image src={app.iconUrl} alt="" width={56} height={56} className="rounded-[15px] shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p style={{ fontWeight: 750, letterSpacing: "-0.02em" }}>{app.title}</p>
                    <p className="small" style={{ color: "var(--muted)" }}>{app.highlight}</p>
                  </div>
                  <span className="arrow-dot"><Icon name="arrow-up-right" size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section hairline">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead eyebrow="Questions" title="About" accent="DuoStrick." />
            <p className="body mt-6">Want to get in touch?</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-link brand mt-2">{SUPPORT_EMAIL} <Icon name="arrow-up-right" size={16} /></a>
          </div>
          <FaqList items={HOME_FAQ} openFirst />
        </div>
      </section>
    </>
  );
}
