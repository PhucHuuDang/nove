"use client"

import { ProductHeroRollingText } from "@/components/features/product/hero/product-hero-rolling-text"
import { Separator } from "@/components/ui/separator"
import { SETUP_SAVING_LABEL } from "@/lib/cart-lines"
import { formatPrice } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"

import type { DeliveryMethod } from "./checkout-data"

interface TotalRowProps {
  label: string
  value: string
  highlight?: boolean
}

function TotalRow({ label, value, highlight = false }: TotalRowProps) {
  return (
    <div className="flex justify-between gap-4">
      <dt className={cn(highlight ? null : "text-muted-foreground")}>
        {label}
      </dt>
      <dd className="font-mono figures">{value}</dd>
    </div>
  )
}

interface CheckoutSummaryTotalsProps {
  subtotal: number
  saving: number
  method: DeliveryMethod
}

export function CheckoutSummaryTotals({
  subtotal,
  saving,
  method,
}: CheckoutSummaryTotalsProps) {
  return (
    <dl className="mt-2 flex flex-col gap-2 border-t pt-6 text-sm">
      <TotalRow label="Subtotal" value={formatPrice(subtotal)} />
      {saving > 0 ? (
        <TotalRow
          label={SETUP_SAVING_LABEL}
          value={`−${formatPrice(saving)}`}
          highlight
        />
      ) : null}
      <TotalRow
        label={method === "pickup" ? "Pick up in Turin" : "Shipping"}
        value="Free"
      />
      <Separator className="my-2" />
      <div className="flex items-baseline justify-between gap-4">
        <dt className="text-base font-medium">Total</dt>
        <dd className="font-mono text-2xl figures">
          <span className="me-1.5 text-xs text-muted-foreground">USD</span>
          <ProductHeroRollingText value={formatPrice(subtotal - saving)} />
        </dd>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Prices include VAT in the EU. US sales tax is worked out from your
        address.
      </p>
    </dl>
  )
}
