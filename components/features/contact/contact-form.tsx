"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { SectionLabel } from "@/components/shared/section-label"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Choosing a machine",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-xl">
          <SectionLabel>Direct Message</SectionLabel>
          <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            Send us a message
          </h2>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Message received</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Thank you, {formData.name}. Matteo or Davide will reply to{" "}
                {formData.email} within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Elena Rossi"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="elena@example.com"
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase">
                  Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:border-foreground focus:outline-none"
                >
                  <option>Choosing a machine (One vs Duo vs Pro)</option>
                  <option>Book a showroom visit in Turin</option>
                  <option>Warranty, swap, or maintenance</option>
                  <option>Beans subscription questions</option>
                  <option>Other question</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about the coffee you drink at home..."
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm focus:border-foreground focus:outline-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send message to Matteo & Davide
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
