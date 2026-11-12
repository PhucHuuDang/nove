"use client"

import { useRef } from "react"
import Image from "next/image"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"

import { useWide } from "@/hooks/use-wide"
import { SCRUB_SPRING } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

import { SHOWROOM_FAN } from "./showroom-data"
import { ShowroomPlaceCaption } from "./showroom-place-caption"

type FanItem = (typeof SHOWROOM_FAN)[number]

const SIZES = "(min-width: 1024px) 30vw, 18rem"

/** At `lg`: stacked photos that slide apart into a row as the section centres. */
export function ShowroomGalleryFan() {
  const ref = useRef<HTMLUListElement>(null)
  const reduced = useReducedMotion() ?? false
  const wide = useWide()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })
  const progress = useSpring(scrollYProgress, SCRUB_SPRING)

  return (
    <ul ref={ref} className="mt-14 hidden items-center justify-center lg:flex">
      {SHOWROOM_FAN.map((item) => (
        <FanPhoto
          key={item.title}
          item={item}
          progress={progress}
          still={reduced || !wide}
        />
      ))}
    </ul>
  )
}

interface FanPhotoProps {
  item: FanItem
  progress: MotionValue<number>
  still: boolean
}

function FanPhoto({ item, progress, still }: FanPhotoProps) {
  const x = useTransform(
    progress,
    [0, 1],
    still ? ["0%", "0%"] : [`${-55 * item.side}%`, "0%"]
  )
  const rotate = useTransform(
    progress,
    [0, 1],
    still ? [0, 0] : [4 * item.side, 0]
  )
  const opacity = useTransform(progress, [0.6, 1], still ? [1, 1] : [0, 1])

  return (
    <motion.li
      style={{ x, rotate }}
      className={cn("relative -mx-3 shrink-0", item.z, item.width)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl shadow-xl ring-4 ring-background",
          item.aspect
        )}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={SIZES}
          className="object-cover"
        />
      </div>
      <motion.div
        style={{ opacity }}
        className={item.side > 0 ? "ps-6" : undefined}
      >
        <ShowroomPlaceCaption title={item.title} note={item.note} />
      </motion.div>
    </motion.li>
  )
}
