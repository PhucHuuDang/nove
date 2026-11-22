"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface ScrollEdges {
  start: boolean
  end: boolean
}

/** A dark, horizontally scrollable frame that fades whichever edge has more. */
export function ShopCompareScroller({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [edges, setEdges] = useState<ScrollEdges>()

  useEffect(() => {
    const scroller = ref.current
    if (!scroller) return

    const update = () =>
      setEdges({
        start: scroller.scrollLeft <= 1,
        end:
          scroller.scrollLeft + scroller.clientWidth >=
          scroller.scrollWidth - 1,
      })
    update()
    const observer = new ResizeObserver(update)
    observer.observe(scroller)
    scroller.addEventListener("scroll", update, { passive: true })
    return () => {
      observer.disconnect()
      scroller.removeEventListener("scroll", update)
    }
  }, [])

  const fitsWithoutScroll = edges?.start && edges.end

  return (
    <div className="dark overflow-hidden rounded-3xl bg-background text-foreground">
      <div
        ref={ref}
        tabIndex={fitsWithoutScroll ? undefined : 0}
        role="group"
        aria-label="The three models compared"
        className={cn(
          "overflow-x-auto rounded-3xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset",
          edges
            ? [
                !edges.start && "mask-l-from-85%",
                !edges.end && "mask-r-from-85%",
              ]
            : "max-md:mask-r-from-85%"
        )}
      >
        <div className="min-w-xl">{children}</div>
      </div>
    </div>
  )
}
