"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface BeanProduct {
  slug: string
  name: string
  note: string
  price: number
  image: string
  alt: string
}

const BEANS: BeanProduct[] = [
  {
    slug: "beans",
    name: "House roast",
    note: "Chocolate and caramel, for espresso and milk",
    price: 18,
    image: "/images/shop/beans-house.jpg",
    alt: "A cream paper bag of coffee on a walnut counter, roasted beans spilled in front of it",
  },
  {
    slug: "origin",
    name: "Ethiopia single origin",
    note: "Light roast, fruity, best black",
    price: 22,
    image: "/images/shop/beans-origin.jpg",
    alt: "A light brown bag of coffee beans from Ethiopia with beans scattered on a marble counter",
  },
  {
    slug: "decaf",
    name: "Decaf roast",
    note: "Medium roast, for an evening coffee",
    price: 19,
    image: "/images/shop/beans-decaf.jpg",
    alt: "A dark brown bag of decaf coffee beans beside a cup of espresso on an oak table",
  },
]

export function ShopBeansGrid() {
  const { addItem } = useCart()

  return (
    <section
      id="beans"
      aria-labelledby="beans-heading"
      className="grid scroll-mt-24 gap-8 xl:grid-cols-4 xl:gap-5"
    >
      <header className="flex flex-col items-start">
        <p className="text-sm font-medium text-muted-foreground">
          Every four weeks
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="beans-heading"
        >
          Beans
        </h2>
        <p className="mt-4 max-w-xs text-sm text-muted-foreground">
          A 250 g bag every four weeks, whole or ground for the machine. Pause
          or stop any time.
        </p>
      </header>

      <ul className="grid gap-x-5 gap-y-5 md:grid-cols-3 xl:col-span-3">
        {BEANS.map((bean) => {
          const isDark = bean.slug === "decaf"

          return (
            <li key={bean.slug} id={`shop-${bean.slug}`}>
              <article
                className={cn(
                  "group relative isolate flex aspect-4/5 flex-col justify-between overflow-hidden rounded-3xl p-5 text-foreground",
                  isDark && "dark"
                )}
              >
                <Link
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute inset-0 -z-10"
                  href={`/shop/${bean.slug}`}
                >
                  <Image
                    src={bean.image}
                    alt={bean.alt}
                    fill
                    sizes="(min-width: 80rem) 22rem, (min-width: 48rem) 33vw, 100vw"
                    className="size-full object-cover transition-transform duration-700 ease-soft motion-safe:group-hover:scale-103 motion-reduce:transition-none"
                  />
                </Link>

                <div>
                  <h3 className="text-2xl leading-tight">
                    <Link
                      className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      href={`/shop/${bean.slug}`}
                    >
                      {bean.name}
                    </Link>
                  </h3>
                  <p className="mt-1 max-w-56 text-sm text-muted-foreground">
                    {bean.note}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="rounded-full bg-popover/80 px-3.5 py-1.5 whitespace-nowrap text-popover-foreground backdrop-blur-md">
                    <span className="font-mono figures">${bean.price}</span>{" "}
                    <span className="text-sm text-muted-foreground">a bag</span>
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        slug: bean.slug,
                        name: bean.name,
                        price: bean.price,
                        image: bean.image,
                      })
                    }
                    aria-label={`Add to bag: ${bean.name}, $${bean.price}`}
                    className="group/button inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-primary px-4 text-sm font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
                  >
                    Add to bag
                  </button>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
