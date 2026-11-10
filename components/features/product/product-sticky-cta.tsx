"use client"

import type { Product } from "@/types/product"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

interface ProductStickyCtaProps {
  product: Product
}

export function ProductStickyCta({ product }: ProductStickyCtaProps) {
  const { addItem } = useCart()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs leading-none font-medium">{product.name}</p>
          <p className="mt-1 font-mono text-sm font-semibold">
            ${product.price.toLocaleString()}
          </p>
        </div>

        <Button
          onClick={() =>
            addItem({
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images[0],
              subscription: product.subscription,
            })
          }
          size="default"
        >
          Add to bag
        </Button>
      </div>
    </div>
  )
}
