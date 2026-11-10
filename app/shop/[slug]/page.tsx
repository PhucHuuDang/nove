import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { allProducts, getProductBySlug } from "@/lib/data/products"
import { ProductHero } from "@/components/features/product/product-hero"
import { ProductFeaturesGrid } from "@/components/features/product/product-features-grid"
import { ProductInBox } from "@/components/features/product/product-in-box"
import { ProductUseWith } from "@/components/features/product/product-use-with"
import { ProductReviews } from "@/components/features/product/product-reviews"
import { ProductFaq } from "@/components/features/product/product-faq"
import { ProductStickyCta } from "@/components/features/product/product-sticky-cta"
import { buttonVariants } from "@/components/ui/button"

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
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductHero product={product} />

      {/* In-Use Lifestyle Shot with Overlay */}
      {product.inUseImage ? (
        <section className="relative aspect-16/9 w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={product.inUseImage}
            alt={`${product.name} in use`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          {product.bar && product.basketMm ? (
            <div className="absolute bottom-6 left-6 rounded-full bg-background/80 px-4 py-2 backdrop-blur-md md:bottom-10 md:left-10">
              <span className="font-mono text-xs md:text-sm">
                {product.bar} bar · {product.basketMm} mm commercial basket
              </span>
            </div>
          ) : null}
        </section>
      ) : null}

      <ProductFeaturesGrid features={product.features} />
      <ProductInBox items={product.inBox} />
      <ProductUseWith items={product.useWith ?? []} />
      <ProductReviews productName={product.name} />
      <ProductFaq />

      {/* Compare Models Banner */}
      <section className="border-b border-border bg-background py-16 text-center">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-2xl font-light tracking-tight md:text-3xl">
            Compare all three machines
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Explore the differences between the One, Duo, and Pro.
          </p>
          <div className="mt-6">
            <Link
              href="/shop#compare"
              className={buttonVariants({
                variant: "outline",
                size: "default",
              })}
            >
              See full comparison table
            </Link>
          </div>
        </div>
      </section>

      <ProductStickyCta product={product} />
    </>
  )
}
