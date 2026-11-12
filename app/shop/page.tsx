import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { ShopHeroSection } from "@/components/features/shop/hero-section"
import { ShopMachinesGrid } from "@/components/features/shop/machines-grid"
import { ShopAccessoriesGrid } from "@/components/features/shop/accessories-grid"
import { ShopBeansGrid } from "@/components/features/shop/beans-grid"
import { ShopCompareTable } from "@/components/features/shop/compare-table"
import { ShopBundleDeal } from "@/components/features/shop/bundle-deal"

export const metadata: Metadata = pageMetadata({
  title: "Shop",
  description:
    "The Nove One, Duo and Pro espresso machines, the grinder, the milk jug and three beans on subscription. Free shipping to Europe and the US.",
  path: "/shop",
})

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl gutter-3 pb-16 md:gutter-5 md:pb-24">
      <ShopHeroSection />
      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
        <ShopMachinesGrid />
        <ShopAccessoriesGrid />
        <ShopBeansGrid />
        <ShopCompareTable />
        <ShopBundleDeal />
      </div>
    </div>
  )
}
