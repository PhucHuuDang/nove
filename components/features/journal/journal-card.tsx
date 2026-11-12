import Image from "next/image"
import Link from "next/link"

import type { JournalArticle } from "./journal-data"

const DATE = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
})

export function JournalCard({ article }: { article: JournalArticle }) {
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
              sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 45vw, 90vw"
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
          <h2 className="mt-1 text-xl underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 ease-soft group-hover:decoration-foreground/40">
            {article.title}
          </h2>
          <div className="mt-auto line-clamp-2 text-sm text-muted-foreground">
            {article.summary}
          </div>
        </div>
      </div>
    </Link>
  )
}
