import { Store } from "lucide-react"

import { PICKUP } from "./checkout-data"

/** Where to collect a pickup order. */
export function CheckoutPickupCard() {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-5">
      <Store
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-muted-foreground"
      />
      <div className="flex flex-col gap-1 text-sm">
        <p className="text-base font-medium">{PICKUP.title}</p>
        {PICKUP.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="mt-2 text-muted-foreground">{PICKUP.body}</p>
      </div>
    </div>
  )
}
