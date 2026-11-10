import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export interface FAQItem {
  id?: string
  question: string
  answer: string | React.ReactNode
  badge?: string
  image?: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion className={cn("w-full divide-y divide-border", className)}>
      {items.map((item, index) => {
        const key = item.id || `faq-${index}`
        return (
          <AccordionItem key={key} value={key} className="border-b-0 py-2">
            <AccordionTrigger className="py-5 text-left text-base font-light text-foreground hover:no-underline md:text-lg">
              <div className="flex items-center gap-4 pr-4">
                {item.image ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-muted">
                    <Image
                      src={item.image}
                      alt={item.question}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                ) : null}

                {item.badge ? (
                  <span className="shrink-0 rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    {item.badge}
                  </span>
                ) : null}

                <span className="font-normal text-foreground">
                  {item.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
