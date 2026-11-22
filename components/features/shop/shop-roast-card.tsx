import Link from "next/link"

import { ShopAddButton } from "@/components/features/shop/shop-add-button"
import { ProductImage } from "@/components/shared/product-image"
import type { CatalogProduct } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"

/** Roasts photographed on a dark surface, so the card uses the dark theme. */
const DARK_ROASTS = new Set(["decaf"])

export function ShopRoastCard({ product }: { product: CatalogProduct }) {
  return (
    <article
      className={cn(
        "group relative isolate flex aspect-4/5 flex-col justify-between overflow-hidden rounded-3xl p-5 text-foreground",
        DARK_ROASTS.has(product.id) && "dark"
      )}
    >
      <Link
        href={product.href}
        tabIndex={-1}
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <ProductImage
          product={product}
          sizes="(min-width: 80rem) 22rem, (min-width: 48rem) 33vw, 100vw"
          className="size-full object-cover transition-transform duration-700 ease-soft motion-safe:group-hover:scale-103 motion-reduce:transition-none"
        />
      </Link>
      <div>
        <h3 className="text-2xl leading-tight">
          <Link
            href={product.href}
            className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 max-w-56 text-sm text-muted-foreground">
          {product.note}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="rounded-full bg-popover/80 px-3.5 py-1.5 whitespace-nowrap text-popover-foreground backdrop-blur-md">
          <span className="font-mono figures">{product.price}</span>{" "}
          <span className="text-sm text-muted-foreground">a bag</span>
        </p>
        <ShopAddButton product={product} size="sm" />
      </div>
    </article>
  )
}
