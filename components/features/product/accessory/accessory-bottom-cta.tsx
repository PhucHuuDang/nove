"use client"

import { useState } from "react"
import Image from "next/image"
import { Truck, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"
import type { Product } from "@/types/product"

interface AccessoryBottomCtaProps {
  product: Product
}

const MACHINES = [
  {
    slug: "one" as const,
    name: "Nove One",
    image: "/images/home/machine-one.png",
    widthPct: "68.9655%",
  },
  {
    slug: "duo" as const,
    name: "Nove Duo",
    image: "/images/home/machine.png",
    widthPct: "86.2069%",
  },
  {
    slug: "pro" as const,
    name: "Nove Pro",
    image: "/images/home/machine-pro.png",
    widthPct: "100%",
  },
]

export function AccessoryBottomCta({ product }: AccessoryBottomCtaProps) {
  const { addItem } = useCart()
  const [selectedMachine, setSelectedMachine] = useState<"one" | "duo" | "pro">(
    "duo"
  )
  const [added, setAdded] = useState(false)

  const activeMachine =
    MACHINES.find((m) => m.slug === selectedMachine) ?? MACHINES[1]

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

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-label={`Buy the ${product.name}`}
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3 lg:gap-5">
        {/* Free shipping card */}
        <ul className="grid content-start gap-4 lg:gap-5">
          <li className="flex items-center gap-4 rounded-3xl bg-card p-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-popover">
              <Truck className="size-5" />
            </span>
            <span>
              <span className="block font-medium">Free shipping</span>
              <span className="block text-sm text-muted-foreground">
                Europe and the US, 3 to 5 days
              </span>
            </span>
          </li>
        </ul>

        {/* Pairing Preview Card */}
        <div className="flex">
          <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-popover p-6">
            <p className="font-medium">
              With the{" "}
              <span className="inline-block font-semibold">
                {activeMachine.name}
              </span>
            </p>

            <div className="flex w-full items-end justify-center">
              <div className="grid w-3/5 shrink-0 items-end">
                {MACHINES.map((machine) => {
                  const isActive = machine.slug === selectedMachine
                  return (
                    <div
                      key={machine.slug}
                      className={cn(
                        "justify-self-end transition-opacity duration-300 ease-soft [grid-area:1/1]",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                      style={{ width: machine.widthPct }}
                    >
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        width={1116}
                        height={1400}
                        className="h-auto w-full"
                      />
                    </div>
                  )
                })}
              </div>

              {/* Accessory Beside Machine */}
              <div
                className="relative shrink-0"
                style={{
                  width: isGrinder ? "52%" : "40%",
                  marginLeft: "-13%",
                  marginBottom: "-2.9%",
                }}
              >
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="h-auto w-full mix-blend-multiply"
                  />
                ) : null}
              </div>
            </div>

            {/* Model switcher */}
            <div
              role="radiogroup"
              className="flex w-full items-center rounded-full bg-muted p-1"
            >
              {MACHINES.map((m) => (
                <button
                  key={m.slug}
                  type="button"
                  role="radio"
                  aria-checked={selectedMachine === m.slug}
                  onClick={() => setSelectedMachine(m.slug)}
                  className={cn(
                    "flex-1 rounded-full py-1 text-xs font-medium transition-colors",
                    selectedMachine === m.slug
                      ? "bg-background text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m.name.replace("Nove ", "")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action card: Price & Add to bag */}
        <div className="flex">
          <div className="flex flex-1 flex-col justify-between gap-6 rounded-3xl bg-card p-6 md:p-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Price</p>
              <p className="mt-2 font-mono text-4xl font-normal figures">
                ${product.price}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {product.tagline}
              </p>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add to bag: ${product.name}, $${product.price}`}
              className="group/button inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-foreground px-6 text-base font-medium whitespace-nowrap text-background transition-all hover:bg-foreground/85 active:scale-[0.97]"
            >
              {added ? (
                <>
                  <Check className="size-4" /> Added to bag
                </>
              ) : (
                `Add to bag · $${product.price}`
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
