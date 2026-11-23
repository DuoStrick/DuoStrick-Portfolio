import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import { AppTile } from "../components/AppCard";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";
import { ButtonLink, FaqList, Icon, JsonLd, SectionHead, TextLink, faqSchema } from "../components/ui";
import { APP_GROUPS, appGroup, getAllApps } from "../data/apps";
import { softwareApplicationSchema, appListSchema } from "../lib/appSchema";
import { getAllPosts } from "../lib/posts";
import { HOME_FAQ, SITE_URL } from "../lib/studio";

export const metadata: Metadata = {
  /* Use absolute to bypass layout template — avoids "DuoStrick | DuoStrick" */
  title: { absolute: "DuoStrick — Indie Android Game Studio | Free Mobile Games & Apps" },
  description:
    "Free Android games and apps from indie studio DuoStrick: Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora PDF tools and ReceiptVault.",
  keywords: [
    "duostrick game studio",
    "indie android game studio",
    "free offline android games",
    "2048 puzzle game offline",
    "2048 infinite grid android",
    "2048 strategy game",
    "tile merging puzzle game",
    "number puzzle android",
    "av player android app",
    "free video player android",
    "all format media player android",
    "4k video player free",
    "mp3 player android offline",
    "flac player android",
    "mediqora app",
    "mediqora video music player",
    "offline video player android",
    "local media library android",
    "series detection video player",
    "episode tracking android app",
    "offline android games no wifi",
    "puzzle game google play",
    "brain training game android",
    "mobile game developer india",
    "indie mobile studio",
    "free google play apps",
    "bunny puzzle queens logic",
    "queens puzzle game android",
    "offline pdf tools android",
    "compress pdf offline android",
    "warranty tracker app",
    "receipt scanner android",
  ],
  alternates: { canonical: "https://duostrick.vercel.app" },
  openGraph: {
    title: "DuoStrick — Indie Android Game Studio | Free Mobile Games & Apps",
    description:
      "Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault — free Android games and apps on Google Play, built to work offline.",
    url: "https://duostrick.vercel.app",
    siteName: "DuoStrick Game Studio",
    type: "website",
    locale: "en_US",
    /* OG image auto-served by app/opengraph-image.tsx */
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoStrick — Indie Android Game Studio",
    description:
      "Free Android puzzle games and offline apps — Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault on Google Play.",
  },
};

const APPS = getAllApps();

const PROMISES = [
  { title: "Free on Google Play", body: "Every app is free to download." },
  { title: "Works offline",       body: "All six apps work without Wi-Fi." },
  { title: "Files stay local",    body: "Our tools process media and PDFs on the phone." },
  { title: "Real support",        body: "We read and answer every email." },
];

const PRINCIPLES = [
  { n: "01", title: "Offline first",        body: "If an app can work without a connection, it should. Puzzles, players and tools all run on the phone." },
  { n: "02", title: "Easy from the first tap", body: "Short tutorials, plain settings and hints that teach instead of just giving answers." },
  { n: "03", title: "Respect for your data", body: "Our tools keep your files on your phone — Mediqora and Docqora don't even request internet access." },
  { n: "04", title: "Built from feedback",  body: "We read every review and email, and the next update is shaped by what players actually ask for." },
];

const STATS = [
  { value: String(APPS.length), label: "apps on Google Play", body: "Puzzle games, media players and everyday tools — all published as DuoStrick.", href: "/apps", link: "See every app" },
  { value: "4", label: "warranty reminders in ReceiptVault", body: "Alerts 30, 14, 7 and 1 day before a warranty or AMC runs out.", href: "/apps/receiptvault", link: "About ReceiptVault" },
  { value: "8", label: "PDF tools in Docqora", body: "Compress, merge, split, organise, protect, rotate and convert — offline.", href: "/apps/docqora", link: "About Docqora" },
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          ...APPS.map(softwareApplicationSchema),
          appListSchema(APPS, `${SITE_URL}/#apps`),
          faqSchema(HOME_FAQ, `${SITE_URL}/#faq`),
        ]}
      />

      <Hero />

      {/* ── Promise strip ─── */}
      <section className="wrap">
        <div className="hairline grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 py-10">
          {PROMISES.map((p) => (
            <div key={p.title} className="flex gap-3">
              <span className="mt-1 shrink-0" style={{ color: "var(--brand)" }}><Icon name="check" size={18} /></span>
              <div>
                <p style={{ fontWeight: 750, letterSpacing: "-0.02em" }}>{p.title}</p>
                <p className="small" style={{ color: "var(--muted)" }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What we make ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              align="center"
              eyebrow="What we make"
              title="Puzzle games, media players"
              accent="and everyday tools."
              lead="Three kinds of apps, one idea: small, focused and genuinely useful — whether you have five minutes or no signal."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3 mt-14">
            {APP_GROUPS.map((group, i) => {
              const groupApps = APPS.filter((a) => appGroup(a) === group.id);
              return (
                <Reveal key={group.id} delay={i * 90}>
                  <div className="card p-7 h-full flex flex-col">
                    <span className={`icon-chip ${group.chip}`}><Icon name={group.icon} size={22} /></span>
                    <h3 className="title-3 mt-6">{group.title}</h3>
                    <p className="body mt-2 mb-6 flex-1">{group.body}</p>
                    <ul className="flex flex-col gap-2">
                      {groupApps.map((app) => (
                        <li key={app.id}>
                          <Link href={`/apps/${app.id}`} className="group flex items-center gap-3 rounded-2xl p-2 -mx-2" style={{ fontWeight: 700 }}>
                            <Image src={app.iconUrl} alt="" width={36} height={36} className="rounded-[10px]" />
                            <span className="flex-1">{app.shortName}</span>
                            <span style={{ color: "var(--muted)" }}><Icon name="arrow-right" size={16} /></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Products ─── */}
      <section id="apps" className="section bg-tint">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHead
              eyebrow="Our apps"
              title="Explore our"
              accent="games and apps."
              lead="Open an app to see its features, screenshots and answers to common questions."
            />
            <div className="shrink-0"><ButtonLink href="/apps" size="sm">View all apps</ButtonLink></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {APPS.map((app, i) => (
              <Reveal key={app.id} delay={(i % 3) * 80}>
                <AppTile app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + at-a-glance ─── */}
      <section id="about" className="section" style={{ scrollMarginTop: 72 }}>
        <div className="wrap grid gap-14 lg:grid-cols-[1.05fr_1fr] items-start">
          <Reveal direction="left">
            <SectionHead
              eyebrow="About DuoStrick"
              title="Small apps."
              accent="Made with care."
              lead="DuoStrick is an independent Android studio founded in 2024. We build cute puzzle games and handy offline apps, and publish them free on Google Play."
            />
            <ol className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {PRINCIPLES.map((p) => (
                <li key={p.n}>
                  <p className="eyebrow" style={{ color: "var(--brand)" }}>{p.n}</p>
                  <p className="mt-2" style={{ fontWeight: 750, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>{p.title}</p>
                  <p className="body small mt-1.5">{p.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal direction="right" delay={80}>
            <div className="rounded-[28px] p-4 sm:p-6 md:p-8" style={{ background: "var(--bg-tint)" }}>
              <p className="eyebrow mb-1" style={{ color: "var(--brand)" }}>Find your app</p>
              <h3 className="title-3 mb-6">Which DuoStrick app is right for you?</h3>
              <ul className="flex flex-col gap-2">
                {APPS.map((app) => (
                  <li key={app.id}>
                    <Link
                      href={`/apps/${app.id}`}
                      className="group flex items-center gap-4 rounded-[18px] p-3 sm:p-3.5"
                      style={{ background: "var(--surface)" }}
                    >
                      <Image src={app.iconUrl} alt="" width={48} height={48} className="rounded-[13px] shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1" style={{ fontWeight: 750, letterSpacing: "-0.02em" }}>{app.shortName}</p>
                        <p className="small" style={{ color: "var(--muted)", lineHeight: 1.45 }}>{app.highlight}</p>
                      </div>
                      <span className="arrow-dot"><Icon name="arrow-up-right" size={16} /></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="small mt-5 flex items-center gap-2" style={{ color: "var(--brand-ink)" }}>
                <Icon name="check" size={16} /> All free on Google Play, and every app works offline.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── By the numbers ─── */}
      <section className="section bg-soft">
        <div className="wrap">
          <Reveal>
            <SectionHead align="center" eyebrow="By the numbers" title="A small studio" accent="with real numbers." />
          </Reveal>
          <div className="grid md:grid-cols-3 mt-14">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className={`py-8 md:py-2 md:px-8 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`} style={{ borderColor: "var(--line)" }}>
                  <p style={{ fontSize: "clamp(3.4rem, 6vw, 4.6rem)", fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 1 }}>
                    {s.value}<span style={{ color: "var(--sun)" }} aria-hidden="true">.</span>
                  </p>
                  <p className="mt-4" style={{ fontWeight: 750, fontSize: "1.15rem", letterSpacing: "-0.02em" }}>{s.label}</p>
                  <p className="body small mt-2 mb-5">{s.body}</p>
                  <TextLink href={s.href}>{s.link}</TextLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ─── */}
      {latestPosts.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionHead eyebrow="From the blog" title="Guides, tips" accent="and studio notes." />
              <div className="shrink-0"><ButtonLink href="/blog" size="sm" variant="light">All articles</ButtonLink></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {latestPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 90}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─── */}
      <section id="faq" className="section hairline">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHead eyebrow="Questions" title="Good to know" accent="before you download." />
            <p className="body mt-6">Have a specific question?</p>
            <div className="mt-2"><TextLink href="/support" brand>Visit Support &amp; FAQ</TextLink></div>
          </div>
          <FaqList items={HOME_FAQ} openFirst />
        </div>
      </section>
    </>
  );
}
