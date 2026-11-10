import { SectionLabel } from "@/components/shared/section-label"
import { StarRating } from "@/components/shared/star-rating"
import { ReviewsMarquee } from "@/components/shared/reviews-marquee"
import { reviews, reviewStats } from "@/lib/data/reviews"

export function HomeReviewsSection() {
  const half = Math.ceil(reviews.length / 2)
  const firstRow = reviews.slice(0, half)
  const secondRow = reviews.slice(half)

  return (
    <section className="overflow-hidden border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Reviews</SectionLabel>
            <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-5xl">
              1,284 Nove owners in their kitchens
            </h2>
          </div>
          <StarRating
            rating={reviewStats.rating}
            reviewsCount={reviewStats.count}
            avatars={reviewStats.avatars}
          />
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <ReviewsMarquee reviews={firstRow} />
        <ReviewsMarquee reviews={secondRow} reverse />
      </div>
    </section>
  )
}
