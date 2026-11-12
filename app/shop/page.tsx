import type { Metadata } from "next"

import { ShopHeroSection } from "@/components/features/shop/hero-section"
import { ShopMachinesGrid } from "@/components/features/shop/machines-grid"
import { ShopAccessoriesGrid } from "@/components/features/shop/accessories-grid"
import { ShopBeansGrid } from "@/components/features/shop/beans-grid"
import { ShopCompareTable } from "@/components/features/shop/compare-table"
import { ShopBundleDeal } from "@/components/features/shop/bundle-deal"

export const metadata: Metadata = {
  title: "Shop Machines & Accessories",
  description:
    "Explore the Nove One, Duo, and Pro espresso machines, matching precision grinder, milk jug, and coffee bean subscriptions.",
}

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
