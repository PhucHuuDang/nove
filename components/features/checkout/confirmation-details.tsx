import {
  CONTACT_EMAIL,
  REPLY_TIME,
} from "@/components/features/contact/contact-data"

import { PICKUP } from "./checkout-data"
import type { PlacedOrder } from "./checkout-order"

const CARD = "flex flex-col gap-1 rounded-2xl bg-card p-5 text-sm"

interface ConfirmationDetailsProps {
  order: PlacedOrder
  hasMachine: boolean
}

/** When and where the order arrives, plus who to ask about it. */
export function ConfirmationDetails({
  order,
  hasMachine,
}: ConfirmationDetailsProps) {
  return (
    <dl className="mt-10 grid gap-3 sm:grid-cols-2 md:mt-12">
      {order.method === "ship" ? (
        <>
          <div className={CARD}>
            <dt className="text-muted-foreground">Arrives</dt>
            <dd className="font-medium">{order.arrives}</dd>
            <dd className="text-muted-foreground">Free shipping</dd>
          </div>
          <div className={CARD}>
            <dt className="text-muted-foreground">Delivery to</dt>
            {order.address.filter(Boolean).map((line) => (
              <dd key={line}>{line}</dd>
            ))}
          </div>
        </>
      ) : (
        <div className={`${CARD} sm:col-span-2`}>
          <dt className="text-muted-foreground">Collect from</dt>
          <dd className="font-medium">{PICKUP.title}</dd>
          {PICKUP.lines.map((line) => (
            <dd key={line}>{line}</dd>
          ))}
          <dd className="text-muted-foreground">{PICKUP.body}</dd>
        </div>
      )}
      <div className={`${CARD} sm:col-span-2`}>
        <dt className="text-muted-foreground">Questions</dt>
        <dd>
          Reply to the receipt or write to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-sm underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {CONTACT_EMAIL}
          </a>
          . We reply within {REPLY_TIME}.
        </dd>
        {hasMachine ? (
          <dd className="text-muted-foreground">
            You can swap your machine for another model within 30 days.
          </dd>
        ) : null}
      </div>
    </dl>
  )
}
