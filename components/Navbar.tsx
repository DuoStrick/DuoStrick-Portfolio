"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./ui";

const NAV_LINKS = [
  { label: "Apps",    href: "/apps"    },
  { label: "Blog",    href: "/blog"    },
  { label: "About",   href: "/about"   },
  { label: "Support", href: "/support" },
];

const PLAY_DEV_URL = "https://play.google.com/store/apps/dev?id=8989641209983926608";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ background: "var(--nav-bg)", backdropFilter: "saturate(180%) blur(14px)", borderBottom: "1px solid var(--line)" }}
    >
      <div className="wrap h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="DuoStrick home">
          <Image src="/duostrick-logo.png" alt="" width={36} height={36} className="rounded-[10px]" priority />
          <span style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.04em", color: "var(--fg)" }}>DuoStrick</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[0.95rem] font-semibold"
              style={{ color: isActive(l.href) ? "var(--brand)" : "var(--text)" }}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-chip btn-sm">
            <span>Get the apps</span>
            <span className="chip"><Icon name="arrow-up-right" size={15} /></span>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[5px]"
            style={{ background: "var(--btn-light-bg)" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="block w-4 h-[2px] rounded" style={{ background: "var(--fg)", transition: "transform .2s", transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }} />
            <span className="block w-4 h-[2px] rounded" style={{ background: "var(--fg)", transition: "transform .2s", transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden wrap pb-6 pt-2 flex flex-col"
          style={{ borderTop: "1px solid var(--line)", background: "var(--bg)" }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between py-4 text-lg font-bold"
              style={{ color: "var(--fg)", borderBottom: "1px solid var(--line)", letterSpacing: "-0.02em" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
              <Icon name="arrow-right" size={18} />
            </Link>
          ))}
          <a href={PLAY_DEV_URL} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-chip mt-6 self-start">
            <span>Get the apps on Google Play</span>
            <span className="chip"><Icon name="arrow-up-right" size={16} /></span>
          </a>
        </nav>
      )}
    </header>
  );
}
