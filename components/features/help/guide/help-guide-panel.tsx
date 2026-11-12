"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import type { GuideItem } from "./help-guide-types"

interface HelpGuidePanelProps {
  guide: GuideItem
  subGuides: GuideItem[]
  onSelectSubGuide: (id: string) => void
}

export function HelpGuidePanel({
  guide,
  subGuides,
  onSelectSubGuide,
}: HelpGuidePanelProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
      {/* Left sub-guide switcher (when topic has multiple guides) */}
      <div className="flex flex-col gap-6 self-start lg:sticky lg:top-24">
        {subGuides.length > 1 ? (
          <ul className="border-t border-border">
            {subGuides.map((item) => {
              const isCurrent = item.id === guide.id
              return (
                <li key={item.id} className="border-b border-border">
                  <button
                    type="button"
                    aria-current={isCurrent ? "true" : undefined}
                    onClick={() => onSelectSubGuide(item.id)}
                    className={cn(
                      "flex w-full items-baseline justify-between gap-4 py-4 text-left text-lg transition-colors duration-200 ease-soft outline-none hover:text-foreground focus-visible:text-foreground md:text-xl",
                      isCurrent
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    <span>{item.title}</span>
                    <span className="shrink-0 font-mono text-sm text-muted-foreground figures">
                      {item.corner}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}

        {/* Fact banner */}
        <div className="rounded-2xl border border-border/80 bg-card p-5">
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
            {guide.fact.label}
          </span>
          <p className="mt-1 text-2xl font-light text-foreground">
            {guide.fact.value}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{guide.sub}</p>
        </div>
      </div>

      {/* Right details: sections & steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={guide.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-light text-foreground md:text-3xl">
              {guide.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{guide.sub}</p>
          </div>

          {/* Sections */}
          <div className="divide-y divide-border">
            {guide.sections.map((section) => (
              <section
                key={section.heading}
                className="py-6 first:pt-0 last:pb-0"
              >
                {section.picture ? (
                  <div className="relative mb-4 aspect-4/3 w-full max-w-sm overflow-hidden rounded-2xl bg-card">
                    <Image
                      src={section.picture.src}
                      alt={section.picture.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-contain p-4 mix-blend-multiply"
                    />
                  </div>
                ) : null}
                <h4 className="text-base font-medium text-foreground">
                  {section.heading}
                </h4>
                {section.text ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {section.text}
                  </p>
                ) : null}
                {section.bullets ? (
                  <ul className="mt-3 flex flex-col gap-2">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/60"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {/* Steps */}
          {guide.steps.length > 0 ? (
            <div className="border-t border-border pt-8">
              <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                How it works
              </h4>
              <ol className="mt-4 flex flex-col gap-3">
                {guide.steps.map((step, idx) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 rounded-xl bg-card p-3.5 text-sm text-foreground"
                  >
                    <span className="shrink-0 font-mono text-xs font-semibold text-muted-foreground figures">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
