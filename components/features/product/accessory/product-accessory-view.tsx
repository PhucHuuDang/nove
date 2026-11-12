"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/types/product"

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
    <section
      className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
      aria-labelledby="product-heading"
    >
      {/* Hero card — matches machine hero inner card style */}
      <div className="rounded-3xl border border-border bg-background">
        <div className="flex flex-col py-5 gutter-start-5 pe-5 md:py-8 md:gutter-start-8 md:pe-8 lg:py-10 lg:gutter-start-10 lg:pe-10 xl:py-12 xl:gutter-start-12 xl:pe-12">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <Link
                  href="/shop"
                  className="transition-colors hover:text-foreground"
                >
                  Shop
                </Link>
              </li>
              <li role="presentation" aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-foreground"
                >
                  {product.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* Title & Description */}
          <div className="mt-14 md:mt-20">
            <h1
              id="product-heading"
              className="leading-none"
              style={{
                fontSize: "clamp(3.5rem, min(8vw, 10rem, 16.5svh), 12rem)",
              }}
            >
              {product.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl">{product.tagline}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {product.description}
            </p>
          </div>

          {/* Price, Add to bag, and thumbnail */}
          <div className="mt-10 flex items-end justify-between gap-4">
            <div className="min-w-0">
              {/* Price + CTA */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <p className="font-mono text-3xl figures 2xl:text-4xl">
                  {priceFormatted}
                </p>

                <button
                  type="button"
                  aria-label={`Add to bag: ${product.name}, ${priceFormatted}`}
                  onClick={handleAdd}
                  className="group/button relative inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-8 text-base font-medium whitespace-nowrap text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {added ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                      >
                        Added
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                      >
                        Add to bag
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <ul className="flex flex-wrap gap-2">
                  <li>
                    <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border py-0.5 ps-1.5 pe-2.5 text-xs font-medium text-foreground">
                      <Truck className="size-3" />
                      Free shipping
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="group/button relative inline-flex h-auto! shrink-0 items-center justify-center rounded-none border border-transparent px-0! text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 after:absolute after:-inset-x-1 after:-inset-y-2.5 hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  Questions? Contact us
                </Link>
              </div>
            </div>

            {/* Product image thumbnail — bottom right, like machine thumbnail */}
            {product.images[0] ? (
              <div className="aspect-square w-24 shrink-0 md:w-32 lg:w-28 xl:w-36 2xl:w-44">
                <div className="relative size-full">
                  <div className="absolute inset-x-[6%] bottom-0 h-[8%] translate-y-1/2 rounded-full bg-foreground/10 blur-xl" />
                  <div className="relative size-full">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(min-width: 64rem) 12vw, 25vw"
                      className="object-contain object-bottom"
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
