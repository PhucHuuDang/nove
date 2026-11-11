"use client"

import Image from "next/image"
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react"

import { cn } from "@/lib/utils"

export function usePointerTilt() {
  const reduced = useReducedMotion()
  const motionX = useMotionValue(0)
  const motionY = useMotionValue(0)
  const springConfig = { stiffness: 80, damping: 20 }
  const x = useSpring(motionX, springConfig)
  const y = useSpring(motionY, springConfig)

  const handlers = {
    onPointerMove(e: React.PointerEvent<HTMLElement>) {
      if (reduced || e.pointerType !== "mouse") return
      const rect = e.currentTarget.getBoundingClientRect()
      motionX.set((e.clientX - rect.left) / rect.width - 0.5)
      motionY.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    onPointerLeave() {
      motionX.set(0)
      motionY.set(0)
    },
  }

  return { x, y, handlers }
}

interface FloatingPartImageProps {
  image: { src: string; alt: string; width: number; height: number }
  x: MotionValue<number>
  y: MotionValue<number>
  sizes: string
  className?: string
  delay?: number
}

export function FloatingPartImage({
  image,
  x,
  y,
  sizes,
  className,
  delay = 0,
}: FloatingPartImageProps) {
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5])
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4])
  const translateX = useTransform(x, [-0.5, 0.5], [-4, 4])

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        x: translateX,
        transformPerspective: 900,
      }}
      className={cn("pointer-events-none absolute -z-10", className)}
    >
      <div
        style={{ animationDelay: `${delay}s` }}
        className="motion-safe:animate-drift"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full drop-shadow-xl"
        />
      </div>
    </motion.div>
  )
}
