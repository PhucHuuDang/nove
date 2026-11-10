"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  start?: number
  durationMs?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  start = 0,
  durationMs = 1200,
  prefix = "",
  suffix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / durationMs, 1)
      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4)
      const current = start + (end - start) * ease

      setValue(current)

      if (progress < 1) {
        animId = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    animId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animId)
  }, [hasStarted, start, end, durationMs])

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()

  return (
    <span ref={containerRef} className={cn("font-mono", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
