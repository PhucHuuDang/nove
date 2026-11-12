"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { STEP_IMAGES } from "./help-guide-data"
import type { GuideItem } from "./help-guide-types"

interface HelpGuideArticleProps {
  guide: GuideItem
}

export function HelpGuideArticle({ guide }: HelpGuideArticleProps) {
  const stepImages = STEP_IMAGES[guide.id] ?? []

  return (
    <article aria-labelledby={`guide-${guide.id}`} className="min-w-0">
      <p className="text-sm text-muted-foreground">
        {guide.fact.label}:{" "}
        <span className="text-foreground">{guide.fact.value}</span>
      </p>

      <h3 id={`guide-${guide.id}`} className="mt-3 text-2xl md:text-3xl">
        {guide.title}
      </h3>
      <p className="mt-2 text-base text-muted-foreground">{guide.sub}</p>

      <ol className="mt-8 grid gap-3">
        {guide.steps.map((stepText, idx) => {
          const stepImage = stepImages[idx]
          return (
            <li
              key={stepText}
              className="group flex gap-4 rounded-2xl bg-card p-4 md:p-5"
            >
              <div className="flex min-w-0 flex-1 flex-col">
                <Badge
                  variant="outline"
                  className="group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground figures"
                >
                  Step {String(idx + 1).padStart(2, "0")}
                </Badge>
                <p className="mt-3 text-base">{stepText}</p>
              </div>

              {stepImage ? (
                <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl bg-popover md:size-24">
                  <Image
                    src={stepImage.src}
                    alt=""
                    width={stepImage.width}
                    height={stepImage.height}
                    sizes="96px"
                    className="size-full object-contain p-2 mix-blend-multiply transition-transform duration-500 ease-soft motion-safe:group-hover:scale-110"
                  />
                </span>
              ) : null}
            </li>
          )
        })}
      </ol>

      <div className="mt-10 divide-y border-t pt-8">
        {guide.sections.map((sec) => (
          <section key={sec.heading} className="py-6 first:pt-0 last:pb-0">
            {sec.picture ? (
              <div className="mb-4 size-16 overflow-hidden rounded-2xl bg-card">
                <Image
                  src={sec.picture.src}
                  alt={sec.picture.alt}
                  width={sec.picture.width ?? 64}
                  height={sec.picture.height ?? 64}
                  sizes="64px"
                  className="size-full object-contain p-1 mix-blend-multiply"
                />
              </div>
            ) : null}

            <h4 className="text-lg">{sec.heading}</h4>

            {sec.text ? (
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                {sec.text}
              </p>
            ) : null}

            {sec.bullets ? (
              <ul className="mt-3 flex flex-col gap-2">
                {sec.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  )
}
