"use client"

import { AnimatePresence, motion } from "motion/react"

import { EASE_SOFT } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

interface CheckoutCollapseProps {
  open: boolean
  className?: string
  children: React.ReactNode
}

/** Folds a block of fields open and shut by animating its height. */
export function CheckoutCollapse({
  open,
  className,
  children,
}: CheckoutCollapseProps) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_SOFT }}
          className={cn("-m-1 overflow-hidden p-1", className)}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
