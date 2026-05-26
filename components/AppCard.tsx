import Link from "next/link";
import Image from "next/image";

interface AppProps {
  id: string;
  title: string;
  genre: string;
  description: string;
  iconUrl: string;
  playStoreUrl: string;
}

export default function AppCard({ app }: { app: AppProps }) {
  return (
    <div
      className="card-hover-blue flex flex-col sm:flex-row gap-5 items-start rounded-2xl p-6"
      style={{ background: "var(--card)", border: "1px solid var(--card-border)" }}
    >
      {/* Icon */}
      <div
        className="shrink-0 w-20 h-20 rounded-[18px] overflow-hidden flex items-center justify-center"
        style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <Image
          src={app.iconUrl}
          alt={`${app.title} icon`}
          width={80} height={80}
          className="w-full h-full object-cover"
          unoptimized={app.iconUrl.startsWith("http")}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between min-h-full">
        <div>
          <span className="badge badge-info mb-3">{app.genre}</span>
          <h3
            className="font-bold mb-2 leading-snug"
            style={{ fontFamily: "var(--font-syne)", fontSize: "1.15rem", color: "var(--fg)", letterSpacing: "-0.02em" }}
          >
            {app.title}
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--body-text)", lineHeight: 1.7 }}>
            {app.description}
          </p>
        </div>

        <Link
          href={app.playStoreUrl}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold self-start"
          style={{ background: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.76a2 2 0 0 0 2.85.1l.08-.07 10.15-10.17-2.96-2.97-10.12 10.1a2 2 0 0 0 0 3.01zm15.5-14.87-2.46-2.47-2.05 2.05 2.46 2.47 2.05-2.05zm1.3-1.3 1.07-1.08a2 2 0 0 0 0-2.84L18.5 1.13a2 2 0 0 0-2.83 0L14.6 2.2l5.38 5.39zM1.64 1.43A1 1 0 0 0 0 2.27v19.46a1 1 0 0 0 1.64.77l11.2-9.73-11.2-9.74-.01-.6z" />
          </svg>
          Get on Google Play
        </Link>
      </div>
    </div>
  );
}
