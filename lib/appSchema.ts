/**
 * Shared JSON-LD builders for published apps.
 * Used by the home page, the /apps index and each /apps/[slug] landing page so
 * every surface emits the same entity under the same @id.
 */
import type { AppEntry } from "./types";

export const SITE = "https://duostrick.vercel.app";

/** Stable @id for an app entity — referenced from ItemList and breadcrumbs */
export function appSchemaId(app: AppEntry): string {
  return `${SITE}/#app-${app.id}`;
}

export function appPageUrl(app: AppEntry): string {
  return `${SITE}/apps/${app.id}`;
}

export function softwareApplicationSchema(app: AppEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": appSchemaId(app),
    name: app.title,
    ...(app.alternateName && { alternateName: app.alternateName }),
    operatingSystem: app.operatingSystem,
    applicationCategory: app.applicationCategory,
    applicationSubCategory: app.applicationSubCategory,
    description: app.schemaDescription,
    abstract: app.tagline,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: appPageUrl(app),
    sameAs: app.playStoreUrl,
    downloadUrl: app.playStoreUrl,
    installUrl: app.playStoreUrl,
    image: `${SITE}${app.iconUrl}`,
    screenshot: app.screenshots.map((s) => `${SITE}${s.src}`),
    dateModified: app.storeUpdated,
    publisher: { "@id": `${SITE}/#organization` },
    author: { "@id": `${SITE}/#organization` },
    inLanguage: "en",
    isAccessibleForFree: true,
    keywords: app.keywords.join(", "),
  };
}

export function appFaqSchema(app: AppEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${appPageUrl(app)}/#faq`,
    mainEntity: app.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function appBreadcrumbSchema(app: AppEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${appPageUrl(app)}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Apps", item: `${SITE}/apps` },
      { "@type": "ListItem", position: 3, name: app.shortName, item: appPageUrl(app) },
    ],
  };
}

/** Ties the app entities together so crawlers read them as one portfolio */
export function appListSchema(list: AppEntry[], atId: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": atId,
    name: "Duostrick Android Apps on Google Play",
    description:
      "Free Android games and apps published by Duostrick Studio — all offline-capable.",
    numberOfItems: list.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: list.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: appPageUrl(app),
      item: { "@id": appSchemaId(app) },
    })),
  };
}
