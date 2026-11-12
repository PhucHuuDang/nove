import { CircleCheck } from "lucide-react"

import { pillButton } from "@/lib/pill-variants"

import { REPLY_TIME } from "./contact-data"

interface ContactFormSentProps {
  name: string
  email: string
  onAgain: () => void
}

export function ContactFormSent({
  name,
  email,
  onAgain,
}: ContactFormSentProps) {
  return (
    <div
      role="status"
      className="col-start-1 row-start-1 flex flex-col items-start self-center"
    >
      <CircleCheck aria-hidden="true" className="size-8" />
      <p className="mt-4 text-3xl display-type">Message sent</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Thanks, {name.split(" ")[0]}. We will reply to {email} within{" "}
        {REPLY_TIME}.
      </p>
      <button
        type="button"
        onClick={onAgain}
        className={pillButton({ variant: "outline", className: "mt-8" })}
      >
        Write another
      </button>
    </div>
  )
}
