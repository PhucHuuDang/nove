"use client"

import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface ProductHeroRollingTextProps {
  value: string
  delay?: number
  className?: string
}

const ROLL_EASE = [0.23, 1, 0.32, 1] as const

export function ProductHeroRollingText({
  value,
  delay = 0,
  className,
}: ProductHeroRollingTextProps) {
  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          className="inline-block"
          initial={{ opacity: 0, y: "100%", filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(2px)" }}
          transition={{ duration: 0.26, ease: ROLL_EASE, delay }}
        >
          {value.split(",").map((part, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 ? <span className="-mx-[0.2em]">,</span> : null}
              {part}
            </React.Fragment>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
