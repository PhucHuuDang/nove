"use client"

import { Printer } from "lucide-react"

export function LegalPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print this page"
      title="Print this page"
      className="group/button inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:scale-[0.97] dark:hover:bg-foreground/10 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
    >
      <Printer aria-hidden="true" />
    </button>
  )
}
