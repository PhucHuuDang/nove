import Image from "next/image"

import type { CatalogProduct } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"

interface ProductImageProps {
  product: CatalogProduct
  className?: string
  sizes?: string
  priority?: boolean
}

function ProductPhoto({
  product,
  className,
  sizes = "(min-width: 64rem) 30vw, 60vw",
  priority = false,
}: ProductImageProps) {
  return (
    <Image
      src={product.image.src}
      alt={product.image.alt}
      width={product.image.width}
      height={product.image.height}
      priority={priority}
      sizes={sizes}
      className={cn(
        "h-auto w-full",
        product.kind === "add-on" && "mix-blend-multiply",
        className
      )}
    />
  )
}

/** A product cut-out, or a product photo for beans. */
export function ProductImage(props: ProductImageProps) {
  return <ProductPhoto {...props} />
}

/** A machine cut-out standing on a soft contact shadow. */
export function GroundedProductImage({
  className,
  ...props
}: ProductImageProps) {
  if (props.product.kind !== "machine") {
    return <ProductPhoto {...props} className={className} />
  }

  return (
    <span className={cn("relative isolate block", className)}>
      <ProductPhoto {...props} className="block" />
      <span
        aria-hidden="true"
        className="absolute inset-x-[2%] bottom-[1%] -z-10 h-[9%] rounded-[50%] bg-radial from-black/25 to-transparent to-70%"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-[7%] bottom-[3.5%] -z-10 h-[3%] rounded-[50%] bg-black/35 blur-[3px]"
      />
    </span>
  )
}
