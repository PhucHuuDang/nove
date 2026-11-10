import Image from "next/image"
import Link from "next/link"

import type { UseWith } from "@/types/product"
import { SectionLabel } from "@/components/shared/section-label"

interface ProductUseWithProps {
  items: UseWith[]
}

export function ProductUseWith({ items }: ProductUseWithProps) {
  if (!items || items.length === 0) return null

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Pairings</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Use it with
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((item) => {
            const card = (
              <div className="group flex flex-col items-center rounded-2xl border border-border/70 bg-card p-6 text-center transition-all hover:border-border">
                <div className="relative aspect-square w-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="128px"
                    className="object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-sm font-medium">{item.name}</p>
              </div>
            )

            return item.href ? (
              <Link key={item.name} href={item.href}>
                {card}
              </Link>
            ) : (
              <div key={item.name}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
