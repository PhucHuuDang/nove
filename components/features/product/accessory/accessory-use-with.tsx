import Image from "next/image"
import Link from "next/link"
import type { UseWith } from "@/types/product"

interface AccessoryUseWithProps {
  items?: UseWith[]
}

export function AccessoryUseWith({ items }: AccessoryUseWithProps) {
  if (!items || items.length === 0) return null

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="box-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="box-heading"
        >
          Use it with
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:auto-cols-fr md:grid-flow-col md:grid-cols-none lg:gap-5">
          {items.map((item) => {
            const inner = (
              <>
                <div className="relative flex min-h-0 flex-1 items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 64rem) 16rem, 50vw"
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 flex min-h-10 items-center justify-center text-center text-sm">
                  {item.name}
                </p>
              </>
            )

            return item.href ? (
              <li
                key={item.name}
                className="relative flex aspect-5/4 flex-col rounded-3xl bg-card p-3 transition-transform duration-200 hover:scale-[1.02] md:p-4"
              >
                <Link href={item.href} className="flex size-full flex-col">
                  {inner}
                </Link>
              </li>
            ) : (
              <li
                key={item.name}
                className="relative flex aspect-5/4 flex-col rounded-3xl bg-card p-3 md:p-4"
              >
                {inner}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
