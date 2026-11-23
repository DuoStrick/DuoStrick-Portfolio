"use client";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

/* The anti-FOUC script in app/layout.tsx sets data-theme before hydration, so the
   <html> attribute is the source of truth — subscribe to it rather than copying it into state. */
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
const getServerTheme = (): Theme | null => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch {}
    document.documentElement.setAttribute("data-theme", next);
  }

  // Render placeholder (same size) on the server and during hydration to avoid layout shift
  if (theme === null) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "var(--btn-light-bg)" }}
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={theme === "light" ? "Dark mode" : "Light mode"}
      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
      style={{ background: "var(--btn-light-bg)", color: "var(--fg)", cursor: "pointer" }}
    >
      {theme === "light" ? (
        /* Moon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        /* Sun */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
