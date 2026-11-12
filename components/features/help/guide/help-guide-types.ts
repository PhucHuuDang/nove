import type * as React from "react"

export type HelpTopicId = "shipping" | "swap" | "warranty" | "care"

export interface HelpTabDef {
  id: HelpTopicId
  label: string
  icon: React.ComponentType<{
    className?: string
    "aria-hidden"?: boolean | "true" | "false"
  }>
}

export interface GuidePicture {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface GuideSection {
  heading: string
  text?: string
  bullets?: string[]
  picture?: GuidePicture
}

export interface GuideItem {
  id: string
  topic: HelpTopicId
  title: string
  sub: string
  corner: string
  fact: {
    label: string
    value: string
  }
  sections: GuideSection[]
  steps: string[]
}
