"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { SectionLabel } from "@/components/shared/section-label"

const BASE = "https://nove-nextjs-template.vercel.app"

const SLIDES = [
  {
    image: `${BASE}/images/showroom/window.jpg`,
    title: "By the window",
    subtitle: "A seat for the coffee after",
  },
  {
    image: `${BASE}/images/showroom/counter.jpg`,
    title: "At the machine",
    subtitle: "You make each coffee yourself",
  },
  {
    image: `${BASE}/images/showroom/trying.jpg`,
    title: "The counter",
    subtitle: "Try each model yourself",
  },
  {
    image: `${BASE}/images/showroom/bench.jpg`,
    title: "The workshop",
    subtitle: "Where we service and repair them",
  },
  {
    image: `${BASE}/images/showroom/storefront.jpg`,
    title: "From the street",
    subtitle: "Via Nizza 45, Turin",
  },
]

export function ShowroomGallery() {
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

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
              Inside Via Nizza
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 font-mono text-xs text-muted-foreground">
              0{selectedIndex + 1} / 0{SLIDES.length}
            </span>
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

        <div className="mt-8 overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex">
            {SLIDES.map((slide) => (
              <div
                key={slide.title}
                className="relative aspect-16/10 min-w-0 flex-[0_0_100%] bg-muted md:aspect-21/9"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-white md:p-10">
                  <p className="font-mono text-xs tracking-wider text-white/70 uppercase">
                    {slide.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-light md:text-2xl">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
