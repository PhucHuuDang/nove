"use client"

import { DETAILS_DATA } from "./details-data"
import { usePointerTilt, FloatingPartImage } from "./details-tilt"

export function DetailsExplodedCard() {
  const { x, y, handlers } = usePointerTilt()

  return (
    <article
      {...handlers}
      className="raised-card relative isolate flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-sm md:min-h-[36rem] md:p-8 lg:p-10"
    >
      <header className="max-w-md md:max-w-xs">
        <p className="text-sm font-medium text-muted-foreground">
          {DETAILS_DATA.eyebrow}
        </p>
        <h2
          id="details-heading"
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
        >
          {DETAILS_DATA.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          {DETAILS_DATA.lede}
        </p>
      </header>

      <FloatingPartImage
        image={DETAILS_DATA.art.exploded}
        x={x}
        y={y}
        sizes="(min-width: 64rem) 22vw, (min-width: 48rem) 32vw, 60vw"
        className="right-[7%] bottom-[7%] w-[30%] max-md:relative max-md:right-auto max-md:bottom-auto max-md:mx-auto max-md:mt-10 max-md:w-3/5"
      />
    </article>
  )
}
