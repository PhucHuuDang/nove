import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductHeroThumbnailProps {
  currentSlug: "one" | "duo" | "pro"
}

const THUMBNAILS = [
  {
    slug: "one",
    src: "/images/home/machine-one.png",
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    heightPercent: "74.60272479564031%",
    aspectRatio: "1101 / 1400",
  },
  {
    slug: "duo",
    src: "/images/home/machine.png",
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    heightPercent: "92%",
    aspectRatio: "1116 / 1400",
  },
  {
    slug: "pro",
    src: "/images/home/machine-pro.png",
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    heightPercent: "87.83150442477876%",
    aspectRatio: "1356 / 1400",
  },
] as const

export function ProductHeroThumbnail({
  currentSlug,
}: ProductHeroThumbnailProps) {
  return (
    <div className="aspect-square w-24 shrink-0 md:w-32 lg:w-28 xl:w-36 2xl:w-44">
      <div className="relative z-10 size-full">
        {THUMBNAILS.map((thumb) => {
          const isCurrent = thumb.slug === currentSlug
          return (
            <div
              key={thumb.slug}
              aria-hidden={!isCurrent}
              className={cn(
                "absolute bottom-0 left-1/2 max-w-full -translate-x-1/2 transition-[opacity,transform] duration-300 ease-soft",
                isCurrent ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              style={{
                height: thumb.heightPercent,
                aspectRatio: thumb.aspectRatio,
              }}
            >
              <div className="absolute inset-x-[6%] bottom-0 h-[8%] translate-y-1/2 rounded-full bg-foreground/15 blur-xl" />
              <div className="relative size-full">
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  sizes="(min-width: 64rem) 30vw, 70vw"
                  className="size-full object-contain object-bottom mix-blend-normal"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
