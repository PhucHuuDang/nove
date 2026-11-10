import type { Metadata } from "next"

import { ShopHeroSection } from "@/components/features/shop/hero-section"
import { ShopMachinesGrid } from "@/components/features/shop/machines-grid"
import { ShopCompareTable } from "@/components/features/shop/compare-table"
import { ShopAccessoriesGrid } from "@/components/features/shop/accessories-grid"
import { ShopBeansGrid } from "@/components/features/shop/beans-grid"
import { ShopBundleDeal } from "@/components/features/shop/bundle-deal"

export const metadata: Metadata = {
  title: "Shop Machines & Accessories",
  description:
    "Explore the Nove One, Duo, and Pro espresso machines, matching precision grinder, milk jug, and coffee bean subscriptions.",
}

export default function ShopPage() {
  return (
    <>
      <ShopHeroSection />
      <ShopMachinesGrid />
      <ShopCompareTable />
      <ShopAccessoriesGrid />
      <ShopBeansGrid />
      <ShopBundleDeal />
    </>
  )
}
