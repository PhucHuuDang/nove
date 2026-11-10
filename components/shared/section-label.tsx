import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase",
        className
      )}
    >
      {children}
    </span>
  )
}
