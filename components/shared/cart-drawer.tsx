"use client"

import Link from "next/link"
import { X } from "lucide-react"
import Image from "next/image"

import { useCart } from "@/lib/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface CartDrawerProps {
  children: React.ReactElement
}

export function CartDrawer({ children }: CartDrawerProps) {
  const { items, total, removeItem, updateQty, count } = useCart()

  return (
    <Sheet>
      <SheetTrigger render={children} />
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-mono text-sm tracking-widest uppercase">
            Bag ({count})
          </SheetTitle>
        </SheetHeader>

        <Separator />

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">Your bag is empty.</p>
            <Link
              href="/shop"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Browse machines
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 py-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm leading-tight font-medium">
                        {item.name}
                      </p>
                      <button
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.slug)}
                        className="mt-0.5 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.slug, item.qty - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded border border-border text-sm hover:bg-accent"
                        >
                          −
                        </button>
                        <span className="font-mono text-sm">{item.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.slug, item.qty + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded border border-border text-sm hover:bg-accent"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-mono text-sm">
                        ${(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-mono text-sm font-medium">
                  ${total.toLocaleString()}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Free shipping · Europe and the US
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
