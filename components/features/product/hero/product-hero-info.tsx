import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck, RefreshCw, ShieldCheck } from "lucide-react"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { ProductHeroModelSwitch } from "./product-hero-model-switch"
import { ProductHeroAddToBag } from "./product-hero-add-to-bag"

interface ProductHeroInfoProps {
  data: MachinePageData
}

export function ProductHeroInfo({ data }: ProductHeroInfoProps) {
  return (
    <div className="gutter-start-5 md:gutter-start-8 lg:gutter-start-10 xl:gutter-start-12 flex flex-col rounded-3xl bg-background py-5 pe-5 md:py-8 md:pe-8 lg:min-h-0 lg:justify-between lg:py-10 lg:pe-10 xl:py-12 xl:pe-12">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
          <li className="inline-flex items-center gap-1.5">
            <Link
              href="/shop"
              className="transition-colors hover:text-foreground"
            >
              Shop
            </Link>
          </li>
          <li
            role="presentation"
            aria-hidden="true"
            className="[&>svg]:size-3.5"
          >
            <ChevronRight className="size-3.5" />
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span
              role="link"
              aria-disabled="true"
              aria-current="page"
              className="font-normal text-foreground"
            >
              {data.name}
            </span>
          </li>
        </ol>
      </nav>

      {/* Title & Description */}
      <div className="mt-14 md:mt-20 lg:mt-0">
        <h1
          id="product-heading"
          className="leading-none"
          style={{
            fontSize: "clamp(4.5rem, min(9.5vw, 12rem, 16.5svh), 16rem)",
          }}
        >
          Nove <br />
          <span className="relative inline-flex overflow-hidden">
            <span className="inline-block">{data.shortName}</span>
          </span>
        </h1>
        <div className="mt-4 grid lg:mt-5">
          <p className="text-lg md:text-xl 2xl:text-2xl">{data.tagline}</p>
        </div>
        <div className="mt-2 grid max-w-sm lg:hidden xl:grid 2xl:max-w-md">
          <p className="text-sm text-muted-foreground 2xl:text-base">
            {data.description}
          </p>
        </div>
      </div>

      {/* Model Picker, Price, and Actions */}
      <div className="mt-10 flex items-end justify-between gap-4 lg:mt-0">
        <div className="min-w-0">
          <ProductHeroModelSwitch currentSlug={data.slug} />

          <ProductHeroAddToBag
            slug={data.slug}
            name={data.name}
            price={data.price}
            priceFormatted={data.priceFormatted}
            image={data.hero.thumbnail}
          />

          {/* Badges and Questions Link */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <ul className="flex flex-wrap gap-2">
              <li>
                <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                  <Truck className="size-3" />
                  Free shipping
                </span>
              </li>
              <li>
                <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                  <RefreshCw className="size-3" />
                  30-day swap
                </span>
              </li>
              <li>
                <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                  <ShieldCheck className="size-3" />
                  3-year warranty
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="group/button relative inline-flex h-auto! shrink-0 items-center justify-center rounded-none border border-transparent px-0! text-sm font-medium text-foreground underline decoration-foreground/30 underline-offset-4 after:absolute after:-inset-x-1 after:-inset-y-2.5 hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Questions? Contact us
            </Link>
          </div>
        </div>

        {/* Machine Preview Thumbnail */}
        <div className="aspect-square w-24 shrink-0 md:w-32 lg:w-28 xl:w-36 2xl:w-44">
          <div className="relative z-10 size-full">
            <div
              className="absolute bottom-0 left-1/2 max-w-full -translate-x-1/2"
              style={{
                height: data.hero.heightPercent,
                aspectRatio: data.hero.aspectRatio,
              }}
            >
              <div className="absolute inset-x-[6%] bottom-0 h-[8%] translate-y-1/2 rounded-full bg-foreground/15 blur-xl" />
              <div className="relative size-full">
                <Image
                  src={data.hero.thumbnail}
                  alt={data.hero.thumbnailAlt}
                  fill
                  sizes="(min-width: 64rem) 30vw, 70vw"
                  className="size-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
