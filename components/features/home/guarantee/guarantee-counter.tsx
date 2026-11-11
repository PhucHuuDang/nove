"use client"

import { useEffect, useRef, useState } from "react"

interface GuaranteeCounterProps {
  target: number
  minWidth?: string
  durationMs?: number
}

export function GuaranteeCounter({
  target,
  minWidth = "0.56em",
  durationMs = 1200,
}: GuaranteeCounterProps) {
  const [val, setVal] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          observer.unobserve(el)

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVal(target)
            return
          }

          let startTime: number | null = null
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / durationMs, 1)
            const ease = 1 - Math.pow(1 - progress, 4)
            setVal(Math.round(target * ease))
            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setVal(target)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, durationMs])

  return (
    <span ref={spanRef} className="inline-block" style={{ minWidth }}>
      {val}
    </span>
  )
}
