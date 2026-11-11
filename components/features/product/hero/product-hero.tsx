"use client"

import { ProductHeroInfo } from "./product-hero-info"
import { ProductHeroSlider } from "./product-hero-slider"

interface ProductHeroProps {
  currentSlug: "one" | "duo" | "pro"
  onSelectModel: (slug: "one" | "duo" | "pro") => void
}

export function ProductHero({ currentSlug, onSelectModel }: ProductHeroProps) {
  return (
    <section
      className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
      aria-labelledby="product-heading"
    >
      <div className="grid grid-cols-1 gap-2 rounded-4xl bg-foreground p-2 md:gap-3 md:p-3 lg:h-[clamp(36rem,calc(100svh-10rem),72rem)] lg:grid-cols-2">
        <ProductHeroInfo
          currentSlug={currentSlug}
          onSelectModel={onSelectModel}
        />
        <ProductHeroSlider currentSlug={currentSlug} />
      </div>
    </section>
  )
}
