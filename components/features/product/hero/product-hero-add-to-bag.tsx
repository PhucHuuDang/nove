"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductHeroAddToBagProps {
  slug: string
  name: string
  price: number
  priceFormatted: string
  image: string
}

export function ProductHeroAddToBag({
  slug,
  name,
  price,
  priceFormatted,
  image,
}: ProductHeroAddToBagProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      slug,
      name,
      price,
      image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
      <p className="font-mono text-3xl figures 2xl:text-4xl">
        <span className="relative inline-flex overflow-hidden">
          <span className="inline-block">{priceFormatted}</span>
        </span>
      </p>
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Add to bag: ${name}, ${priceFormatted}`}
        className="group/button inline-flex h-13 shrink-0 items-center justify-center rounded-full border border-transparent bg-accent px-8 text-base font-medium text-accent-foreground transition-all duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
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
          <span className="absolute inline-flex items-center gap-1.5 text-accent-foreground">
            <Check className="size-4" /> Added
          </span>
        ) : null}
      </button>
    </div>
  )
}
