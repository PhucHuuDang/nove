"use client"

import { useId, useRef } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type Variant = "segmented" | "filled"

const ROOT: Record<Variant, string> = {
  segmented:
    "group/toggle-group flex w-fit flex-row items-center gap-0 rounded-full bg-muted p-1",
  filled: "group/toggle-group flex w-fit flex-row items-center gap-1",
}

const ITEM_BASE =
  "group/toggle relative isolate inline-flex shrink-0 items-center justify-center gap-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors outline-none focus:z-10 focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const ITEM: Record<Variant, string> = {
  segmented:
    "h-11 min-w-11 bg-transparent px-5 text-muted-foreground hover:bg-transparent hover:text-foreground data-[state=on]:text-foreground",
  filled:
    "h-9 min-w-9 bg-card px-4 hover:bg-muted hover:text-foreground data-[state=on]:text-primary-foreground",
}

const PILL: Record<Variant, string> = {
  segmented: "inset-0 bg-popover shadow-sm",
  filled: "-inset-px bg-primary",
}

const SLIDE = { type: "spring" as const, duration: 0.4, bounce: 0.15 }

interface SlidingToggleGroupProps {
  label: string
  variant: Variant
  value: string
  options: { value: string; label: React.ReactNode }[]
  onValueChange: (value: string) => void
  className?: string
}

/** Single-select pill group whose active background slides between items. */
export function SlidingToggleGroup({
  label,
  variant,
  value,
  options,
  onValueChange,
  className,
}: SlidingToggleGroupProps) {
  const pillId = useId()
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0
    if (!step) return
    event.preventDefault()
    const next = (index + step + options.length) % options.length
    refs.current[next]?.focus()
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      data-slot="toggle-group"
      data-variant={variant}
      className={cn(ROOT[variant], className)}
    >
      {options.map((option, i) => {
        const on = option.value === value
        return (
          <button
            key={option.value}
            ref={(el) => {
              refs.current[i] = el
            }}
            type="button"
            role="radio"
            aria-checked={on}
            data-state={on ? "on" : "off"}
            tabIndex={on ? 0 : -1}
            onClick={() => onValueChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, i)}
            className={cn(ITEM_BASE, ITEM[variant])}
          >
            {on ? (
              <motion.span
                aria-hidden="true"
                layoutId={pillId}
                transition={SLIDE}
                className={cn("absolute -z-10 rounded-full", PILL[variant])}
              />
            ) : null}
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
