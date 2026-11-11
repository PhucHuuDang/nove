"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"

import { DETAILS_DATA } from "./details-data"

export function DetailsStoryCard() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-12, 12])

  return (
    <article className="dark relative isolate flex h-full min-h-[26rem] flex-col overflow-hidden rounded-3xl bg-background p-6.5 text-foreground md:p-7.5">
      <div
        ref={containerRef}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-4">
          <Image
            src={DETAILS_DATA.art.kitchen.src}
            alt={DETAILS_DATA.art.kitchen.alt}
            width={DETAILS_DATA.art.kitchen.width}
            height={DETAILS_DATA.art.kitchen.height}
            sizes="(min-width: 64rem) 25vw, (min-width: 48rem) 50vw, 100vw"
            className="size-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-linear-to-b from-background/60 to-transparent" />

      <h3 className="text-xl leading-snug">{DETAILS_DATA.story.title}</h3>
      <p className="mt-2 max-w-60 text-sm leading-relaxed">
        {DETAILS_DATA.story.text}
      </p>
    </article>
  )
}
