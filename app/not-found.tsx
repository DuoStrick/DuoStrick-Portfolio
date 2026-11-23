import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../components/ui";
import { getAllApps } from "../data/apps";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="wrap py-24 md:py-32 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="display-2">
        This page wandered off.
        <br />
        <span className="accent">Let&apos;s get you back.</span>
      </h1>
      <p className="lead mx-auto mt-6" style={{ maxWidth: 520 }}>
        The page you were looking for doesn&apos;t exist or has moved. Try one of our apps instead.
      </p>
      <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/blog" variant="light" chip={false}>Read the blog</ButtonLink>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {getAllApps().map((app) => (
          <Link key={app.id} href={`/apps/${app.id}`} title={app.title}>
            <Image src={app.iconUrl} alt={`${app.shortName} icon`} width={56} height={56} className="rounded-[16px]" />
          </Link>
        ))}
      </div>
    </section>
  );
}
