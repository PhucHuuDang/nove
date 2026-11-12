"use client"

import { HelpGuideSidebar } from "./help-guide-sidebar"
import { HelpGuideArticle } from "./help-guide-article"
import type { GuideItem } from "./help-guide-types"

interface HelpGuidePanelProps {
  guide: GuideItem
  subGuides: GuideItem[]
  allGuides: GuideItem[]
  onSelectSubGuide: (id: string) => void
}

export function HelpGuidePanel({
  guide,
  subGuides,
  allGuides,
  onSelectSubGuide,
}: HelpGuidePanelProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
      <HelpGuideSidebar
        guide={guide}
        subGuides={subGuides}
        allGuides={allGuides}
        onSelectSubGuide={onSelectSubGuide}
      />
      <HelpGuideArticle key={guide.id} guide={guide} />
    </div>
  )
}
