"use client"

import {
  motion,
  useTransform,
  useMotionTemplate,
  cubicBezier,
  easeInOut,
  type MotionValue,
} from "motion/react"

import { EASE_SOFT, NOVE_ONE, NOVE_DUO } from "./drinks-data"
import { cn } from "@/lib/utils"

const ease = cubicBezier(...EASE_SOFT)

interface DrinksFloatingLabelProps {
  text: string
  progress: MotionValue<number>
  start: number
  className?: string
}

function DrinksAnimatedWord({
  word,
  progress,
  start,
}: {
  word: string
  progress: MotionValue<number>
  start: number
}) {
  const l = useTransform(progress, [start, start + 0.07], [0, 1], { ease })
  const blurVal = useTransform(l, [0, 1], [6, 0])
  const yVal = useTransform(l, [0, 1], [6, 0])

  return (
    <motion.span
      style={{
        opacity: l,
        filter: useMotionTemplate`blur(${blurVal}px)`,
        transform: useMotionTemplate`translateY(${yVal}px)`,
      }}
      className="me-[0.4em] inline-block last:me-0"
    >
      {word}
    </motion.span>
  )
}

export function DrinksFloatingLabel({
  text,
  progress,
  start,
  className,
}: DrinksFloatingLabelProps) {
  return (
    <p
      className={cn(
        "absolute top-[calc(62%_-_min(7.5cqw,5cqh)_-_1.75rem)] z-10 flex font-mono text-xs text-muted-foreground figures lg:text-sm",
        className
      )}
    >
      {text.split(" ").map((word, idx) => (
        <DrinksAnimatedWord
          key={word}
          word={word}
          progress={progress}
          start={start + 0.025 * idx}
        />
      ))}
    </p>
  )
}

interface DrinksMachineCaptionProps {
  progress: MotionValue<number>
}

export function DrinksMachineCaption({ progress }: DrinksMachineCaptionProps) {
  const oneOpacity = useTransform(progress, [0.3, 0.5], [1, 0], {
    ease: easeInOut,
  })
  const oneBlur = useTransform(progress, [0.3, 0.5], [0, 16], {
    ease: easeInOut,
  })

  const duoOpacity = useTransform(progress, [0.5, 0.7], [0, 1], {
    ease: easeInOut,
  })
  const duoBlur = useTransform(progress, [0.5, 0.7], [16, 0], {
    ease: easeInOut,
  })

  return (
    <div className="absolute top-[90%] left-1/2 z-30 grid -translate-x-1/2 text-center whitespace-nowrap max-lg:hidden">
      <motion.p
        style={{
          opacity: oneOpacity,
          filter: useMotionTemplate`blur(${oneBlur}px)`,
        }}
        className="col-start-1 row-start-1 text-sm"
      >
        <span className="font-medium">{NOVE_ONE.name}</span>
        <span className="text-muted-foreground"> · {NOVE_ONE.note} · </span>
        <span className="font-mono text-xs figures">{NOVE_ONE.price}</span>
      </motion.p>
      <motion.p
        style={{
          opacity: duoOpacity,
          filter: useMotionTemplate`blur(${duoBlur}px)`,
        }}
        className="col-start-1 row-start-1 text-sm"
      >
        <span className="font-medium">{NOVE_DUO.name}</span>
        <span className="text-muted-foreground"> · {NOVE_DUO.note} · </span>
        <span className="font-mono text-xs figures">{NOVE_DUO.price}</span>
      </motion.p>
    </div>
  )
}
