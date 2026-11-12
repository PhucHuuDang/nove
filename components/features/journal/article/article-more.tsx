import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { cn } from "@/lib/utils"

import { JournalCard } from "../journal-card"
import type { JournalArticle } from "../journal-data"
import { OUTLINE_BUTTON } from "./article-meta"

export function ArticleMore({ articles }: { articles: JournalArticle[] }) {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="more-heading"
    >
      <ScrollReveal
        as="header"
        className="flex flex-wrap items-end justify-between gap-x-6 gap-y-5"
      >
        <h2
          className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="more-heading"
        >
          More from the journal
        </h2>
        <Link href="/journal" className={OUTLINE_BUTTON}>
          All articles
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Link>
      </ScrollReveal>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
        {articles.map((article, i) => (
          <ScrollReveal
            key={article.slug}
            as="li"
            delayMs={i * 60}
            className={cn(i >= 2 ? "max-sm:hidden" : null)}
          >
            <JournalCard article={article} size="sm" />
          </ScrollReveal>
        ))}
      </ul>
    </section>
  )
}
