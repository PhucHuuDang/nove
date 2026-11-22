"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { useCart } from "@/lib/cart-context"
import { bagHasMachine } from "@/lib/cart-lines"
import { pillButton } from "@/lib/pill-variants"

import { CheckoutSummary } from "./checkout-summary"
import { ORDER_STORAGE_KEY, readStoredOrder, saveOrder } from "./checkout-order"
import { ConfirmationDetails } from "./confirmation-details"
import { ConfirmationMissing } from "./confirmation-missing"
import { useMounted } from "./use-mounted"

const subscribe = () => () => {}

function readRaw(): string | null {
  try {
    return window.sessionStorage.getItem(ORDER_STORAGE_KEY)
  } catch {
    return null
  }
}

/** Thanks, order number, delivery details and the receipt summary. */
export function ConfirmationView({ orderNumber }: { orderNumber?: string }) {
  const mounted = useMounted()
  const raw = useSyncExternalStore(subscribe, readRaw, () => null)
  const stored = readStoredOrder(raw)
  const order = stored?.order.number === orderNumber ? stored?.order : undefined
  const { clearCart } = useCart()
  const headingRef = useRef<HTMLHeadingElement>(null)

  // The bag empties once, the first time this order is shown.
  useEffect(() => {
    if (!order || stored?.cleared) return
    clearCart()
    saveOrder(order, true)
  }, [order, stored?.cleared, clearCart])

  useEffect(() => {
    if (order) headingRef.current?.focus()
  }, [order])

  if (!mounted) return null
  if (!order) return <ConfirmationMissing />

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16 xl:gap-24">
      <div>
        <span className="text-success-foreground grid size-11 place-items-center rounded-full bg-success">
          <Check aria-hidden="true" className="size-5" />
        </span>
        <p className="mt-6 font-mono text-sm text-muted-foreground figures">
          Order {order.number}
        </p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="mt-2 text-4xl leading-[1.05] outline-none md:text-5xl lg:text-6xl"
        >
          Thank you, {order.firstName}.
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          Your order is placed. The receipt is on its way to{" "}
          <span className="text-foreground">{order.email}</span>.
        </p>
        <ConfirmationDetails
          order={order}
          hasMachine={bagHasMachine(order.lines)}
        />
        <Link href="/shop" className={pillButton({ className: "mt-10" })}>
          Keep shopping
        </Link>
      </div>
      <aside
        aria-label="Your order"
        className="lg:sticky lg:top-8 lg:self-start"
      >
        <ScrollReveal delayMs={120}>
          <CheckoutSummary
            items={order.lines}
            saving={order.saving}
            method={order.method}
            title="Your order"
          />
        </ScrollReveal>
      </aside>
    </div>
  )
}
