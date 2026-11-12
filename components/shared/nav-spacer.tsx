import { cn } from "@/lib/utils"

/** Reserves the space the floating navbar docks into at the top of a page. */
export function NavSpacer({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      data-nav-slot="true"
      data-tone="light"
      data-bag="always"
      className={cn(
        "gutter-margin-3 mt-5 h-11 shrink-0 md:gutter-margin-5 md:mt-8 lg:mt-10",
        className
      )}
    />
  )
}
