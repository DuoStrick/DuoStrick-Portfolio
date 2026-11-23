import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ABOUT, FOUNDED, PLAY_DEV_URL, SITE_URL, SUPPORT_EMAIL, TAGLINE } from "../lib/studio";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duostrick.vercel.app"),
  applicationName: "DuoStrick",
  title: {
    default: "DuoStrick — Indie Android Game Studio",
    template: "%s | DuoStrick",
  },
  description:
    "Indie Android studio building free, offline-first games and apps — Bunny Puzzle, 2048 Offline, Docqora, Mediqora and more. Free on Google Play.",
  keywords: [
    "duostrick",
    "indie game studio",
    "android game developer",
    "mobile game studio",
    "indie mobile studio",
    "bunny puzzle",
    "queens logic puzzle android",
    "docqora pdf tools",
    "offline pdf tools android",
    "receiptvault warranty tracker",
    "warranty tracker app android",
    "2048 puzzle game offline",
    "2048 infinite grid",
    "2048 puzzle game android",
    "tile merging game",
    "number puzzle android",
    "puzzle game android",
    "brain training game",
    "av player android",
    "video player android",
    "mp3 player android",
    "all format video player",
    "4k video player android",
    "flac music player android",
    "offline media player android",
    "mediqora",
    "mediqora android app",
    "mediqora video music player",
    "offline video player android",
    "local media library android",
    "automatic series detection player",
    "free android games",
    "offline android games",
    "android puzzle game",
    "free android apps",
    "google play games",
    "mobile game download",
    "offline first android apps",
  ],
  authors: [{ name: "DuoStrick", url: "https://duostrick.vercel.app" }],
  creator: "DuoStrick",
  publisher: "DuoStrick",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "https://duostrick.vercel.app" },
  /* Favicon and apple touch icon come from app/icon.png and app/apple-icon.png */
  openGraph: {
    title: "DuoStrick — Indie Android Game Studio",
    description:
      "Free Android games and apps from an indie studio — Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora (offline PDF tools) and ReceiptVault.",
    url: "https://duostrick.vercel.app",
    siteName: "DuoStrick",
    /* No hardcoded images — Next.js auto-uses app/opengraph-image.tsx */
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoStrick — Indie Android Game Studio",
    description:
      "Free puzzle games and smart Android apps — Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora & ReceiptVault.",
    /* No hardcoded images — auto-detected from opengraph-image.tsx */
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ── Viewport — themeColor must be here, NOT in metadata (Next.js 14+) ── */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0d0c14" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ── Global structured data ─────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://duostrick.vercel.app/#organization",
  name: "DuoStrick",
  alternateName: ["DuoStrick Studio", "DuoStrick Game Studio"],
  url: "https://duostrick.vercel.app",
  logo: {
    "@type": "ImageObject",
    url: "https://duostrick.vercel.app/duostrick-logo.png",
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/opengraph-image`,
  description: ABOUT,
  slogan: TAGLINE,
  email: SUPPORT_EMAIL,
  foundingDate: FOUNDED,
  sameAs: [PLAY_DEV_URL],
  /* Entity facts for answer engines: what the studio makes and knows about */
  knowsAbout: [
    "Android app development", "Mobile puzzle games", "Logic puzzles", "Queens puzzle",
    "2048", "Offline video players", "Offline PDF tools", "Warranty tracking",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    availableLanguage: ["English"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://duostrick.vercel.app/#website",
  url: "https://duostrick.vercel.app",
  name: "DuoStrick",
  alternateName: "DuoStrick Studio",
  description:
    "Indie Android mobile game and app studio — Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault.",
  inLanguage: "en-US",
  publisher: { "@id": "https://duostrick.vercel.app/#organization" },
};

/** Inline script injected before React hydrates — prevents flash of wrong theme */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: set theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Reveal sections start hidden and are shown by JS — keep them visible without it */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <link rel="alternate" type="application/rss+xml" title="DuoStrick Blog" href={`${SITE_URL}/feed.xml`} />
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
