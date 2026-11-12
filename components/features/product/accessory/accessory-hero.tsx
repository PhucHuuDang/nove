"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/types/product"

interface AccessoryHeroProps {
  product: Product
}

export function AccessoryHero({ product }: AccessoryHeroProps) {
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

  const isGrinder = product.slug === "grinder"
  const isJug = product.slug === "jug"

  return (
    <section
      className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
      aria-labelledby="product-heading"
    >
      <div className="grid grid-cols-1 gap-2 rounded-4xl bg-foreground p-2 md:gap-3 md:p-3 lg:h-[clamp(36rem,calc(100svh-10rem),72rem)] lg:grid-cols-2">
        {/* Left Column: Product Info Card */}
        <div className="flex flex-col rounded-3xl bg-background py-5 gutter-start-5 pe-5 md:py-8 md:gutter-start-8 md:pe-8 lg:min-h-0 lg:justify-between lg:py-10 lg:gutter-start-10 lg:pe-10 xl:py-12 xl:gutter-start-12 xl:pe-12">
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

          {/* Heading & description */}
          <div className="mt-14 md:mt-20 lg:mt-0">
            <h1
              id="product-heading"
              className="leading-none"
              style={{
                fontSize: "clamp(3rem, min(6.5vw, 8.25rem, 11svh), 11rem)",
              }}
            >
              {product.name}
            </h1>
            <div className="mt-4 lg:mt-5">
              <p className="text-lg md:text-xl 2xl:text-2xl">
                {product.tagline}
              </p>
            </div>
            <div className="mt-2 max-w-sm lg:hidden xl:grid 2xl:max-w-md">
              <p className="text-sm text-muted-foreground 2xl:text-base">
                {product.description}
              </p>
            </div>
          </div>

          {/* Price, CTA & Thumbnail */}
          <div className="mt-10 flex items-end justify-between gap-4 lg:mt-0">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <p className="font-mono text-3xl figures 2xl:text-4xl">
                  ${product.price}
                </p>
                <button
                  type="button"
                  onClick={handleAdd}
                  aria-label={`Add to bag: ${product.name}, $${product.price}`}
                  className="group/button inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-8 text-base font-medium whitespace-nowrap text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
                >
                  {added ? (
                    <>
                      <Check className="size-4" /> Added
                    </>
                  ) : (
                    "Add to bag"
                  )}
                </button>
              </div>

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
                  className="group/button relative inline-flex h-auto! shrink-0 items-center justify-center rounded-none border border-transparent px-0! text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  Questions? Contact us
                </Link>
              </div>
            </div>

            {/* Thumbnail Bottom-Right */}
            {product.images[0] ? (
              <div className="aspect-square w-24 shrink-0 md:w-32 lg:w-28 xl:w-36 2xl:w-44">
                <div className="relative z-10 size-full">
                  <div
                    className="absolute bottom-0 left-1/2 max-w-full -translate-x-1/2"
                    style={{ height: "84%", aspectRatio: "800 / 800" }}
                  >
                    <div className="absolute inset-x-[6%] bottom-[5.6%] h-[8%] translate-y-1/2 rounded-full bg-foreground/15 blur-xl" />
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
              </div>
            ) : null}
          </div>
        </div>

        {/* Right Column: In-use Photo Card */}
        <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-card md:aspect-4/3 lg:aspect-auto lg:h-full">
          {product.inUseImage ? (
            <Image
              src={product.inUseImage}
              alt={product.name}
              fill
              sizes="(min-width: 64rem) 50vw, 100vw"
              className="object-cover"
              priority
            />
          ) : null}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-x-6 bottom-14 text-center lg:bottom-18">
            <p className="text-3xl leading-tight md:text-4xl">
              {isGrinder ? (
                <>
                  <span className="font-mono figures">40</span> settings
                </>
              ) : isJug ? (
                <span className="font-mono figures">350 ml</span>
              ) : (
                <span className="font-mono figures">250 g</span>
              )}
            </p>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground md:text-base">
              {isGrinder
                ? "Turn the walnut dial to set the grind"
                : isJug
                  ? "Enough milk for one or two drinks"
                  : "Pause or stop any time"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
