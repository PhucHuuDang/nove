"use client"

import Link from "next/link"
import { Plus, Minus } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"

interface ProductFaqSectionProps {
  questions: MachinePageData["questions"]
}

export function ProductFaqSection({ questions }: ProductFaqSectionProps) {
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
          <Accordion
            type="multiple"
            defaultValue={["0"]}
            className="-my-px flex w-full flex-col border-y"
          >
            {questions.map((item, idx) => (
              <AccordionItem key={item.question} value={String(idx)}>
                <AccordionTrigger showChevron={false}>
                  <span>{item.question}</span>
                  <Plus
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                  />
                  <Minus
                    data-slot="accordion-trigger-icon"
                    className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                  />
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
