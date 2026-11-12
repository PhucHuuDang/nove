import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import type { ArticleBlock, ArticleInline } from "./article-content"
import { ARTICLE_LINK } from "./article-meta"

function renderInline(parts: ArticleInline[]) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <Link key={i} href={part.href} className={ARTICLE_LINK}>
        {part.text}
      </Link>
    )
  )
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case "p":
      return <p key={i}>{renderInline(block.content)}</p>
    case "h2":
      return (
        <h2 key={i} className="mt-6 text-2xl leading-snug">
          {block.text}
        </h2>
      )
    case "ul":
    case "ol": {
      const List = block.type
      return (
        <List
          key={i}
          className={cn(
            "flex flex-col gap-2 pl-5 marker:text-muted-foreground",
            block.type === "ul" ? "list-disc" : "list-decimal"
          )}
        >
          {block.items.map((item, j) => (
            <li key={j} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </List>
      )
    }
    case "figure":
      return (
        <figure key={i} className="my-4">
          <div
            className={cn(
              "overflow-hidden rounded-2xl",
              block.cutout ? "bg-card" : null
            )}
          >
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 40rem) 36rem, 90vw"
              className={cn(
                "h-auto w-full",
                block.cutout ? "mix-blend-multiply" : null
              )}
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {block.caption}
          </figcaption>
        </figure>
      )
  }
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="mt-12 flex flex-col gap-5 text-base leading-relaxed md:mt-16 md:text-lg md:leading-relaxed">
      {blocks.map(renderBlock)}
    </div>
  )
}
