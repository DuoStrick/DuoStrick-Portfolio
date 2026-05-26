import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 overflow-hidden"
      style={{ minHeight: "88vh", background: "var(--hero-bg)" }}
    >
      {/* Decorative blobs — floating */}
      <div className="blob-float-1 absolute pointer-events-none" style={{ top: "8%", right: "6%", width: 440, height: 440, background: `radial-gradient(circle, rgba(26,111,168,0.14) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(50px)" }} />
      <div className="blob-float-2 absolute pointer-events-none" style={{ bottom: "10%", left: "4%", width: 380, height: 380, background: `radial-gradient(circle, rgba(26,122,74,0.12) 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(50px)" }} />
      {/* Center ambient blob */}
      <div className="absolute pointer-events-none" style={{ top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 560, height: 560, background: `radial-gradient(circle, rgba(26,111,168,0.05) 0%, rgba(26,122,74,0.04) 50%, transparent 70%)`, borderRadius: "50%", filter: "blur(60px)" }} />

      {/* Studio badge */}
      <div
        className="hero-anim hero-delay-0 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-semibold"
        style={{ background: "var(--badge-info-bg)", color: "var(--badge-info-text)", border: "1px solid var(--badge-info-bg)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--badge-info-text)", display: "inline-block" }} />
        Independent Mobile Studio
      </div>

      {/* Logo — scale-in entrance */}
      <div className="hero-anim-scale hero-delay-1 mb-8">
        <Image
          src="/logo.png"
          alt="Duostrick Studio Logo"
          width={88} height={88}
          className="mx-auto"
          style={{ borderRadius: 20, border: "1px solid rgba(26,111,168,0.25)", boxShadow: "0 8px 32px rgba(26,111,168,0.18), 0 0 0 6px rgba(26,111,168,0.07)" }}
          priority
        />
      </div>

      {/* H1 — shimmer gradient on keywords */}
      <h1
        className="hero-anim hero-delay-2 font-black mb-6 max-w-4xl"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2.6rem, 7vw, 5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "var(--fg)",
        }}
      >
        Building{" "}
        <span className="text-gradient-anim">fun</span>{" "}
        mobile games<br className="hidden sm:block" /> and{" "}
        <span className="text-gradient-anim">smart</span> apps.
      </h1>

      {/* Subtitle */}
      <p className="hero-anim hero-delay-3 max-w-2xl mb-10 text-lg" style={{ color: "var(--subtle)", lineHeight: 1.75 }}>
        Duostrick is an indie studio crafting polished puzzle games and smart
        Android apps — designed for everyone.
      </p>

      {/* CTAs */}
      <div className="hero-anim hero-delay-4 flex flex-col sm:flex-row gap-4">
        <Link href="/#apps" className="btn-glow px-7 py-3.5 rounded-full font-semibold text-sm" style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}>
          Explore Apps
        </Link>
        <Link href="/blog" className="px-7 py-3.5 rounded-full font-semibold text-sm" style={{ background: "var(--btn-outline-bg)", color: "var(--btn-outline-text)", border: "1.5px solid var(--btn-outline-border)" }}>
          Read our Blog
        </Link>
      </div>

      {/* Scroll indicator — bounce */}
      <div className="scroll-bounce absolute bottom-8 left-1/2 flex flex-col items-center gap-1" style={{ color: "var(--muted)" }}>
        <span className="text-xs">Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6" y="4" width="2" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
