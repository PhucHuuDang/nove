"use client"

import { useSyncExternalStore } from "react"

import type { CatalogId } from "@/lib/data/catalog"

const SPOTLIGHT_EVENT = "nove:shop:spotlight"
const SPOTLIGHT_MS = 2600
const SCROLL_FALLBACK_MS = 900

let spotlit: CatalogId | null = null
let clearTimer = 0

function setSpotlight(id: CatalogId | null) {
  spotlit = id
  window.dispatchEvent(new Event(SPOTLIGHT_EVENT))
}

function subscribe(onChange: () => void) {
  window.addEventListener(SPOTLIGHT_EVENT, onChange)
  return () => window.removeEventListener(SPOTLIGHT_EVENT, onChange)
}

/** The product card currently outlined after a jump from the hero. */
export function useSpotlight(): CatalogId | null {
  return useSyncExternalStore(
    subscribe,
    () => spotlit,
    () => null
  )
}

/** Scrolls to a product card, then outlines it for a moment. */
export function spotlightProduct(id: CatalogId) {
  const card = document.getElementById(`shop-${id}`)
  if (!card) return

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  card.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "center",
  })
  window.clearTimeout(clearTimer)

  const light = () => {
    window.removeEventListener("scrollend", light)
    setSpotlight(id)
    clearTimer = window.setTimeout(() => setSpotlight(null), SPOTLIGHT_MS)
  }
  window.addEventListener("scrollend", light)
  clearTimer = window.setTimeout(light, reduceMotion ? 0 : SCROLL_FALLBACK_MS)
}
