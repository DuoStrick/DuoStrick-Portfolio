/**
 * Small presentational building blocks shared across pages.
 * Server-safe: no hooks, no browser APIs.
 */
import Link from "next/link";
import type { ReactNode } from "react";

/* ── Icons (24px stroke set) ─────────────────────────────────── */
type IconName =
  | "arrow-right" | "arrow-up-right" | "plus" | "gamepad" | "play" | "file"
  | "receipt" | "puzzle" | "wifi-off" | "shield" | "sparkle" | "heart"
  | "mail" | "check" | "book" | "help" | "clock" | "star";

const PATHS: Record<IconName, ReactNode> = {
  "arrow-right":    <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  "arrow-up-right": <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  plus:             <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  gamepad:          <><path d="M6 11h4M8 9v4" /><circle cx="15.5" cy="10.5" r=".9" fill="currentColor" /><circle cx="17.5" cy="13" r=".9" fill="currentColor" /><path d="M7.5 5h9a5 5 0 0 1 4.9 6l-1 5a2.6 2.6 0 0 1-4.6 1.1L14.6 16H9.4l-1.2 1.1A2.6 2.6 0 0 1 3.6 16l-1-5A5 5 0 0 1 7.5 5Z" /></>,
  play:             <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m10 9 5 3-5 3Z" fill="currentColor" /></>,
  file:             <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></>,
  receipt:          <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  puzzle:           <><path d="M9 4h3a2 2 0 1 1 4 0h0v4h0a2 2 0 1 1 0 4v4h-4a2 2 0 1 0-4 0H4v-4a2 2 0 1 0 0-4V4Z" /></>,
  "wifi-off":       <><path d="M2 2l20 20" /><path d="M8.5 16.4a5 5 0 0 1 7 0" /><path d="M5 12.9a10 10 0 0 1 5.2-2.7M19 12.9a10 10 0 0 0-2.4-1.7" /><path d="M2 8.8A15 15 0 0 1 6.3 6M22 8.8A15 15 0 0 0 10.7 5" /><circle cx="12" cy="20" r=".8" fill="currentColor" /></>,
  shield:           <><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6Z" /><path d="m9 12 2 2 4-4" /></>,
  sparkle:          <><path d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7Z" /></>,
  heart:            <><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" /></>,
  mail:             <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  check:            <><path d="m5 12 5 5 9-10" /></>,
  book:             <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19V5" /><path d="M9 7h6" /></>,
  help:             <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7" /><circle cx="12" cy="17" r=".8" fill="currentColor" /></>,
  clock:            <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  star:             <><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" /></>,
};

export function Icon({ name, size = 20, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
export type { IconName };

/* ── Section heading: eyebrow, two-tone title, optional lead ─── */
export function SectionHead({
  eyebrow, title, accent, lead, align = "left", as: Tag = "h2", className = "",
}: {
  eyebrow?: string;
  title: string;
  /** Second line, set in the brand colour */
  accent?: string;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} ${className}`} style={{ maxWidth: center ? 760 : undefined }}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={Tag === "h1" ? "display-1" : "display-2"}>
        {title}
        {accent && (
          <>
            <br className="hidden sm:block" />{" "}
            <span className="accent">{accent}</span>
          </>
        )}
      </Tag>
      {lead && (
        <p className={`lead mt-5 ${center ? "mx-auto" : ""}`} style={{ maxWidth: 620 }}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ── Buttons ─────────────────────────────────────────────────── */
export function ButtonLink({
  href, children, variant = "dark", chip = true, size, external,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  chip?: boolean;
  size?: "sm";
  external?: boolean;
}) {
  const cls = `btn btn-${variant} ${chip ? "btn-chip" : ""} ${size === "sm" ? "btn-sm" : ""}`;
  const inner = (
    <>
      <span>{children}</span>
      {chip ? (
        <span className="chip"><Icon name={external ? "arrow-up-right" : "arrow-right"} size={16} /></span>
      ) : (
        <Icon name={external ? "arrow-up-right" : "arrow-right"} size={16} />
      )}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export function TextLink({ href, children, brand, external }: { href: string; children: ReactNode; brand?: boolean; external?: boolean }) {
  const cls = `text-link ${brand ? "brand" : ""}`;
  const icon = <Icon name={external ? "arrow-up-right" : "arrow-right"} size={16} />;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}{icon}</a>
  ) : (
    <Link href={href} className={cls}>{children}{icon}</Link>
  );
}

/* ── Breadcrumb ──────────────────────────────────────────────── */
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="small mb-8 flex flex-wrap items-center gap-2" style={{ color: "var(--muted)" }}>
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2 min-w-0">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Link href={item.href} style={{ color: "var(--muted)" }}>{item.label}</Link>
          ) : (
            <span className="line-clamp-1" style={{ color: "var(--fg)", fontWeight: 600 }} aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ── FAQ list (pair with faqSchema for FAQPage JSON-LD) ──────── */
export interface FaqEntry { q: string; a: string }

export function FaqList({ items, openFirst = false }: { items: FaqEntry[]; openFirst?: boolean }) {
  return (
    <div className="hairline">
      {items.map(({ q, a }, i) => (
        <details key={q} className="faq-item" open={openFirst && i === 0}>
          <summary>
            <span className="min-w-0">{q}</span>
            <span className="plus" aria-hidden="true"><Icon name="plus" size={16} /></span>
          </summary>
          <p className="answer">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: FaqEntry[], id: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
