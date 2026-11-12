"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"

import { SCRUB_SPRING } from "@/lib/pill-variants"

import { ABOUT_STORY_PHOTOS } from "./about-data"

/** Two photos that start offset and settle level as the pair reaches centre. */
export function AboutStoryPhotos() {
  const ref = useRef<HTMLUListElement>(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })
  const progress = useSpring(scrollYProgress, SCRUB_SPRING)
  const first = useTransform(
    progress,
    [0, 1],
    still ? ["0%", "0%"] : ["-8%", "0%"]
  )
  const second = useTransform(
    progress,
    [0, 1],
    still ? ["0%", "0%"] : ["16%", "0%"]
  )

  return (
    <ul ref={ref} className="grid grid-cols-2 gap-3 md:gap-5">
      {ABOUT_STORY_PHOTOS.map((photo, i) => (
        <motion.li
          key={photo.src}
          style={{ y: i === 0 ? first : second }}
          className="relative aspect-3/4 overflow-hidden rounded-2xl lg:aspect-auto lg:h-full lg:min-h-128"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 64rem) 25vw, 50vw"
            className="object-cover"
          />
        </motion.li>
      ))}
    </ul>
  )
}
