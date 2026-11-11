"use client"

import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface ProductHeroModelSwitchProps {
  currentSlug: "one" | "duo" | "pro"
}

const MODELS = [
  { slug: "one", label: "One" },
  { slug: "duo", label: "Duo" },
  { slug: "pro", label: "Pro" },
] as const

export function ProductHeroModelSwitch({
  currentSlug,
}: ProductHeroModelSwitchProps) {
  const router = useRouter()

  return (
    <div
      role="radiogroup"
      aria-label="Model"
      data-slot="toggle-group"
      data-slide="true"
      data-variant="segmented"
      data-size="sm"
      data-spacing="2"
      data-orientation="horizontal"
      style={{ outline: "none", "--gap": 2 } as React.CSSProperties}
      className="group/toggle-group flex w-full max-w-sm flex-row items-center gap-[--spacing(var(--gap))] data-[variant=segmented]:gap-0 data-[variant=segmented]:rounded-full data-[variant=segmented]:bg-muted data-[variant=segmented]:p-1 data-vertical:flex-col data-vertical:items-stretch"
    >
      {MODELS.map((model) => {
        const isActive = model.slug === currentSlug
        return (
          <button
            key={model.slug}
            type="button"
            role="radio"
            aria-checked={isActive}
            data-state={isActive ? "on" : "off"}
            onClick={() => {
              if (!isActive) {
                router.push(`/shop/${model.slug}`, { scroll: false })
              }
            }}
            className={cn(
              "group/toggle relative isolate inline-flex h-9 min-w-9 flex-1 items-center justify-center gap-1 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="product-hero-active-model-pill"
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-popover shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 38,
                  mass: 0.8,
                }}
              />
            ) : null}
            {model.label}
          </button>
        )
      })}
    </div>
  )
}
