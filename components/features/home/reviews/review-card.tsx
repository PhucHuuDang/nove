import Image from "next/image"
import type { ReviewItem } from "./reviews-data"

interface ReviewCardProps {
  review: ReviewItem
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      data-slot="card"
      data-size="sm"
      data-tone="default"
      className="group/card flex flex-col gap-4 overflow-hidden rounded-3xl bg-card py-4 text-sm text-card-foreground"
    >
      <div data-slot="card-content" className="px-4">
        {review.image ? (
          <>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={review.image.src}
                alt={review.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 80rem) 22vw, (min-width: 48rem) 36vw, 90vw"
              />
              <span
                data-slot="badge"
                data-variant="secondary"
                className="group/badge absolute bottom-3 left-3 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-secondary-foreground"
              >
                {review.model}
              </span>
            </div>
            <p className="mt-4 text-base">“{review.quote}”</p>
          </>
        ) : (
          <>
            {review.stars ? (
              <span
                role="img"
                aria-label="5 out of 5 stars"
                className="inline-flex gap-0.5 text-accent figures"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="size-4 fill-current"
                  >
                    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                  </svg>
                ))}
              </span>
            ) : null}
            <blockquote className="mt-4 text-base">
              <p>“{review.quote}”</p>
            </blockquote>
            <div
              data-orientation="horizontal"
              role="none"
              data-slot="separator"
              className="mt-5 h-px w-full shrink-0 bg-border"
            />
          </>
        )}
      </div>

      <div
        data-slot="card-footer"
        className="flex items-center gap-3 rounded-b-3xl px-4"
      >
        <span
          data-slot="avatar"
          className="group/avatar relative flex size-8 shrink-0 rounded-full select-none"
          aria-hidden="true"
        >
          {review.avatar ? (
            <Image
              data-slot="avatar-image"
              className="aspect-square size-full rounded-full object-cover"
              alt=""
              width={32}
              height={32}
              src={review.avatar}
            />
          ) : (
            <span
              data-slot="avatar-fallback"
              className="flex size-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground"
            >
              {review.initials}
            </span>
          )}
        </span>
        <span className="text-sm">
          <span className="block font-medium">{review.author}</span>
          <span className="block text-muted-foreground">
            {review.location} · {review.model}
          </span>
        </span>
      </div>
    </div>
  )
}
