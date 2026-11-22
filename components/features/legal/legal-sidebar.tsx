import Link from "next/link"
import { FileText } from "lucide-react"

import { numberHeadings } from "@/components/features/legal/legal-blocks"
import {
  LEGAL_DOCUMENTS,
  LEGAL_SLUGS,
} from "@/components/features/legal/legal-content"
import type { LegalSlug } from "@/components/features/legal/legal-types"
import { cn } from "@/lib/utils"

const ITEM_CLASS =
  "-ml-px flex items-baseline gap-2 rounded-r-lg border-l-2 py-2.5 pr-2 pl-4 text-sm transition-colors duration-200 ease-soft outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 lg:py-1.5"
const IDLE_CLASS = "border-transparent text-muted-foreground"
const ACTIVE_CLASS = "border-foreground bg-card text-foreground"

export function LegalSidebar({ current }: { current: LegalSlug }) {
  const headings = numberHeadings(LEGAL_DOCUMENTS[current].blocks)

  return (
    <aside className="max-w-2xl lg:max-w-none lg:border-r lg:pr-8">
      <nav
        aria-label="Legal"
        className="flex flex-col gap-10 lg:sticky lg:top-28"
      >
        <div>
          <p className="flex h-9 items-center gap-2 text-sm font-medium">
            <FileText
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
            Legal
            <span className="ml-auto font-mono text-xs text-muted-foreground">
              {LEGAL_SLUGS.length}
            </span>
          </p>
          <ul className="mt-3 ml-2 flex flex-col border-l">
            {LEGAL_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/legal/${slug}`}
                  aria-current={slug === current ? "page" : undefined}
                  className={cn(
                    ITEM_CLASS,
                    slug === current ? ACTIVE_CLASS : IDLE_CLASS
                  )}
                >
                  {LEGAL_DOCUMENTS[slug].navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <p className="text-sm font-medium">On this page</p>
          <ol className="mt-3 ml-2 flex flex-col border-l">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  className={cn(ITEM_CLASS, IDLE_CLASS)}
                >
                  <span className="w-4 shrink-0 font-mono text-xs">
                    {heading.number}
                  </span>
                  {heading.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </aside>
  )
}
