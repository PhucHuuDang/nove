import type { Metadata } from "next"

import { CheckoutShell } from "@/components/features/checkout/checkout-shell"
import { ConfirmationView } from "@/components/features/checkout/confirmation-view"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Order placed",
    description: "Your order number, delivery dates and receipt.",
    path: "/checkout/confirmation",
  }),
  robots: { index: false, follow: false },
}

interface ConfirmationPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ConfirmationPage({
  searchParams,
}: ConfirmationPageProps) {
  const { order } = await searchParams
  const orderNumber = typeof order === "string" ? order : undefined

  return (
    <CheckoutShell>
      <ConfirmationView orderNumber={orderNumber} />
    </CheckoutShell>
  )
}
