import Image from "next/image"

import type { ArticleAuthor } from "./article-content"
import { ARTICLE_AUTHORS } from "./article-meta"

export function ArticleAuthorAvatar({ author }: { author: ArticleAuthor }) {
  const { src, alt } = ARTICLE_AUTHORS[author]

  return (
    <span
      data-slot="avatar"
      className="group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="aspect-square size-full rounded-full object-cover"
      />
    </span>
  )
}
