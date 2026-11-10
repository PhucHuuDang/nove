import Image from "next/image"

import type { Review } from "@/types/review"
import { cn } from "@/lib/utils"

interface ReviewsMarqueeProps {
  reviews: Review[]
  reverse?: boolean
  className?: string
}

export function ReviewsMarquee({
  reviews,
  reverse = false,
  className,
}: ReviewsMarqueeProps) {
  // Duplicate array to achieve seamless loop
  const duplicated = [...reviews, ...reviews]

  return (
    <div className={cn("overflow-hidden py-2", className)}>
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        {duplicated.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="mx-3 w-[340px] shrink-0 rounded-xl border border-border/60 bg-card p-5 text-card-foreground shadow-xs transition-colors hover:border-border md:w-[400px]"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-muted">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm leading-none font-medium">{item.name}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {item.city} · {item.model}
                </p>
              </div>
            </div>
            <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
              “{item.quote}”
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
