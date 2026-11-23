import Link from "next/link";
import Image from "next/image";
import type { AppEntry } from "../lib/types";
import { Icon } from "./ui";

/* Soft tint behind each app's artwork, keyed by the entry's accent */
const TINT: Record<AppEntry["accent"], string> = {
  blue:  "var(--chip-blue-bg)",
  green: "var(--chip-green-bg)",
  amber: "var(--chip-amber-bg)",
};

/** Compact product tile — big icon on a tinted square, name, genre, arrow */
export function AppTile({ app, priority }: { app: AppEntry; priority?: boolean }) {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group block rounded-[24px] p-3 h-full"
      style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
    >
      <div
        className="rounded-[18px] aspect-square flex items-center justify-center overflow-hidden"
        style={{ background: TINT[app.accent] }}
      >
        <Image
          src={app.iconUrl}
          alt={`${app.title} icon`}
          width={200} height={200}
          className="w-[58%] h-auto rounded-[22%] transition-transform duration-300 group-hover:scale-105"
          style={{ boxShadow: "0 18px 40px rgba(23, 22, 28, 0.18)" }}
          priority={priority}
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-2 pt-4 pb-2">
        <div className="min-w-0">
          <h3 className="line-clamp-1" style={{ fontSize: "1.08rem", fontWeight: 750, letterSpacing: "-0.03em" }}>
            {app.shortName}
          </h3>
          <p className="small line-clamp-1" style={{ color: "var(--muted)" }}>{app.genre}</p>
        </div>
        <span className="arrow-dot"><Icon name="arrow-up-right" size={16} /></span>
      </div>
    </Link>
  );
}

/** Detailed row card — icon, title, description, facts and both CTAs */
export default function AppCard({ app }: { app: AppEntry }) {
  const href = `/apps/${app.id}`;
  return (
    <article className="card p-6 md:p-7 h-full flex flex-col">
      <div className="flex items-start gap-5">
        <Link href={href} className="shrink-0" aria-label={`${app.title} — details`}>
          <Image
            src={app.iconUrl}
            alt={`${app.title} icon`}
            width={72} height={72}
            className="rounded-[18px]"
            style={{ boxShadow: "0 10px 24px rgba(23, 22, 28, 0.14)" }}
          />
        </Link>
        <div className="min-w-0">
          <p className="eyebrow mb-1.5">{app.genre}</p>
          <h3 className="title-3">
            <Link href={href}>{app.title}</Link>
          </h3>
        </div>
      </div>

      <p className="body mt-5 mb-5 flex-1" style={{ lineHeight: 1.7 }}>{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="tag">Free</span>
        <span className={`tag ${app.containsAds ? "tag-amber" : "tag-green"}`}>{app.containsAds ? "Contains ads" : "No ads"}</span>
        {app.inAppPurchases && <span className="tag tag-blue">In-app purchases</span>}
        <span className="tag tag-brand">Works offline</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-chip btn-sm">
          <span>Get it on Google Play</span>
          <span className="chip"><Icon name="arrow-up-right" size={15} /></span>
        </a>
        <Link href={href} className="text-link">
          {`About ${app.shortName}`} <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
