import { cn } from "@/lib/utils"

interface PageHeadlineProps {
  id: string
  lines: React.ReactNode[]
  className?: string
}

/** Page `h1` whose lines rise into view one after another. */
export function PageHeadline({ id, lines, className }: PageHeadlineProps) {
  return (
    <h1
      id={id}
      className={cn("text-5xl leading-none sm:text-6xl xl:text-7xl", className)}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-1">
          <span
            className={cn(
              "animate-line-rise block motion-reduce:animate-none",
              i === 1 ? "text-muted-foreground" : null
            )}
            style={{ animationDelay: `${0.1 + 0.08 * i}s` }}
          >
            {line}
            {/* Keeps the accessible name spaced; collapses at the line end. */}
            {i < lines.length - 1 ? " " : null}
          </span>
        </span>
      ))}
    </h1>
  )
}
