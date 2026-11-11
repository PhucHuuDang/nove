"use client"

import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface ProductHeroFadeTextProps {
  value: string
  className?: string
  children: React.ReactNode
}

const FADE_EASE = [0.22, 1, 0.36, 1] as const

export function ProductHeroFadeText({
  value,
  className,
  children,
}: ProductHeroFadeTextProps) {
  return (
    <div className={cn("grid", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={value}
          className="[grid-area:1/1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: FADE_EASE }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
