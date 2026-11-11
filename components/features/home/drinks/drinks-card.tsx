"use client"

import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useTransform,
  cubicBezier,
  type MotionValue,
} from "motion/react"

import {
  type Drink,
  DRINK_POSITIONS,
  NOVE_ONE,
  NOVE_DUO,
  EASE_SOFT,
} from "./drinks-data"

const ease = cubicBezier(...EASE_SOFT)

interface DrinksCardProps {
  drink: Drink
  index: number
  progress: MotionValue<number>
}

export function DrinksCard({ drink, index, progress }: DrinksCardProps) {
  const pos = DRINK_POSITIONS[index]
  const product = drink.models[0] === "one" ? NOVE_ONE : NOVE_DUO

  // Calculate entry progress for each item
  const t = useTransform(progress, [pos.start, pos.start + 0.14], [0, 1], {
    ease,
  })

  return (
    <motion.li
      style={
        {
          "--t": t,
          "--px": pos.phone.x,
          "--py": pos.phone.y,
          "--dx": pos.desk.x,
          "--dy": pos.desk.y,
        } as React.CSSProperties
      }
      className="absolute top-[calc(var(--y)*1%)] left-[calc(var(--x)*1%)] z-10 w-[44cqw] -translate-x-1/2 translate-y-[calc(-50%_+_(1_-_var(--t))_*_1rem)] scale-[calc(0.94_+_0.06_*_var(--t))] opacity-[calc(0.25_+_0.75_*_var(--t))] blur-[calc((1_-_var(--t))_*_8px)] will-change-transform [--x:var(--px)] [--y:var(--py)] lg:w-[26cqw] lg:[--x:var(--dx)] lg:[--y:var(--dy)]"
    >
      <Link
        href={product.href}
        className="group/item flex items-center gap-3 rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50 lg:gap-5"
      >
        <span className="relative block aspect-square w-[min(15cqw,10cqh)] shrink-0 overflow-hidden rounded-xl bg-card shadow-lg lg:w-[min(9cqw,15cqh)] lg:rounded-2xl">
          <Image
            src={drink.photo.src}
            alt=""
            width={drink.photo.width}
            height={drink.photo.height}
            sizes="(min-width: 64rem) 9vw, 15vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-soft group-hover/item:scale-105 motion-reduce:transition-none"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-sm leading-tight font-medium lg:text-lg">
            {drink.name}
          </span>
          <span className="mt-1 block text-sm text-muted-foreground max-lg:hidden">
            {drink.how}
          </span>
          <span className="mt-1 block font-mono text-xs text-muted-foreground figures underline decoration-foreground/30 underline-offset-4 group-hover/item:decoration-foreground max-lg:hidden">
            {product.cta} {product.price}
          </span>
        </span>
      </Link>
    </motion.li>
  )
}
