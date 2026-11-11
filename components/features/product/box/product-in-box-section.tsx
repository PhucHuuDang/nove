import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { cn } from "@/lib/utils"

interface ProductInBoxSectionProps {
  items: MachinePageData["inBox"]
}

export function ProductInBoxSection({ items }: ProductInBoxSectionProps) {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="box-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="box-heading"
        >
          In the box
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:auto-cols-fr md:grid-flow-col md:grid-cols-none lg:gap-5">
          {items.map((item, idx) => (
            <ScrollReveal
              as="li"
              key={item.name}
              delayMs={idx * 80}
              className="relative flex aspect-5/4 flex-col rounded-3xl bg-card p-3 md:p-4"
            >
              <span className="absolute top-3 right-3 font-mono text-xs text-muted-foreground figures">
                {item.qty}
              </span>
              <div className="relative flex min-h-0 flex-1 items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt ?? ""}
                  fill
                  sizes="12rem"
                  className={cn(
                    "object-contain",
                    item.blendMultiply ? "mix-blend-multiply" : ""
                  )}
                />
              </div>
              <p className="mt-2 flex min-h-10 items-center justify-center text-center text-sm">
                {item.name}
              </p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
