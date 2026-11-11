"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Minus } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"

interface ProductFaqSectionProps {
  questions: MachinePageData["questions"]
}

export function ProductFaqSection({ questions }: ProductFaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx))
  }

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="questions-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[1fr_2fr] lg:gap-5">
        <ScrollReveal>
          <h2
            className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="questions-heading"
          >
            Questions
          </h2>
          <p className="mt-5 max-w-xs text-base text-muted-foreground md:text-lg">
            If yours is not here,{" "}
            <Link
              href="/contact"
              className="rounded-sm text-foreground underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              write to us
            </Link>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal
          delayMs={60}
          className="overflow-hidden rounded-2xl bg-popover px-5"
        >
          <div
            data-slot="accordion"
            className="-my-px flex w-full flex-col border-y"
            data-orientation="vertical"
          >
            {questions.map((item, idx) => {
              const isOpen = openIdx === idx
              return (
                <div
                  key={item.question}
                  data-slot="accordion-item"
                  data-state={isOpen ? "open" : "closed"}
                  className="not-last:border-b"
                >
                  <h3 className="font-text flex tracking-normal">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      data-state={isOpen ? "open" : "closed"}
                      data-slot="accordion-trigger"
                      onClick={() => toggle(idx)}
                      className="group/accordion-trigger relative flex flex-1 items-center justify-between gap-6 rounded-md py-5 text-start text-base font-medium transition-colors outline-none hover:text-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
                    >
                      <span>{item.question}</span>
                      {isOpen ? (
                        <Minus
                          data-slot="accordion-trigger-icon"
                          className="pointer-events-none size-4 shrink-0 text-foreground"
                        />
                      ) : (
                        <Plus
                          data-slot="accordion-trigger-icon"
                          className="pointer-events-none size-4 shrink-0 text-foreground"
                        />
                      )}
                    </button>
                  </h3>
                  {isOpen ? (
                    <div
                      data-slot="accordion-content"
                      data-state="open"
                      className="overflow-hidden text-sm text-muted-foreground"
                    >
                      <div className="pt-0 pb-5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4">
                        {item.answer}
                      </div>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
