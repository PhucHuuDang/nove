"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

import { EASE_SOFT } from "@/lib/pill-variants"

/** Counts from `from` to `to` once the number scrolls into view. */
export function AboutCountUp({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })
  const still = useReducedMotion()
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration: still ? 0 : 1.6,
      ease: EASE_SOFT,
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, still, from, to])

  return <span ref={ref}>{value}</span>
}
