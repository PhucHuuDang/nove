"use client"

import Image from "next/image"
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"

import { SCRUB_SPRING } from "@/lib/pill-variants"

/**
 * Full-bleed founders photo. It starts inset with rounded corners and a slight
 * zoom, then opens to the screen edges over the first 600px of scrolling.
 */
export function AboutHeroImage() {
  const still = useReducedMotion()
  const { scrollY } = useScroll()
  const inset = useTransform(scrollY, [0, 600], still ? [0, 0] : [1, 0])
  const edge = useSpring(inset, SCRUB_SPRING)
  const clipPath = useMotionTemplate`inset(0px calc(var(--edge) * ${edge}) 0px calc(var(--edge) * ${edge}) round calc(1.5rem * ${edge}))`
  const scale = useTransform(edge, [0, 1], [1, 1.12])

  return (
    <motion.div
      style={{ clipPath }}
      className="relative mt-10 aspect-square w-full overflow-hidden [--edge:0.75rem] sm:aspect-4/3 md:mt-14 md:aspect-16/10 md:[--edge:1.25rem] lg:max-h-[60rem] lg:[--edge:calc(var(--bleed,0px)+min(8%,10.25rem))]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/about/founders.jpg"
          alt="The barista and the engineer at the workshop bench, looking at a Nove with its side panel open"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  )
}
