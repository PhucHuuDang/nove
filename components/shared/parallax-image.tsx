"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
}

/** Fills its (relative, isolated) parent and drifts -7% → 7% while scrolling past. */
export function ParallaxImage({
  src,
  alt,
  sizes,
  priority,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    still ? ["0%", "0%"] : ["-7%", "7%"]
  )

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-115">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
