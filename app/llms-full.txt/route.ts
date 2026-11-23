/**
 * /llms-full.txt — the full text of every app page and guide in one markdown
 * file, for assistants that ingest a whole site at once (companion to /llms.txt).
 */
import { getAllApps } from "../../data/apps";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import { ABOUT, FOUNDED, HOME_FAQ, PLAY_DEV_URL, SITE_URL, SUPPORT_EMAIL, TAGLINE } from "../../lib/studio";

export const dynamic = "force-static";

export function GET() {
  const apps = getAllApps();
  const out: string[] = [
    "# DuoStrick — full site content",
    "",
    `> ${TAGLINE}. ${ABOUT}`,
    "",
    `DuoStrick is an independent Android studio founded in ${FOUNDED}. Website: ${SITE_URL}. Google Play developer page: ${PLAY_DEV_URL}. Support: ${SUPPORT_EMAIL}.`,
    "",
    "## Studio FAQ",
    "",
    ...HOME_FAQ.flatMap(({ q, a }) => [`### ${q}`, "", a, ""]),
  ];

  for (const app of apps) {
    out.push(
      `## ${app.title}`,
      "",
      `URL: ${SITE_URL}/apps/${app.id}`,
      `Google Play: ${app.playStoreUrl}`,
      `Developer: DuoStrick · Category: ${app.applicationSubCategory} · Platform: ${app.operatingSystem}`,
      `Price: ${app.inAppPurchases ? "free, with optional in-app purchases" : "free"} · Ads: ${app.containsAds ? "contains ads" : "no ads"} · Works offline: yes · Last updated: ${app.storeUpdated}`,
      "",
      app.schemaDescription,
      "",
      ...app.intro.flatMap((p) => [p, ""]),
      "### Features",
      "",
      ...app.features.flatMap((f) => [
        `#### ${f.title}`,
        "",
        f.body,
        ...(f.bullets ? ["", ...f.bullets.map((b) => `- ${b}`)] : []),
        "",
      ]),
      "### FAQ",
      "",
      ...app.faq.flatMap(({ q, a }) => [`#### ${q}`, "", a, ""]),
    );
  }

  for (const meta of getAllPosts()) {
    const post = getPostBySlug(meta.slug);
    if (!post) continue;
    out.push(
      `## ${post.title}`,
      "",
      `URL: ${SITE_URL}/blog/${post.slug} · Published: ${post.date} · Updated: ${post.updated}`,
      "",
      ...(post.summary.length > 0 ? ["Key takeaways:", ...post.summary.map((s) => `- ${s}`), ""] : []),
      /* Nest the post's headings one level under its own title */
      post.content.trim().replace(/^### /gm, "#### ").replace(/^## /gm, "### "),
      "",
    );
  }

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
