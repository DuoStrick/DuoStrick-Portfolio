"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Apps",    href: "/#apps"    },
  { label: "Blog",    href: "/blog"     },
  { label: "About",   href: "/#about"   },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed w-full top-0 z-50"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold shrink-0"
          style={{
            fontFamily: "var(--font-syne)",
            color: "var(--fg)",
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
          }}
        >
          <Image src="/logo.png" alt="Duostrick Logo" width={30} height={30} className="rounded-lg" />
          Duostrick
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: "var(--body-text)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://play.google.com/store/apps/dev?id=8989641209983926608"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold rounded-full px-4 py-2"
            style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
          >
            Get on Google Play
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg flex flex-col justify-center"
            style={{ color: "var(--fg)" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="block w-5 h-0.5 mb-1" style={{ background: "var(--fg)", transition: "transform 0.2s", transform: open ? "rotate(45deg) translate(3px,5px)" : "none" }} />
            <span className="block w-5 h-0.5 mb-1" style={{ background: "var(--fg)", opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5"  style={{ background: "var(--fg)", transition: "transform 0.2s", transform: open ? "rotate(-45deg) translate(3px,-5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden px-6 pb-5 pt-3 flex flex-col gap-3"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-1"
              style={{ color: "var(--body-text)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://play.google.com/store/apps/dev?id=8989641209983926608"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold rounded-full px-4 py-2.5 text-center mt-1"
            style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
          >
            Get on Google Play
          </a>
        </nav>
      )}
    </header>
  );
}
