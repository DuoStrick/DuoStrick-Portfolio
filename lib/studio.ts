/**
 * Studio facts in one place — used by the layout schema, home page, footer
 * and /llms.txt so every surface (and every AI crawler) reads the same answer.
 */
import type { FaqEntry } from "../components/ui";

export const SITE_URL = "https://duostrick.vercel.app";
export const STUDIO_NAME = "DuoStrick";
export const TAGLINE = "Cute games & handy apps";
export const ABOUT =
  "Cute puzzle games and handy offline apps for Android. Relax your brain, play daily challenges and get more done.";
export const SUPPORT_EMAIL = "support@tradeslook.com";
export const PLAY_DEV_URL = "https://play.google.com/store/apps/dev?id=8989641209983926608";
export const FOUNDED = "2024";

export const HOME_FAQ: FaqEntry[] = [
  {
    q: "What is DuoStrick?",
    a: "DuoStrick is an independent Android studio, founded in 2024, that publishes cute puzzle games and handy offline apps on Google Play: Bunny Puzzle, 2048 Offline, Mediqora, AV Player, Docqora and ReceiptVault.",
  },
  {
    q: "Are DuoStrick apps free?",
    a: "Yes. Every DuoStrick app is free to download from Google Play. Bunny Puzzle, 2048 Offline and AV Player are supported by ads; Mediqora, Docqora and ReceiptVault have no ads. ReceiptVault offers optional in-app purchases.",
  },
  {
    q: "Do DuoStrick apps work offline?",
    a: "Yes. All six apps work without an internet connection. Mediqora and Docqora go further: they do not request the internet permission at all, so your media and documents cannot leave your phone.",
  },
  {
    q: "Which DuoStrick games are best for logic puzzle fans?",
    a: "Bunny Puzzle: Queens Logic has level after level of queens-style puzzles plus a daily challenge, and 2048 Offline: Merge Numbers is an infinite-grid take on 2048 where you can merge past 2048 to 4096, 8192 and beyond.",
  },
  {
    q: "How do I get help with a DuoStrick app?",
    a: "Check the Support & FAQ page, or email support@tradeslook.com with your device model, Android version and app version. We read every message.",
  },
];

/* How the studio builds — shown on the home page and /about */
export const PRINCIPLES = [
  { n: "01", title: "Offline first",        body: "If an app can work without a connection, it should. Puzzles, players and tools all run on the phone." },
  { n: "02", title: "Easy from the first tap", body: "Short tutorials, plain settings and hints that teach instead of just giving answers." },
  { n: "03", title: "Respect for your data", body: "Our tools keep your files on your phone — Mediqora and Docqora don't even request internet access." },
  { n: "04", title: "Built from feedback",  body: "We read every review and email, and the next update is shaped by what players actually ask for." },
];
