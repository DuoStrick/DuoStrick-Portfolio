const fs   = require("fs");
const path = require("path");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://duostrick.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      "https://duostrick.vercel.app/sitemap.xml",
    ],
  },

  /* Default for static pages not listed in additionalPaths */
  changefreq: "weekly",
  priority: 0.7,

  /* Exclude pages with no SEO value (legal, errors) */
  exclude: ["/privacy-policy", "/404"],

  /* Override priorities per route type */
  transform: async (config, path) => {
    const today = new Date().toISOString().slice(0, 10);
    if (path === "/")        return { loc: path, changefreq: "weekly",   priority: 1.0,  lastmod: today };
    if (path === "/blog")    return { loc: path, changefreq: "weekly",   priority: 0.9,  lastmod: today };
    if (path === "/support") return { loc: path, changefreq: "monthly",  priority: 0.65, lastmod: today };
    return {
      loc:        path,
      changefreq: config.changefreq,
      priority:   config.priority,
      lastmod:    today,
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
        const dateMatch  = raw.match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m);
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
