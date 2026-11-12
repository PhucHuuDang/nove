"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

import { pillButton } from "@/lib/pill-variants"

/** Copies an address to the clipboard and shows a tick for two seconds. */
export function CopyEmailButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // Clipboard access can be refused; the address stays visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      aria-label="Copy the email address"
      onClick={copy}
      className={pillButton({ variant: "outline", size: "icon-sm" })}
    >
      {copied ? <Check data-icon="true" /> : <Copy data-icon="true" />}
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  )
}
