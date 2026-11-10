import { ReviewsCarousel } from "@/components/shared/reviews-carousel"
import { SectionLabel } from "@/components/shared/section-label"
import { StarRating } from "@/components/shared/star-rating"
import { reviews, reviewStats } from "@/lib/data/reviews"

interface ProductReviewsProps {
  productName: string
}

export function ProductReviews({ productName }: ProductReviewsProps) {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Owners</SectionLabel>
            <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
              {productName} owners
            </h2>
          </div>
          <StarRating
            rating={reviewStats.rating}
            reviewsCount={reviewStats.count}
            avatars={reviewStats.avatars}
          />
        </div>

        <div className="mt-12">
          <ReviewsCarousel reviews={reviews} />
        </div>
      </div>
    </section>
  )
}
