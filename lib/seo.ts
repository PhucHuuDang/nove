import type { Metadata } from "next"

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://novee-store.vercel.app"
).replace(/\/$/, "")

export const SITE_NAME = "Nove"
export const SITE_TITLE = "Nove | Café espresso at home"
export const SITE_DESCRIPTION =
  "One espresso machine in three models: One, Duo and Pro. Built by a barista and an engineer in Turin."

const DEFAULT_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Nove. Café espresso at home",
}

interface PageSeo {
  /** Short page title; the layout template appends " · Nove". */
  title: string
  description: string
  /** Route path, e.g. "/shop". Used for the canonical and og:url. */
  path: string
  /** Defaults to the site-wide 1200×630 share image. */
  image?: { url: string; alt: string }
  type?: "website" | "article"
}

/**
 * Per-page metadata. Open Graph and Twitter are set in full on every page
 * because Next.js replaces (not merges) those objects from the layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
}: PageSeo): Metadata {
  const fullTitle = path === "/" ? SITE_TITLE : `${title} · ${SITE_NAME}`

  return {
    title: path === "/" ? { absolute: SITE_TITLE } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [image],
      type,
    },
    twitter: {
      card: "summary_large_image",
      site: "@nove.espresso",
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

/** Site-wide defaults from the root layout (also what the 404 page shows). */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  manifest: "/favicon/site.webmanifest",
  keywords: [
    "Nove",
    "espresso machine",
    "home espresso",
    "coffee grinder",
    "coffee beans",
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [DEFAULT_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nove.espresso",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_IMAGE.url, alt: DEFAULT_IMAGE.alt }],
  },
  icons: {
    shortcut: "/favicon/favicon.ico",
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
}
