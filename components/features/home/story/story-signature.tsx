"use client"

import { useRef } from "react"
import { useInView } from "motion/react"

import { cn } from "@/lib/utils"

/** "Nove" written by hand; the strokes draw in once half of it is visible. */
export function StorySignature({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const drawn = useInView(ref, { once: true, amount: 0.5 })

  return (
    <svg
      ref={ref}
      data-drawn={drawn}
      viewBox="0 0 160 64"
      width={160}
      height={64}
      fill="none"
      className={cn(
        "group/sig stroke-muted-foreground [&_path]:transition-[stroke-dashoffset] [&_path]:ease-soft motion-reduce:[&_path]:transition-none",
        className
      )}
      role="img"
      aria-label="Nove, signed by hand"
    >
      <path
        pathLength={1}
        strokeDasharray="1 2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-500 [stroke-dashoffset:1.01] group-data-[drawn=true]/sig:[stroke-dashoffset:0] motion-reduce:[stroke-dashoffset:0]"
        d="M10 54 C 12 40, 15 22, 20 8 C 23 22, 29 42, 38 56 C 40 42, 43 24, 48 10"
      />
      <path
        pathLength={1}
        strokeDasharray="1 2"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="delay-500 duration-700 [stroke-dashoffset:1.01] group-data-[drawn=true]/sig:[stroke-dashoffset:0] motion-reduce:[stroke-dashoffset:0]"
        d="M70 34 C 64 30, 56 38, 60 46 C 64 52, 74 46, 72 38 C 70 32, 62 34, 66 42 C 70 48, 78 48, 84 40 C 86 46, 88 52, 92 48 C 96 42, 98 34, 100 30 C 100 40, 104 48, 112 44 C 118 40, 116 32, 110 34 C 104 36, 106 46, 116 46 C 126 46, 136 36, 150 28"
      />
    </svg>
  )
}
