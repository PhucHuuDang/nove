"use client"

import { CheckoutAddressFields } from "./checkout-address-fields"
import { CheckoutCollapse } from "./checkout-collapse"
import { CheckoutDeliveryOptions } from "./checkout-delivery-options"
import { CheckoutPickupCard } from "./checkout-pickup-card"
import { CheckoutSection } from "./checkout-section"
import { CheckoutTextInput } from "./checkout-text-input"
import type { CheckoutFormState } from "./use-checkout-form"

export function CheckoutDeliverySection({ form }: { form: CheckoutFormState }) {
  const shipping = form.method === "ship"

  return (
    <CheckoutSection title="Delivery" id="checkout-delivery">
      <CheckoutDeliveryOptions value={form.method} onChange={form.setMethod} />
      <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4">
        <CheckoutTextInput
          form={form}
          name="firstName"
          label="First name"
          autoComplete="given-name"
          required
        />
        <CheckoutTextInput
          form={form}
          name="lastName"
          label="Last name"
          autoComplete="family-name"
          required
        />
        <CheckoutCollapse open={shipping} className="col-span-2">
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4">
            <CheckoutAddressFields form={form} kind="shipping" />
            <CheckoutTextInput
              form={form}
              name="phone"
              label="Phone (optional)"
              type="tel"
              autoComplete="tel"
              hint="Only used if the courier needs to reach you."
              className="col-span-2"
            />
          </div>
        </CheckoutCollapse>
        {shipping ? null : (
          <div className="col-span-2">
            <CheckoutPickupCard />
          </div>
        )}
      </div>
    </CheckoutSection>
  )
}
