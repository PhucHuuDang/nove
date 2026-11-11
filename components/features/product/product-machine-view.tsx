"use client"

import { useState } from "react"
import { MACHINE_PAGES_DATA } from "@/lib/data/product-pages-data"
import { ProductNavSpacer } from "@/components/features/product/product-nav-spacer"
import { ProductHero } from "@/components/features/product/hero/product-hero"
import { ProductWhySection } from "@/components/features/product/why/product-why-section"
import { ProductInBoxSection } from "@/components/features/product/box/product-in-box-section"
import { ProductOwnersSection } from "@/components/features/product/owners/product-owners-section"
import { ProductFaqSection } from "@/components/features/product/faq/product-faq-section"
import { ProductBottomCtaSection } from "@/components/features/product/bottom-cta/product-bottom-cta-section"

interface ProductMachineViewProps {
  initialSlug: "one" | "duo" | "pro"
}

export function ProductMachineView({ initialSlug }: ProductMachineViewProps) {
  const [selectedSlug, setSelectedSlug] = useState<"one" | "duo" | "pro">(
    initialSlug
  )
  const currentMachine = MACHINE_PAGES_DATA[selectedSlug]

  const handleSelectModel = (newSlug: "one" | "duo" | "pro") => {
    const current = MACHINE_PAGES_DATA[selectedSlug]
    const next = MACHINE_PAGES_DATA[newSlug]
    if (next && current) {
      setSelectedSlug(newSlug)
      window.history.replaceState(null, "", `/shop/${newSlug}`)
      document.title = document.title.replace(current.name, next.name)
    }
  }

  return (
    <>
      <ProductNavSpacer />
      <ProductHero
        currentSlug={selectedSlug}
        onSelectModel={handleSelectModel}
      />
      <ProductWhySection why={currentMachine.why} />
      <ProductInBoxSection items={currentMachine.inBox} />
      <ProductOwnersSection owners={currentMachine.owners} />
      <ProductFaqSection questions={currentMachine.questions} />
      <ProductBottomCtaSection
        currentSlug={selectedSlug}
        onSelectModel={handleSelectModel}
      />
    </>
  )
}
