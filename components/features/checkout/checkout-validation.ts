import {
  EXPIRED_CARD,
  FIELD_ERRORS,
  type CheckoutErrors,
  type CheckoutValues,
  type DeliveryMethod,
  type FieldName,
} from "./checkout-data"

interface CardBrand {
  name: string
  pattern: RegExp
  lengths: number[]
  gaps: number[]
  cvc: number
}

const CARD_BRANDS: CardBrand[] = [
  {
    name: "Visa",
    pattern: /^4/,
    lengths: [13, 16, 19],
    gaps: [4, 8, 12, 16],
    cvc: 3,
  },
  {
    name: "Mastercard",
    pattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)/,
    lengths: [16],
    gaps: [4, 8, 12],
    cvc: 3,
  },
  { name: "Amex", pattern: /^3[47]/, lengths: [15], gaps: [4, 10], cvc: 4 },
]

const digitsOf = (value: string) => value.replace(/\D/g, "")

export function cardBrand(value: string): CardBrand | undefined {
  const digits = digitsOf(value)
  return CARD_BRANDS.find((brand) => brand.pattern.test(digits))
}

export function formatCard(value: string): string {
  const brand = cardBrand(value)
  const max = brand ? Math.max(...brand.lengths) : 19
  const gaps = brand?.gaps ?? [4, 8, 12, 16]
  const digits = digitsOf(value).slice(0, max)
  return digits
    .split("")
    .map((digit, i) => (gaps.includes(i) ? ` ${digit}` : digit))
    .join("")
}

export function formatExpiry(value: string): string {
  let digits = digitsOf(value).slice(0, 4)
  if (/^[2-9]$/.test(digits)) digits = `0${digits}`
  if (digits.length < 2) return digits
  if (digits.length === 2 && value.endsWith(" /")) return digits.slice(0, 1)
  return digits.length > 2
    ? `${digits.slice(0, 2)} / ${digits.slice(2)}`
    : `${digits} / `
}

function passesLuhn(digits: string): boolean {
  let sum = 0
  for (let i = 0; i < digits.length; i++) {
    let digit = Number(digits[digits.length - 1 - i])
    if (i % 2 === 1) {
      digit *= 2
      if (digit > 9) digit -= 9
    }
    sum += digit
  }
  return sum % 10 === 0
}

function isValidCard(value: string): boolean {
  const digits = digitsOf(value)
  const brand = cardBrand(digits)
  const lengthOk = brand
    ? brand.lengths.includes(digits.length)
    : digits.length >= 12 && digits.length <= 19
  return lengthOk && passesLuhn(digits)
}

function expiryError(value: string): string | undefined {
  const match = /^(0[1-9]|1[0-2]) \/ (\d{2})$/.exec(value)
  if (!match) return FIELD_ERRORS.expiry?.invalid
  const now = new Date()
  const endOfMonth = new Date(2000 + Number(match[2]), Number(match[1]), 1)
  return endOfMonth <= now ? EXPIRED_CARD : undefined
}

const isPostal = (name: FieldName) =>
  name === "postalCode" || name === "billingPostalCode"

/** The error a field shows for its current value, if any. */
export function fieldError(
  name: FieldName,
  values: CheckoutValues
): string | undefined {
  const copy = FIELD_ERRORS[name]
  if (!copy) return undefined
  const value = values[name].trim()
  if (!value) return copy.missing

  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value))
    return copy.invalid
  if (name === "cardNumber" && !isValidCard(value)) return copy.invalid
  if (name === "expiry") return expiryError(value)
  if (name === "cvc") {
    const length = cardBrand(values.cardNumber)?.cvc ?? 3
    return new RegExp(`^\\d{${length}}$`).test(value) ? undefined : copy.invalid
  }
  if (isPostal(name)) {
    const country =
      name === "postalCode" ? values.country : values.billingCountry
    if (country === "US" && !/^\d{5}(-\d{4})?$/.test(value)) return copy.invalid
  }
  return undefined
}

const ADDRESS_FIELDS = [
  "country",
  "address",
  "city",
  "region",
  "postalCode",
] as const

function addressFields(prefix: "" | "billing", country: string): FieldName[] {
  return ADDRESS_FIELDS.filter(
    (field) => field !== "region" || country === "US"
  ).map(
    (field) =>
      (prefix
        ? `billing${field[0].toUpperCase()}${field.slice(1)}`
        : field) as FieldName
  )
}

/** Every field that must pass, in the order they appear on the page. */
export function activeFields(
  values: CheckoutValues,
  method: DeliveryMethod,
  billingSame: boolean
): FieldName[] {
  const shipping = method === "ship" ? addressFields("", values.country) : []
  const billing =
    method === "pickup" || !billingSame
      ? addressFields("billing", values.billingCountry)
      : []
  return [
    "email",
    "firstName",
    "lastName",
    ...shipping,
    "cardNumber",
    "expiry",
    "cvc",
    "cardName",
    ...billing,
  ]
}

export function validateAll(
  fields: FieldName[],
  values: CheckoutValues
): CheckoutErrors {
  const errors: CheckoutErrors = {}
  for (const field of fields) {
    const error = fieldError(field, values)
    if (error) errors[field] = error
  }
  return errors
}
