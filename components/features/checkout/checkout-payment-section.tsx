"use client"

import { pillBadge } from "@/lib/pill-variants"

import { CheckoutAddressFields } from "./checkout-address-fields"
import { CheckoutCardNumber } from "./checkout-card-number"
import { CheckoutCheckbox } from "./checkout-checkbox"
import { CheckoutCollapse } from "./checkout-collapse"
import { PAY_METHODS } from "./checkout-data"
import { CheckoutSection } from "./checkout-section"
import { CheckoutTextInput } from "./checkout-text-input"
import { cardBrand, formatExpiry } from "./checkout-validation"
import type { CheckoutFormState } from "./use-checkout-form"

function PaymentNote() {
  return (
    <div className="flex flex-col gap-3">
      <p>This is a demo store, so no card is charged.</p>
      <ul aria-label="Ways to pay" className="flex flex-wrap gap-1.5">
        {PAY_METHODS.map((method) => (
          <li key={method}>
            <span className={pillBadge({ variant: "outline" })}>{method}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CheckoutPaymentSection({ form }: { form: CheckoutFormState }) {
  const shipping = form.method === "ship"
  const cvcLength = cardBrand(form.values.cardNumber)?.cvc ?? 3
  const showBilling = !shipping || !form.billingSame

  return (
    <CheckoutSection title="Payment" description={<PaymentNote />}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4">
        <CheckoutCardNumber form={form} />
        <CheckoutTextInput
          form={form}
          name="expiry"
          label="Expiry date"
          inputMode="numeric"
          autoComplete="cc-exp"
          placeholder="MM / YY"
          pattern="(0[1-9]|1[0-2]) / \d{2}"
          format={formatExpiry}
          required
        />
        <CheckoutTextInput
          form={form}
          name="cvc"
          label="Security code"
          inputMode="numeric"
          autoComplete="cc-csc"
          placeholder="CVC"
          pattern={`\\d{${cvcLength}}`}
          maxLength={cvcLength}
          format={(value) => value.replace(/\D/g, "")}
          required
        />
        <CheckoutTextInput
          form={form}
          name="cardName"
          label="Name on card"
          autoComplete="cc-name"
          required
          className="col-span-2"
        />
        {shipping ? (
          <div className="col-span-2">
            <CheckoutCheckbox
              id="checkout-billing"
              name="billingSame"
              label="Billing address is the same as delivery"
              checked={form.billingSame}
              onCheckedChange={form.setBillingSame}
            />
          </div>
        ) : null}
        <CheckoutCollapse open={showBilling} className="col-span-2">
          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4">
            <h3 className="col-span-2 mt-3 text-lg">Billing address</h3>
            <CheckoutAddressFields form={form} kind="billing" />
          </div>
        </CheckoutCollapse>
      </div>
    </CheckoutSection>
  )
}
