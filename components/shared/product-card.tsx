"use client"

import Image from "next/image"
import Link from "next/link"

import type { Product } from "@/types/product"
import { useCart } from "@/lib/cart-context"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
  priority?: boolean
  showFeatures?: boolean
}

export function ProductCard({
  product,
  className,
  priority = false,
  showFeatures = false,
}: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-sm md:p-8",
        className
      )}
    >
      <div>
        <Link href={`/shop/${product.slug}`} className="block">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted/40 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-6"
            />
          </div>

          <div className="mt-6 flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-medium tracking-tight">
              {product.name}
            </h3>
            <span className="font-mono text-base font-semibold">
              ${product.price.toLocaleString()}
            </span>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            {product.tagline}
          </p>
        </Link>

        {showFeatures && product.features ? (
          <ul className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
            {product.features.slice(0, 3).map((f) => (
              <li key={f.title} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                <span>{f.title}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3">
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
          className="flex-1"
          size="default"
        >
          Add to bag
        </Button>
        <Link
          href={`/shop/${product.slug}`}
          className={buttonVariants({ variant: "outline", size: "default" })}
        >
          Details
        </Link>
      </div>
    </div>
  )
}
