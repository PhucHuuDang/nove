import Link from "next/link"
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
  return (
    <div
      role="radiogroup"
      aria-label="Model"
      className="flex w-full max-w-sm flex-row items-center rounded-full bg-muted p-1"
    >
      {MODELS.map((model) => {
        const isActive = model.slug === currentSlug
        return (
          <Link
            key={model.slug}
            href={`/shop/${model.slug}`}
            role="radio"
            aria-checked={isActive}
            className={cn(
              "relative inline-flex h-9 flex-1 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
              isActive
                ? "bg-popover text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {model.label}
          </Link>
        )
      })}
    </div>
  )
}
