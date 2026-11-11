"use client"

import { useState } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { ProductOwnersFeaturedImages } from "./product-owners-featured-images"
import { ProductOwnersCarousel } from "./product-owners-carousel"

interface ProductOwnersSectionProps {
  owners: MachinePageData["owners"]
}

export function ProductOwnersSection({ owners }: ProductOwnersSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : owners.reviews.length - 1))
  }

  const handleNext = () => {
    setSelectedIdx((prev) => (prev < owners.reviews.length - 1 ? prev + 1 : 0))
  }

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="owners-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1fr_1fr_1.2fr] lg:gap-5">
        {/* Column 1: Rating and Summary */}
        <ScrollReveal className="flex flex-col">
          <h2
            className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="owners-heading"
          >
            {owners.title}
          </h2>
          <p className="mt-5 max-w-xs text-base text-muted-foreground md:text-lg">
            {owners.subtitle}
          </p>

          <div className="mt-10 flex items-end gap-4 lg:mt-auto">
            <span className="font-mono text-7xl leading-none figures">
              {owners.rating}
            </span>
            <span className="flex flex-col gap-1.5 pb-1 text-sm text-muted-foreground">
              <span
                role="img"
                aria-label="5 out of 5 stars"
                className="inline-flex gap-0.5 text-accent figures"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="size-4 fill-current"
                  >
                    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                  </svg>
                ))}
              </span>
              {owners.reviewCount}
            </span>
          </div>

          <div className="group/avatar-group mt-6 flex -space-x-2">
            {owners.reviews.map((rev) => (
              <span
                key={rev.author}
                className="group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken"
              >
                <Image
                  src={rev.avatar}
                  alt=""
                  width={32}
                  height={32}
                  className="aspect-square size-full rounded-full object-cover"
                />
              </span>
            ))}
            <div className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background">
              +1k
            </div>
          </div>
        </ScrollReveal>

        {/* Column 2: Featured Image */}
        <ProductOwnersFeaturedImages selectedIdx={selectedIdx} />

        {/* Column 3: Vertical Review Carousel */}
        <ProductOwnersCarousel
          reviews={owners.reviews}
          selectedIdx={selectedIdx}
          onSelect={setSelectedIdx}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  )
}
