import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = pageMetadata({
  title: "Cookie policy",
  description:
    "What the Nove site stores in your browser: your bag and your cookie choice, and analytics only if you agree.",
  path: "/legal/cookies",
})

const SECTIONS = [
  {
    id: "cookies-and-local-storage",
    number: "1",
    title: "Cookies and local storage",
    body: "A cookie is a small file saved in your browser sent with page requests. Local storage keeps data in your browser without sending it with requests. We use both strictly to support store functionality and optional analytics.",
  },
  {
    id: "what-we-store-without-asking",
    number: "2",
    title: "What we store without asking",
    body: "Your bag contents (nove:bag in local storage) to keep your selections across visits, and payment security tokens set by the payment provider at checkout to prevent fraud.",
  },
  {
    id: "what-we-store-only-if-you-agree",
    number: "3",
    title: "What we store only if you agree",
    body: "Aggregated, privacy-friendly analytics with shortened IP addresses to understand website performance and improve the experience. We use no advertising or cross-site tracking cookies.",
  },
  {
    id: "changing-your-choice",
    number: "4",
    title: "Changing your choice",
    body: "You can change or clear your preferences at any time by clearing this site's cookies in your browser settings or emailing hello@nove.coffee.",
  },
  {
    id: "more-about-your-data",
    number: "5",
    title: "More about your data",
    body: "Details about personal data processing are available in our privacy policy. For questions, reach out via hello@nove.coffee.",
  },
]

export default function CookiesPage() {
  return (
    <div className="gutter-3 section-padding md:gutter-5">
      <div className="mx-auto max-w-3xl">
        <header className="border-b pb-8">
          <p className="font-medium text-muted-foreground">Legal</p>
          <h1 className="mt-2 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Cookie policy
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            This site stores your shopping bag locally and uses no advertising
            cookies.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Last updated October 1, 2026 · Nove Espresso S.r.l.
          </p>
        </header>

        <div className="mt-8 divide-y divide-border">
          {SECTIONS.map((sec) => (
            <article key={sec.number} className="py-8">
              <h2
                id={sec.id}
                className="flex items-center gap-3 text-xl font-medium tracking-tight text-foreground md:text-2xl"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-md border bg-card font-mono text-xs text-muted-foreground">
                  {sec.number}
                </span>
                {sec.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {sec.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
          <Link
            href="/legal/privacy"
            className="underline hover:text-foreground"
          >
            Privacy policy
          </Link>
          <span>·</span>
          <Link href="/legal/terms" className="underline hover:text-foreground">
            Terms of sale
          </Link>
        </div>
      </div>
    </div>
  )
}
