import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { MODELS_SECTION_DATA } from "./models/models-data"
import { ModelCard } from "./models/model-card"

export function HomeModelsSection() {
  return (
    <section
      className="px-3 section-padding md:px-5"
      aria-labelledby="models-heading"
    >
      <div className="dark relative overflow-hidden rounded-3xl bg-background gutter-5 pt-12 pb-28 text-center text-foreground md:pt-14 md:pb-44 lg:pb-40">
        <ScrollReveal className="relative mx-auto max-w-3xl">
          <header>
            <p className="text-sm font-medium text-muted-foreground">
              {MODELS_SECTION_DATA.eyebrow}
            </p>
            <h2
              className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
              id="models-heading"
            >
              {MODELS_SECTION_DATA.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {MODELS_SECTION_DATA.lede}
            </p>
          </header>
        </ScrollReveal>
      </div>

      <div className="relative gutter-margin-2 -mt-16 md:gutter-margin-3 md:-mt-32 lg:-mt-24">
        <ScrollReveal
          delayMs={100}
          className="mx-auto max-w-xl rounded-3xl bg-card p-2 md:p-3 lg:max-w-none"
        >
          <ul className="grid gap-2 md:gap-3 lg:grid-cols-3">
            {MODELS_SECTION_DATA.models.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
