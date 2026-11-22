import Link from "next/link"

import { ShopBundleAddButton } from "@/components/features/shop/shop-bundle-add-button"
import { ShopBundleItem } from "@/components/features/shop/shop-bundle-item"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"
import { FULL_SETUP, catalogProduct, formatPrice } from "@/lib/data/catalog"
import { pillBadge, pillButton } from "@/lib/pill-variants"

export function ShopBundle() {
  return (
    <section
      id="setup"
      aria-labelledby="setup-heading"
      className="mt-16 grid scroll-mt-24 gap-8 md:mt-24 xl:grid-cols-4 xl:gap-5"
    >
      <ScrollReveal as="header" className="flex flex-col items-start">
        <SectionEyebrow>Buy them together</SectionEyebrow>
        <SectionTitle id="setup-heading" className="mt-3">
          Bundle
        </SectionTitle>
      </ScrollReveal>
      <ScrollReveal className="xl:col-span-3">
        <article className="grid overflow-hidden rounded-3xl bg-card md:grid-cols-2 lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col p-6 md:p-8">
            <span
              className={pillBadge({ figure: true, className: "self-start" })}
            >
              Save {formatPrice(FULL_SETUP.saving)}
            </span>
            <h3 className="mt-8 text-4xl leading-none md:text-5xl">
              {FULL_SETUP.name}
            </h3>
            <p className="mt-3 text-muted-foreground">{FULL_SETUP.note}.</p>
            <div className="mt-auto pt-6">
              <div
                role="none"
                className="mb-6 h-px w-full shrink-0 bg-border"
              />
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-4xl figures">
                  {FULL_SETUP.price}
                </span>
                <s className="font-mono text-muted-foreground figures">
                  <span className="sr-only">Was </span>
                  {FULL_SETUP.was}
                </s>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ShopBundleAddButton />
                <Link
                  href={catalogProduct("duo").href}
                  className={pillButton({ variant: "outline" })}
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
            {FULL_SETUP.items.map((product) => (
              <ShopBundleItem key={product.id} product={product} />
            ))}
          </ul>
        </article>
      </ScrollReveal>
    </section>
  )
}
