"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HELP_TABS } from "./help-guide-data"
import type { HelpTopicId } from "./help-guide-types"

interface HelpGuideTabsProps {
  activeTab: HelpTopicId
  onSelectTab: (tabId: HelpTopicId) => void
}

export function HelpGuideTabs({ activeTab, onSelectTab }: HelpGuideTabsProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const currentIndex = HELP_TABS.findIndex((t) => t.id === activeTab)
    const nextIndex = (currentIndex + dir + HELP_TABS.length) % HELP_TABS.length
    const nextTab = HELP_TABS[nextIndex].id
    onSelectTab(nextTab)
    document.getElementById(`help-tab-${nextTab}`)?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label="Topics"
      onKeyDown={handleKeyDown}
      className="flex gap-1 md:px-11"
    >
      {HELP_TABS.map((tab) => {
        const isSelected = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`help-tab-${tab.id}`}
            aria-selected={isSelected}
            aria-controls="help-panel"
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelectTab(tab.id)}
            className={cn(
              "relative flex items-center gap-2 rounded-t-2xl px-3 pt-2.5 pb-3 text-sm transition-colors duration-300 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:px-6 md:pt-3 md:pb-4 md:text-lg",
              isSelected
                ? "text-foreground"
                : "text-background/60 hover:text-background focus-visible:text-background"
            )}
          >
            {isSelected ? (
              <motion.span
                layoutId="help-folder-tab"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                className="absolute inset-0 rounded-t-2xl bg-background"
              >
                <span
                  className={cn(
                    "absolute bottom-0 -left-4 size-4 bg-background [mask-image:radial-gradient(circle_at_0_0,transparent_1rem,black_calc(1rem+0.5px))]",
                    tab.id === HELP_TABS[0].id && "max-md:hidden"
                  )}
                />
                <span className="absolute -right-4 bottom-0 size-4 bg-background [mask-image:radial-gradient(circle_at_100%_0,transparent_1rem,black_calc(1rem+0.5px))]" />
              </motion.span>
            ) : null}
            <tab.icon
              aria-hidden="true"
              className="relative size-4 max-md:hidden"
            />
            <span className="relative font-medium">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
