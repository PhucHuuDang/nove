import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

import type { ArticleAuthor } from "./article-content"
import { ArticleAuthorAvatar } from "./article-author-avatar"
import { ARTICLE_AUTHORS } from "./article-meta"

interface ArticleSidebarProps {
  photo: string
  photoAlt: string
  author: ArticleAuthor
  meta: string
}

export function ArticleSidebar({
  photo,
  photoAlt,
  author,
  meta,
}: ArticleSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <ScrollReveal>
        <div className="relative aspect-3/2 overflow-hidden rounded-3xl md:aspect-2/1 lg:aspect-4/5">
          <Image
            src={photo}
            alt={photoAlt}
            fill
            priority
            sizes="(min-width: 80rem) 18rem, (min-width: 64rem) 16rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-5 flex items-center gap-3 px-2 max-lg:hidden">
          <ArticleAuthorAvatar author={author} />
          <div>
            <p className="text-sm font-medium">
              {ARTICLE_AUTHORS[author].name}
            </p>
            <p className="font-mono text-xs text-muted-foreground figures">
              {meta}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </aside>
  )
}
