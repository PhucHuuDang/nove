import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { REVIEWS_SECTION_DATA } from "./reviews/reviews-data"
import { ReviewCard } from "./reviews/review-card"

export function HomeReviewsSection() {
  const col1Duplicated = [
    ...REVIEWS_SECTION_DATA.column1,
    ...REVIEWS_SECTION_DATA.column1,
  ]
  const col2Duplicated = [
    ...REVIEWS_SECTION_DATA.column2,
    ...REVIEWS_SECTION_DATA.column2,
  ]
  const col3Duplicated = [
    ...REVIEWS_SECTION_DATA.column3,
    ...REVIEWS_SECTION_DATA.column3,
  ]

  return (
    <section
      className="px-3 section-padding md:px-5"
      aria-labelledby="reviews-heading"
    >
      <div className="dark rounded-3xl bg-background panel-padding text-foreground">
        <ScrollReveal className="flex flex-col items-center text-center">
          <header>
            <p className="text-sm font-medium text-muted-foreground">
              {REVIEWS_SECTION_DATA.eyebrow}
            </p>
            <h2
              className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
              id="reviews-heading"
            >
              {REVIEWS_SECTION_DATA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {REVIEWS_SECTION_DATA.lede}
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal
          delayMs={100}
          className="group mt-10 grid h-208 gap-5 overflow-hidden mask-y-from-85% md:mt-14 md:grid-cols-2 xl:grid-cols-3"
        >
          <div>
            <ul className="animate-scroll-up flex flex-col gap-5 pb-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {col1Duplicated.map((review, idx) => (
                <li key={`col1-${review.id}-${idx}`}>
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>

          <div className="max-md:hidden">
            <ul className="animate-scroll-down flex flex-col gap-5 pb-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {col2Duplicated.map((review, idx) => (
                <li key={`col2-${review.id}-${idx}`}>
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>

          <div className="max-xl:hidden">
            <ul className="animate-scroll-up flex flex-col gap-5 pb-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {col3Duplicated.map((review, idx) => (
                <li key={`col3-${review.id}-${idx}`}>
                  <ReviewCard review={review} />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
