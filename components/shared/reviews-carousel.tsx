"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import type { Review } from "@/types/review"
import { cn } from "@/lib/utils"

interface ReviewsCarouselProps {
  reviews: Review[]
  className?: string
}

export function ReviewsCarousel({ reviews, className }: ReviewsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (reviews.length === 0) return null

  const currentFormatted = String(selectedIndex + 1).padStart(2, "0")
  const totalFormatted = String(reviews.length).padStart(2, "0")

  return (
    <div className={cn("space-y-6", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="min-w-0 flex-[0_0_100%] pr-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="flex h-full flex-col justify-between rounded-xl border border-border/70 bg-card p-6">
                <p className="text-base leading-relaxed font-light text-foreground/90">
                  “{rev.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm leading-none font-medium">
                      {rev.name}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {rev.city} · {rev.model}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="font-mono text-xs text-muted-foreground">
          {currentFormatted} / {totalFormatted}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
