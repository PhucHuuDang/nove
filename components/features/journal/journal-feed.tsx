"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SlidingToggleGroup } from "@/components/shared/sliding-toggle-group"
import { pillButton } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

import { JournalCard } from "./journal-card"
import { JOURNAL_ARTICLES, JOURNAL_TOPICS } from "./journal-data"

const PAGE = 6

/** Topic filter, article grid and "show more", all inside the journal panel. */
export function JournalFeed() {
  const [topic, setTopic] = useState("all")
  const [shown, setShown] = useState(PAGE)
  const matches = JOURNAL_ARTICLES.filter(
    (article) => topic === "all" || article.category === topic
  )

  return (
    <>
      <ScrollReveal
        as="header"
        className="flex flex-col items-center text-center"
      >
        <p className="font-mono text-xs text-muted-foreground figures">
          {JOURNAL_ARTICLES.length} articles
        </p>
        <h1
          id="journal-heading"
          className="mt-4 text-7xl leading-none tracking-tight md:text-9xl"
        >
          Journal
        </h1>
        <SlidingToggleGroup
          label="Filter by topic"
          variant="filled"
          value={topic}
          options={JOURNAL_TOPICS}
          onValueChange={(next) => {
            setTopic(next)
            setShown(PAGE)
          }}
          className="mt-10 flex-wrap justify-center gap-1.5 md:mt-14"
        />
      </ScrollReveal>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {JOURNAL_ARTICLES.map((article) => {
          const position = matches.indexOf(article)
          return (
            <ScrollReveal
              key={article.slug}
              as="li"
              delayMs={(position % 3) * 60}
              className={cn(
                position < 0 || position >= shown ? "hidden" : null
              )}
            >
              <JournalCard article={article} />
            </ScrollReveal>
          )
        })}
      </ul>

      {matches.length > shown ? (
        <div className="mt-10 flex justify-center md:mt-12">
          <button
            type="button"
            onClick={() => setShown(shown + PAGE)}
            className={pillButton({ variant: "outline" })}
          >
            Show more articles
            <ChevronDown aria-hidden="true" data-icon="inline-end" />
          </button>
        </div>
      ) : null}
    </>
  )
}
