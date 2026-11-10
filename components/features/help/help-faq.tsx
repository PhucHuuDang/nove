import { FAQAccordion, type FAQItem } from "@/components/shared/faq-accordion"
import { SectionLabel } from "@/components/shared/section-label"

const HELP_FAQS: FAQItem[] = [
  {
    id: "where-ship",
    badge: "3 to 5 days",
    question: "Where do you ship, and how fast?",
    answer:
      "We ship free to all European Union countries, the United Kingdom, Switzerland, and the continental United States. Deliveries are dispatched with DHL Express or FedEx and arrive within 3 to 5 business days.",
  },
  {
    id: "swap-policy",
    badge: "30 days",
    question: "How does the 30-day swap work?",
    answer:
      "If you picked the One and decide you want milk drinks with the Duo, or need the dual boilers of the Pro, contact us within 30 days. We send the new machine, you place the original in its box with the prepaid return slip, and we settle the difference.",
  },
  {
    id: "warranty-details",
    badge: "3 years",
    question: "What does the 3-year warranty cover?",
    answer:
      "Every machine has a 3-year full warranty on parts and labour, including the commercial vibratory pump, brass group head, and heating element. If anything breaks, we cover shipping both ways and repair it in our Turin facility.",
  },
  {
    id: "cleaning-routine",
    badge: "Care",
    question: "How often should I clean and descale?",
    answer:
      "Wipe the steam wand immediately after frothing milk. Flush the group head with hot water for 3 seconds after every shot. Run a blind basket backflush once a week, and descale every 3 months if you use tap water with moderate mineral content.",
  },
  {
    id: "replacement-parts",
    badge: "Spare parts",
    question: "Can I buy replacement seals and parts?",
    answer:
      "Yes. Every single component in a Nove machine is standard and replaceable with a screwdriver. We keep group gaskets, shower screens, pump assemblies, and walnut handles in stock and ship them at cost.",
  },
]

export function HelpFaq() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
            Answers & specifications
          </h2>
        </div>

        <div className="mt-10">
          <FAQAccordion items={HELP_FAQS} />
        </div>
      </div>
    </section>
  )
}
