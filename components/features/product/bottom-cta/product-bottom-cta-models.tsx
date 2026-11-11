import NextLink from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { cn } from "@/lib/utils"

interface ProductBottomCtaModelsProps {
  currentSlug: "one" | "duo" | "pro"
}

const ALL_MODELS = [
  {
    slug: "one",
    name: "One",
    price: "$650",
    image: "/images/home/machine-one.png",
    width: "24%",
    imgWidth: 1101,
    imgHeight: 1400,
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
  },
  {
    slug: "duo",
    name: "Duo",
    price: "$950",
    image: "/images/home/machine.png",
    width: "30%",
    imgWidth: 1116,
    imgHeight: 1400,
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
  },
  {
    slug: "pro",
    name: "Pro",
    price: "$1,450",
    image: "/images/home/machine-pro.png",
    width: "34.8%",
    imgWidth: 1356,
    imgHeight: 1400,
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
  },
]

export function ProductBottomCtaModels({
  currentSlug,
}: ProductBottomCtaModelsProps) {
  return (
    <ScrollReveal delayMs={80} className="flex">
      <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-popover p-6">
        <p className="font-medium">All three models</p>

        <ul className="flex items-end justify-between gap-3">
          {ALL_MODELS.map((model) => {
            const isCurrent = model.slug === currentSlug
            return (
              <li
                key={model.slug}
                className="flex flex-col items-center gap-2"
                style={{ width: model.width }}
              >
                <NextLink
                  href={`/shop/${model.slug}`}
                  aria-pressed={isCurrent}
                  aria-label={`Show the Nove ${model.name}`}
                  className={cn(
                    "group/pick flex w-full flex-col items-center gap-2 rounded-xl transition-transform duration-150 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                    isCurrent
                      ? "cursor-default active:scale-100"
                      : "active:scale-[0.97]"
                  )}
                >
                  <span className="relative isolate block transition-[translate] duration-300 ease-soft motion-safe:group-hover/pick:-translate-y-1">
                    <Image
                      src={model.image}
                      alt={model.alt}
                      width={model.imgWidth}
                      height={model.imgHeight}
                      sizes="8rem"
                      className="block h-auto w-full"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[2%] bottom-[1%] -z-10 h-[9%] rounded-[50%] bg-radial from-black/25 to-transparent to-70%"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-[7%] bottom-[3.5%] -z-10 h-[3%] rounded-[50%] bg-black/35 blur-[3px]"
                    />
                  </span>
                  <span
                    className={cn(
                      "relative text-center text-xs transition-colors duration-200 ease-soft",
                      isCurrent
                        ? ""
                        : "text-muted-foreground group-hover/pick:text-foreground"
                    )}
                  >
                    <span className="block">{model.name}</span>
                    <span className="font-mono figures">{model.price}</span>
                    {isCurrent ? (
                      <span
                        className="absolute -bottom-2.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-foreground"
                        style={{ opacity: 1 }}
                      />
                    ) : null}
                  </span>
                </NextLink>
              </li>
            )
          })}
        </ul>

        <NextLink
          href="/shop#compare"
          className="group/button mt-auto inline-flex h-11 shrink-0 items-center justify-center self-start rounded-full border border-foreground/25 bg-transparent px-6 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 hover:bg-transparent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
        >
          Compare the models
        </NextLink>
      </div>
    </ScrollReveal>
  )
}
