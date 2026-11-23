import type { Metadata } from "next";
import Reveal from "../../components/Reveal";
import AppCard from "../../components/AppCard";
import { Breadcrumb, Icon, JsonLd, SectionHead } from "../../components/ui";
import { APP_GROUPS, appGroup, getAllApps } from "../../data/apps";
import { appListSchema, softwareApplicationSchema, SITE } from "../../lib/appSchema";
import { PLAY_DEV_URL } from "../../lib/studio";

const APPS = getAllApps();

export const metadata: Metadata = {
  title: { absolute: "Android Apps & Games by DuoStrick — Free on Google Play" },
  description:
    "Every DuoStrick Android app: Bunny Puzzle, 2048 Offline, Mediqora, AV Player, Docqora (offline PDF tools) and ReceiptVault (warranty tracker).",
  keywords: [
    "duostrick apps",
    "duostrick android apps",
    "free android apps google play",
    "offline android apps",
    "mediqora",
    "av player android",
    "2048 offline merge numbers",
    "bunny puzzle queens logic",
    "docqora pdf tools",
    "receiptvault warranty tracker",
    "android media player apps",
    "android puzzle games",
    "indie android developer apps",
  ],
  alternates: { canonical: `${SITE}/apps` },
  openGraph: {
    title: "Android Apps & Games by DuoStrick",
    description:
      "Bunny Puzzle, 2048 Offline, Mediqora, AV Player, Docqora and ReceiptVault — free Android games and apps from an indie studio.",
    url: `${SITE}/apps`,
    siteName: "DuoStrick Game Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Apps & Games by DuoStrick",
    description: "Bunny Puzzle, 2048 Offline, Mediqora, AV Player, Docqora and ReceiptVault — free on Google Play.",
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
      <JsonLd data={[...appSchemas, listSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
          style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--bg-tint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 md:pt-14 pb-14">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Apps" }]} />
          <SectionHead
            as="h1"
            eyebrow="Google Play"
            title="Our Android"
            accent="games and apps."
            lead={`${APPS.length} apps, all free on Google Play and all built to work without a connection — logic puzzles, media players, PDF tools and a warranty tracker.`}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {APP_GROUPS.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="tag" style={{ padding: "0.5rem 0.95rem", fontSize: "0.85rem" }}>
                <Icon name={g.icon} size={14} /> {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {APP_GROUPS.map((group) => {
        const groupApps = APPS.filter((a) => appGroup(a) === group.id);
        if (groupApps.length === 0) return null;
        return (
          <section key={group.id} id={group.id} className="wrap pb-16" style={{ scrollMarginTop: 90 }}>
            <div className="hairline pt-10 mb-8 flex items-center gap-4">
              <span className={`icon-chip ${group.chip}`}><Icon name={group.icon} size={22} /></span>
              <div>
                <h2 className="title-3">{group.title}</h2>
                <p className="small" style={{ color: "var(--muted)" }}>{group.body}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {groupApps.map((app, i) => (
                <Reveal key={app.id} delay={i * 90}>
                  <AppCard app={app} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <section className="wrap pb-24">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ background: "var(--bg-tint)" }}>
          <div>
            <p className="eyebrow mb-2">Developer page</p>
            <p className="title-3">See every DuoStrick app on Google Play.</p>
          </div>
          <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-chip self-start md:self-auto">
            <span>Open Google Play</span>
            <span className="chip"><Icon name="arrow-up-right" size={16} /></span>
          </a>
        </div>
      </section>
    </>
  );
}
