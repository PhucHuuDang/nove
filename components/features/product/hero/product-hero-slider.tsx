"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Slide {
  id: string
  label: string
  image: string
  alt: string
  title: string
  description: string
}

interface ProductHeroSliderProps {
  slides: Slide[]
}

export function ProductHeroSlider({ slides }: ProductHeroSliderProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-card md:aspect-4/3 lg:aspect-auto lg:h-full">
      {slides.map((slide, idx) => {
        const isActive = activeIdx === idx
        const isBox = slide.id === "box"

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-soft",
              isBox ? "bg-card" : "dark text-foreground",
              isActive
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            )}
          >
            {isBox ? (
              <div className="absolute inset-x-8 top-14 bottom-36 grid md:bottom-40 lg:top-16 lg:bottom-44">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 64rem) 30vw, 70vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="(min-width: 64rem) 48vw, 95vw"
                  className="object-cover object-[90%_50%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-background/90 via-background/50 to-transparent" />
              </>
            )}

            <div className="absolute inset-x-6 bottom-14 text-center lg:bottom-18">
              <p className="text-3xl leading-tight md:text-4xl">
                <span className="font-mono figures">{slide.title}</span>
              </p>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground md:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        )
      })}

      {/* Slider Indicator Dots */}
      <div className="dark absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full bg-background/70 px-1 text-foreground backdrop-blur-sm lg:bottom-6">
        {slides.map((slide, idx) => {
          const isActive = activeIdx === idx
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={slide.label}
              aria-pressed={isActive}
              onClick={() => setActiveIdx(idx)}
              className="relative grid h-7 place-items-center rounded-full px-2.5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-soft",
                  isActive ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40"
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
