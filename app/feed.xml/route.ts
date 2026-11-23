/**
 * /feed.xml — RSS 2.0 feed of blog posts, for feed readers and crawlers that
 * discover new content through feeds. Linked from every page's <head>.
 */
import { getAllPosts } from "../../lib/posts";
import { ABOUT, SITE_URL } from "../../lib/studio";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const rfc822 = (date: string) => new Date(`${date}T00:00:00Z`).toUTCString();

export function GET() {
  const posts = getAllPosts();
  const latest = posts.reduce((max, p) => (p.updated > max ? p.updated : max), posts[0]?.updated ?? "");

  const items = posts.map((p) => {
    const url = `${SITE_URL}/blog/${p.slug}`;
    return [
      "    <item>",
      `      <title>${esc(p.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${rfc822(p.date)}</pubDate>`,
      `      <category>${esc(p.category)}</category>`,
      `      <description>${esc(p.description)}</description>`,
      "    </item>",
    ].join("\n");
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>DuoStrick Blog</title>",
    `    <link>${SITE_URL}/blog</link>`,
    `    <description>${esc(ABOUT)}</description>`,
    "    <language>en-us</language>",
    ...(latest ? [`    <lastBuildDate>${rfc822(latest)}</lastBuildDate>`] : []),
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
