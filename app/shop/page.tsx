import type { Metadata } from "next"

import { ShopBundle } from "@/components/features/shop/shop-bundle"
import { ShopCatalog } from "@/components/features/shop/shop-catalog"
import { ShopCompare } from "@/components/features/shop/shop-compare"
import { ShopHero } from "@/components/features/shop/shop-hero"
import { ShopPromiseBar } from "@/components/features/shop/shop-promise-bar"
import { NavSpacer } from "@/components/shared/nav-spacer"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Shop",
  description:
    "The Nove One, Duo and Pro espresso machines, the grinder, the milk jug and three beans on subscription. Free shipping to Europe and the US.",
  path: "/shop",
})

export default function ShopPage() {
  return (
    <>
      <NavSpacer />
      <section
        aria-labelledby="shop-heading"
        className="gutter-3 section-padding pt-6! md:gutter-5 md:pt-8! lg:pt-10!"
      >
        <ShopHero />
        <ShopPromiseBar />
        <ShopCatalog />
        <ShopCompare />
        <ShopBundle />
      </section>
    </>
  )
}
