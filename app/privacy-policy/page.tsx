import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Duostrick" },
  description:
    "Privacy policy for Duostrick apps — 2048 Puzzle Game Offline and AV Player: Video & MP3 Player. Learn how we handle your data, advertising, and children's privacy.",
  alternates: { canonical: "https://duostrick.vercel.app/privacy-policy" },
  /* Legal pages should not appear in search results */
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  const updated = "May 26, 2026";

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-14 md:py-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-10" aria-label="Breadcrumb" style={{ color: "var(--muted)" }}>
        <Link href="/" style={{ color: "var(--muted)" }}>Home</Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: "var(--fg)", fontWeight: 500 }} aria-current="page">Privacy Policy</span>
      </nav>

      <h1
        className="font-black mb-2"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "var(--fg)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        Privacy Policy
      </h1>
      <div className="accent-bar-blue mb-6" />
      <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>Last updated: {updated}</p>

      <div className="prose" style={{ maxWidth: "none" }}>
        <p>
          Duostrick (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy
          Policy explains how we collect, use, and protect your information when you use our mobile games,
          applications, and website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect non-personal information through analytics and advertising partners (such as Google AdSense /
          AdMob) to improve our services. This data does not personally identify you. We do not collect names, email
          addresses, or account credentials within the apps themselves.
        </p>

        <h2>2. Advertising &amp; Analytics</h2>
        <p>
          Our website uses Google AdSense (publisher ID: pub-9375048870304177). These services may use cookies or
          similar technologies to serve advertisements based on your past visits to our website or other websites.
          You can opt out of personalised advertising via{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s Ads Settings
          </a>.
        </p>

        <h2>3. Third-Party Services</h2>
        <p>
          Our apps are distributed via Google Play. By using the apps, you also agree to{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s Privacy Policy
          </a>. We do not share your personal data with any other third parties.
        </p>

        <h2>4. Children&rsquo;s Privacy</h2>
        <p>
          Our services do not knowingly collect personal information from children under 13. If you are a parent or
          guardian and believe your child has provided us with personal information, please contact us at{" "}
          <a href="mailto:support@tradeslook.com">support@tradeslook.com</a> so we can delete it.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We do not store personal user data on our own servers. Any usage data collected by third-party analytics
          services is subject to their own retention policies.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold
          about you. To make such a request, please email{" "}
          <a href="mailto:support@tradeslook.com">support@tradeslook.com</a>.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on this page with a
          revised &ldquo;last updated&rdquo; date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, please contact us at{" "}
          <a href="mailto:support@tradeslook.com">support@tradeslook.com</a>.
        </p>
      </div>

      <div className="mt-12 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
        <Link
          href="/"
          className="text-sm font-semibold"
          style={{ color: "var(--badge-info-text)" }}
        >
          ← Back to Duostrick
        </Link>
      </div>
    </div>
  );
}
