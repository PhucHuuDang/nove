"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
  as?: React.ElementType
  style?: React.CSSProperties
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  as: Component = "div",
  style,
}: ScrollRevealProps) {
  const [reveal, setReveal] = useState<"pending" | "hidden" | "shown">(
    "pending"
  )
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal("shown")
          observer.disconnect()
        } else {
          setReveal((prev) => (prev === "pending" ? "hidden" : prev))
        }
      },
      { rootMargin: "-80px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      data-reveal={reveal}
      style={{
        ...(delayMs ? { transitionDelay: `${delayMs}ms` } : {}),
        ...style,
      }}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-soft data-[reveal=hidden]:opacity-0 motion-safe:data-[reveal=hidden]:translate-y-2 motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </Component>
  )
}
