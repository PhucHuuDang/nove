"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface CompareModel {
  slug: string
  name: string
  price: string
  numericPrice: number
  image: string
  alt: string
  width: number
  height: number
  facts: {
    bestFor: string
    warmup: string
    milk: string
    pressure: string
    basket: string
    inBox: string
  }
}

const MODELS: CompareModel[] = [
  {
    slug: "one",
    name: "Nove One",
    price: "$650",
    numericPrice: 650,
    image: "/images/home/machine-one.png",
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    width: 1101,
    height: 1400,
    facts: {
      bestFor: "Espresso and americano",
      warmup: "40 s",
      milk: "No steam wand",
      pressure: "9 bar",
      basket: "58 mm",
      inBox: "Portafilter and tamper",
    },
  },
  {
    slug: "duo",
    name: "Nove Duo",
    price: "$950",
    numericPrice: 950,
    image: "/images/home/machine.png",
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    width: 1116,
    height: 1400,
    facts: {
      bestFor: "Lattes and flat whites",
      warmup: "45 s",
      milk: "Steam wand",
      pressure: "9 bar",
      basket: "58 mm",
      inBox: "Portafilter, tamper and milk jug",
    },
  },
  {
    slug: "pro",
    name: "Nove Pro",
    price: "$1,450",
    numericPrice: 1450,
    image: "/images/home/machine-pro.png",
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    width: 1356,
    height: 1400,
    facts: {
      bestFor: "Two or more coffee drinkers",
      warmup: "90 s",
      milk: "Two boilers, steams while it brews",
      pressure: "9 bar",
      basket: "58 mm",
      inBox: "Portafilter, tamper and milk jug",
    },
  },
]

const ROWS: Array<{
  label: string
  key: keyof CompareModel["facts"]
  figure?: boolean
}> = [
  { label: "Best for", key: "bestFor" },
  { label: "Warm-up", key: "warmup", figure: true },
  { label: "Milk", key: "milk" },
  { label: "Brewing pressure", key: "pressure", figure: true },
  { label: "Basket width", key: "basket", figure: true },
  { label: "In the box", key: "inBox" },
]

export function ShopCompareTable() {
  const { addItem } = useCart()

  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="mt-16 grid scroll-mt-24 gap-8 md:mt-24 xl:grid-cols-4 xl:gap-5"
    >
      <header className="flex flex-col items-start">
        <p className="text-sm font-medium text-muted-foreground">
          Side by side
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="compare-heading"
        >
          Compare
        </h2>
      </header>

      <div className="min-w-0 xl:col-span-3">
        <div className="dark overflow-hidden rounded-3xl bg-background text-foreground">
          <div
            tabIndex={0}
            role="group"
            aria-label="The three models compared"
            className="overflow-x-auto rounded-3xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset max-md:mask-r-from-85%"
          >
            <div className="min-w-xl">
              <table className="w-full text-sm">
                <caption className="sr-only">The three models compared</caption>
                <thead>
                  <tr>
                    <td className="w-1/4 p-5 md:p-6" />
                    {MODELS.map((model) => (
                      <th
                        key={model.slug}
                        scope="col"
                        className="w-1/4 p-5 text-left align-bottom font-normal md:p-6"
                      >
                        <span className="flex h-24 items-end">
                          <Image
                            src={model.image}
                            alt={model.alt}
                            width={model.width}
                            height={model.height}
                            className="h-full w-auto object-contain"
                          />
                        </span>
                        <span className="mt-4 block text-lg font-medium">
                          {model.name}
                        </span>
                        <span className="mt-1 block font-mono figures">
                          {model.price}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <th
                        scope="row"
                        className="px-5 py-4 text-left align-top font-normal text-muted-foreground md:px-6"
                      >
                        {row.label}
                      </th>
                      {MODELS.map((model) => (
                        <td
                          key={model.slug}
                          className={cn(
                            "px-5 py-4 align-top md:px-6",
                            row.figure && "font-mono figures"
                          )}
                        >
                          {model.facts[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-border">
                    <td className="p-5 md:p-6" />
                    {MODELS.map((model) => (
                      <td key={model.slug} className="p-5 md:p-6">
                        <button
                          type="button"
                          onClick={() =>
                            addItem({
                              slug: model.slug,
                              name: model.name,
                              price: model.numericPrice,
                              image: model.image,
                            })
                          }
                          aria-label={`Add to bag: ${model.name}, ${model.price}`}
                          className="group/button inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-foreground/25 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent active:scale-[0.97]"
                        >
                          Add to bag
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
