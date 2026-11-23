/**
 * /llms.txt — a plain-markdown map of the site for AI assistants and answer
 * engines (https://llmstxt.org). Built from the same data as the pages, so the
 * facts an assistant quotes match what a visitor reads.
 */
import { getAllApps } from "../../data/apps";
import { getAllPosts } from "../../lib/posts";
import { ABOUT, FOUNDED, HOME_FAQ, PLAY_DEV_URL, SITE_URL, SUPPORT_EMAIL, TAGLINE } from "../../lib/studio";

export const dynamic = "force-static";

export function GET() {
  const apps = getAllApps();
  const posts = getAllPosts();

  const lines: string[] = [
    "# DuoStrick",
    "",
    `> ${TAGLINE}. ${ABOUT}`,
    "",
    `DuoStrick is an independent Android app and game studio, founded in ${FOUNDED}. It publishes ${apps.length} apps on Google Play (developer page: ${PLAY_DEV_URL}). Every app is free to download and works offline. Support: ${SUPPORT_EMAIL}.`,
    "",
    "## Apps",
    "",
    ...apps.map((app) => {
      const price = app.inAppPurchases ? "free with optional in-app purchases" : "free";
      const ads = app.containsAds ? "contains ads" : "no ads";
      return `- [${app.title}](${SITE_URL}/apps/${app.id}): ${app.tagline} (${app.genre}; ${price}; ${ads}; works offline; ${app.operatingSystem}; Google Play: ${app.playStoreUrl})`;
    }),
    "",
    "## Guides",
    "",
    ...posts.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`),
    "",
    "## Frequently asked questions",
    "",
    ...HOME_FAQ.flatMap(({ q, a }) => [`### ${q}`, "", a, ""]),
    "## Optional",
    "",
    `- [About DuoStrick](${SITE_URL}/about): who makes these apps, founding year and contact`,
    `- [All apps](${SITE_URL}/apps): every DuoStrick app with ads, price and offline status`,
    `- [Full site text](${SITE_URL}/llms-full.txt): every app page and guide in one markdown file`,
    `- [Support & FAQ](${SITE_URL}/support): answers for each app and how to contact the studio`,
    `- [Privacy policy](${SITE_URL}/privacy-policy): how each app handles data`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    `- [RSS feed](${SITE_URL}/feed.xml): new guides as they are published`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
