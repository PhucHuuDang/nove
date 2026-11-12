import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { NavSpacer } from "@/components/shared/nav-spacer"
import { JournalFeed } from "@/components/features/journal/journal-feed"
import { JournalMarquee } from "@/components/features/journal/journal-marquee"

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description:
    "Guides from the people who make Nove: your first espresso, milk drinks, the grinder and beans, cleaning and descaling, and how the machines work.",
  path: "/journal",
})

export default function JournalPage() {
  return (
    <>
      <NavSpacer />
      <section
        className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
        aria-labelledby="journal-heading"
      >
        <div className="rounded-3xl bg-popover gutter-3 py-16 md:gutter-6 md:py-24">
          <JournalFeed />
          <JournalMarquee />
        </div>
      </section>
    </>
  )
}
