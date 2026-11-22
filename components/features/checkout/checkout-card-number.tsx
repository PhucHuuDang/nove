"use client"

import { CreditCard } from "lucide-react"

import { CHECKOUT_INPUT, CheckoutField, fieldAria } from "./checkout-field"
import { cardBrand, formatCard } from "./checkout-validation"
import type { CheckoutFormState } from "./use-checkout-form"

const ID = "checkout-cardNumber"

/** Card number input that spaces digits and names the brand once known. */
export function CheckoutCardNumber({ form }: { form: CheckoutFormState }) {
  const error = form.errors.cardNumber
  const brand = cardBrand(form.values.cardNumber)

  return (
    <CheckoutField
      id={ID}
      label="Card number"
      error={error}
      className="col-span-2"
    >
      <div className="relative flex w-full items-center">
        <input
          data-slot="input"
          id={ID}
          name="cardNumber"
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder="1234 5678 9012 3456"
          required
          value={form.values.cardNumber}
          onChange={(event) =>
            form.setField("cardNumber", formatCard(event.target.value))
          }
          onBlur={() => form.blurField("cardNumber")}
          className={`${CHECKOUT_INPUT} pe-24`}
          {...fieldAria(ID, error)}
        />
        <span
          aria-live="polite"
          className="pointer-events-none absolute end-4 flex items-center text-sm font-medium text-muted-foreground"
        >
          {brand ? (
            brand.name
          ) : (
            <CreditCard aria-hidden="true" className="size-4" />
          )}
        </span>
      </div>
    </CheckoutField>
  )
}
