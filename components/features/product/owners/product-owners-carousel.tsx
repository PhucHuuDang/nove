"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { cn } from "@/lib/utils"

interface ProductOwnersCarouselProps {
  reviews: MachinePageData["owners"]["reviews"]
  current: number
  setApi: (api: CarouselApi) => void
  api: CarouselApi | undefined
}

export function ProductOwnersCarousel({
  reviews,
  current,
  setApi,
  api,
}: ProductOwnersCarouselProps) {
  return (
    <ScrollReveal delayMs={120} className="flex flex-col">
      <Carousel
        setApi={setApi}
        orientation="vertical"
        opts={{
          align: "start",
          loop: reviews.length > 3,
        }}
        className="w-full"
      >
        <CarouselContent className="h-[27rem] md:h-[30rem]">
          {reviews.map((review, idx) => {
            const isSelected = current === idx
            return (
              <CarouselItem key={review.author} className="basis-1/3">
                <button
                  type="button"
                  onClick={() => api?.scrollTo(idx)}
                  aria-label={`Show the review by ${review.author}`}
                  aria-current={isSelected}
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
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {reviews.length > 3 ? (
          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="font-mono text-sm text-muted-foreground figures">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            <span className="flex gap-2">
              <CarouselPrevious className="static size-9 translate-x-0 border-foreground/25 bg-transparent hover:border-foreground/60 hover:bg-transparent" />
              <CarouselNext className="static size-9 translate-x-0 border-foreground/25 bg-transparent hover:border-foreground/60 hover:bg-transparent" />
            </span>
          </div>
        ) : null}
      </Carousel>
    </ScrollReveal>
  )
}
