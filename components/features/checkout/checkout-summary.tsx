"use client"

import { useId, useState } from "react"
import { ChevronDown } from "lucide-react"

import { ProductHeroRollingText } from "@/components/features/product/hero/product-hero-rolling-text"
import { formatPrice } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"
import type { CartItem } from "@/types/cart"

import type { DeliveryMethod } from "./checkout-data"
import { CheckoutSummaryLine } from "./checkout-summary-line"
import { CheckoutSummaryTotals } from "./checkout-summary-totals"

interface CheckoutSummaryProps {
  items: CartItem[]
  saving: number
  method: DeliveryMethod
  title?: string
  /** On small screens the bag folds behind a "Show your bag" toggle. */
  collapsible?: boolean
}

export function CheckoutSummary({
  items,
  saving,
  method,
  title = "Your bag",
  collapsible = false,
}: CheckoutSummaryProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div
      className={cn(
        "rounded-3xl bg-card",
        collapsible ? "px-5 py-2.5 md:px-8 lg:p-8" : "p-5 md:p-8"
      )}
    >
      {collapsible ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-11 w-full items-center justify-between gap-4 rounded-full text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50 lg:hidden"
        >
          <span className="flex items-center gap-1.5">
            {open ? "Hide" : "Show"} your bag
            <span className="font-mono text-muted-foreground figures">
              ({count})
            </span>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-4 transition-transform duration-300 ease-soft",
                open ? "rotate-180" : null
              )}
            />
          </span>
          <span className="font-mono text-base figures">
            <ProductHeroRollingText value={formatPrice(subtotal - saving)} />
          </span>
        </button>
      ) : null}
      <div
        id={panelId}
        className={cn(
          collapsible
            ? "grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-soft max-lg:grid-rows-[0fr] max-lg:opacity-0 lg:grid-rows-[1fr]"
            : null,
          collapsible && open
            ? "max-lg:grid-rows-[1fr] max-lg:opacity-100"
            : null,
          collapsible && !open ? "max-lg:invisible" : null
        )}
      >
        <div className={cn(collapsible ? "min-h-0 overflow-hidden" : null)}>
          <div
            className={cn(
              collapsible
                ? "max-lg:mt-2.5 max-lg:border-t max-lg:pt-2 max-lg:pb-2.5"
                : null
            )}
          >
            <h2
              className={cn("text-2xl", collapsible ? "max-lg:sr-only" : null)}
            >
              {title}{" "}
              <span className="font-mono text-xl text-muted-foreground figures">
                ({count})
              </span>
            </h2>
            <ul className={cn("divide-y", collapsible ? "lg:mt-2" : "mt-2")}>
              {items.map((item) => (
                <CheckoutSummaryLine key={item.slug} item={item} />
              ))}
            </ul>
            <CheckoutSummaryTotals
              subtotal={subtotal}
              saving={saving}
              method={method}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
