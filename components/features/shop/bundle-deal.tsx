"use client"

import Image from "next/image"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

const BASE = "https://nove-nextjs-template.vercel.app"

export function ShopBundleDeal() {
  const { addItem } = useCart()

  const handleAddBundle = () => {
    addItem({
      slug: "duo",
      name: "Nove Duo",
      price: 950,
      image: `${BASE}/images/home/machine.png`,
    })
    addItem({
      slug: "grinder",
      name: "Nove grinder",
      price: 290,
      image: `${BASE}/images/home/grinder.png`,
    })
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-border/80 bg-card p-8 md:p-14 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-16/9 w-full overflow-hidden rounded-2xl bg-muted/40 lg:col-span-6">
            <div className="flex h-full items-center justify-center gap-4 p-6">
              <div className="relative h-44 w-44 md:h-56 md:w-56">
                <Image
                  src={`${BASE}/images/home/machine.png`}
                  alt="Nove Duo"
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
              <div className="relative h-36 w-36 md:h-48 md:w-48">
                <Image
                  src={`${BASE}/images/home/grinder.png`}
                  alt="Nove Grinder"
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-6">
            <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Special Setup Bundle
            </span>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
              Nove Duo + Grinder
            </h2>
            <p className="text-base leading-relaxed font-light text-muted-foreground">
              Buy the Duo and grinder together and receive three months of our
              House Roast subscription for free.
            </p>

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl font-semibold">$1,240</span>
              <span className="font-mono text-xs text-muted-foreground">
                Includes $54 in complimentary beans
              </span>
            </div>

            <Button
              onClick={handleAddBundle}
              size="lg"
              className="w-full sm:w-auto"
            >
              Add setup to bag · $1,240
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
