"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function TopBanner() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <aside
      aria-label="Announcement"
      className="dark relative grid grid-rows-[1fr] bg-background text-foreground opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-soft"
    >
      <div className="overflow-hidden">
        <div className="flex items-center justify-center gap-3 px-3 py-2.5 pe-14 sm:gap-4 md:px-5">
          <p className="text-sm">
            <span className="max-sm:hidden">
              Free shipping to Europe and the US.{" "}
            </span>
            <span className="font-medium">30-day swap guarantee</span>
          </p>
          <Link
            href="/shop"
            aria-label="Shop machines"
            className="group/button inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-full border border-transparent bg-primary bg-clip-padding px-3 text-xs font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
          >
            Shop machines
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close banner"
            className="group/button absolute end-2 top-1/2 inline-flex size-9 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap text-muted-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-muted hover:text-foreground md:end-3 dark:hover:bg-foreground/10"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
