import Image from "next/image"

import type { BoxItem } from "@/types/product"
import { SectionLabel } from "@/components/shared/section-label"

interface ProductInBoxProps {
  items: BoxItem[]
}

export function ProductInBox({ items }: ProductInBoxProps) {
  if (!items || items.length === 0) return null

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Included</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          In the box
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center rounded-2xl border border-border/70 bg-card p-6 text-center"
            >
              <span className="self-start font-mono text-xs text-muted-foreground">
                x{item.qty}
              </span>

              <div className="relative mt-2 aspect-square w-32">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
