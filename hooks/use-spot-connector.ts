"use client"

import { useCallback, useLayoutEffect, useRef, useState } from "react"

const ELBOW = 48
const CARD_ANCHOR_TOP = 28

/**
 * Draws an elbowed line from a hotspot marker to the side or edge of a card.
 * Rects are relative to the frame that contains both.
 */
function connectorPath(frame: DOMRect, marker: DOMRect, card: DOMRect) {
  const x = marker.left + marker.width / 2 - frame.left
  const y = marker.top + marker.height / 2 - frame.top
  const cardLeft = card.left - frame.left
  const cardRight = card.right - frame.left
  const anchorY = card.top + CARD_ANCHOR_TOP - frame.top

  if (x - cardRight > 40) {
    const bend = cardRight + Math.min(ELBOW, (x - cardRight) / 3)
    return `M ${x} ${y} L ${bend} ${anchorY} L ${cardRight} ${anchorY}`
  }
  if (cardLeft - x > 40) {
    const bend = cardLeft - Math.min(ELBOW, (cardLeft - x) / 3)
    return `M ${x} ${y} L ${bend} ${anchorY} L ${cardLeft} ${anchorY}`
  }

  const column = Math.max(cardLeft + 24, Math.min(x - 32, cardRight - 24))
  const isAbove = y < card.top - frame.top
  const edgeY = (isAbove ? card.top : card.bottom) - frame.top
  return `M ${x} ${y} L ${column} ${y + (isAbove ? 24 : -24)} L ${column} ${edgeY}`
}

/** Tracks the SVG path joining the picked hotspot to its detail card. */
export function useSpotConnector(picked: number) {
  const frameRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const markers = useRef<(HTMLButtonElement | null)[]>([])
  const [path, setPath] = useState("")

  const measure = useCallback(() => {
    const frame = frameRef.current?.getBoundingClientRect()
    const card = cardRef.current?.getBoundingClientRect()
    const marker = markers.current[picked]?.getBoundingClientRect()
    setPath(
      frame && card && marker && card.width > 0
        ? connectorPath(frame, marker, card)
        : ""
    )
  }, [picked])

  useLayoutEffect(() => {
    measure()
    const observer = new ResizeObserver(measure)
    if (frameRef.current) observer.observe(frameRef.current)
    return () => observer.disconnect()
  }, [measure])

  const markerRef = (index: number) => (node: HTMLButtonElement | null) => {
    markers.current[index] = node
  }

  return { frameRef, cardRef, markerRef, path }
}
