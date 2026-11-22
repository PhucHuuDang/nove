"use client"

import { CheckoutCheckbox } from "./checkout-checkbox"
import { CheckoutSection } from "./checkout-section"
import { CheckoutTextInput } from "./checkout-text-input"
import type { CheckoutFormState } from "./use-checkout-form"

export function CheckoutContactSection({ form }: { form: CheckoutFormState }) {
  return (
    <CheckoutSection title="Contact" className="pt-2 lg:pt-0">
      <div className="grid gap-5">
        <CheckoutTextInput
          form={form}
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
        <CheckoutCheckbox
          id="checkout-news"
          name="news"
          label="Email me about new beans and products"
          checked={form.news}
          onCheckedChange={form.setNews}
        />
      </div>
    </CheckoutSection>
  )
}
