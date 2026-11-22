"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import type { CartItem } from "@/types/cart"

import {
  INITIAL_VALUES,
  type CheckoutErrors,
  type DeliveryMethod,
  type FieldName,
} from "./checkout-data"
import { buildOrder, saveOrder } from "./checkout-order"
import { activeFields, fieldError, validateAll } from "./checkout-validation"

const PAY_DELAY_MS = 1200

/** Values, errors and submit flow for the checkout form. */
export function useCheckoutForm(items: CartItem[], saving: number) {
  const router = useRouter()
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState<CheckoutErrors>({})
  const [method, setMethod] = useState<DeliveryMethod>("ship")
  const [billingSame, setBillingSame] = useState(true)
  const [news, setNews] = useState(false)
  const [paying, setPaying] = useState(false)

  const setField = (name: FieldName, value: string) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (errors[name]) setErrors({ ...errors, [name]: fieldError(name, next) })
  }

  const blurField = (name: FieldName) => {
    if (!values[name].trim()) return
    setErrors({ ...errors, [name]: fieldError(name, values) })
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (paying) return
    const fields = activeFields(values, method, billingSame)
    const found = validateAll(fields, values)
    const first = fields.find((field) => found[field])
    if (first) {
      setErrors(found)
      document.getElementById(`checkout-${first}`)?.focus()
      return
    }
    setErrors({})
    setPaying(true)
    const order = buildOrder(values, method, items, saving)
    window.setTimeout(() => {
      saveOrder(order)
      router.push(`/checkout/confirmation?order=${order.number}`)
    }, PAY_DELAY_MS)
  }

  return {
    values,
    errors,
    method,
    setMethod,
    billingSame,
    setBillingSame,
    news,
    setNews,
    paying,
    setField,
    blurField,
    submit,
  }
}

export type CheckoutFormState = ReturnType<typeof useCheckoutForm>
