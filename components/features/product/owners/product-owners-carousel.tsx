"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { cn } from "@/lib/utils"

interface ProductOwnersCarouselProps {
  reviews: MachinePageData["owners"]["reviews"]
  selectedIdx: number
  onSelect: (idx: number) => void
  onPrev: () => void
  onNext: () => void
}

export function ProductOwnersCarousel({
  reviews,
  selectedIdx,
  onSelect,
  onPrev,
  onNext,
}: ProductOwnersCarouselProps) {
  return (
    <ScrollReveal delayMs={120} className="flex flex-col">
      <div
        className="relative w-full"
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
      >
        <div className="overflow-hidden" data-slot="carousel-content">
          <div
            className="-mt-4 flex h-[27rem] flex-col transition-transform duration-300 ease-soft md:h-[30rem]"
            style={{
              transform: `translate3d(0px, -${selectedIdx > 1 ? (selectedIdx - 1) * 33.333 : 0}%, 0px)`,
            }}
          >
            {reviews.map((review, idx) => {
              const isSelected = selectedIdx === idx
              return (
                <div
                  key={review.author}
                  role="group"
                  aria-roledescription="slide"
                  data-slot="carousel-item"
                  className="min-w-0 shrink-0 grow-0 basis-1/3 pt-4"
                >
                  <button
                    type="button"
                    aria-label={`Show the review by ${review.author}`}
                    aria-current={isSelected}
                    onClick={() => onSelect(idx)}
                    className={cn(
                      "raised-card flex h-full w-full flex-col justify-between gap-3 rounded-3xl p-5 text-left transition-[opacity,box-shadow] duration-300 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isSelected
                        ? "opacity-100 shadow-md"
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken">
                          <Image
                            src={review.avatar}
                            alt=""
                            width={32}
                            height={32}
                            className="aspect-square size-full rounded-full object-cover"
                          />
                        </span>
                        <span className="flex flex-col text-sm">
                          <span className="font-medium">{review.author}</span>
                          <span className="text-muted-foreground">
                            {review.location}
                          </span>
                        </span>
                      </span>
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
                    </span>
                    <span className="line-clamp-3 text-sm leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground figures">
            {String(selectedIdx + 1).padStart(2, "0")} /{" "}
            {String(reviews.length).padStart(2, "0")}
          </span>
          <span className="flex gap-2">
            <button
              type="button"
              data-slot="carousel-previous"
              aria-label="Previous slide"
              onClick={onPrev}
              className="group/button inline-flex size-9 shrink-0 rotate-90 items-center justify-center rounded-full border border-foreground/25 bg-transparent text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              type="button"
              data-slot="carousel-next"
              aria-label="Next slide"
              onClick={onNext}
              className="group/button inline-flex size-9 shrink-0 rotate-90 items-center justify-center rounded-full border border-foreground/25 bg-transparent text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
              <span className="sr-only">Next slide</span>
            </button>
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}
