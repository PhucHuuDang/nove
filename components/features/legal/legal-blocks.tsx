import { LegalRichText } from "@/components/features/legal/legal-rich-text"
import { LegalTable } from "@/components/features/legal/legal-table"
import type { LegalBlock } from "@/components/features/legal/legal-types"

const PROSE_CLASS =
  "prose mt-12 max-w-none pb-4 text-foreground md:mt-16 md:text-lg prose-p:leading-relaxed prose-p:text-foreground marker:text-muted-foreground prose-li:my-2 prose-li:text-foreground prose-strong:font-medium prose-strong:text-foreground prose-a:font-normal prose-a:text-foreground prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-foreground md:prose-h2:mt-14"

/** Numbers each heading in document order, starting at 1. */
export function numberHeadings(blocks: LegalBlock[]) {
  return blocks
    .filter((block) => block.type === "heading")
    .map((heading, index) => ({ ...heading, number: index + 1 }))
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  const numbers = new Map(
    numberHeadings(blocks).map((heading) => [heading.id, heading.number])
  )

  return (
    <div className={PROSE_CLASS}>
      {blocks.map((block, index) => (
        <LegalBlockItem
          key={index}
          block={block}
          number={block.type === "heading" ? numbers.get(block.id) : undefined}
        />
      ))}
    </div>
  )
}

function LegalBlockItem({
  block,
  number,
}: {
  block: LegalBlock
  number?: number
}) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={block.id}
          className="flex scroll-mt-28 items-center gap-3 border-t pt-10 text-xl leading-snug weight-display md:pt-12 md:text-2xl"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-md border bg-card font-mono text-xs text-muted-foreground">
            {number}
          </span>
          {block.title}
        </h2>
      )
    case "paragraph":
      return (
        <p>
          <LegalRichText content={block.content} />
        </p>
      )
    case "callout":
      return (
        <p className="not-prose my-6 rounded-2xl border bg-card p-5 text-sm leading-relaxed md:text-base">
          <LegalRichText content={block.content} />
        </p>
      )
    case "list":
      return (
        <ul>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>
              <LegalRichText content={item} />
            </li>
          ))}
        </ul>
      )
    case "table":
      return <LegalTable caption={block.caption} rows={block.rows} />
  }
}
