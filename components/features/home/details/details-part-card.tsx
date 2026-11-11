"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

import { type DetailPart } from "./details-data"
import { usePointerTilt, FloatingPartImage } from "./details-tilt"
import { cn } from "@/lib/utils"

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })
  const reduced = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2.4 * (reduced ? 0 : 1),
      delay: 0.3,
      ease: "linear",
      onUpdate: (latest) => setVal(Math.floor(latest)),
    })
    return () => controls.stop()
  }, [inView, reduced, to])

  return <span ref={ref}>{String(val).padStart(2, "0")}</span>
}

interface DetailsPartCardProps {
  part: DetailPart
  image: { src: string; alt: string; width: number; height: number }
  count?: boolean
  place?: string
}

export function DetailsPartCard({
  part,
  image,
  count = false,
  place = "top-[11%] right-[3%] w-[44%]",
}: DetailsPartCardProps) {
  const { x, y, handlers } = usePointerTilt()

  return (
    <article
      {...handlers}
      className="relative isolate flex h-full min-h-64 flex-col overflow-hidden rounded-3xl bg-card p-6.5 md:min-h-80 md:p-7.5"
    >
      <p
        aria-hidden="true"
        className="-mt-1 -ml-0.5 font-mono text-6xl leading-none tracking-tighter text-foreground/10 figures"
      >
        {count ? <CountUp to={Number(part.figure)} /> : part.figure}
        <span className="ml-1 text-lg tracking-normal">{part.unit}</span>
      </p>

      <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
        <span className="underline decoration-muted-foreground/40 underline-offset-2">
          {part.label}
        </span>
        <span className="sr-only">
          : {part.figure} {part.unit}
        </span>
        <br />
        Most use <span className="font-mono figures">{part.most}</span>
      </p>

      <FloatingPartImage
        image={image}
        x={x}
        y={y}
        sizes="(min-width: 64rem) 16vw, 40vw"
        delay={count ? 1.2 : 0.6}
        className={cn(place, "scale-90 max-md:w-[38%]")}
      />

      <div className="relative mt-auto max-w-60 pt-12">
        <h3 className="text-xl leading-snug">{part.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {part.text}
        </p>
      </div>
    </article>
  )
}
