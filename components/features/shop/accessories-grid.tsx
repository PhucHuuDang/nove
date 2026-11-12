"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"

interface AccessoryItem {
  slug: string
  name: string
  price: string
  numericPrice: number
  note: string
  image: string
  alt: string
  heightClass: string
}

const ACCESSORIES: AccessoryItem[] = [
  {
    slug: "grinder",
    name: "Nove grinder",
    price: "$290",
    numericPrice: 290,
    note: "Grinds fresh for every coffee",
    image: "/images/home/grinder.png",
    alt: "Nove grinder in steel with a walnut knob and a clear hopper of beans",
    heightClass: "h-4/5",
  },
  {
    slug: "jug",
    name: "Milk jug, 350 ml",
    price: "$38",
    numericPrice: 38,
    note: "For steaming milk on the Duo and the Pro",
    image: "/images/home/jug.png",
    alt: "Steel milk jug with a walnut handle",
    heightClass: "h-1/2",
  },
]

export function ShopAccessoriesGrid() {
  const { addItem, setIsOpen } = useCart()

  return (
    <section
      id="add-ons"
      aria-labelledby="add-ons-heading"
      className="grid scroll-mt-24 gap-8 xl:grid-cols-4 xl:gap-5"
    >
      <header className="flex flex-col items-start">
        <p className="text-sm font-medium text-muted-foreground">
          Complete the setup
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="add-ons-heading"
        >
          Add-ons
        </h2>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group/button mt-6 inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-foreground/25 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent active:scale-[0.97]"
        >
          Open your bag
        </button>
      </header>

      <ul className="grid gap-x-5 gap-y-12 md:grid-cols-2 xl:col-span-3">
        {ACCESSORIES.map((item) => (
          <li key={item.slug} id={`shop-${item.slug}`}>
            <article className="group flex h-full flex-col transition-opacity duration-300 ease-soft">
              <Link
                href={`/shop/${item.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-card pt-6 lg:h-104"
              >
                <span className="absolute top-4 right-5 font-mono text-lg figures">
                  {item.price}
                </span>

                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className={`w-auto object-contain transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none ${item.heightClass}`}
                />
              </Link>

              <div className="mt-5 flex flex-1 items-start justify-between gap-4 md:flex-col md:justify-start xl:flex-row xl:justify-between">
                <div>
                  <h3 className="text-xl leading-tight">
                    <Link
                      href={`/shop/${item.slug}`}
                      className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {item.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.note}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      slug: item.slug,
                      name: item.name,
                      price: item.numericPrice,
                      image: item.image,
                    })
                  }
                  aria-label={`Add to bag: ${item.name}, ${item.price}`}
                  className="group/button inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-foreground/25 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent active:scale-[0.97] md:mt-auto xl:mt-0"
                >
                  Add to bag
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
