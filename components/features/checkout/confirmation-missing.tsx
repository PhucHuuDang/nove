import Link from "next/link"

import { CONTACT_EMAIL } from "@/components/features/contact/contact-data"
import { pillButton } from "@/lib/pill-variants"

import { CheckoutHeading } from "./checkout-heading"

/** Shown when the order is not in this browser session any more. */
export function ConfirmationMissing() {
  return (
    <div className="max-w-xl">
      <CheckoutHeading>We can&apos;t show this order</CheckoutHeading>
      <p className="mt-4 text-lg text-muted-foreground">
        Your receipt email has the full order. Questions go to {CONTACT_EMAIL}.
      </p>
      <Link href="/shop" className={pillButton({ className: "mt-8" })}>
        Keep shopping
      </Link>
    </div>
  )
}
