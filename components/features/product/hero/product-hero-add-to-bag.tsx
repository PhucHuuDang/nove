"use client"

import { ProductHeroRollingText } from "./product-hero-rolling-text"
import { useCart } from "@/lib/cart-context"

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

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-4">
      <p className="font-mono text-3xl figures 2xl:text-4xl">
        <ProductHeroRollingText value={priceFormatted} delay={0.08} />
      </p>

      <button
        type="button"
        aria-label={`Add to bag: ${name}, ${priceFormatted}`}
        onClick={() => {
          addItem({
            slug,
            name,
            price,
            image,
          })
        }}
        className="group/button inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-8 text-base font-medium whitespace-nowrap text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
      >
        Add to bag
      </button>
    </div>
  )
}
