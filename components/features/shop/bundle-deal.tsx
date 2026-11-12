"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"

export function ShopBundleDeal() {
  const { addItem } = useCart()

  const handleAddBundle = () => {
    addItem({
      slug: "duo",
      name: "Nove Duo",
      price: 950,
      image: "/images/home/machine.png",
    })
    addItem({
      slug: "grinder",
      name: "Nove grinder",
      price: 290,
      image: "/images/home/grinder.png",
    })
  }

  return (
    <section
      id="setup"
      aria-labelledby="setup-heading"
      className="mt-16 grid scroll-mt-24 gap-8 md:mt-24 xl:grid-cols-4 xl:gap-5"
    >
      <header className="flex flex-col items-start">
        <p className="text-sm font-medium text-muted-foreground">
          Buy them together
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="setup-heading"
        >
          Bundle
        </h2>
      </header>

      <div className="xl:col-span-3">
        <article className="grid overflow-hidden rounded-3xl bg-card md:grid-cols-2 lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col p-6 md:p-8">
            <span className="self-start rounded-full bg-background px-2.5 py-0.5 font-mono text-xs font-medium text-foreground figures">
              Save $54
            </span>

            <h3 className="mt-8 text-4xl leading-none md:text-5xl">
              The full setup
            </h3>
            <p className="mt-3 text-muted-foreground">
              Three months of beans free with the Duo and the grinder.
            </p>

            <div className="mt-auto pt-6">
              <div className="mb-6 h-px w-full bg-border" />
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-4xl figures">$1,240</span>
                <s className="font-mono text-muted-foreground figures">
                  <span className="sr-only">Was </span>$1,294
                </s>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleAddBundle}
                  aria-label="Add to bag: The full setup, $1,240"
                  className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 active:scale-[0.97]"
                >
                  Add to bag
                </button>
                <Link
                  href="/shop/duo"
                  className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-foreground/25 bg-transparent px-6 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent active:scale-[0.97]"
                >
                  See the Duo
                </Link>
              </div>
            </div>
          </div>

          <ul
            aria-label="In the bundle"
            className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[1fr_auto] gap-x-4 gap-y-3 px-6 pt-10 pb-6 max-md:order-first md:px-8 md:pb-8"
          >
            <li className="row-span-2 grid grid-rows-subgrid">
              <span className="relative isolate block self-end">
                <Image
                  src="/images/home/machine.png"
                  alt="Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle"
                  width={1116}
                  height={1400}
                  className="block h-auto w-full"
                />
              </span>
              <p className="flex flex-col text-sm leading-snug">
                <span>Nove Duo</span>
                <span className="font-mono text-muted-foreground figures">
                  $950
                </span>
              </p>
            </li>

            <li className="row-span-2 grid grid-rows-subgrid">
              <Image
                src="/images/home/grinder.png"
                alt="Nove grinder in steel with a walnut knob and a clear hopper of beans"
                width={800}
                height={800}
                className="h-auto w-full self-end mix-blend-multiply"
              />
              <p className="flex flex-col text-sm leading-snug">
                <span>Grinder</span>
                <span className="font-mono text-muted-foreground figures">
                  $290
                </span>
              </p>
            </li>

            <li className="row-span-2 grid grid-rows-subgrid">
              <div className="relative self-end">
                <Image
                  src="/images/shop/beans-house.jpg"
                  alt="Three bags of House roast beans"
                  width={816}
                  height={1024}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
              <p className="flex flex-col text-sm leading-snug">
                <span>3 bags of beans</span>
                <span className="font-mono text-muted-foreground figures">
                  Free
                </span>
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
