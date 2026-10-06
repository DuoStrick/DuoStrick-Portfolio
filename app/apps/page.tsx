import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "../../components/SectionContainer";
import AppCard from "../../components/AppCard";
import Reveal from "../../components/Reveal";
import { getAllApps } from "../../data/apps";
import { appListSchema, softwareApplicationSchema, SITE } from "../../lib/appSchema";

const APPS = getAllApps();

export const metadata: Metadata = {
  title: { absolute: "Android Apps & Games by Duostrick — Free on Google Play" },
  description:
    "Every Duostrick Android app: Mediqora (offline media library), AV Player (all-format 4K video & MP3) and 2048 Offline (infinite-grid number puzzle).",
  keywords: [
    "duostrick apps",
    "duostrick android apps",
    "free android apps google play",
    "offline android apps",
    "mediqora",
    "av player android",
    "2048 offline merge numbers",
    "android media player apps",
    "android puzzle games",
    "indie android developer apps",
  ],
  alternates: { canonical: `${SITE}/apps` },
  openGraph: {
    title: "Android Apps & Games by Duostrick",
    description:
      "Mediqora, AV Player and 2048 Offline — free Android apps and games from an indie studio. Offline-capable, no sign-up.",
    url: `${SITE}/apps`,
    siteName: "Duostrick Game Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Apps & Games by Duostrick",
    description: "Mediqora, AV Player and 2048 Offline — free on Google Play.",
  },
};

const listSchema = appListSchema(APPS, `${SITE}/apps/#apps`);
const appSchemas = APPS.map(softwareApplicationSchema);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${SITE}/apps/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Apps", item: `${SITE}/apps` },
  ],
};

export default function AppsIndexPage() {
  return (
    <>
      {appSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full flex flex-col items-center">
        <SectionContainer>
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm mb-8"
            aria-label="Breadcrumb"
            style={{ color: "var(--muted)" }}
          >
            <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: "var(--fg)", fontWeight: 500 }} aria-current="page">Apps</span>
          </nav>

          <div className="mb-12">
            <span className="badge badge-info mb-4">Google Play</span>
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
              Our Android Apps
            </h1>
            <div className="accent-bar-gradient mb-4" />
            <p style={{ color: "var(--body-text)", fontSize: "1.05rem", maxWidth: "62ch" }}>
              {`Three apps, all free on Google Play and all built to work without a connection — an offline media library, an all-format player, and an endless number puzzle.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {APPS.map((app, i) => (
              <Reveal key={app.id} delay={i * 110} direction="up">
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://play.google.com/store/apps/dev?id=8989641209983926608"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2.5"
              style={{ background: "var(--surface)", color: "var(--body-text)", border: "1px solid var(--border)" }}
            >
              View our Google Play developer page →
            </a>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
