"use client"

import Link from "next/link"
import { ProductHeroRollingText } from "@/components/features/product/hero/product-hero-rolling-text"

interface CartSummaryProps {
  total: number
  saving?: number
  onCheckout: () => void
}

export function CartSummary({
  total,
  saving = 0,
  onCheckout,
}: CartSummaryProps) {
  const formattedTotal = `$${total.toLocaleString()}`

  return (
    <div className="mt-auto flex shrink-0 flex-col gap-5 pt-4 pb-3">
      <dl className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-muted-foreground">Shipping</dt>
          <dd className="font-medium text-foreground">Free</dd>
        </div>

        {saving > 0 ? (
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">
              Beans, free for three months
            </dt>
            <dd className="font-mono text-foreground figures">
              −${saving.toLocaleString()}
            </dd>
          </div>
        ) : null}

        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-base font-medium text-foreground">Total</dt>
          <dd className="font-mono text-2xl font-medium text-foreground figures">
            <ProductHeroRollingText value={formattedTotal} />
          </dd>
        </div>

        <p className="text-xs text-muted-foreground">
          Prices include VAT in the EU. US sales tax is worked out at checkout.
        </p>
      </dl>

      <Link
        href="/checkout"
        onClick={onCheckout}
        className="group/button inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-8 text-base font-medium text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
      >
        Check out
        <span aria-hidden="true" className="opacity-50">
          ·
        </span>
        <span className="font-mono figures">{formattedTotal}</span>
      </Link>

      <p className="text-center text-xs text-muted-foreground">
        Not sure about the model? Swap it for another within 30 days.
      </p>
    </div>
  )
}
