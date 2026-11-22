"use client"

import type { FieldName } from "./checkout-data"
import { CheckoutField } from "./checkout-field"
import { CheckoutSelect } from "./checkout-select"
import type { CheckoutFormState } from "./use-checkout-form"

interface CheckoutSelectInputProps {
  form: CheckoutFormState
  name: FieldName
  label: string
  items: { value: string; label: string }[]
  placeholder?: string
  autoComplete?: string
  className?: string
}

/** A labelled select bound to one checkout field. */
export function CheckoutSelectInput({
  form,
  name,
  label,
  items,
  placeholder,
  autoComplete,
  className,
}: CheckoutSelectInputProps) {
  const id = `checkout-${name}`
  const error = form.errors[name]

  return (
    <CheckoutField id={id} label={label} error={error} className={className}>
      <CheckoutSelect
        id={id}
        name={name}
        items={items}
        value={form.values[name]}
        placeholder={placeholder}
        autoComplete={autoComplete}
        error={error}
        onChange={(value) => form.setField(name, value)}
      />
    </CheckoutField>
  )
}
