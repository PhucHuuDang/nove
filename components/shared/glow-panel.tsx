import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { pillBadge } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

interface GlowPanelProps {
  header: React.ReactNode
  listClassName?: string
  children: React.ReactNode
}

/** A card-coloured panel: a two-column header above a row of glow cards. */
export function GlowPanel({ header, listClassName, children }: GlowPanelProps) {
  return (
    <ScrollReveal className="overflow-hidden rounded-3xl bg-card">
      <header className="grid gap-5 gutter-5 pt-8 pb-10 md:gutter-8 md:pt-10 md:pb-12 lg:grid-cols-2 lg:items-end lg:gap-12 lg:gutter-12 lg:pt-14 lg:pb-16">
        {header}
      </header>
      <ol
        className={cn(
          "grid gap-3 gutter-3 pb-3 md:gutter-5 md:pb-5 lg:grid-cols-3 lg:gap-5 lg:gutter-6 lg:pb-6",
          listClassName
        )}
      >
        {children}
      </ol>
    </ScrollReveal>
  )
}

/** Right-hand header column: an outline badge above the lede. */
export function GlowPanelAside({
  badge,
  children,
}: {
  badge: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-start gap-3 lg:max-w-md lg:justify-self-end lg:pb-1">
      <span className={pillBadge({ variant: "outline" })}>{badge}</span>
      <p className="max-w-md text-base text-muted-foreground md:text-lg">
        {children}
      </p>
    </div>
  )
}
