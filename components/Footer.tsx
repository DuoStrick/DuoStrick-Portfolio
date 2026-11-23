import Link from "next/link";
import Image from "next/image";
import { getAllApps } from "../data/apps";
import { ABOUT, PLAY_DEV_URL, SUPPORT_EMAIL } from "../lib/studio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer w-full overflow-hidden">
      <div className="wrap pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image src="/duostrick-logo.png" alt="" width={36} height={36} className="rounded-[10px]" />
              <span style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.04em", color: "#fff" }}>DuoStrick</span>
            </Link>
            <p style={{ maxWidth: 300, lineHeight: 1.7 }}>{ABOUT}</p>
            <p className="mt-5 flex items-center gap-2 small" style={{ color: "#8f8ca3" }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#5fd38d" }} />
              Independent studio · since 2024
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Our apps</p>
            <ul className="flex flex-col gap-3">
              {getAllApps().map((app) => (
                <li key={app.id}><Link href={`/apps/${app.id}`}>{app.shortName}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/apps">All apps</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About DuoStrick</Link></li>
              <li><Link href="/support">Support &amp; FAQ</Link></li>
              <li><a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer">Google Play ↗</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Say hello</p>
            <ul className="flex flex-col gap-3">
              <li><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
              <li style={{ color: "#8f8ca3" }}>We read every message.</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row justify-between gap-4 small"
          style={{ borderTop: "1px solid #24213a", color: "#8f8ca3" }}
        >
          <span>&copy; {year} DuoStrick. All rights reserved.</span>
          <span className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/support">Support</Link>
            {/* A plain <a>: the sitemap is a static file, not a route Link can prefetch */}
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/feed.xml">RSS</a>
            <a href="/llms.txt">llms.txt</a>
          </span>
        </div>
      </div>

      <div className="wrap" aria-hidden="true">
        <div className="wordmark -mb-[0.12em]">DuoStrick</div>
      </div>
    </footer>
  );
}
