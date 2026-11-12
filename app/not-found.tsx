import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <div
      data-page="not-found"
      className="container flex min-h-svh flex-col items-center justify-center text-center"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
        className="size-12"
      >
        <circle cx="12" cy="12" r="10.6" />
        <path d="M8.5 6.5c1.82 2.48 1.82 5.22 0 5.5s-1.82 4.95 0 5.5" />
        <path d="M12 5c1.82 3.15 1.82 6.65 0 7s-1.82 6.3 0 7" />
        <path d="M15.5 6.5c1.82 2.48 1.82 5.22 0 5.5s-1.82 4.95 0 5.5" />
      </svg>
      <h1 className="mt-8 text-4xl md:text-5xl">
        We can&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-sm text-muted-foreground">
        The link is broken, or the page has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-primary bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
      >
        Back to the homepage
      </Link>
    </div>
  )
}
