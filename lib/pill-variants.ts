import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Class recipes for the rounded-full buttons and badges used across the
 * marketing pages. Kept as class helpers (not components) so they can style
 * `Link`, `a`, and `button` elements alike. Output is passed through `cn` so a
 * variant's colour (e.g. `border-foreground/25`) replaces the base
 * `border-transparent` instead of losing to it in the cascade.
 */
const pillButtonRecipe = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        accent: "bg-accent text-accent-foreground hover:bg-accent/85",
        outline:
          "border-foreground/25 bg-transparent hover:border-foreground/60 hover:bg-transparent aria-expanded:border-foreground/60",
        surface:
          "bg-popover text-popover-foreground shadow-xs hover:bg-[color-mix(in_oklch,var(--popover),var(--foreground)_6%)]",
      },
      size: {
        default:
          "h-11 gap-2 px-6 has-data-[icon=inline-end]:pe-5 has-data-[icon=inline-start]:ps-5",
        sm: "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pe-3.5 has-data-[icon=inline-start]:ps-3.5",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

const pillBadgeRecipe = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        floating: "bg-background text-foreground shadow-sm",
      },
      figure: { true: "font-mono figures", false: "" },
    },
    defaultVariants: { variant: "default", figure: false },
  }
)

export type PillButtonProps = VariantProps<typeof pillButtonRecipe> & {
  className?: string
}
export type PillBadgeProps = VariantProps<typeof pillBadgeRecipe> & {
  className?: string
}

export const pillButton = ({ className, ...variants }: PillButtonProps = {}) =>
  cn(pillButtonRecipe(variants), className)

export const pillBadge = ({ className, ...variants }: PillBadgeProps = {}) =>
  cn(pillBadgeRecipe(variants), className)

/** Spring used by scroll-scrubbed motion values. */
export const SCRUB_SPRING = { stiffness: 140, damping: 28, mass: 0.4 }

/** Cubic-bezier matching the `ease-soft` utility. */
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const
