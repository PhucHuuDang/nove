import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { cn } from "@/lib/utils"

interface ProductOwnersFeaturedImagesProps {
  selectedIdx: number
}

const COL2_IMAGES = [
  {
    src: "/images/home/latte.jpg",
    alt: "A latte with a leaf poured on top, held in two hands",
  },
  { src: "/images/home/reviews/anna.jpg", alt: "" },
  { src: "/images/home/reviews/tom.jpg", alt: "" },
  { src: "/images/home/reviews/daniel.jpg", alt: "" },
]

export function ProductOwnersFeaturedImages({
  selectedIdx,
}: ProductOwnersFeaturedImagesProps) {
  return (
    <ScrollReveal
      delayMs={80}
      className="relative aspect-4/3 overflow-hidden rounded-3xl sm:aspect-4/5 lg:aspect-auto"
    >
      {COL2_IMAGES.map((img, idx) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 64rem) 30vw, 100vw"
          className={cn(
            "object-cover transition-opacity duration-500 ease-soft",
            selectedIdx === idx
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          )}
        />
      ))}
    </ScrollReveal>
  )
}
