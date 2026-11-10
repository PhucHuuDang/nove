import { FAQAccordion, type FAQItem } from "@/components/shared/faq-accordion"
import { SectionLabel } from "@/components/shared/section-label"

const PRODUCT_FAQS: FAQItem[] = [
  {
    id: "which-model",
    question: "Which model should I get?",
    answer:
      "If you drink it black, the One. If you drink lattes or flat whites, the Duo. If two or more people at home want milk drinks at the same time, the Pro. Pick wrong and swap within 30 days.",
  },
  {
    id: "need-grinder",
    question: "Do I need the grinder?",
    answer:
      "Not if you order your beans pre-ground. But ground coffee goes stale in a few days, so a grinder gives you better shots. Ours matches the machine, and any grinder with an espresso setting works.",
  },
  {
    id: "swap-how",
    question: "How does the 30-day swap work?",
    answer:
      "Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference.",
  },
  {
    id: "warranty-cover",
    question: "What does the warranty cover?",
    answer:
      "Three years, parts and labour, including the pump and the boiler. After that, repairs at the exact price of the part.",
  },
  {
    id: "shipping-dest",
    question: "Where do you ship, and how fast?",
    answer:
      "Europe and the US, free, in 3 to 5 days. Other countries available on request.",
  },
  {
    id: "is-loud",
    question: "Is it loud?",
    answer:
      "It hums rather than rattles. About as loud as a kettle, for the 28 seconds of the shot.",
  },
]

export function ProductFaq() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Questions
        </h2>

        <div className="mt-8">
          <FAQAccordion items={PRODUCT_FAQS} />
        </div>
      </div>
    </section>
  )
}
