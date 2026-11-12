"use client"

import * as React from "react"

import { CartProvider } from "@/lib/cart-context"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SmoothScroll } from "@/components/shared/smooth-scroll"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <SmoothScroll />
          <Toaster>{children}</Toaster>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  )
}
