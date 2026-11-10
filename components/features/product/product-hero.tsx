"use client"

import Image from "next/image"
import Link from "next/link"

import type { Product } from "@/types/product"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductHeroProps {
  product: Product
}

const MACHINE_SLUGS = [
  { slug: "one", label: "One" },
  { slug: "duo", label: "Duo" },
  { slug: "pro", label: "Pro" },
]

export function ProductHero({ product }: ProductHeroProps) {
  const { addItem } = useCart()
  const isMachine = ["one", "duo", "pro"].includes(product.slug)

  return (
    <section className="border-b border-border bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left / Info */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-2 text-base font-light text-muted-foreground md:text-lg">
                {product.tagline}
              </p>
            </div>

            <p className="text-sm leading-relaxed font-light text-muted-foreground">
              {product.description}
            </p>

            {/* Model switcher if machine */}
            {isMachine ? (
              <div className="inline-flex rounded-full border border-border p-1">
                {MACHINE_SLUGS.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/shop/${m.slug}`}
                    className={cn(
                      "rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-colors",
                      product.slug === m.slug
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            ) : null}

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl font-semibold">
                ${product.price.toLocaleString()}
              </span>
              {product.subscription ? (
                <span className="font-mono text-xs text-muted-foreground">
                  every 4 weeks
                </span>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
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
                size="lg"
                className="w-full px-8 sm:w-auto"
              >
                Add to bag
              </Button>
            </div>

            {/* Trust points */}
            <div className="space-y-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
              <p>• Free shipping Europe and the US</p>
              {isMachine ? (
                <>
                  <p>• 30-day swap guarantee</p>
                  <p>• 3-year warranty covering parts & labour</p>
                </>
              ) : null}
              <p>
                <Link
                  href="/contact"
                  className="underline hover:text-foreground"
                >
                  Questions? Contact us
                </Link>
              </p>
            </div>
          </div>

          {/* Right / Image */}
          <div className="relative aspect-4/3 w-full rounded-3xl bg-muted/30 p-8 lg:col-span-7">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
