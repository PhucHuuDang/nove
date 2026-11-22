"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { bagHasMachine, bagSaving } from "@/lib/cart-lines"
import { formatPrice } from "@/lib/data/catalog"
import type { CartItem } from "@/types/cart"

import { CheckoutContactSection } from "./checkout-contact-section"
import { CheckoutDeliverySection } from "./checkout-delivery-section"
import { CheckoutPayArea } from "./checkout-pay-area"
import { CheckoutPaymentSection } from "./checkout-payment-section"
import { CheckoutSummary } from "./checkout-summary"
import { useCheckoutForm } from "./use-checkout-form"

/** The checkout grid: the form on the left, the sticky bag on the right. */
export function CheckoutForm({ items }: { items: CartItem[] }) {
  const saving = bagSaving(items)
  const total =
    items.reduce((sum, item) => sum + item.price * item.qty, 0) - saving
  const form = useCheckoutForm(items, saving)

  return (
    <div className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16 xl:gap-24">
      <aside
        aria-label="Order summary"
        className="lg:sticky lg:top-8 lg:col-start-2 lg:row-start-1 lg:self-start"
      >
        <ScrollReveal>
          <CheckoutSummary
            items={items}
            saving={saving}
            method={form.method}
            collapsible
          />
        </ScrollReveal>
      </aside>
      <form
        noValidate
        aria-busy={form.paying}
        onSubmit={form.submit}
        className="divide-y lg:col-start-1 lg:row-start-1"
      >
        <CheckoutContactSection form={form} />
        <CheckoutDeliverySection form={form} />
        <CheckoutPaymentSection form={form} />
        <CheckoutPayArea
          total={formatPrice(total)}
          paying={form.paying}
          hasMachine={bagHasMachine(items)}
        />
      </form>
    </div>
  )
}
