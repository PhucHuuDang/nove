import type {
  LegalDocument,
  LegalSlug,
} from "@/components/features/legal/legal-types"

/** Legal documents in sidebar order. */
export const LEGAL_SLUGS: LegalSlug[] = ["privacy", "terms", "cookies"]

export const LEGAL_DOCUMENTS: Record<LegalSlug, LegalDocument> = {
  privacy: {
    title: "Privacy policy",
    navLabel: "Privacy policy",
    description:
      "What personal data Nove Espresso S.r.l. collects when you order or write to us, why, how long we keep it and how to have it deleted.",
    intro:
      "This policy says what personal data we collect when you shop with us or write to us, what we use it for, how long we keep it and what you can ask us to do with it. It follows the EU General Data Protection Regulation (GDPR).",
    updated: { dateTime: "2026-10-01", label: "October 1, 2026" },
    blocks: [
      { type: "heading", id: "who-we-are", title: "Who we are" },
      {
        type: "paragraph",
        content:
          "Nove Espresso S.r.l. makes and sells Nove espresso machines, grinders, milk jugs and beans from Turin, Italy. We decide how your data is used, which makes us the data controller under the GDPR.",
      },
      { type: "heading", id: "what-we-collect", title: "What we collect" },
      {
        type: "paragraph",
        content:
          "We ask only for what we need to deliver your order and answer your messages.",
      },
      {
        type: "list",
        items: [
          "Your name, email address, phone number and delivery address when you order.",
          "What you ordered, what you paid, and any swap or warranty request about it.",
          "The messages you send us and our replies.",
          "Your billing address, and the type and last four digits of your card. The full card number goes to the payment provider, never to us.",
          [
            "If you agree to analytics, which pages you visit, with your IP address shortened so it cannot point to you. The ",
            { href: "/legal/cookies", text: "cookie policy" },
            " lists what this stores.",
          ],
        ],
      },
      { type: "heading", id: "why-we-use-it", title: "Why we use it" },
      {
        type: "paragraph",
        content:
          "The GDPR asks for a legal reason behind each use. These are ours.",
      },
      {
        type: "table",
        caption: "Use and legal reason",
        rows: [
          {
            term: "Delivering your order",
            note: "Including the 30-day swap and the 3-year warranty",
            value: "Our contract",
          },
          {
            term: "Beans subscription",
            note: "An email before each bag ships",
            value: "Our contract",
          },
          {
            term: "Keeping invoices",
            note: "Italian tax law",
            value: "Legal duty",
          },
          { term: "Answering your messages", value: "Legitimate interest" },
          { term: "Analytics", value: "Your consent" },
        ],
      },
      {
        type: "callout",
        content:
          "We do not sell your data, and we do not use it for advertising.",
      },
      {
        type: "heading",
        id: "who-we-share-it-with",
        title: "Who we share it with",
      },
      {
        type: "list",
        items: [
          "The courier, who gets your name, address and phone number to deliver the order.",
          "Our payment provider, which takes Visa, Mastercard, Amex, Apple Pay and Google Pay, or PayPal if you pay with PayPal.",
          "The companies that host this site and send our emails. They handle data only on our instructions.",
          "Our accountant and the Italian tax authorities, for invoices.",
        ],
      },
      {
        type: "heading",
        id: "data-sent-outside-the-eu",
        title: "Data sent outside the EU",
      },
      {
        type: "paragraph",
        content:
          "When you order to the US, the US courier receives your delivery details. Some of our service providers also store data in the US. Each of these transfers is covered by the EU-US Data Privacy Framework or by the European Commission's standard contractual clauses.",
      },
      {
        type: "heading",
        id: "how-long-we-keep-it",
        title: "How long we keep it",
      },
      {
        type: "table",
        caption: "What we keep and for how long",
        rows: [
          {
            term: "Orders and invoices",
            note: "Italian tax law sets this",
            value: "10 years",
          },
          {
            term: "Messages to us",
            note: "After our last reply",
            value: "2 years",
          },
          { term: "Analytics", value: "14 months" },
        ],
      },
      {
        type: "paragraph",
        content:
          "After that we delete it, or strip out anything that could identify you.",
      },
      { type: "heading", id: "your-rights", title: "Your rights" },
      { type: "paragraph", content: "You can ask us to:" },
      {
        type: "list",
        items: [
          "Send you a copy of the data we hold about you.",
          "Correct anything that is wrong.",
          "Delete your data, except what the law makes us keep, such as invoices.",
          "Stop or limit a use you object to.",
          "Send your data to you or to another company in a common file format.",
          "Withdraw a consent you gave, at any time.",
        ],
      },
      {
        type: "paragraph",
        content:
          "We answer within one month. If you are not happy with the answer, you can complain to the Italian data protection authority, the Garante per la protezione dei dati personali, or to the authority in the country where you live.",
      },
      { type: "heading", id: "how-to-reach-us", title: "How to reach us" },
      {
        type: "paragraph",
        content: [
          "Email ",
          { href: "mailto:hello@nove.coffee", text: "hello@nove.coffee" },
          " or write through the ",
          { href: "/contact", text: "contact page" },
          ". We reply within 1 working day.",
        ],
      },
      {
        type: "heading",
        id: "changes-to-this-policy",
        title: "Changes to this policy",
      },
      {
        type: "paragraph",
        content:
          "If we change how we use your data, we update this page and the date at the top. If the change affects an order you have open, we email you.",
      },
    ],
  },
  terms: {
    title: "Terms of sale",
    navLabel: "Terms of sale",
    description:
      "The terms for buying from Nove: orders, prices and payment, delivery, the 30-day swap, cancelling and the 3-year warranty.",
    intro:
      "These terms apply when you buy from us on this site. They say what we promise and what happens if something goes wrong. If you buy as a consumer, they never take away the rights the law gives you.",
    updated: { dateTime: "2026-10-01", label: "October 1, 2026" },
    blocks: [
      { type: "heading", id: "who-you-buy-from", title: "Who you buy from" },
      {
        type: "paragraph",
        content:
          "You buy from Nove Espresso S.r.l., a company registered in Turin, Italy. We make and sell the Nove One, Nove Duo and Nove Pro espresso machines, the grinder, the milk jug and the beans subscription.",
      },
      { type: "heading", id: "placing-an-order", title: "Placing an order" },
      {
        type: "paragraph",
        content:
          "When you check out, we email you to confirm we have your order. The contract between us starts when we email again to say it has shipped.",
      },
      {
        type: "paragraph",
        content:
          "If something is out of stock or a price on the site is wrong, we tell you before we ship, and you can cancel without paying anything.",
      },
      {
        type: "heading",
        id: "prices-and-payment",
        title: "Prices and payment",
      },
      {
        type: "paragraph",
        content:
          "Prices are in US dollars. For orders to the EU they include VAT. For orders to the US, any sales tax shows at checkout before you pay.",
      },
      {
        type: "paragraph",
        content:
          "You can pay with Visa, Mastercard, Amex, Apple Pay, Google Pay and PayPal. We take payment when you place the order.",
      },
      { type: "heading", id: "delivery", title: "Delivery" },
      {
        type: "paragraph",
        content:
          "Shipping is free to Europe and the US and takes 3 to 5 days. Other countries on request.",
      },
      {
        type: "paragraph",
        content:
          "Check the box when it arrives. If anything is damaged, send us a photo within 7 days and we send a new one.",
      },
      { type: "heading", id: "the-30-day-swap", title: "The 30-day swap" },
      {
        type: "paragraph",
        content:
          "If you picked the wrong model, you can change it for another within 30 days of delivery. Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference.",
      },
      {
        type: "paragraph",
        content:
          "The swap is for machines. For the grinder, the milk jug and the beans, the right to cancel below applies.",
      },
      {
        type: "heading",
        id: "cancelling-within-14-days",
        title: "Cancelling within 14 days",
      },
      {
        type: "paragraph",
        content:
          "You can cancel any order within 14 days of delivery without giving a reason. Tell us, then send the items back within 14 days of telling us. We refund what you paid, including the delivery, within 14 days of getting them back.",
      },
      {
        type: "paragraph",
        content:
          "Send the items back in their box. You pay for sending them back, unless the item is faulty or we sent the wrong one. If an item comes back used beyond what it takes to try it, we may take the loss in value off the refund.",
      },
      {
        type: "callout",
        content:
          "An opened bag of beans cannot be returned, because coffee goes stale once the bag is open.",
      },
      {
        type: "heading",
        id: "the-3-year-warranty",
        title: "The 3-year warranty",
      },
      {
        type: "paragraph",
        content:
          "Every machine has a 3-year warranty on parts and labour, including the pump and the boiler, from the day it is delivered. If it breaks, we repair or replace it and pay for shipping both ways. After 3 years, we repair it at the price of the part.",
      },
      {
        type: "paragraph",
        content:
          "The warranty does not cover damage from a fall, from limescale or from repairs by someone else.",
      },
      {
        type: "callout",
        content:
          "EU law also gives you a 2-year legal guarantee against faults that were there at delivery, on everything you buy from us, including the grinder and the milk jug. Our warranty comes on top of it.",
      },
      {
        type: "heading",
        id: "the-beans-subscription",
        title: "The beans subscription",
      },
      {
        type: "paragraph",
        content:
          "A 250 g bag of our house roast, whole or ground for the machine, every four weeks, for $18 a bag, charged when it ships.",
      },
      {
        type: "paragraph",
        content:
          "You can pause or stop it any time. A change you make before a bag ships applies to that bag.",
      },
      {
        type: "paragraph",
        content:
          "With the full setup, the Duo and the grinder, the first 3 bags are free. The first comes in the same order and the next two deliveries cost nothing.",
      },
      {
        type: "heading",
        id: "if-something-goes-wrong",
        title: "If something goes wrong",
      },
      {
        type: "paragraph",
        content:
          "We are responsible for losses you suffer because we broke these terms, where the loss was foreseeable. We are not responsible for losses we could not foresee, or for business losses if you use a machine at work.",
      },
      {
        type: "paragraph",
        content:
          "Nothing in these terms limits our responsibility where the law does not allow it, such as for injury caused by our negligence.",
      },
      { type: "heading", id: "which-law-applies", title: "Which law applies" },
      {
        type: "paragraph",
        content:
          "Italian law applies to these terms. If you live elsewhere in the EU, you keep the protection of your own country's consumer law, and you can take a dispute to the courts where you live.",
      },
      {
        type: "paragraph",
        content: [
          "If you have a complaint, write to us first at ",
          { href: "mailto:hello@nove.coffee", text: "hello@nove.coffee" },
          ". We reply within 1 working day.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    navLabel: "Cookie policy",
    description:
      "What the Nove site stores in your browser: your bag and your cookie choice, and analytics only if you agree.",
    intro:
      "This site stores your bag in your browser, the payment provider sets a security cookie at checkout, and analytics run only if you agree. We use no advertising cookies.",
    updated: { dateTime: "2026-10-01", label: "October 1, 2026" },
    blocks: [
      {
        type: "heading",
        id: "cookies-and-local-storage",
        title: "Cookies and local storage",
      },
      {
        type: "paragraph",
        content:
          "A cookie is a small file a website saves in your browser, which the browser sends back to the site with each page. Local storage also keeps data in your browser, but the browser does not send it to the site. We use both, and this page lists everything we store.",
      },
      {
        type: "heading",
        id: "what-we-store-without-asking",
        title: "What we store without asking",
      },
      {
        type: "paragraph",
        content:
          "These keep the shop working, so the law does not ask for your consent.",
      },
      {
        type: "table",
        caption: "Always on",
        rows: [
          {
            term: "Your bag",
            code: "nove:bag",
            note: "The products and quantities in your bag, in local storage, so the bag is still there when you come back.",
            value: "Until you clear it",
          },
          {
            term: "Payment security",
            note: "Set by the payment provider at checkout to detect fraud.",
            value: "Up to 1 year",
          },
        ],
      },
      {
        type: "callout",
        content:
          "Your bag stays on your device. We see what is in it only when you check out, and clearing this site's data in your browser empties it.",
      },
      {
        type: "heading",
        id: "what-we-store-only-if-you-agree",
        title: "What we store only if you agree",
      },
      {
        type: "paragraph",
        content:
          "If you say yes to analytics, we count visits and see which pages people read, so we know what to fix. We shorten your IP address before it is stored, and we never link it to your orders.",
      },
      {
        type: "table",
        caption: "Only with your consent",
        rows: [
          {
            term: "Analytics",
            note: "A random number that tells one visit from another.",
            value: "14 months",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "We use no advertising cookies, and no other company tracks you on this site.",
      },
      {
        type: "heading",
        id: "changing-your-choice",
        title: "Changing your choice",
      },
      {
        type: "paragraph",
        content: [
          "You can change your mind at any time by clearing this site's data in your browser, which also empties your bag, or by emailing ",
          { href: "mailto:hello@nove.coffee", text: "hello@nove.coffee" },
          ". Saying no to analytics changes nothing else on the site.",
        ],
      },
      {
        type: "heading",
        id: "more-about-your-data",
        title: "More about your data",
      },
      {
        type: "paragraph",
        content: [
          "How we use personal data is in the ",
          { href: "/legal/privacy", text: "privacy policy" },
          ". For anything else, write through the ",
          { href: "/contact", text: "contact page" },
          ".",
        ],
      },
    ],
  },
}
