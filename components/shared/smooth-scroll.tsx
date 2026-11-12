"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SmoothScroll() {
  const pathname = usePathname()

  // Handle hash navigation on initial load or path change
  useEffect(() => {
    if (typeof window === "undefined") return

    const scrollCurrentHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const id = hash.replace(/^#/, "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }

    // Defer slightly to ensure page components are mounted
    const timer = setTimeout(scrollCurrentHash, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  // Intercept anchor clicks on the current page to ensure smooth animated scroll
  useEffect(() => {
    if (typeof window === "undefined") return

    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.("a")
      if (!link || !(link instanceof HTMLAnchorElement)) return

      const href = link.getAttribute("href")
      if (!href) return

      try {
        const url = new URL(link.href, window.location.href)
        // If clicking an anchor pointing to the same page
        if (url.pathname === window.location.pathname) {
          if (url.hash) {
            const id = url.hash.replace(/^#/, "")
            const target = document.getElementById(id)
            if (target) {
              e.preventDefault()
              window.history.pushState(null, "", url.hash)
              window.dispatchEvent(new HashChangeEvent("hashchange"))
              target.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }
        }
      } catch {
        // Ignore invalid URLs
      }
    }

    document.addEventListener("click", onAnchorClick, { capture: true })
    return () => {
      document.removeEventListener("click", onAnchorClick, { capture: true })
    }
  }, [])

  return null
}
