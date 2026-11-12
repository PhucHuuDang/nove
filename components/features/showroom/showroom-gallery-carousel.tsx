"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { pillButton } from "@/lib/pill-variants"

import { SHOWROOM_CAROUSEL } from "./showroom-data"
import { ShowroomPlaceCaption } from "./showroom-place-caption"

const NAV = pillButton({
  variant: "outline",
  size: "icon",
  className: "touch-manipulation",
})

/** Swipeable photo strip shown below the `lg` breakpoint. */
export function ShowroomGalleryCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ align: "start" })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const sync = useCallback(() => {
    if (!api) return
    setCanPrev(api.canScrollPrev())
    setCanNext(api.canScrollNext())
  }, [api])

  useEffect(() => {
    if (!api) return
    api.on("init", sync).on("reInit", sync).on("select", sync)
    queueMicrotask(sync)
    return () => {
      api.off("init", sync).off("reInit", sync).off("select", sync)
    }
  }, [api, sync])

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of the showroom"
      className="relative -mx-3 mt-10 md:-mx-5 md:mt-14 lg:hidden"
    >
      <div ref={viewportRef} className="overflow-hidden">
        <div className="ms-0 flex">
          {SHOWROOM_CAROUSEL.map((place) => (
            <div
              key={place.title}
              role="group"
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-auto ps-3 last:pe-3 md:ps-5 md:last:pe-5"
            >
              <div className="relative aspect-4/5 w-72 overflow-hidden rounded-2xl">
                <Image
                  src={place.src}
                  alt={place.alt}
                  fill
                  sizes="18rem"
                  className="object-cover"
                />
              </div>
              <ShowroomPlaceCaption title={place.title} note={place.note} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2 px-3 md:px-5">
        <button
          type="button"
          className={NAV}
          disabled={!canPrev}
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft aria-hidden="true" className="rtl:rotate-180" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          type="button"
          className={NAV}
          disabled={!canNext}
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight aria-hidden="true" className="rtl:rotate-180" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  )
}
