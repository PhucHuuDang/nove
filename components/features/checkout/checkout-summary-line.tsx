import { Badge } from "@/components/ui/badge"
import { ProductImage } from "@/components/shared/product-image"
import { lineNote } from "@/lib/cart-lines"
import { CATALOG, formatPrice } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"
import type { CartItem } from "@/types/cart"

/** One bag line in the order summary: thumbnail, name, note and price. */
export function CheckoutSummaryLine({ item }: { item: CartItem }) {
  const product = CATALOG.find((entry) => entry.id === item.slug)
  const isSubscription = product?.kind === "subscription"

  return (
    <li className="flex items-center gap-4 py-4">
      <div className="relative shrink-0">
        <div
          className={cn(
            "isolate flex size-16 items-center justify-center overflow-hidden rounded-2xl bg-popover",
            isSubscription ? null : "p-2"
          )}
        >
          {product ? (
            <ProductImage
              product={product}
              sizes="4rem"
              className={
                isSubscription ? "size-full object-cover" : "max-h-full w-auto"
              }
            />
          ) : null}
        </div>
        {item.qty > 1 ? (
          <Badge aria-hidden="true" className="absolute -top-2 -right-2">
            <span className="font-mono figures">{item.qty}</span>
          </Badge>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-muted-foreground">
          {lineNote(item)}
          {item.qty > 1 ? (
            <span className="sr-only">, quantity {item.qty}</span>
          ) : null}
        </p>
      </div>
      <p className="shrink-0 font-mono text-sm figures">
        {formatPrice(item.price * item.qty)}
      </p>
    </li>
  )
}
