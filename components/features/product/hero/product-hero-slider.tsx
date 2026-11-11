"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { MACHINE_PAGES_DATA } from "@/lib/data/product-pages-data"

interface ProductHeroSliderProps {
  currentSlug: "one" | "duo" | "pro"
}

const FADE_TRANSITION = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
}

const OBJECT_POSITIONS: Record<string, string> = {
  one: "90% 50%",
  duo: "80% 50%",
  pro: "90% 50%",
}

const MACHINE_SLUGS = ["one", "duo", "pro"] as const

export function ProductHeroSlider({ currentSlug }: ProductHeroSliderProps) {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)

  return (
    <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-card md:aspect-4/3 lg:aspect-auto lg:h-full">
      {MACHINE_SLUGS.map((slug) => {
        const machineData = MACHINE_PAGES_DATA[slug]
        return machineData.hero.slides.map((slide, slideIdx) => {
          const isActive = slug === currentSlug && slideIdx === activeSlideIdx
          const isBox = slide.id === "box"

          return (
            <motion.div
              key={`${slug}-${slide.id}`}
              inert={!isActive}
              aria-hidden={!isActive}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={FADE_TRANSITION}
              className={cn(
                "absolute inset-0",
                isBox ? "bg-card" : "dark text-foreground"
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
                    priority={isActive}
                    sizes="(min-width: 64rem) 48vw, 95vw"
                    className="object-cover"
                    style={{
                      objectPosition: OBJECT_POSITIONS[slug] ?? "50% 50%",
                    }}
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
            </motion.div>
          )
        })
      })}

      {/* Slider Indicator Dots */}
      <div className="dark absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full bg-background/70 px-1 text-foreground backdrop-blur-sm lg:bottom-6">
        {MACHINE_PAGES_DATA[currentSlug].hero.slides.map((slide, idx) => {
          const isSelected = activeSlideIdx === idx
          return (
            <button
              key={slide.id}
              type="button"
              aria-label={slide.label}
              aria-pressed={isSelected}
              onClick={() => setActiveSlideIdx(idx)}
              className="relative grid h-7 place-items-center rounded-full px-2.5 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-soft",
                  isSelected ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40"
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
