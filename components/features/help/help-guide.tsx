"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { HELP_TABS, HELP_GUIDES } from "./guide/help-guide-data"
import { HelpGuideTabs } from "./guide/help-guide-tabs"
import { HelpGuidePanel } from "./guide/help-guide-panel"
import type { HelpTopicId } from "./guide/help-guide-types"

export function HelpGuide() {
  const [activeTab, setActiveTab] = useState<HelpTopicId>("shipping")
  const [activeSubId, setActiveSubId] = useState<string>("shipping")
  const containerRef = useRef<HTMLDivElement | null>(null)

  const selectTab = useCallback((topic: HelpTopicId, smoothScroll = true) => {
    setActiveTab(topic)
    const firstSub = HELP_GUIDES.find((g) => g.topic === topic)
    if (firstSub) {
      setActiveSubId(firstSub.id)
    }
    if (smoothScroll && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  // Sync state with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#/, "") as HelpTopicId
      if (HELP_TABS.some((t) => t.id === hash)) {
        selectTab(hash, true)
      }
    }

    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [selectTab])

  const subGuides = HELP_GUIDES.filter((g) => g.topic === activeTab)
  const currentGuide =
    subGuides.find((g) => g.id === activeSubId) ?? subGuides[0]

  return (
    <section
      aria-labelledby="guides-heading"
      className="relative px-3 pt-10 pb-16 md:px-5 md:pt-14 md:pb-24 lg:pb-32"
    >
      <div className="mb-8">
        <h2
          id="guides-heading"
          className="text-2xl font-light tracking-tight text-foreground md:text-3xl"
        >
          Delivery & first setup
        </h2>
      </div>

      {/* Anchor targets positioned at the top of this section with scroll offset */}
      {HELP_TABS.map((tab) => (
        <span
          key={tab.id}
          id={tab.id}
          aria-hidden="true"
          className="absolute top-0 scroll-mt-24"
        />
      ))}

      <div
        ref={containerRef}
        className="scroll-mt-24 rounded-3xl bg-foreground p-2 pt-4 md:p-3 md:pt-6"
      >
        <HelpGuideTabs
          activeTab={activeTab}
          onSelectTab={(t) => {
            selectTab(t, false)
            window.history.pushState(null, "", `#${t}`)
          }}
        />

        <div
          role="tabpanel"
          id="help-panel"
          aria-labelledby={`help-tab-${activeTab}`}
          className={cn(
            "rounded-3xl bg-background p-5 transition-[border-radius] duration-300 ease-soft md:p-8 lg:p-12",
            activeTab === HELP_TABS[0].id && "max-md:rounded-tl-none"
          )}
        >
          {currentGuide ? (
            <HelpGuidePanel
              guide={currentGuide}
              subGuides={subGuides}
              onSelectSubGuide={setActiveSubId}
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
