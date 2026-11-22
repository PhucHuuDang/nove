import Link from "next/link"

import type { LegalRichText as LegalRichTextValue } from "@/components/features/legal/legal-types"

const LINK_CLASS =
  "rounded-sm underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

export function LegalRichText({ content }: { content: LegalRichTextValue }) {
  if (typeof content === "string") return content

  return content.map((part, index) => {
    if (typeof part === "string") return part
    return part.href.startsWith("/") ? (
      <Link key={index} href={part.href} className={LINK_CLASS}>
        {part.text}
      </Link>
    ) : (
      <a key={index} href={part.href} className={LINK_CLASS}>
        {part.text}
      </a>
    )
  })
}
