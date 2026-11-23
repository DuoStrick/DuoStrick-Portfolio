# DuoStrick website

Marketing site and blog for the DuoStrick Android apps — https://duostrick.vercel.app

Next.js 16 (App Router) · React 19 · Tailwind 4 · Markdown blog (gray-matter + marked).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # also writes public/sitemap*.xml and robots.txt (next-sitemap, postbuild)
npm run lint
```

## Where things live

- `data/apps.ts` — one `AppEntry` per Google Play app. That entry drives the home grid,
  `/apps`, the `/apps/[slug]` landing page, its JSON-LD and OG card, the footer and the
  blog CTA. Copy should match the app's Play listing, including whether it contains ads.
  Store icon and screenshots go in `public/<id>-icon.png` and `public/apps/<id>/`.
- `content/posts/<slug>.md` — blog posts. `category` must be one of Game Dev,
  Tips & Tricks, Studio News or Updates. Tag a post with one of an app's `postTags`
  to attach that app's CTA.
- Still written by hand: the app names in the site description (`app/layout.tsx`),
  `app/manifest.ts`, `app/blog/page.tsx`, `app/support/page.tsx` and the privacy policy.
