"use client"

import { useRef, useState } from "react"

import { pillButton } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

import { CONTACT_EMAIL, CONTACT_ERRORS, REPLY_TIME } from "./contact-data"
import { ContactField, FIELD_CONTROL } from "./contact-field"
import { ContactFormSent } from "./contact-form-sent"
import { ContactMachineSelect } from "./contact-machine-select"
import { CopyEmailButton } from "./copy-email-button"

const EMPTY = { name: "", email: "", machine: "", message: "" }
type Values = typeof EMPTY
type Errors = Partial<Record<keyof Values, string>>

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = CONTACT_ERRORS.name
  const email = values.email.trim()
  if (!email) errors.email = CONTACT_ERRORS.email
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = CONTACT_ERRORS.emailFormat
  if (!values.message.trim()) errors.message = CONTACT_ERRORS.message
  return errors
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState<Values | null>(null)

  const update = (field: keyof Values) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setSent(values)
    setValues(EMPTY)
  }

  const invalid = (field: keyof Values) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  })

  return (
    <div className="grid">
      <form
        ref={formRef}
        noValidate
        onSubmit={onSubmit}
        inert={sent ? true : undefined}
        className={cn("col-start-1 row-start-1", sent ? "invisible" : null)}
      >
        <header>
          <h2 id="form-heading" className="text-3xl">
            Write to us
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {`We reply within ${REPLY_TIME}, Monday to Friday.`}
          </p>
        </header>

        <div className="mt-8 flex w-full flex-col gap-5">
          <ContactField id="contact-name" label="Name" error={errors.name}>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={values.name}
              onChange={(e) => update("name")(e.target.value)}
              className={cn(FIELD_CONTROL, "h-11 rounded-full px-4 py-1")}
              {...invalid("name")}
            />
          </ContactField>
          <ContactField id="contact-email" label="Email" error={errors.email}>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(e) => update("email")(e.target.value)}
              className={cn(FIELD_CONTROL, "h-11 rounded-full px-4 py-1")}
              {...invalid("email")}
            />
          </ContactField>
          <ContactField id="contact-machine" label="Which machine do you have?">
            <ContactMachineSelect
              id="contact-machine"
              value={values.machine}
              onChange={update("machine")}
            />
          </ContactField>
          <ContactField
            id="contact-message"
            label="Message"
            error={errors.message}
          >
            <textarea
              id="contact-message"
              name="message"
              placeholder="Ask about a model, an order or a repair"
              value={values.message}
              onChange={(e) => update("message")(e.target.value)}
              className={cn(
                FIELD_CONTROL,
                "flex field-sizing-content min-h-36 resize-none rounded-2xl px-4 py-3"
              )}
              {...invalid("message")}
            />
          </ContactField>
        </div>

        <button
          type="submit"
          className={pillButton({
            variant: "accent",
            className: "mt-7 w-full",
          })}
        >
          Send message
        </button>
        <p className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
          Or email us at
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-sm text-foreground underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {CONTACT_EMAIL}
          </a>
          <CopyEmailButton value={CONTACT_EMAIL} />
        </p>
      </form>

      {sent ? (
        <ContactFormSent
          name={sent.name}
          email={sent.email}
          onAgain={() => setSent(null)}
        />
      ) : null}
    </div>
  )
}
