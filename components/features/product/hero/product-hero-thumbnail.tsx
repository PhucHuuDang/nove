"use client"

import Image from "next/image"
import { motion } from "motion/react"

interface ProductHeroThumbnailProps {
  currentSlug: "one" | "duo" | "pro"
}

const MACHINES = [
  {
    slug: "one" as const,
    src: "/images/home/machine-one.png",
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    width: 1101,
    height: 1400,
    heightPct: "74.60272479564031%",
    aspectRatio: "1101 / 1400",
  },
  {
    slug: "duo" as const,
    src: "/images/home/machine.png",
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    width: 1116,
    height: 1400,
    heightPct: "92%",
    aspectRatio: "1116 / 1400",
  },
  {
    slug: "pro" as const,
    src: "/images/home/machine-pro.png",
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    width: 1356,
    height: 1400,
    heightPct: "87.83150442477876%",
    aspectRatio: "1356 / 1400",
  },
] as const

const FADE_TRANSITION = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
}

export function ProductHeroThumbnail({
  currentSlug,
}: ProductHeroThumbnailProps) {
  return (
    <div className="aspect-square w-24 shrink-0 md:w-32 lg:w-28 xl:w-36 2xl:w-44">
      <div className="relative z-10 size-full">
        {MACHINES.map((machine) => {
          const isActive = machine.slug === currentSlug
          return (
            <motion.div
              key={machine.slug}
              inert={!isActive}
              aria-hidden={!isActive}
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={FADE_TRANSITION}
              className="absolute bottom-0 left-1/2 max-w-full -translate-x-1/2"
              style={{
                height: machine.heightPct,
                aspectRatio: machine.aspectRatio,
              }}
            >
              <div className="absolute inset-x-[6%] bottom-0 h-[8%] translate-y-1/2 rounded-full bg-foreground/15 blur-xl" />
              <div className="relative size-full">
                <Image
                  src={machine.src}
                  alt={machine.alt}
                  width={machine.width}
                  height={machine.height}
                  priority={isActive}
                  sizes="(min-width: 64rem) 30vw, 70vw"
                  className="size-full object-contain object-bottom mix-blend-normal"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
