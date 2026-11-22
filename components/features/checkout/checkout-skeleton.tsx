import { Skeleton } from "@/components/ui/skeleton"

/** Placeholder grid while the bag loads from storage. */
export function CheckoutSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="mt-8 grid gap-8 md:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:gap-16 xl:gap-24"
    >
      <Skeleton className="h-16 rounded-3xl lg:col-start-2 lg:row-start-1 lg:h-112" />
      <div className="flex flex-col gap-4 pt-2 lg:col-start-1 lg:row-start-1 lg:pt-0">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-11 rounded-full" />
        <Skeleton className="mt-12 h-8 w-32" />
        <Skeleton className="h-20 rounded-2xl" />
        <Skeleton className="h-11 rounded-full" />
      </div>
    </div>
  )
}
