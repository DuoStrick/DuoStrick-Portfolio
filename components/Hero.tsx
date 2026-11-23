import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Icon } from "./ui";
import { getAllApps } from "../data/apps";

export default function Hero() {
  const apps = getAllApps();

  return (
    <section className="relative overflow-hidden">
      {/* Soft brand wash */}
      <div
        className="absolute inset-x-0 top-0 h-[520px] pointer-events-none"
        style={{ background: "radial-gradient(60% 70% at 50% 0%, var(--bg-tint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative pt-16 md:pt-24 pb-16 md:pb-20 text-center">
        <p className="eyebrow hero-anim">Cute games · Handy apps · Android</p>

        <div className="relative mx-auto mt-6" style={{ maxWidth: 1100 }}>
          {/* Mascot logo, tucked against the headline like a sticker */}
          <Image
            src="/duostrick-logo.png"
            alt=""
            width={96} height={96}
            className="floaty hidden xl:block absolute -left-10 -top-4 rounded-[24px]"
            style={{ boxShadow: "0 18px 40px rgba(60, 34, 169, 0.3)" }}
            priority
          />
          <span className="twinkle hidden xl:block absolute -right-2 top-28" style={{ color: "var(--sun)" }} aria-hidden="true">
            <Icon name="sparkle" size={44} />
          </span>

          <h1 className="display-1 hero-anim hero-delay-1" style={{ fontSize: "clamp(2.5rem, 6.4vw, 5rem)" }}>
            Cute games &amp;&nbsp;handy&nbsp;apps.
            <br />
            <span className="accent">Made for Android.</span>
          </h1>
        </div>

        <p className="lead hero-anim hero-delay-2 mx-auto mt-7" style={{ maxWidth: 640 }}>
          DuoStrick is an independent Android studio. We make cute puzzle games and handy offline
          apps — relax your brain, play daily challenges and get more done. All free on Google Play.
        </p>

        <div className="hero-anim hero-delay-3 mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <ButtonLink href="/apps">Explore our apps</ButtonLink>
          <ButtonLink href="/blog" variant="light" chip={false}>Read the blog</ButtonLink>
        </div>

        {/* App icon row — every published app at a glance */}
        <div className="hero-anim hero-delay-4 mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {apps.map((app) => (
            <Link
              key={app.id}
              href={`/apps/${app.id}`}
              className="group relative"
              title={app.title}
            >
              <Image
                src={app.iconUrl}
                alt={`${app.shortName} icon`}
                width={64} height={64}
                className="rounded-[18px] transition-transform duration-300 group-hover:-translate-y-1"
                style={{ boxShadow: "0 10px 26px rgba(23, 22, 28, 0.16)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
