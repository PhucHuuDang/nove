"use client"

import { cn } from "@/lib/utils"

import { COUNTRIES, US_STATES, type FieldName } from "./checkout-data"
import { CheckoutSelectInput } from "./checkout-select-input"
import { CheckoutTextInput } from "./checkout-text-input"
import type { CheckoutFormState } from "./use-checkout-form"

interface CheckoutAddressFieldsProps {
  form: CheckoutFormState
  kind: "shipping" | "billing"
}

function fieldName(kind: "shipping" | "billing", field: string): FieldName {
  return (
    kind === "billing"
      ? `billing${field[0].toUpperCase()}${field.slice(1)}`
      : field
  ) as FieldName
}

/** Country, street, city, state and postcode for delivery or billing. */
export function CheckoutAddressFields({
  form,
  kind,
}: CheckoutAddressFieldsProps) {
  const name = (field: string) => fieldName(kind, field)
  const isUS = form.values[name("country")] === "US"

  return (
    <>
      <CheckoutSelectInput
        form={form}
        name={name("country")}
        label="Country"
        items={COUNTRIES}
        autoComplete={`${kind} country`}
        className="col-span-2"
      />
      <CheckoutTextInput
        form={form}
        name={name("address")}
        label="Address"
        autoComplete={`${kind} address-line1`}
        required
        className="col-span-2"
      />
      <CheckoutTextInput
        form={form}
        name={name("apartment")}
        label="Apartment or floor (optional)"
        autoComplete={`${kind} address-line2`}
        className="col-span-2"
      />
      <div
        className={cn(
          "col-span-2 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4",
          isUS ? "sm:grid-cols-3" : null
        )}
      >
        <CheckoutTextInput
          form={form}
          name={name("city")}
          label="City"
          autoComplete={`${kind} address-level2`}
          required
          className={isUS ? "col-span-2 sm:col-span-1" : undefined}
        />
        {isUS ? (
          <CheckoutSelectInput
            form={form}
            name={name("region")}
            label="State"
            items={US_STATES}
            placeholder="Choose"
            autoComplete={`${kind} address-level1`}
          />
        ) : null}
        <CheckoutTextInput
          form={form}
          name={name("postalCode")}
          label={isUS ? "ZIP code" : "Postcode"}
          autoComplete={`${kind} postal-code`}
          inputMode={isUS ? "numeric" : undefined}
          pattern={isUS ? "\\d{5}(-\\d{4})?" : undefined}
          required
        />
      </div>
    </>
  )
}
