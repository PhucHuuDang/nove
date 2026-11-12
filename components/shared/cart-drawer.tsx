"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { useCart } from "@/lib/cart-context"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CartEmpty } from "@/components/shared/cart/cart-empty"
import { CartItemRow } from "@/components/shared/cart/cart-item-row"
import { CartAddons } from "@/components/shared/cart/cart-addons"
import { CartSummary } from "@/components/shared/cart/cart-summary"

interface CartDrawerProps {
  children?: React.ReactNode
}

function StaggerItem({
  index,
  className,
  children,
}: {
  index: number
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + 0.06 * index,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CartDrawer({ children }: CartDrawerProps) {
  const {
    items,
    total,
    count,
    isOpen,
    setIsOpen,
    removeItem,
    updateQty,
    addItem,
  } = useCart()

  // Savings rule: If a machine, grinder, and beans are all present, 3 bags free ($54 saving)
  const hasMachine = items.some((i) => ["one", "duo", "pro"].includes(i.slug))
  const hasGrinder = items.some((i) => i.slug === "grinder")
  const hasBeans = items.some((i) => i.slug === "beans" || i.slug === "origin")
  const saving = hasMachine && hasGrinder && hasBeans ? 54 : 0
  const finalTotal = Math.max(0, total - saving)

  const currentSlugs = items.map((i) => i.slug)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children ? <SheetTrigger asChild>{children}</SheetTrigger> : null}
      <SheetContent
        inset
        tone="ink"
        size="lg"
        side="right"
        className="flex h-auto flex-col"
      >
        <div className="flex min-h-0 flex-1 p-3">
          <div className="relative flex min-w-0 flex-1 flex-col px-3 md:px-6">
            <div className="flex min-h-0 w-full flex-1 flex-col">
              {/* Header with staggered entrance */}
              <StaggerItem index={0} className="shrink-0 pt-14 pb-8 md:pt-6">
                <SheetTitle className="text-3xl text-foreground lg:text-4xl">
                  Your bag{" "}
                  {count > 0 ? (
                    <span className="font-mono text-base text-muted-foreground figures">
                      ({count})
                    </span>
                  ) : null}
                </SheetTitle>
                <SheetDescription className="mt-2 text-base text-muted-foreground">
                  Free shipping to Europe and the US, in 3 to 5 days.
                </SheetDescription>
              </StaggerItem>

              {items.length === 0 ? (
                <StaggerItem
                  index={1}
                  className="flex flex-1 flex-col pb-3 md:flex-none"
                >
                  <CartEmpty onBrowse={() => setIsOpen(false)} />
                </StaggerItem>
              ) : (
                <>
                  {/* Scrollable list */}
                  <StaggerItem
                    index={1}
                    className="-mx-1 min-h-0 overflow-y-auto px-1"
                  >
                    <ul>
                      <AnimatePresence initial={false}>
                        {items.map((item) => (
                          <CartItemRow
                            key={item.slug}
                            item={item}
                            onRemove={removeItem}
                            onUpdateQty={updateQty}
                            onClose={() => setIsOpen(false)}
                          />
                        ))}
                      </AnimatePresence>
                    </ul>

                    <CartAddons currentSlugs={currentSlugs} onAdd={addItem} />
                  </StaggerItem>

                  {/* Summary Footer */}
                  <StaggerItem
                    index={2}
                    className="mt-auto flex shrink-0 flex-col gap-5 pt-4 pb-3"
                  >
                    <CartSummary
                      total={finalTotal}
                      saving={saving}
                      onCheckout={() => setIsOpen(false)}
                    />
                  </StaggerItem>
                </>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
