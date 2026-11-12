"use client"

import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollArcProps {
  className?: string
  /** Arc closes the section from below (curves up) instead of opening it. */
  close?: boolean
}

const ARC_GRADIENT =
  "bg-radial-[circle_1440px_at_var(--arc-x)_var(--arc-y)] from-card from-92% via-chart-2/70 via-97% to-transparent"
const SHIMMER_GRADIENT =
  "bg-radial-[circle_1440px_at_var(--arc-x)_var(--arc-y)] from-transparent from-92% via-chart-2/50 via-96% to-transparent to-99%"

/**
 * A soft arc behind a section. It rises into place as the section scrolls in,
 * blurs with scroll speed, and a shimmer band slides along it while scrolling.
 */
export function ScrollArc({ className, close = false }: ScrollArcProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: close ? ["start end", "end end"] : ["start end", "start 0.45"],
  })
  const settled = useMotionValue(1)
  const progress = reduceMotion ? settled : scrollYProgress

  const y = useTransform(progress, [0, 1], [close ? -72 : 72, 0])
  const opacity = useTransform(() => Math.min(progress.get() / 0.6, 1))

  const { scrollY } = useScroll()
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })
  const scrollSpeed = useSpring(useVelocity(scrollY), {
    stiffness: 200,
    damping: 30,
  })

  const filter = useTransform(() =>
    reduceMotion
      ? "none"
      : `blur(${Math.min(Math.abs(scrollSpeed.get()) / 250, 10)}px)`
  )
  const shift = useTransform(() => {
    if (reduceMotion) return 0
    const offset = (0.02 * smoothScrollY.get()) % 25
    return close ? 25 - offset : offset
  })
  const bandTransform = useTransform(() => `translateX(${shift.get()}%)`)
  const shimmerTransform = useTransform(
    () => `translateX(${-2 * shift.get()}%)`
  )

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 overflow-clip [--arc-x:50%]",
        close
          ? "mask-t-from-45% [--arc-y:calc(100%_-_1440px)]"
          : "mask-b-from-45% [--arc-y:1440px]",
        className
      )}
    >
      <motion.div className="absolute inset-0" style={{ y, opacity, filter }}>
        <div className={cn("absolute inset-0", ARC_GRADIENT)} />
        <motion.div
          style={{ transform: bandTransform }}
          className="absolute inset-y-0 -left-full w-[200%] [mask-image:repeating-linear-gradient(to_right,transparent,black_12.5%,transparent_25%)] will-change-transform"
        >
          <motion.div
            style={{ transform: shimmerTransform }}
            className={cn(
              "absolute inset-y-0 left-1/2 w-1/2 will-change-transform",
              SHIMMER_GRADIENT
            )}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
