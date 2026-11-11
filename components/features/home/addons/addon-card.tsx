import Image from "next/image"
import { Check } from "lucide-react"
import type { AddonItem } from "./addons-data"

interface AddonCardProps {
  item: AddonItem
  isAdded: boolean
  onAdd: () => void
}

export function AddonCard({ item, isAdded, onAdd }: AddonCardProps) {
  const isDark = Boolean(item.ink)

  return (
    <li
      className={`group/card relative flex w-[78vw] max-w-88 shrink-0 snap-start flex-col items-center rounded-3xl px-6 pb-7 text-center md:w-88 md:max-w-none min-[90rem]:w-auto min-[90rem]:min-w-[20rem] min-[90rem]:flex-1 ${item.tone}`}
    >
      <div className="-mt-16 flex h-52 w-full items-end justify-center md:-mt-20 md:h-60">
        {item.isBeans ? (
          <div className="h-full w-40 overflow-hidden rounded-2xl shadow-md motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-soft motion-safe:group-hover/card:-translate-y-1 motion-reduce:transition-none md:w-44">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              sizes={item.image.sizes}
              className={item.image.className}
            />
          </div>
        ) : (
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            sizes={item.image.sizes}
            className={`${item.image.className} motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-soft motion-safe:group-hover/card:-translate-y-1 motion-reduce:transition-none`}
          />
        )}
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{item.label}</p>
      <h3 className="mt-2 text-3xl leading-tight">{item.name}</h3>

      <p className="mt-3 mb-6 text-base">
        {item.was ? (
          <s className="mr-2 font-mono text-muted-foreground figures">
            <span className="sr-only">Was </span>
            {item.was}
          </s>
        ) : null}
        <span className="font-mono figures">{item.price}</span>
        {item.per ? (
          <span className="text-muted-foreground"> {item.per}</span>
        ) : null}
      </p>

      <button
        type="button"
        data-slot="button"
        data-variant={isDark ? "accent" : "default"}
        data-size="default"
        className={`group/button mt-auto grid h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent px-6 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none *:col-start-1 *:row-start-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] ${
          isDark
            ? "bg-accent text-accent-foreground hover:bg-accent/85"
            : "bg-primary text-primary-foreground hover:bg-primary/85"
        }`}
        aria-label={`${item.cta}: ${item.name}, ${item.price}`}
        onClick={onAdd}
      >
        <span
          className={`transition-opacity duration-200 motion-reduce:transition-none ${
            isAdded ? "opacity-0" : ""
          }`}
        >
          {item.cta}
        </span>
        <span
          aria-hidden="true"
          className={`inline-flex items-center justify-center gap-1.5 transition-opacity duration-200 motion-reduce:transition-none ${
            isAdded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Check className="size-4" aria-hidden="true" />
          Added
        </span>
      </button>
    </li>
  )
}
