import {
  GroundedProductImage,
  ProductImage,
} from "@/components/shared/product-image"
import {
  FULL_SETUP,
  formatPrice,
  type CatalogProduct,
} from "@/lib/data/catalog"
import { pillBadge } from "@/lib/pill-variants"

/** One product in the bundle strip; the free beans show their saving. */
export function ShopBundleItem({ product }: { product: CatalogProduct }) {
  const isFree = product.id === FULL_SETUP.free.id

  return (
    <li className="row-span-2 grid grid-rows-subgrid">
      {isFree ? (
        <div className="@container relative isolate aspect-square self-end overflow-hidden rounded-2xl">
          <ProductImage
            product={product}
            sizes="10rem"
            className="size-full object-cover"
          />
          <span
            className={pillBadge({
              variant: "secondary",
              className: "absolute top-2 left-2 @max-[6.5rem]:hidden",
            })}
          >
            Free
          </span>
        </div>
      ) : (
        <GroundedProductImage
          product={product}
          sizes={
            product.id === "duo" ? "(min-width: 64rem) 22rem, 50vw" : "11rem"
          }
          className="self-end"
        />
      )}
      <p className="flex flex-col text-sm leading-snug">
        <span>{isFree ? FULL_SETUP.freeLabel : product.name}</span>
        <span className="flex flex-wrap gap-x-1.5 font-mono text-muted-foreground figures">
          {isFree ? (
            <>
              <s>
                <span className="sr-only">Was </span>
                {formatPrice(FULL_SETUP.saving)}
              </s>
              <span className="text-foreground">Free</span>
            </>
          ) : (
            product.price
          )}
        </span>
      </p>
    </li>
  )
}
