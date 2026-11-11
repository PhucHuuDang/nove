"use client"

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { ADDONS_DATA, AddonItem } from "./addons-data"
import { AddonCard } from "./addon-card"

export function AddonsCarousel() {
  const stripRef = useRef<HTMLUListElement>(null)
  const [scrollState, setScrollState] = useState({
    fill: 0.25,
    start: true,
    end: false,
    overflow: true,
  })
  const [addedId, setAddedId] = useState<string | null>(null)
  const { addItem } = useCart()

  const updateScroll = useCallback(() => {
    const el = stripRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    const ratio = maxScroll > 0 ? Math.min(el.scrollLeft / maxScroll, 1) : 1
    const baseFraction = 1 / ADDONS_DATA.items.length
    setScrollState({
      fill:
        Math.round((baseFraction + (1 - baseFraction) * ratio) * 1000) / 1000,
      start: el.scrollLeft <= 2,
      end: el.scrollLeft >= maxScroll - 2,
      overflow: maxScroll > 2,
    })
  }, [])

  const handleScrollBy = (direction: -1 | 1) => {
    const el = stripRef.current
    const firstChild = el?.firstElementChild as HTMLElement | null
    if (!el || !firstChild) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    el.scrollBy({
      left: direction * (firstChild.offsetWidth + gap),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  useLayoutEffect(() => {
    const el = stripRef.current
    if (!el) return
    let rafId = 0
    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateScroll)
    }
    updateScroll()
    el.addEventListener("scroll", onScrollOrResize, { passive: true })
    const observer = new ResizeObserver(onScrollOrResize)
    observer.observe(el)
    return () => {
      cancelAnimationFrame(rafId)
      el.removeEventListener("scroll", onScrollOrResize)
      observer.disconnect()
    }
  }, [updateScroll])

  useEffect(() => {
    if (!addedId) return
    const timer = setTimeout(() => setAddedId(null), 1600)
    return () => clearTimeout(timer)
  }, [addedId])

  const handleAdd = (item: AddonItem) => {
    addItem({
      slug: item.id,
      name: item.name,
      price: item.rawPrice,
      image: item.image.src,
    })
    setAddedId(item.id)
  }

  return (
    <>
      <div
        className={`col-start-2 row-start-2 mt-6 flex gap-2 md:col-span-2 md:col-start-1 md:row-start-1 md:mt-14 md:justify-between ${
          !scrollState.overflow ? "hidden" : ""
        }`}
      >
        <button
          type="button"
          data-slot="button"
          data-variant="default"
          data-size="icon"
          aria-label="Previous add-on"
          aria-controls="addons-strip"
          disabled={scrollState.start}
          onClick={() => handleScrollBy(-1)}
          className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground transition-all duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          data-slot="button"
          data-variant="default"
          data-size="icon"
          aria-label="Next add-on"
          aria-controls="addons-strip"
          disabled={scrollState.end}
          onClick={() => handleScrollBy(1)}
          className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-primary text-primary-foreground transition-all duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>

      <ul
        ref={stripRef}
        id="addons-strip"
        aria-label="Add-ons"
        className="col-span-2 row-start-1 -mx-3 mt-6 flex snap-x snap-mandatory scroll-px-3 [scrollbar-width:none] gap-4 overflow-x-auto overscroll-x-contain px-3 pt-20 max-md:after:w-[calc(100%-1rem-min(78vw,22rem))] max-md:after:shrink-0 md:row-start-2 md:-mx-5 md:mt-4 md:scroll-px-5 md:gap-5 md:px-5 md:pt-24 [&::-webkit-scrollbar]:hidden"
      >
        {ADDONS_DATA.items.map((item) => (
          <AddonCard
            key={item.id}
            item={item}
            isAdded={addedId === item.id}
            onAdd={() => handleAdd(item)}
          />
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="col-start-1 row-start-2 mt-6 mr-6 h-0.5 overflow-hidden bg-foreground/10 md:col-span-2 md:row-start-3 md:-mx-5 md:mt-10"
      >
        <div
          className="h-full origin-left bg-foreground motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-soft"
          style={{ transform: `scaleX(${scrollState.fill})` }}
        />
      </div>
    </>
  )
}
