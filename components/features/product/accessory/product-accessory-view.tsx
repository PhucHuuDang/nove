"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/types/product"
import { cn } from "@/lib/utils"

interface ProductAccessoryViewProps {
  product: Product
}

export function ProductAccessoryView({ product }: ProductAccessoryViewProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? "",
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const priceFormatted = `$${product.price}`

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/shop" className="hover:text-foreground">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li className="text-foreground">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {product.tagline}
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <span className="font-mono text-3xl font-medium figures">
              {priceFormatted}
            </span>
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add to bag: ${product.name}, ${priceFormatted}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:bg-foreground/85 active:scale-[0.97]"
            >
              <span
                className={cn(
                  "transition-opacity",
                  added ? "opacity-0" : "opacity-100"
                )}
              >
                Add to bag
              </span>
              {added ? (
                <span className="absolute inline-flex items-center gap-1.5 text-background">
                  <Check className="size-4" /> Added
                </span>
              ) : null}
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
              <Truck className="size-3.5" /> Free shipping
            </span>
            <Link href="/contact" className="underline hover:text-foreground">
              Questions? Contact us
            </Link>
          </div>
        </div>

        <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-card p-8">
          {product.images[0] ? (
            <div className="relative size-full max-h-96 max-w-96">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(min-width: 64rem) 40vw, 80vw"
                className="object-contain"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Owners review snippet */}
      <section
        className="mt-20 rounded-3xl bg-card p-8 md:p-12"
        aria-labelledby="accessory-owners"
      >
        <h2 id="accessory-owners" className="text-3xl font-normal md:text-4xl">
          {product.name} owners
        </h2>
        <p className="mt-3 text-muted-foreground">
          The 4.9 rating covers all Nove products.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="font-mono text-5xl font-medium figures">4.9</span>
          <span className="text-sm text-muted-foreground">1,284 reviews</span>
        </div>
      </section>
    </div>
  )
}
