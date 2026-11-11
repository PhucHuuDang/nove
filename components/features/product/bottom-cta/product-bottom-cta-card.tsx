"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { useCart } from "@/lib/cart-context"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { cn } from "@/lib/utils"

interface ProductBottomCtaCardProps {
  data: MachinePageData
}

export function ProductBottomCtaCard({ data }: ProductBottomCtaCardProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      slug: data.slug,
      name: data.name,
      price: data.price,
      image: data.hero.thumbnail,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <ScrollReveal delayMs={160} className="flex">
      <div
        data-slot="card"
        data-size="default"
        data-tone="raised"
        className="group/card flex flex-1 flex-col gap-6 overflow-hidden rounded-3xl bg-popover p-6 text-sm text-popover-foreground shadow-xs"
      >
        <div data-slot="card-content" className="flex flex-col gap-1">
          <p className="text-2xl">
            <span className="relative inline-flex overflow-hidden">
              <span className="inline-block">{data.name}</span>
            </span>
          </p>
          <p className="text-muted-foreground">{data.tagline}</p>
          <p className="mt-5 font-mono text-4xl figures">
            <span className="relative inline-flex overflow-hidden">
              <span className="inline-block">{data.priceFormatted}</span>
            </span>
          </p>
        </div>

        <div
          data-slot="card-footer"
          className="mt-auto flex items-center rounded-b-3xl"
        >
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add to bag: ${data.name}, ${data.priceFormatted}`}
            className="group/button inline-flex h-13 w-full shrink-0 items-center justify-center rounded-full border border-transparent bg-primary px-8 text-base font-medium text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
          >
            <span
              className={cn(
                "transition-opacity",
                added ? "opacity-0" : "opacity-100"
              )}
            >
              Add to bag
            </span>
            {added ? (
              <span className="absolute inline-flex items-center gap-1.5 text-primary-foreground">
                <Check className="size-4" /> Added
              </span>
            ) : null}
          </button>
        </div>
      </div>
    </ScrollReveal>
  )
}
