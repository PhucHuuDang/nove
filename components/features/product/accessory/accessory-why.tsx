import Image from "next/image"
import type { Product } from "@/types/product"

interface AccessoryWhyProps {
  product: Product
}

export function AccessoryWhy({ product }: AccessoryWhyProps) {
  const features = product.features
  if (!features || features.length < 4) return null

  const isGrinder = product.slug === "grinder"
  const lede = isGrinder
    ? "Made to sit beside the machine and grind for one shot at a time."
    : "Steam milk for the next drink without washing the first."

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-card p-3 md:p-5 lg:p-6">
        <header className="flex flex-col items-center px-3 pt-8 text-center md:pt-12">
          <p className="text-sm font-medium text-muted-foreground">
            {product.name}
          </p>
          <h2
            className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="why-heading"
          >
            {product.tagline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {lede}
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {/* Card 1 */}
          <div className="rounded-3xl bg-popover p-1.5 shadow-sm">
            <div className="relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5">
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-28 flex justify-center">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={features[0].image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain mix-blend-multiply"
                  />
                </span>
              </div>
              <h3 className="relative text-xl leading-snug">
                {features[0].title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-popover p-1.5 shadow-sm">
            <div className="relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5">
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-28 flex justify-center">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={features[1].image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain mix-blend-multiply"
                  />
                </span>
              </div>
              <h3 className="relative text-xl leading-snug">
                {features[1].title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Tall photo card */}
          <div className="rounded-3xl bg-popover p-1.5 shadow-sm md:row-span-2 md:max-lg:col-span-2 lg:col-start-3 lg:row-start-1">
            <div className="relative isolate flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-2xl p-5 text-background">
              <Image
                src={features[2].image}
                alt=""
                fill
                sizes="(min-width: 64rem) 24rem, 100vw"
                className="-z-10 object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-black/60 to-transparent"
              />
              <h3 className="text-xl leading-snug text-popover">
                {features[2].title}
              </h3>
              <p className="mt-1 max-w-72 text-sm leading-relaxed text-popover/80">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Card 4: Wide card */}
          <div className="rounded-3xl bg-popover p-1.5 shadow-sm md:col-span-2">
            <div className="relative isolate flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5 md:min-h-64">
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-36 flex justify-center md:inset-x-auto md:right-[8%] md:bottom-5">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={features[3].image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain"
                  />
                </span>
              </div>
              <h3 className="relative max-w-xs text-3xl leading-tight md:text-4xl">
                {features[3].title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
