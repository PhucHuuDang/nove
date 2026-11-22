import type { CartItem } from "@/types/cart"

import {
  PICKUP,
  countryName,
  type CheckoutValues,
  type DeliveryMethod,
} from "./checkout-data"

export interface PlacedOrder {
  number: string
  email: string
  firstName: string
  method: DeliveryMethod
  address: string[]
  arrives: string
  lines: CartItem[]
  saving: number
}

interface StoredOrder {
  order: PlacedOrder
  cleared: boolean
}

export const ORDER_STORAGE_KEY = "nove:order"

function addBusinessDays(from: Date, days: number): Date {
  const date = new Date(from)
  let added = 0
  while (added < days) {
    date.setDate(date.getDate() + 1)
    const day = date.getDay()
    if (day !== 0 && day !== 6) added++
  }
  return date
}

const DAY_FORMAT = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
})

/** "Wed, Nov 25 to Fri, Nov 27": three to five working days out. */
export function deliveryWindow(from = new Date()): string {
  const start = DAY_FORMAT.format(addBusinessDays(from, 3))
  const end = DAY_FORMAT.format(addBusinessDays(from, 5))
  return `${start} to ${end}`
}

function orderNumber(): string {
  const digits = Math.floor(Math.random() * 100000)
  return `NV-${String(digits).padStart(5, "0")}`
}

function shippingAddress(values: CheckoutValues): string[] {
  const street = [values.address, values.apartment].filter(Boolean).join(", ")
  const town = [
    values.postalCode,
    values.city,
    values.country === "US" ? values.region : "",
  ]
    .filter(Boolean)
    .join(" ")
  return [
    `${values.firstName} ${values.lastName}`.trim(),
    street,
    town,
    countryName(values.country),
  ]
}

export function buildOrder(
  values: CheckoutValues,
  method: DeliveryMethod,
  lines: CartItem[],
  saving: number
): PlacedOrder {
  return {
    number: orderNumber(),
    email: values.email.trim(),
    firstName: values.firstName.trim(),
    method,
    address: method === "ship" ? shippingAddress(values) : PICKUP.address,
    arrives: deliveryWindow(),
    lines,
    saving,
  }
}

export function saveOrder(order: PlacedOrder, cleared = false): void {
  try {
    const stored: StoredOrder = { order, cleared }
    window.sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Private mode: the confirmation page falls back to its missing state.
  }
}

export function readStoredOrder(raw: string | null): StoredOrder | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as StoredOrder
    return parsed?.order?.number ? parsed : null
  } catch {
    return null
  }
}
