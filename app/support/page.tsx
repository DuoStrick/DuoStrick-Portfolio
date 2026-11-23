import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, FaqList, Icon, JsonLd, SectionHead } from "../../components/ui";
import { getAllApps } from "../../data/apps";
import { SUPPORT_EMAIL } from "../../lib/studio";

export const metadata: Metadata = {
  title: { absolute: "Support & FAQ — Help for All DuoStrick Apps | DuoStrick" },
  description:
    "Help for Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault — how-tos, common questions and troubleshooting.",
  keywords: [
    "duostrick support",
    "av player help",
    "av player faq",
    "2048 game support",
    "2048 puzzle help",
    "android app support",
    "av player not working",
    "2048 game faq",
    "mediqora support",
    "mediqora faq",
    "mediqora series not detected",
    "mediqora help",
    "bunny puzzle help",
    "docqora help",
    "receiptvault help",
  ],
  alternates: { canonical: "https://duostrick.vercel.app/support" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Support & FAQ — Help for All DuoStrick Apps | DuoStrick",
    description:
      "Get help with Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault. Answers about features, settings and troubleshooting.",
    url: "https://duostrick.vercel.app/support",
    siteName: "DuoStrick",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoStrick Support & FAQ",
    description: "Help and answers for every DuoStrick app.",
  },
};

const faqItems = [
  {
    q: "How do gesture controls work in AV Player?",
    a: "Swipe up or down on the left half of the screen to adjust brightness. Swipe up or down on the right half to adjust volume. Swipe left or right anywhere on the screen to seek forward or backward. These gestures work in both portrait and landscape modes.",
  },
  {
    q: "Why won't AV Player play my video file?",
    a: "AV Player supports MP4, MKV, AVI, MOV, FLV, WMV, 3GP, M4V, WEBM, and TS video formats, and MP3, FLAC, WAV, AAC, OGG, and M4A audio formats. If your file doesn't play, try converting it to MP4 or MKV. Make sure the app has permission to access your storage in your Android settings.",
  },
  {
    q: "How do I reach a high tile in 2048 Offline?",
    a: "Use the snake pattern strategy: keep your highest tile in one corner and build descending values in rows that snake back and forth. Swipe mostly left and down (or right and up — pick a corner and commit). Merge small tiles before they pile up, and never move your highest tile out of its corner.",
  },
  {
    q: "Does 2048 Offline require an internet connection?",
    a: "No. 2048 Offline works completely without an internet connection. You can play offline anywhere. The global leaderboard syncs when you next connect to Wi-Fi or mobile data.",
  },
  {
    q: "How do I enable Picture-in-Picture (PiP) in AV Player?",
    a: "While a video is playing, pull down from the top of the video to instantly enter PiP mode, or press your device's Home button. The video will shrink to a floating window you can position anywhere on your screen. Android 8.0 (Oreo) or higher is required for PiP.",
  },
  {
    q: "Why isn't Mediqora grouping my episodes into a series?",
    a: "Mediqora builds series from the information in your filenames, so it needs that information to be present. Keep the season/episode pattern in the name (for example Show.Name.S03E04.1080p.mkv) and keep episodes of the same show together in one folder. Renaming a file down to something like 04.mkv removes the only signal the parser has. After adding files, open the app so it can rescan.",
  },
  {
    q: "What is Up Next in Mediqora?",
    a: "Once Mediqora has grouped a series, Up Next shows the next unwatched episode on the home screen so you can resume a show in one tap. Because progress is tracked per episode, finishing one episode automatically moves Up Next to the following one. You can also turn on autoplay so the next episode — or the next file in the folder — starts on its own.",
  },
  {
    q: "Does Mediqora need an internet connection or an account?",
    a: "Neither. Mediqora does not request the internet permission at all, so nothing you watch, search or listen to is able to leave your device. There is no account to create, no ads, no analytics and no tracking. Your library, watch history and favorites stay on your phone.",
  },
  {
    q: "How do I add media from an SD card in Mediqora?",
    a: "Use Add folder and pick the location with Android's own folder picker — it works for an SD card or any other location your device exposes. Mediqora only asks for access to the videos and music on your device; it does not ask for contacts, location, camera or microphone.",
  },
  {
    q: "How do I solve a Bunny Puzzle level when I'm stuck?",
    a: "Remember the rules: one bunny per row, per column and per colour region, and bunnies never touch, not even diagonally. Start with the smallest region, and if one region's open squares all sit in one row, no other region can use that row. Still stuck? Tap Hint — it explains the next logical step instead of just placing a bunny.",
  },
  {
    q: "Does Docqora upload my PDFs?",
    a: "No. Docqora does not request the internet permission, so it cannot upload anything. Compressing, merging, splitting, protecting and converting all happen on your phone.",
  },
  {
    q: "When does ReceiptVault remind me about a warranty?",
    a: "30, 14, 7 and 1 day before a warranty, AMC or policy expires — even when the app is closed. Tapping a reminder opens that receipt so you can start a claim straight away.",
  },
  {
    q: "I found a bug — how do I report it?",
    a: "Please email support@tradeslook.com with the following details: your device model, Android version, app version (found in Settings → About), and a description of what happened. Screenshots or a screen recording are very helpful. We respond to all reports.",
  },
  {
    q: "How do I hide a folder in AV Player?",
    a: "Long-press any folder in the file browser, then tap 'Hide folder'. The folder will disappear from the main library view. To unhide it, go to Settings → Hidden Folders, select the folder, and tap Restore.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://duostrick.vercel.app/support/#faq",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://duostrick.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Support", item: "https://duostrick.vercel.app/support" },
  ],
};

export default function Support() {
  const apps = getAllApps();
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
          style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--bg-tint) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 md:pt-14 pb-12">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Support" }]} />
          <SectionHead
            as="h1"
            eyebrow="Support & FAQ"
            title="How can we"
            accent="help you today?"
            lead="Answers to common questions about Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault."
          />
        </div>
      </section>

      {/* Per-app help */}
      <section className="wrap pb-6">
        <p className="eyebrow mb-4">Help by app</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {apps.map((app) => (
            <Link key={app.id} href={`/apps/${app.id}#faq`} className="card flex flex-col items-start gap-3 p-4">
              <Image src={app.iconUrl} alt="" width={44} height={44} className="rounded-[12px]" />
              <span style={{ fontWeight: 720, letterSpacing: "-0.02em" }}>{app.shortName}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHead eyebrow="Common questions" title="Quick" accent="answers." />
            <div className="card mt-8 p-6" style={{ background: "var(--bg-tint)" }}>
              <span className="icon-chip chip-violet"><Icon name="mail" size={22} /></span>
              <p className="mt-5" style={{ fontWeight: 750, fontSize: "1.15rem", letterSpacing: "-0.02em" }}>Still need help?</p>
              <p className="small body mt-1 mb-5">
                Email us your device model, Android version and app version. We read every message.
              </p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn btn-dark btn-chip btn-sm">
                <span>{SUPPORT_EMAIL}</span>
                <span className="chip"><Icon name="arrow-up-right" size={15} /></span>
              </a>
            </div>
          </div>
          <FaqList items={faqItems} openFirst />
        </div>
      </section>
    </>
  );
}
