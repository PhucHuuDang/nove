import Image from "next/image"
import Link from "next/link"
import { Check, Minus } from "lucide-react"
import { MachineModel } from "./models-data"

interface ModelCardProps {
  model: MachineModel
}

export function ModelCard({ model }: ModelCardProps) {
  const isDark = model.theme === "dark"

  return (
    <li
      className={`flex flex-col rounded-2xl p-5 transition-transform duration-300 ease-soft motion-safe:hover:-translate-y-1 motion-reduce:transition-none md:p-6 ${
        isDark ? "dark bg-background text-foreground" : "bg-popover"
      }`}
    >
      <div className="flex min-h-6 items-center justify-between gap-3">
        <h3 className="text-xl leading-none">{model.name}</h3>
        {model.badge ? (
          <span
            data-slot="badge"
            data-variant="secondary"
            className="group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-medium whitespace-nowrap text-secondary-foreground transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-success"
            />
            {model.badge}
          </span>
        ) : null}
      </div>

      <div
        style={
          {
            "--w": model.widthStyle.w,
            "--w-lg": model.widthStyle.wLg,
          } as React.CSSProperties
        }
        className="mt-5 flex aspect-16/9 items-end justify-center pb-2"
      >
        <span className="relative isolate block w-(--w) lg:w-(--w-lg)">
          <Image
            src={model.image.src}
            alt={model.image.alt}
            width={model.image.width}
            height={model.image.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
            sizes="(min-width: 64rem) 14vw, 40vw"
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
      </div>

      <p className="mt-6 font-mono text-3xl leading-none tracking-tight figures">
        {model.price}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{model.tagline}</p>

      <Link
        data-slot="button"
        data-variant={isDark ? "accent" : "default"}
        data-size="default"
        className={`group/button mt-5 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-transparent px-6 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:opacity-90 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] ${
          isDark
            ? "bg-accent text-accent-foreground hover:bg-accent/85"
            : "bg-primary text-primary-foreground hover:bg-primary/85"
        }`}
        href={model.href}
      >
        {model.cta}
      </Link>

      <ul
        aria-label={`What the ${model.name} has`}
        className="mt-6 flex flex-1 flex-col gap-3"
      >
        {model.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm leading-snug">
            {feature.included ? (
              <Check
                className="mt-0.5 size-4 shrink-0 text-current"
                aria-hidden="true"
              />
            ) : (
              <Minus
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            )}
            <span className={feature.included ? "" : "text-muted-foreground"}>
              {feature.prefix ? feature.prefix : null}
              {feature.number ? (
                <span className="font-mono figures">{feature.number}</span>
              ) : null}
              {feature.suffix ? feature.suffix : null}
              {feature.text ? feature.text : null}
            </span>
          </li>
        ))}
      </ul>
    </li>
  )
}
