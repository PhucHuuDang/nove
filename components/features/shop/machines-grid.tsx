"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface MachineItem {
  slug: "one" | "duo" | "pro"
  name: string
  price: string
  numericPrice: number
  kicker: string
  image: string
  alt: string
  widthPct: string
  scale: number
  bestseller?: boolean
}

const MACHINES: MachineItem[] = [
  {
    slug: "one",
    name: "Nove One",
    price: "$650",
    numericPrice: 650,
    kicker: "For espresso and americano",
    image: "/images/home/machine-one.png",
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    widthPct: "43%",
    scale: 0.8,
  },
  {
    slug: "duo",
    name: "Nove Duo",
    price: "$950",
    numericPrice: 950,
    kicker: "For lattes and flat whites",
    image: "/images/home/machine.png",
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    widthPct: "54%",
    scale: 1,
    bestseller: true,
  },
  {
    slug: "pro",
    name: "Nove Pro",
    price: "$1,450",
    numericPrice: 1450,
    kicker: "For two or more coffee drinkers",
    image: "/images/home/machine-pro.png",
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    widthPct: "63%",
    scale: 1.16,
  },
]

export function ShopMachinesGrid() {
  const { addItem } = useCart()

  return (
    <section
      id="machines"
      aria-labelledby="machines-heading"
      className="grid scroll-mt-24 gap-8 xl:grid-cols-4 xl:gap-5"
    >
      <header className="flex flex-col items-start">
        <p className="text-sm font-medium text-muted-foreground">
          Pick by what you drink
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="machines-heading"
        >
          Machines
        </h2>
        <Link
          href="#compare"
          className="group/button mt-6 inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-foreground/25 bg-transparent px-4 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent active:scale-[0.97]"
        >
          Compare the models
        </Link>
      </header>

      <ul className="grid gap-x-5 gap-y-12 md:grid-cols-3 xl:col-span-3">
        {MACHINES.map((machine) => (
          <li key={machine.slug} id={`shop-${machine.slug}`}>
            <article className="group flex h-full flex-col transition-opacity duration-300 ease-soft">
              <Link
                href={`/shop/${machine.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className={cn(
                  "relative flex h-80 items-center justify-center overflow-hidden rounded-3xl pt-6 lg:h-104",
                  machine.bestseller
                    ? "dark bg-background text-foreground"
                    : "bg-card"
                )}
              >
                {machine.bestseller ? (
                  <span className="absolute top-4 left-4 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    Bestseller
                  </span>
                ) : null}

                <span className="absolute top-4 right-5 font-mono text-lg figures">
                  {machine.price}
                </span>

                <div
                  className="transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none"
                  style={{ width: machine.widthPct }}
                >
                  <span className="relative isolate block">
                    <Image
                      src={machine.image}
                      alt={machine.alt}
                      width={1116}
                      height={1400}
                      className="block h-auto w-full"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[2%] bottom-[1%] -z-10 h-[9%] rounded-[50%] bg-radial from-black/25 to-transparent to-70%"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[7%] bottom-[3.5%] -z-10 h-[3%] rounded-[50%] bg-black/35 blur-[3px]"
                    />
                  </span>
                </div>
              </Link>

              <div className="mt-5 flex flex-1 items-start justify-between gap-4 md:flex-col md:justify-start xl:flex-row xl:justify-between">
                <div>
                  <h3 className="text-xl leading-tight">
                    <Link
                      href={`/shop/${machine.slug}`}
                      className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {machine.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {machine.kicker}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      slug: machine.slug,
                      name: machine.name,
                      price: machine.numericPrice,
                      image: machine.image,
                    })
                  }
                  aria-label={`Add to bag: ${machine.name}, ${machine.price}`}
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
