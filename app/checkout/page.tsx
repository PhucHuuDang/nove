import type { Metadata } from "next"

import { CheckoutShell } from "@/components/features/checkout/checkout-shell"
import { CheckoutView } from "@/components/features/checkout/checkout-view"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Checkout",
    description:
      "Pay for your Nove order: free shipping to Europe and the US in 3 to 5 days, or pick it up in Turin.",
    path: "/checkout",
  }),
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return (
    <CheckoutShell>
      <CheckoutView />
    </CheckoutShell>
  )
}
