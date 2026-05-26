import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duostrick.vercel.app"),
  applicationName: "Duostrick Game Studio",
  title: {
    default: "Duostrick — Indie Android Game Studio",
    template: "%s | Duostrick",
  },
  description:
    "Duostrick is an indie Android game studio. Build free mobile puzzle games and smart apps — download 2048 Puzzle Game Offline and AV Player: Video & MP3 Player on Google Play.",
  keywords: [
    "duostrick",
    "indie game studio",
    "android game developer",
    "mobile game studio",
    "indie mobile studio",
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
    "free android games",
    "offline android games",
    "android puzzle game",
    "free android apps",
    "google play games",
    "mobile game download",
    "android app 2024",
  ],
  authors: [{ name: "Duostrick Studio", url: "https://duostrick.vercel.app" }],
  creator: "Duostrick Studio",
  publisher: "Duostrick Studio",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "https://duostrick.vercel.app" },
  /* Icons — logo.png as favicon + apple touch icon */
  icons: {
    icon:     [{ url: "/logo.png", type: "image/png" }],
    apple:    [{ url: "/logo.png", sizes: "180x180" }],
    shortcut: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: "Duostrick — Indie Android Game Studio",
    description:
      "Free mobile puzzle games and smart Android apps from an indie studio — 2048 Puzzle Game Offline (infinite grid) and AV Player (all-format 4K media player).",
    url: "https://duostrick.vercel.app",
    siteName: "Duostrick Game Studio",
    /* No hardcoded images — Next.js auto-uses app/opengraph-image.tsx */
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duostrick — Indie Android Game Studio",
    description:
      "Free mobile puzzle games and smart Android apps — 2048 Puzzle Game Offline & AV Player on Google Play.",
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
    { media: "(prefers-color-scheme: dark)",  color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ── Global structured data ─────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://duostrick.vercel.app/#organization",
  name: "Duostrick Studio",
  alternateName: "Duostrick Game Studio",
  url: "https://duostrick.vercel.app",
  logo: {
    "@type": "ImageObject",
    url: "https://duostrick.vercel.app/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://duostrick.vercel.app/opengraph-image",
  description:
    "Independent mobile game and app studio building fun Android puzzle games and smart applications.",
  email: "support@tradeslook.com",
  foundingDate: "2024",
  sameAs: [
    "https://play.google.com/store/apps/dev?id=8989641209983926608",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://duostrick.vercel.app/#website",
  url: "https://duostrick.vercel.app",
  name: "Duostrick Game Studio",
  description:
    "Indie Android mobile game and app studio — 2048 Puzzle Game Offline and AV Player.",
  inLanguage: "en-US",
  publisher: { "@id": "https://duostrick.vercel.app/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://duostrick.vercel.app/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

/** Inline script injected before React hydrates — prevents flash of wrong theme */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: set theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
        <main className="flex-1 w-full flex flex-col items-center mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
