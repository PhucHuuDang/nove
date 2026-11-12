import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { GHOST_ICON_BUTTON, OUTLINE_BUTTON_SM } from "./article-meta"

interface ArticleToolbarProps {
  prev: { slug: string; title: string }
  next: { slug: string; title: string }
}

export function ArticleToolbar({ prev, next }: ArticleToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link href="/journal" className={OUTLINE_BUTTON_SM}>
        <ArrowLeft aria-hidden="true" data-icon="inline-start" />
        All articles
      </Link>
      <nav aria-label="Other articles" className="flex shrink-0 gap-1">
        <Link
          href={`/journal/${prev.slug}`}
          aria-label={prev.title}
          className={GHOST_ICON_BUTTON}
        >
          <ArrowLeft aria-hidden="true" />
        </Link>
        <Link
          href={`/journal/${next.slug}`}
          aria-label={next.title}
          className={GHOST_ICON_BUTTON}
        >
          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </div>
  )
}
