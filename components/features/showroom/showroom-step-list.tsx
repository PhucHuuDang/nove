"use client"

import { useRef } from "react"
import { Bean, Coffee, Disc3, Milk } from "lucide-react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"

import { ParallaxImage } from "@/components/shared/parallax-image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { useWide } from "@/hooks/use-wide"
import { pillBadge, SCRUB_SPRING } from "@/lib/pill-variants"

import { SHOWROOM_STEPS } from "./showroom-data"

const ICONS = [Bean, Disc3, Coffee, Milk]

/** Four step cards that fan out vertically, align mid-scroll, then fan up. */
export function ShowroomStepList() {
  const ref = useRef<HTMLOListElement>(null)
  const reduced = useReducedMotion() ?? false
  const wide = useWide()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const progress = useSpring(scrollYProgress, SCRUB_SPRING)

  return (
    <ol
      ref={ref}
      className="mt-10 grid gap-x-3 gap-y-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-4"
    >
      {SHOWROOM_STEPS.map((step, i) => (
        <ScrollReveal
          key={step.title}
          as="li"
          delayMs={80 * i}
          className="sm:row-span-4 sm:grid sm:grid-rows-subgrid sm:gap-0"
        >
          <StepCard index={i} progress={progress} still={reduced || !wide} />
        </ScrollReveal>
      ))}
    </ol>
  )
}

interface StepCardProps {
  index: number
  progress: MotionValue<number>
  still: boolean
}

function StepCard({ index, progress, still }: StepCardProps) {
  const step = SHOWROOM_STEPS[index]
  const Icon = ICONS[index]
  const y = useTransform(
    progress,
    [0, 0.38, 0.62, 1],
    still ? [0, 0, 0, 0] : [56 * index, 0, 0, -40 * index]
  )

  return (
    <motion.div
      style={{ y }}
      className="flex h-full flex-col rounded-3xl bg-card p-2 sm:row-span-4 sm:grid sm:grid-rows-subgrid sm:gap-0"
    >
      <div className="flex items-start justify-between px-3 pt-3 md:px-4 md:pt-4">
        <span className={pillBadge({ figure: true })}>Step 0{index + 1}</span>
        <Icon
          aria-hidden="true"
          strokeWidth={1.25}
          className="size-9 text-foreground/20"
        />
      </div>
      <h3 className="mt-6 px-3 text-xl leading-snug md:px-4 md:text-2xl">
        {step.title}
      </h3>
      <p className="mt-2 px-3 pb-6 text-base text-muted-foreground md:px-4">
        {step.text}
      </p>
      <div className="relative isolate mt-auto aspect-4/3 overflow-hidden rounded-2xl">
        <ParallaxImage
          src={step.photo}
          alt={step.alt}
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
        />
      </div>
    </motion.div>
  )
}
