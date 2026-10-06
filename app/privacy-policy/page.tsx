import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Duostrick" },
  description:
    "How Duostrick handles your data across 2048 Puzzle Offline, AV Player and Mediqora — which apps collect nothing, advertising, and children's privacy.",
  alternates: { canonical: "https://duostrick.vercel.app/privacy-policy" },
  /* Legal pages should not appear in search results */
  robots: { index: false, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://duostrick.vercel.app/privacy-policy/#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://duostrick.vercel.app" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://duostrick.vercel.app/privacy-policy" },
  ],
};

export default function PrivacyPolicy() {
  const updated = "October 7, 2026";

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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

        <p>
          Our apps do not all handle data the same way. Sections 1&ndash;3 describe our website and those
          apps that include advertising or analytics. Some apps collect nothing at all; where an app has
          its own terms below, those terms describe that app and take precedence over the general sections.
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

        <h2>4. App-Specific Terms &mdash; Mediqora: Video &amp; Music Player</h2>
        <p>
          <strong>Mediqora collects no data and transmits no data.</strong> The app does not request the
          Android internet permission, so it is technically unable to send anything anywhere. Nothing you
          watch, search for, or listen to can leave your device. Sections 1 and 2 above &mdash; analytics
          and advertising &mdash; do not apply to Mediqora in any form.
        </p>

        <h3>What Mediqora does</h3>
        <p>
          Mediqora finds the video and audio files already on your device, organises them into a library
          (including detecting TV series, seasons and episodes from filenames), remembers where you stopped
          in each file, and plays them. All of this happens on your device.
        </p>

        <h3>What Mediqora does not do</h3>
        <ul>
          <li>It does not send any data anywhere, and has no internet permission with which to do so.</li>
          <li>It does not collect or share personal information.</li>
          <li>It does not use advertising, analytics, crash reporting, or tracking of any kind.</li>
          <li>It does not use advertising identifiers or any other identifiers.</li>
          <li>It does not ask you to create an account or sign in.</li>
          <li>It does not request your microphone, camera, location, contacts, calendar, or phone.</li>
        </ul>

        <h3>Permissions and why we ask for them</h3>
        <ul>
          <li>
            <strong>Videos and audio (media access)</strong> &mdash; to find and index the media files on your
            device so they can appear in your library. On Android 12 and earlier this is granted through the
            older storage permission, used for the same purpose only.
          </li>
          <li>
            <strong>Notifications</strong> &mdash; to show playback controls in the notification shade while
            media plays in the background.
          </li>
          <li>
            <strong>Media playback service</strong> &mdash; to keep audio playing when Mediqora is not on screen.
          </li>
          <li>
            <strong>Keep device awake</strong> &mdash; to prevent the device from sleeping during playback.
          </li>
        </ul>
        <p>
          You can revoke these permissions at any time in Android Settings. Without media access the app
          cannot build a library, but it will not fail or ask you repeatedly.
        </p>

        <h3>Information stored on your device</h3>
        <p>
          To work as a library, Mediqora keeps the following in its private app storage, which other apps on
          your device cannot read:
        </p>
        <ul>
          <li>
            An index of your media files: file names, folder locations, durations, file sizes, formats, and
            tags embedded in the files themselves, such as title, artist and album.
          </li>
          <li>The series, season and episode groupings it detected, and any corrections you make.</li>
          <li>
            Playback progress and history &mdash; where each file was stopped, how many times it was played,
            and when.
          </li>
          <li>Your favourites, the collections you create, and your play queue.</li>
          <li>Search terms you have typed inside the app.</li>
          <li>The folders you chose to give the app access to through Android&rsquo;s folder picker.</li>
          <li>Your settings, such as theme, autoplay and video fit.</li>
          <li>Whether you have completed onboarding and whether the app has already asked you for a rating.</li>
        </ul>
        <p>
          None of this is transmitted, backed up to the cloud, or transferred to another device. Mediqora has
          Android app backup switched off.
        </p>

        <h3>How to delete this information</h3>
        <ul>
          <li>Uninstalling Mediqora permanently deletes everything listed above.</li>
          <li>Inside the app you can remove favourites, collections, queue items and recent searches at any time.</li>
          <li>
            Mediqora can also delete a media file from your device if you ask it to. On current Android
            versions this shows the system&rsquo;s own confirmation dialog first.
          </li>
        </ul>

        <h3>Features that use other software on your device</h3>
        <p>
          Two features hand off to software that is not part of Mediqora. We do not control these services and
          cannot see what happens inside them.
        </p>
        <ul>
          <li>
            <strong>Voice search.</strong> Tapping the microphone icon in Search opens your device&rsquo;s own
            speech-recognition service, which on many devices is provided by Google. Mediqora does not record
            audio and has no microphone permission; it only receives the text the service recognises. That
            service&rsquo;s privacy policy governs the recording and recognition step.
          </li>
          <li>
            <strong>Rate this app.</strong> Occasionally, after you finish watching something, Mediqora may ask
            once whether you would like to rate it. This uses Google Play&rsquo;s In-App Review feature,
            provided by the Google Play Store app on your device. Mediqora cannot see whether you rated, or
            what you wrote. Google&rsquo;s privacy policy governs that step.
          </li>
        </ul>

        <h3>Children and security</h3>
        <p>
          Mediqora is a general-audience utility and is not directed at children under 13. It collects no
          personal information from anyone, of any age. Because it transmits nothing and stores nothing
          outside your device, the primary safeguard is Android&rsquo;s private app storage, which isolates
          Mediqora&rsquo;s data from other apps. We recommend keeping your device screen lock enabled.
        </p>

        <h2>5. Children&rsquo;s Privacy</h2>
        <p>
          Our services do not knowingly collect personal information from children under 13. If you are a parent or
          guardian and believe your child has provided us with personal information, please contact us at{" "}
          <a href="mailto:support@tradeslook.com">support@tradeslook.com</a> so we can delete it.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We do not store personal user data on our own servers. Any usage data collected by third-party analytics
          services is subject to their own retention policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold
          about you. To make such a request, please email{" "}
          <a href="mailto:support@tradeslook.com">support@tradeslook.com</a>.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on this page with a
          revised &ldquo;last updated&rdquo; date.
        </p>

        <h2>9. Contact Us</h2>
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
