export type DeliveryMethod = "ship" | "pickup"

export type FieldName =
  | "email"
  | "firstName"
  | "lastName"
  | "country"
  | "address"
  | "apartment"
  | "city"
  | "region"
  | "postalCode"
  | "phone"
  | "cardNumber"
  | "expiry"
  | "cvc"
  | "cardName"
  | "billingCountry"
  | "billingAddress"
  | "billingApartment"
  | "billingCity"
  | "billingRegion"
  | "billingPostalCode"

export type CheckoutValues = Record<FieldName, string>
export type CheckoutErrors = Partial<Record<FieldName, string>>

export const INITIAL_VALUES: CheckoutValues = {
  email: "",
  firstName: "",
  lastName: "",
  country: "US",
  address: "",
  apartment: "",
  city: "",
  region: "",
  postalCode: "",
  phone: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
  cardName: "",
  billingCountry: "US",
  billingAddress: "",
  billingApartment: "",
  billingCity: "",
  billingRegion: "",
  billingPostalCode: "",
}

export const DELIVERY_OPTIONS = [
  {
    value: "ship",
    title: "Free shipping",
    note: "To Europe and the US, in 3 to 5 working days",
  },
  {
    value: "pickup",
    title: "Pick up in Turin",
    note: "At our showroom, Via Nizza 45",
  },
] as const

export const PICKUP = {
  title: "Our showroom",
  lines: [
    "Via Nizza 45, 10125 Turin",
    "Open Tuesday to Saturday, 10:00 to 19:00",
  ],
  body: "We email you when your order is ready to collect.",
  address: ["Nove showroom", "Via Nizza 45", "10125 Turin", "Italy"],
}

export const PAY_METHODS = [
  "Visa",
  "Mastercard",
  "Amex",
  "Apple Pay",
  "Google Pay",
  "PayPal",
]

export const LEGAL_COPY = "© 2026 Nove Espresso S.r.l."

export const COUNTRIES = [
  { value: "AT", label: "Austria" },
  { value: "BE", label: "Belgium" },
  { value: "DK", label: "Denmark" },
  { value: "FI", label: "Finland" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
  { value: "GR", label: "Greece" },
  { value: "IE", label: "Ireland" },
  { value: "IT", label: "Italy" },
  { value: "LU", label: "Luxembourg" },
  { value: "NL", label: "Netherlands" },
  { value: "NO", label: "Norway" },
  { value: "PL", label: "Poland" },
  { value: "PT", label: "Portugal" },
  { value: "ES", label: "Spain" },
  { value: "SE", label: "Sweden" },
  { value: "CH", label: "Switzerland" },
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
]

const STATE_NAMES = [
  "AL Alabama",
  "AK Alaska",
  "AZ Arizona",
  "AR Arkansas",
  "CA California",
  "CO Colorado",
  "CT Connecticut",
  "DE Delaware",
  "DC District of Columbia",
  "FL Florida",
  "GA Georgia",
  "HI Hawaii",
  "ID Idaho",
  "IL Illinois",
  "IN Indiana",
  "IA Iowa",
  "KS Kansas",
  "KY Kentucky",
  "LA Louisiana",
  "ME Maine",
  "MD Maryland",
  "MA Massachusetts",
  "MI Michigan",
  "MN Minnesota",
  "MS Mississippi",
  "MO Missouri",
  "MT Montana",
  "NE Nebraska",
  "NV Nevada",
  "NH New Hampshire",
  "NJ New Jersey",
  "NM New Mexico",
  "NY New York",
  "NC North Carolina",
  "ND North Dakota",
  "OH Ohio",
  "OK Oklahoma",
  "OR Oregon",
  "PA Pennsylvania",
  "RI Rhode Island",
  "SC South Carolina",
  "SD South Dakota",
  "TN Tennessee",
  "TX Texas",
  "UT Utah",
  "VT Vermont",
  "VA Virginia",
  "WA Washington",
  "WV West Virginia",
  "WI Wisconsin",
  "WY Wyoming",
]

export const US_STATES = STATE_NAMES.map((entry) => ({
  value: entry.slice(0, 2),
  label: entry.slice(3),
}))

export function countryName(code: string): string {
  return COUNTRIES.find((country) => country.value === code)?.label ?? code
}

/** Error copy per field: shown when it is empty, or when it is malformed. */
export const FIELD_ERRORS: Partial<
  Record<FieldName, { missing: string; invalid?: string }>
> = {
  email: {
    missing: "Enter your email",
    invalid: "Enter an email like you@example.com",
  },
  firstName: { missing: "Enter your first name" },
  lastName: { missing: "Enter your last name" },
  country: { missing: "Choose your country" },
  address: { missing: "Enter your street address" },
  city: { missing: "Enter your city" },
  region: { missing: "Choose your state" },
  postalCode: {
    missing: "Enter your ZIP code or postcode",
    invalid: "Check the ZIP code",
  },
  cardNumber: {
    missing: "Enter the card number",
    invalid: "Check the card number",
  },
  expiry: {
    missing: "Enter the expiry date",
    invalid: "Enter the expiry date as MM / YY",
  },
  cvc: {
    missing: "Enter the security code",
    invalid: "Enter the 3 digits on the back, or 4 on the front for Amex",
  },
  cardName: { missing: "Enter the name on the card" },
  billingCountry: { missing: "Choose the billing country" },
  billingAddress: { missing: "Enter the billing street address" },
  billingCity: { missing: "Enter the billing city" },
  billingRegion: { missing: "Choose the billing state" },
  billingPostalCode: {
    missing: "Enter the billing ZIP code or postcode",
    invalid: "Check the billing ZIP code",
  },
}

export const EXPIRED_CARD = "This card has expired. Use a different card"
