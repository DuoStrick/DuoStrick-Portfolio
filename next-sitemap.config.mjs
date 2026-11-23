import fs from "fs";
import path from "path";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://duostrick.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      /* Answer engines and AI search: named explicitly so the site can be
         crawled and cited. /llms.txt summarises the site for them. */
      ...[
        "GPTBot", "OAI-SearchBot", "ChatGPT-User",
        "ClaudeBot", "Claude-SearchBot", "Claude-User",
        "PerplexityBot", "Perplexity-User",
        "Google-Extended", "Applebot-Extended", "bingbot", "CCBot",
      ].map((userAgent) => ({ userAgent, allow: "/" })),
    ],
  },

  /* Only blog posts carry a real lastmod (their frontmatter date). Stamping every
     static page with the build date tells crawlers nothing and gets lastmod ignored. */
  autoLastmod: false,

  /* Default for static pages not listed in additionalPaths */
  changefreq: "weekly",
  priority: 0.7,

  /* Exclude pages with no SEO value (legal, errors) and non-page routes
     Next emits into the route manifest (icons, OG image endpoints, manifest). */
  exclude: [
    "/privacy-policy",
    "/404",
    "/icon.png",
    "/apple-icon.png",
    "/llms.txt",
    "/llms-full.txt",
    "/manifest.webmanifest",
    "/opengraph-image",
    "/*/opengraph-image",
    "/*/*/opengraph-image",
  ],

  /* Override priorities per route type */
  transform: async (config, path) => {
    if (path === "/")        return { loc: path, changefreq: "weekly",   priority: 1.0  };
    if (path === "/blog")    return { loc: path, changefreq: "weekly",   priority: 0.9  };
    if (path === "/apps")    return { loc: path, changefreq: "weekly",   priority: 0.9  };
    if (path.startsWith("/apps/"))
                             return { loc: path, changefreq: "weekly",   priority: 0.85 };
    if (path === "/support") return { loc: path, changefreq: "monthly",  priority: 0.65 };
    return {
      loc:        path,
      changefreq: config.changefreq,
      priority:   config.priority,
    };
  },

  additionalPaths: async () => {
    const postsDir = path.join(process.cwd(), "content/posts");
    if (!fs.existsSync(postsDir)) return [];

    return fs
      .readdirSync(postsDir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const slug = f.replace(/\.md$/, "");
        const raw  = fs.readFileSync(path.join(postsDir, f), "utf8");

        // Extract date for lastmod
        const dateMatch  = raw.match(/^updated:\s*["']?(\d{4}-\d{2}-\d{2})/m)
                        ?? raw.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m);
        const lastmod    = dateMatch ? dateMatch[1] : new Date().toISOString().slice(0, 10);

        // Featured posts get slightly higher priority
        const isFeatured = /^featured:\s*true/m.test(raw);

        return {
          loc:        `/blog/${slug}`,
          lastmod,
          changefreq: "monthly",
          priority:   isFeatured ? 0.85 : 0.8,
        };
      });
  },
};

export default config;
