import { FAQAccordion, type FAQItem } from "@/components/shared/faq-accordion"
import { SectionLabel } from "@/components/shared/section-label"

const BASE = "https://nove-nextjs-template.vercel.app"

const HOME_FAQS: FAQItem[] = [
  {
    id: "which-model",
    badge: "One / Duo / Pro",
    image: `${BASE}/images/home/machine.png`,
    question: "Which model should I get?",
    answer:
      "If you drink your coffee black, get the One. If you drink flat whites or lattes, get the Duo. If two or more people want milk drinks back-to-back, get the Pro. Pick wrong and swap within 30 days.",
  },
  {
    id: "in-the-box",
    badge: "58 mm",
    image: `${BASE}/images/home/details-portafilter-3d.png`,
    question: "What is in the box?",
    answer:
      "The machine, a commercial 58 mm portafilter with single and double baskets, a stainless steel tamper, and the power lead. The Duo and Pro also include a 350 ml milk jug.",
  },
  {
    id: "grinder",
    badge: "$290",
    image: `${BASE}/images/home/grinder.png`,
    question: "Do I need the grinder?",
    answer:
      "Not if you order pre-ground beans. But ground coffee begins losing aroma in 15 minutes, so grinding fresh right before each shot gives dramatically better espresso. Our grinder matches the machine in steel and walnut.",
  },
  {
    id: "swap",
    badge: "30 days",
    image: `${BASE}/images/home/machine-one.png`,
    question: "How does the 30-day swap work?",
    answer:
      "If you decide you need a steam wand or want a smaller footprint, let us know within 30 days. We ship your new model right away, you send the original back in its box, and we refund or charge the price difference.",
  },
  {
    id: "warmup",
    badge: "40 s",
    image: `${BASE}/images/home/faq-warmup.jpg`,
    question: "How long does it take to warm up?",
    answer:
      "40 seconds on the One, 45 seconds on the Duo, and 90 seconds on the Pro (which heats two independent boilers to pull espresso and steam milk simultaneously).",
  },
  {
    id: "warranty",
    badge: "3 years",
    image: `${BASE}/images/home/faq-warranty.jpg`,
    question: "What does the warranty cover?",
    answer:
      "Three years covering parts and labour, including the pump, heating element, and valves. If anything ever fails, we repair or replace it with free two-way shipping.",
  },
  {
    id: "shipping",
    badge: "3 to 5 days",
    image: `${BASE}/images/home/faq-shipping.jpg`,
    question: "Where do you ship, and how fast?",
    answer:
      "Shipping is completely free across Europe and the continental United States. Orders ship from Turin via express courier and arrive in 3 to 5 business days.",
  },
  {
    id: "noise",
    badge: "28 s",
    image: `${BASE}/images/home/faq-loud.jpg`,
    question: "Is it loud?",
    answer:
      "It makes a gentle low hum rather than a violent rattle. About as quiet as an electric kettle, only running for the 28 seconds it takes to pull the shot.",
  },
]

export function HomeFaqSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Questions you might have
          </h2>
        </div>

        <div className="mt-10">
          <FAQAccordion items={HOME_FAQS} />
        </div>
      </div>
    </section>
  )
}
