import type { MetadataRoute } from "next";

/**
 * Web app manifest — served at /manifest.webmanifest and linked automatically.
 * Gives mobile crawlers and "add to home screen" a proper name, icons and theme.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DuoStrick — Indie Android Game Studio",
    short_name: "DuoStrick",
    description:
      "Free Android games and apps from indie studio DuoStrick — Bunny Puzzle, 2048 Offline, AV Player, Mediqora, Docqora and ReceiptVault.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#3c22a9",
    theme_color: "#3c22a9",
    lang: "en-US",
    dir: "ltr",
    categories: ["games", "entertainment", "utilities"],
    icons: [
      { src: "/duostrick-logo-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/duostrick-logo.png",     sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
