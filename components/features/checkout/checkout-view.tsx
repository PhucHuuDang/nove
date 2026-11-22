"use client"

import { CartEmpty } from "@/components/shared/cart/cart-empty"
import { useCart } from "@/lib/cart-context"

import { CheckoutForm } from "./checkout-form"
import { CheckoutHeading } from "./checkout-heading"
import { CheckoutSkeleton } from "./checkout-skeleton"
import { useMounted } from "./use-mounted"

/** Checkout once the bag is read: an empty state, or the form and summary. */
export function CheckoutView() {
  const { items } = useCart()
  const mounted = useMounted()

  if (mounted && items.length === 0) {
    return (
      <>
        <h1 className="sr-only">Checkout</h1>
        <div className="mx-auto flex min-h-112 max-w-xl flex-col">
          <CartEmpty />
        </div>
      </>
    )
  }

  return (
    <>
      <CheckoutHeading>Checkout</CheckoutHeading>
      {mounted ? <CheckoutForm items={items} /> : <CheckoutSkeleton />}
    </>
  )
}
