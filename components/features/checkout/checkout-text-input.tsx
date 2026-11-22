"use client"

import type { FieldName } from "./checkout-data"
import { CHECKOUT_INPUT, CheckoutField, fieldAria } from "./checkout-field"
import type { CheckoutFormState } from "./use-checkout-form"

type InputProps = Omit<
  React.ComponentProps<"input">,
  "id" | "name" | "value" | "onChange" | "onBlur" | "className" | "form"
>

interface CheckoutTextInputProps extends InputProps {
  form: CheckoutFormState
  name: FieldName
  label: string
  hint?: string
  className?: string
  format?: (value: string) => string
}

/** A labelled text input bound to one checkout field. */
export function CheckoutTextInput({
  form,
  name,
  label,
  hint,
  className,
  format,
  ...inputProps
}: CheckoutTextInputProps) {
  const id = `checkout-${name}`
  const error = form.errors[name]

  return (
    <CheckoutField
      id={id}
      label={label}
      error={error}
      hint={hint}
      className={className}
    >
      <input
        data-slot="input"
        id={id}
        name={name}
        value={form.values[name]}
        onChange={(event) =>
          form.setField(
            name,
            format ? format(event.target.value) : event.target.value
          )
        }
        onBlur={() => form.blurField(name)}
        className={CHECKOUT_INPUT}
        {...fieldAria(id, error, hint)}
        {...inputProps}
      />
    </CheckoutField>
  )
}
