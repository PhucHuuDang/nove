import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import type { JournalArticle } from "./journal-data"

const DATE = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
})

const SIZES = {
  default: "(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 90vw",
  sm: "(min-width: 64rem) 22vw, (min-width: 40rem) 45vw, 90vw",
}

interface JournalCardProps {
  article: JournalArticle
  /** `sm` is the four-up "More from the journal" row. */
  size?: "default" | "sm"
}

export function JournalCard({ article, size = "default" }: JournalCardProps) {
  const Heading = size === "sm" ? "h3" : "h2"

  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group block h-full rounded-3xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <div className="flex h-full flex-col gap-4 overflow-hidden rounded-3xl bg-card py-4 text-sm text-card-foreground">
        <div className="px-4">
          <div className="relative aspect-3/2 overflow-hidden rounded-2xl">
            <Image
              src={article.photo}
              alt=""
              fill
              sizes={SIZES[size]}
              className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-1.5 rounded-t-3xl px-4">
          <div className="text-sm text-muted-foreground">
            Published{" "}
            <time dateTime={article.date} className="text-foreground">
              {DATE.format(new Date(article.date))}
            </time>
          </div>
          <Heading
            className={cn(
              "mt-1 underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 ease-soft group-hover:decoration-foreground/40",
              size === "sm" ? "text-lg" : "text-xl"
            )}
          >
            {article.title}
          </Heading>
          <div className="mt-auto line-clamp-2 text-sm text-muted-foreground">
            {article.summary}
          </div>
        </div>
      </div>
    </Link>
  )
}
