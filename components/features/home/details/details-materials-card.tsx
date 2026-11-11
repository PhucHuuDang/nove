"use client"

import { DETAILS_DATA } from "./details-data"
import { usePointerTilt, FloatingPartImage } from "./details-tilt"

export function DetailsMaterialsCard() {
  const { x, y, handlers } = usePointerTilt()

  return (
    <article
      {...handlers}
      className="relative isolate flex h-full min-h-64 flex-col overflow-hidden rounded-3xl bg-card p-6.5 md:min-h-80 md:p-7.5"
    >
      <div className="max-w-60">
        <h3 className="text-xl leading-snug">{DETAILS_DATA.materials.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {DETAILS_DATA.materials.text}
        </p>
      </div>

      <FloatingPartImage
        image={DETAILS_DATA.art.swatches}
        x={x}
        y={y}
        sizes="(min-width: 64rem) 12vw, 35vw"
        delay={1.8}
        className="right-[9%] bottom-[10%] w-[22%] md:w-[28%]"
      />
    </article>
  )
}
