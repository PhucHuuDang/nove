import type { LegalTableRow } from "@/components/features/legal/legal-types"

interface LegalTableProps {
  caption: string
  rows: LegalTableRow[]
}

export function LegalTable({ caption, rows }: LegalTableProps) {
  return (
    <div className="not-prose my-8">
      <p className="text-sm text-muted-foreground">{caption}</p>
      <dl className="mt-2 border-t">
        {rows.map((row) => (
          <div
            key={row.term}
            className="flex items-baseline justify-between gap-6 border-b py-4"
          >
            <dt className="flex flex-col gap-1">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {row.term}
                {row.code ? (
                  <code className="font-mono text-xs text-muted-foreground">
                    {row.code}
                  </code>
                ) : null}
              </span>
              {row.note ? (
                <span className="text-sm text-muted-foreground">
                  {row.note}
                </span>
              ) : null}
            </dt>
            <dd className="shrink-0 text-right text-muted-foreground">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
