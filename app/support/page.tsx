import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Support & FAQ — AV Player & 2048 Game Help | Duostrick" },
  description:
    "Support and FAQ for Duostrick apps. Get help with AV Player (video formats, gesture controls, PiP) and 2048 Puzzle Game Offline (strategies, leaderboard, game modes).",
  keywords: [
    "duostrick support",
    "av player help",
    "av player faq",
    "2048 game support",
    "2048 puzzle help",
    "android app support",
    "av player not working",
    "2048 game faq",
  ],
  alternates: { canonical: "https://duostrick.vercel.app/support" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Support & FAQ — AV Player & 2048 Game | Duostrick",
    description:
      "Get help with AV Player and 2048 Puzzle Game Offline. Answers to common questions about features, settings, and troubleshooting.",
    url: "https://duostrick.vercel.app/support",
    siteName: "Duostrick Game Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Duostrick Support & FAQ",
    description: "Help and answers for AV Player and 2048 Puzzle Game Offline.",
  },
};

const faqItems = [
  {
    q: "How do I restore my purchases in the app?",
    a: "Make sure you are signed in to the same Google Play account used for the original purchase. Open the app, go to Settings → Restore Purchases. The app will verify your purchase automatically.",
  },
  {
    q: "How do gesture controls work in AV Player?",
    a: "Swipe up or down on the left half of the screen to adjust brightness. Swipe up or down on the right half to adjust volume. Swipe left or right anywhere on the screen to seek forward or backward. These gestures work in both portrait and landscape modes.",
  },
  {
    q: "Why won't AV Player play my video file?",
    a: "AV Player supports MP4, MKV, AVI, MOV, FLV, WMV, 3GP, M4V, WEBM, and TS video formats, and MP3, FLAC, WAV, AAC, OGG, and M4A audio formats. If your file doesn't play, try converting it to MP4 or MKV. Make sure the app has permission to access your storage in your Android settings.",
  },
  {
    q: "How do I reach a high tile in 2048 Puzzle Game Offline?",
    a: "Use the snake pattern strategy: keep your highest tile in one corner and build descending values in rows that snake back and forth. Swipe mostly left and down (or right and up — pick a corner and commit). Merge small tiles before they pile up, and never move your highest tile out of its corner.",
  },
  {
    q: "Does 2048 Puzzle Game Offline require an internet connection?",
    a: "No. 2048 Puzzle Game Offline works completely without an internet connection. You can play offline anywhere. The global leaderboard syncs when you next connect to Wi-Fi or mobile data.",
  },
  {
    q: "How do I enable Picture-in-Picture (PiP) in AV Player?",
    a: "While a video is playing, pull down from the top of the video to instantly enter PiP mode, or press your device's Home button. The video will shrink to a floating window you can position anywhere on your screen. Android 8.0 (Oreo) or higher is required for PiP.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="w-full max-w-3xl mx-auto px-6 py-14 md:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-10" aria-label="Breadcrumb" style={{ color: "var(--muted)" }}>
          <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: "var(--fg)", fontWeight: 500 }} aria-current="page">Support</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <span className="badge badge-info mb-4">Help Center</span>
          <h1
            className="font-black mb-2"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Support &amp; FAQ
          </h1>
          <div className="accent-bar-blue mb-4" />
          <p style={{ color: "var(--body-text)", fontSize: "1.05rem" }}>
            Answers to common questions about AV Player and 2048 Puzzle Game Offline.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4" itemScope itemType="https://schema.org/FAQPage">
          {faqItems.map(({ q, a }, i) => (
            <details
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)", background: "var(--card)" }}
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4 font-semibold text-sm"
                style={{
                  color: "var(--fg)",
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.95rem",
                  listStyle: "none",
                  userSelect: "none",
                }}
                itemProp="name"
              >
                {q}
                <svg
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: "var(--muted)", flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div
                className="px-6 pb-5 text-sm"
                style={{ color: "var(--body-text)", lineHeight: 1.75, borderTop: "1px solid var(--border)" }}
                itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
              >
                <p className="mt-4" itemProp="text">{a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Still need help? */}
        <div
          className="mt-12 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{ background: "var(--stat-bg)", border: "1px solid var(--stat-border)" }}
        >
          <div className="absolute pointer-events-none" style={{ top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(26,111,168,0.25) 0%, transparent 70%)", filter: "blur(30px)" }} />
          <h2
            className="font-bold mb-2"
            style={{ fontFamily: "var(--font-syne)", fontSize: "1.25rem", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            Still need help?
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--body-text)" }}>
            We respond to every message, usually within 24 hours.
          </p>
          <a
            href="mailto:support@tradeslook.com"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
          >
            Email Support →
          </a>
        </div>

        <div className="mt-10" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          <Link href="/" className="text-sm font-semibold" style={{ color: "var(--badge-info-text)" }}>
            ← Back to Duostrick
          </Link>
        </div>
      </div>
    </>
  );
}
