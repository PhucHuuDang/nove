"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { GuideItem } from "./help-guide-types"

interface HelpGuideSidebarProps {
  guide: GuideItem
  subGuides: GuideItem[]
  allGuides: GuideItem[]
  onSelectSubGuide: (id: string) => void
}

export function HelpGuideSidebar({
  guide,
  subGuides,
  allGuides,
  onSelectSubGuide,
}: HelpGuideSidebarProps) {
  return (
    <div className="flex flex-col gap-6 self-start lg:sticky lg:top-24">
      <ul className="border-t">
        {subGuides.map((item) => {
          const isCurrent = item.id === guide.id
          return (
            <li key={item.id} className="border-b">
              <button
                type="button"
                aria-current={isCurrent ? "true" : undefined}
                onClick={() => onSelectSubGuide(item.id)}
                className={cn(
                  "flex w-full items-baseline justify-between gap-4 py-4 text-left text-lg transition-colors duration-200 ease-soft outline-none hover:text-foreground focus-visible:text-foreground md:text-xl",
                  isCurrent ? "text-foreground" : "text-muted-foreground"
                )}
              >
                <span>{item.title}</span>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {item.corner}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-card">
        {allGuides.map((g) => {
          const pic = g.sections.find((s) => s.picture)?.picture
          if (!pic) return null
          return (
            <Image
              key={g.id}
              src={pic.src}
              alt={g.id === guide.id ? pic.alt : ""}
              width={pic.width ?? 1200}
              height={pic.height ?? 900}
              sizes="(min-width: 64rem) 30vw, 90vw"
              className={cn(
                "absolute inset-0 size-full object-contain p-6 mix-blend-multiply transition-opacity duration-500 ease-soft",
                g.id === guide.id ? "opacity-100" : "opacity-0"
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
