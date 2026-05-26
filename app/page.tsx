import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import SectionContainer from "../components/SectionContainer";
import AppCard from "../components/AppCard";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";
import appsData from "../data/apps.json";
import { getAllPosts } from "../lib/posts";

export const metadata: Metadata = {
  /* Use absolute to bypass layout template — avoids "Duostrick | Duostrick" */
  title: { absolute: "Duostrick — Indie Android Game Studio | Free Mobile Games & Apps" },
  description:
    "Duostrick is an indie Android game studio. Download 2048 Puzzle Game Offline (infinite grid, no internet needed) and AV Player (all-format 4K video & MP3 player) — both free on Google Play.",
  keywords: [
    "duostrick game studio",
    "indie android game studio",
    "free android games 2024",
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
    "offline android games no wifi",
    "puzzle game google play",
    "brain training game android",
    "mobile game developer india",
    "indie mobile studio",
    "free google play apps",
  ],
  alternates: { canonical: "https://duostrick.vercel.app" },
  openGraph: {
    title: "Duostrick — Indie Android Game Studio | Free Mobile Games & Apps",
    description:
      "Download 2048 Puzzle Game Offline (infinite grid) and AV Player (4K video & MP3) — both free on Google Play, no ads, no internet needed.",
    url: "https://duostrick.vercel.app",
    siteName: "Duostrick Game Studio",
    type: "website",
    locale: "en_US",
    /* OG image auto-served by app/opengraph-image.tsx */
  },
  twitter: {
    card: "summary_large_image",
    title: "Duostrick — Indie Android Game Studio",
    description:
      "Free Android puzzle games & media apps — 2048 Puzzle Game Offline (infinite grid) and AV Player (4K + MP3) on Google Play.",
  },
};

/* ── SoftwareApplication schemas ─────────────────────────────── */
const app2048Schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://duostrick.vercel.app/#app-2048",
  name: "2048 Puzzle Game Offline",
  alternateName: "2048 Infinite Grid",
  operatingSystem: "Android 5.0+",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Puzzle",
  description:
    "2048 Puzzle Game Offline is an infinite twist on the classic 2048 tile-merging number puzzle. The grid never ends — merge tiles, chase high scores on the global leaderboard, and play completely offline with no internet required.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://play.google.com/store/apps/details?id=com.duostrick.infinitygrid",
  downloadUrl: "https://play.google.com/store/apps/details?id=com.duostrick.infinitygrid",
  image: "https://play-lh.googleusercontent.com/nKHmZOSPR9xV-jWa-fAgQ3tyEUQngnczz6MDAIlHLOyulh8z_MrIkR_0neOGjT8hm_bZGLqTWE6T3oQkdo9n=w240-h480-rw",
  screenshot: "https://play-lh.googleusercontent.com/nKHmZOSPR9xV-jWa-fAgQ3tyEUQngnczz6MDAIlHLOyulh8z_MrIkR_0neOGjT8hm_bZGLqTWE6T3oQkdo9n=w240-h480-rw",
  publisher: { "@id": "https://duostrick.vercel.app/#organization" },
  author: { "@id": "https://duostrick.vercel.app/#organization" },
  inLanguage: "en",
  isAccessibleForFree: true,
  keywords: "2048, puzzle game, offline game, android, infinite grid, tile merging, number puzzle",
};

const avPlayerSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://duostrick.vercel.app/#app-avplayer",
  name: "AV Player: Video & MP3 Player",
  alternateName: "AV Player Android",
  operatingSystem: "Android 5.0+",
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Video Player",
  description:
    "AV Player is a free all-format video and offline MP3 music player for Android. Supports MP4, MKV, AVI, MOV, FLAC, WAV, and more. Features 4K hardware-accelerated playback, Picture-in-Picture, gesture controls, subtitle support, 8 premium themes, and zero ads.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://play.google.com/store/apps/details?id=com.duostrick.avplayer",
  downloadUrl: "https://play.google.com/store/apps/details?id=com.duostrick.avplayer",
  image: "https://duostrick.vercel.app/avplayer-icon.png",
  publisher: { "@id": "https://duostrick.vercel.app/#organization" },
  author: { "@id": "https://duostrick.vercel.app/#organization" },
  inLanguage: "en",
  isAccessibleForFree: true,
  keywords: "video player android, mp3 player, media player, mkv player, flac player, 4k player, offline music player",
};

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* App structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(app2048Schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(avPlayerSchema) }}
      />

      <div className="w-full flex flex-col items-center">
        <Hero />

        {/* ── Featured Apps ─── */}
        <SectionContainer id="apps" style={{ borderTop: "1px solid var(--border)" }}>
          <Reveal direction="up">
            <div className="mb-10 text-center md:text-left">
              <span className="badge badge-info mb-4">Google Play</span>
              <h2 className="font-bold" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                Featured Apps
              </h2>
              <div className="accent-bar-blue" />
              <p style={{ color: "var(--body-text)", maxWidth: 520 }}>
                Officially published titles on Google Play, built with care to provide the best experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {appsData.map((app, i) => (
              <Reveal key={app.id} delay={i * 120} direction="up">
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} direction="up">
            <div className="mt-8 text-center md:text-left">
              <a
                href="https://play.google.com/store/apps/dev?id=8989641209983926608"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2.5"
                style={{ background: "var(--surface)", color: "var(--body-text)", border: "1px solid var(--border)" }}
              >
                View all on Google Play →
              </a>
            </div>
          </Reveal>
        </SectionContainer>

        {/* ── Blog Preview ─── */}
        {latestPosts.length > 0 && (
          <SectionContainer style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <Reveal direction="up">
              <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
                <div>
                  <span className="badge badge-success mb-4">Studio Blog</span>
                  <h2 className="font-bold" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                    From the Blog
                  </h2>
                  <div className="accent-bar-green" />
                  <p className="mt-0" style={{ color: "var(--body-text)" }}>
                    Tips, updates, and stories from our studio.
                  </p>
                </div>
                <Link href="/blog" className="text-sm font-semibold shrink-0" style={{ color: "var(--badge-info-text)" }}>
                  View all posts →
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {latestPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 110} direction="up">
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </SectionContainer>
        )}

        {/* ── About ─── */}
        <SectionContainer id="about" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <span className="badge badge-default mb-4">Our Story</span>
                <h2 className="font-bold" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                  About the Studio
                </h2>
                <div className="accent-bar-gradient mb-5" />
                <p className="mb-4" style={{ color: "var(--body-text)", lineHeight: 1.8 }}>
                  Duostrick is a small, independent mobile developer studio passionate about building engaging puzzle games and polished mobile applications. We believe in high-quality design, smart mechanics, and intuitive user experiences.
                </p>
                <p className="mb-8" style={{ color: "var(--body-text)", lineHeight: 1.8 }}>
                  From the endless challenges of 2048 Puzzle Game Offline to our media player AV Player, our goal is to bring joy and seamless functionality to users worldwide across all their Android devices.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>

            {/* Stats card */}
            <Reveal direction="right" delay={80}>
              <div className="rounded-2xl p-8 flex flex-col gap-5 glow-blue" style={{ background: "var(--stat-bg)", border: "1px solid var(--stat-border)" }}>
                {[
                  { label: "Apps on Google Play", value: "2+",   icon: "🎮" },
                  { label: "Happy Users",          value: "500+", icon: "😊" },
                  { label: "Countries Reached",    value: "30+",  icon: "🌍" },
                  { label: "Year Founded",         value: "2024", icon: "🚀" },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: "var(--stat-icon-bg)", border: "1px solid var(--stat-border)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="font-bold" style={{ fontFamily: "var(--font-syne)", color: "var(--fg)", fontSize: "1.1rem" }}>{value}</div>
                      <div className="text-xs" style={{ color: "var(--muted)" }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </SectionContainer>

        {/* ── Contact ─── */}
        <SectionContainer id="contact" style={{ borderTop: "1px solid var(--border)" }}>
          <Reveal direction="scale">
            <div
              className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{ background: "var(--cta-bg)", color: "var(--cta-text)" }}
            >
              <div className="absolute pointer-events-none" style={{ top: "-60px", right: "-60px", width: 340, height: 340, background: "radial-gradient(circle, rgba(26,111,168,0.35) 0%, transparent 65%)", filter: "blur(35px)" }} />
              <div className="absolute pointer-events-none" style={{ bottom: "-60px", left: "-60px", width: 300, height: 300, background: "radial-gradient(circle, rgba(26,122,74,0.30) 0%, transparent 65%)", filter: "blur(35px)" }} />
              <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(26,111,168,0.08) 0%, transparent 70%)", filter: "blur(30px)" }} />
              <h2
                className="font-bold mb-4 relative"
                style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.75rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "var(--cta-text)" }}
              >
                Get in Touch
              </h2>
              <p
                className="mb-10 relative"
                style={{ color: "var(--cta-muted)", maxWidth: 460, margin: "0 auto 2.5rem" }}
              >
                Have a question, feedback, or need support? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                <a
                  href="mailto:support@tradeslook.com"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{ background: "#ffffff", color: "#0d0d0d" }}
                >
                  Email Us
                </a>
                <a
                  href="https://play.google.com/store/apps/dev?id=8989641209983926608"
                  target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{ background: "transparent", color: "var(--cta-text)", border: "1.5px solid var(--cta-border)" }}
                >
                  Google Play Profile
                </a>
              </div>
            </div>
          </Reveal>
        </SectionContainer>
      </div>
    </>
  );
}
