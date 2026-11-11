import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { allProducts, getProductBySlug } from "@/lib/data/products"
import { MACHINE_PAGES_DATA } from "@/lib/data/product-pages-data"
import { ProductNavSpacer } from "@/components/features/product/product-nav-spacer"
import { ProductHero } from "@/components/features/product/hero/product-hero"
import { ProductWhySection } from "@/components/features/product/why/product-why-section"
import { ProductInBoxSection } from "@/components/features/product/box/product-in-box-section"
import { ProductOwnersSection } from "@/components/features/product/owners/product-owners-section"
import { ProductFaqSection } from "@/components/features/product/faq/product-faq-section"
import { ProductBottomCtaSection } from "@/components/features/product/bottom-cta/product-bottom-cta-section"
import { ProductAccessoryView } from "@/components/features/product/accessory/product-accessory-view"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const machine = MACHINE_PAGES_DATA[slug as keyof typeof MACHINE_PAGES_DATA]
  if (machine) {
    return {
      title: `${machine.name} · Nove`,
      description: machine.description,
    }
  }

  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found · Nove" }

  return {
    title: `${product.name} · Nove`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const machineData =
    MACHINE_PAGES_DATA[slug as keyof typeof MACHINE_PAGES_DATA]

  if (machineData) {
    return (
      <>
        <ProductNavSpacer />
        <ProductHero data={machineData} />
        <ProductWhySection why={machineData.why} />
        <ProductInBoxSection items={machineData.inBox} />
        <ProductOwnersSection owners={machineData.owners} />
        <ProductFaqSection questions={machineData.questions} />
        <ProductBottomCtaSection data={machineData} />
      </>
    )
  }

  const product = getProductBySlug(slug)
  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductNavSpacer />
      <ProductAccessoryView product={product} />
    </>
  )
}
