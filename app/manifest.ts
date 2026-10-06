import type { MetadataRoute } from "next";

/**
 * Web app manifest — served at /manifest.webmanifest and linked automatically.
 * Gives mobile crawlers and "add to home screen" a proper name, icons and theme.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Duostrick — Indie Android Game Studio",
    short_name: "Duostrick",
    description:
      "Free Android games and apps from indie studio Duostrick — 2048 Puzzle Offline, AV Player and Mediqora.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "en-US",
    dir: "ltr",
    categories: ["games", "entertainment", "utilities"],
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
    ],
  };
}
