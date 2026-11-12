"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"

interface CartEmptyProps {
  onBrowse: () => void
}

export function CartEmpty({ onBrowse }: CartEmptyProps) {
  return (
    <div className="flex min-h-80 flex-1 flex-col items-center justify-center rounded-3xl bg-card p-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-foreground">
          <ShoppingBag className="size-6" />
        </span>
        <h3 className="text-xl font-medium text-foreground">
          Your bag is empty.
        </h3>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Pick a model to start. Every machine ships free.
        </p>
      </div>
      <div className="mt-6">
        <Link
          href="/shop"
          onClick={onBrowse}
          className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          See the shop
        </Link>
      </div>
    </div>
  )
}
