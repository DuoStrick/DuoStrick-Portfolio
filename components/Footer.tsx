import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full mt-auto" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold mb-3" style={{ fontFamily: "var(--font-syne)", color: "var(--fg)", fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
              <Image src="/logo.png" alt="Duostrick Logo" width={26} height={26} className="rounded-md" />
              Duostrick
            </Link>
            <p className="text-sm" style={{ color: "var(--muted)", maxWidth: 260, lineHeight: 1.7 }}>
              Independent mobile studio crafting polished games and smart apps for Android.
            </p>
            <a
              href="https://play.google.com/store/apps/dev?id=8989641209983926608"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-medium rounded-full px-3 py-1.5"
              style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--body-text)" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2 2 0 0 0 2.85.1l.08-.07 10.15-10.17-2.96-2.97-10.12 10.1a2 2 0 0 0 0 3.01zm15.5-14.87-2.46-2.47-2.05 2.05 2.46 2.47 2.05-2.05zm1.3-1.3 1.07-1.08a2 2 0 0 0 0-2.84L18.5 1.13a2 2 0 0 0-2.83 0L14.6 2.2l5.38 5.39zM1.64 1.43A1 1 0 0 0 0 2.27v19.46a1 1 0 0 0 1.64.77l11.2-9.73-11.2-9.74-.01-.6z"/>
              </svg>
              Google Play Profile
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Navigate</p>
              <ul className="flex flex-col gap-2">
                {[["Apps","/#apps"],["Blog","/blog"],["About","/#about"],["Contact","/#contact"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-sm" style={{ color: "var(--body-text)" }}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Legal & Support</p>
              <ul className="flex flex-col gap-2">
                {[["Privacy Policy","/privacy-policy"],["Support","/support"],["Sitemap","/sitemap.xml"]].map(([l,h])=>(
                  <li key={h}><Link href={h} className="text-sm" style={{ color: "var(--body-text)" }}>{l}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8 pt-6 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
          <span>&copy; {year} Duostrick. All rights reserved.</span>
          <span>Built with ❤️ by Duostrick</span>
        </div>
      </div>
    </footer>
  );
}
