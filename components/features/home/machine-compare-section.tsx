"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { machines } from "@/lib/data/products"
import { useCart } from "@/lib/cart-context"
import { SectionLabel } from "@/components/shared/section-label"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MachineCompareSection() {
  const [selectedIdx, setSelectedIdx] = useState(1) // Default to Duo (bestseller)
  const current = machines[selectedIdx]
  const { addItem } = useCart()

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>The line-up</SectionLabel>
            <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-5xl">
              Three machines. Same espresso.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              All three brew at 9 bar with a 58 mm portafilter. Pick by how you
              drink milk.
            </p>
          </div>

          <div className="flex rounded-full border border-border p-1">
            {machines.map((m, idx) => (
              <button
                key={m.slug}
                onClick={() => setSelectedIdx(idx)}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-colors",
                  selectedIdx === idx
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {m.name.replace("Nove ", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Machine Showcase Card */}
        <div className="mt-10 grid gap-8 rounded-3xl border border-border/70 bg-card p-6 md:p-12 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-4/3 w-full lg:col-span-6">
            <Image
              src={current.images[0]}
              alt={current.name}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-contain"
            />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-light md:text-3xl">
                  {current.name}
                </h3>
                <span className="font-mono text-2xl font-semibold">
                  ${current.price.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {current.tagline}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-border py-6 font-mono text-xs">
              <div>
                <span className="text-muted-foreground uppercase">Width</span>
                <p className="mt-1 text-sm font-medium">{current.widthCm} cm</p>
              </div>
              <div>
                <span className="text-muted-foreground uppercase">Warmup</span>
                <p className="mt-1 text-sm font-medium">
                  {current.warmupSeconds} seconds
                </p>
              </div>
              <div>
                <span className="text-muted-foreground uppercase">
                  Steam wand
                </span>
                <p className="mt-1 text-sm font-medium">
                  {current.steamWand ? "Yes" : "No wand (espresso only)"}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground uppercase">Boilers</span>
                <p className="mt-1 text-sm font-medium">
                  {current.dualBoiler ? "Dual boiler" : "Single thermoblock"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                onClick={() =>
                  addItem({
                    slug: current.slug,
                    name: current.name,
                    price: current.price,
                    image: current.images[0],
                  })
                }
                size="lg"
                className="flex-1"
              >
                Add to bag · ${current.price.toLocaleString()}
              </Button>
              <Link
                href={`/shop/${current.slug}`}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Full specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
