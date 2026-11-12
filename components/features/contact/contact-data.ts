import type { Plan } from "@/components/shared/plan-card"

export const CONTACT_EMAIL = "hello@nove.coffee"
export const REPLY_TIME = "1 working day"

export const CONTACT_PLANS: Plan[] = [
  {
    glow: "/images/home/cup-hand.jpg",
    title: "Write to us",
    note: "By email or the form below",
    statLabel: "We reply within",
    statBadge: "Mon to Fri",
    stat: "1 day",
    points: [
      "Questions before you buy",
      "Help with an order or a delivery",
      "Repairs and parts under the warranty",
    ],
    cta: { label: "Write to us", href: "/contact#form" },
  },
  {
    glow: "/images/home/steam.jpg",
    title: "Ask for a call",
    note: "With the barista or the engineer",
    statLabel: "Call length",
    statBadge: "Free",
    stat: "20 min",
    points: [
      "Tell us what you drink",
      "We tell you which model to get",
      "With the two of us, not a sales team",
    ],
    cta: { label: "Ask for a call", href: "/contact#form" },
  },
  {
    glow: "/images/showroom/room.jpg",
    title: "Visit the showroom",
    note: "In Turin",
    statLabel: "On the counter",
    statBadge: "Turin",
    stat: "3 models",
    points: [
      "Pull a shot on the One, Duo and Pro",
      "Steam milk on the Duo and the Pro",
      "See the steel and walnut up close",
    ],
    cta: { label: "Visit the showroom", href: "/showroom" },
  },
]

export const CONTACT_MACHINES = [
  { value: "one", label: "Nove One" },
  { value: "duo", label: "Nove Duo" },
  { value: "pro", label: "Nove Pro" },
  { value: "none", label: "Not yet" },
]

export const CONTACT_ERRORS = {
  name: "Add your name.",
  email: "Add an email we can reply to.",
  emailFormat: "Check the email address.",
  message: "Write your message.",
}
