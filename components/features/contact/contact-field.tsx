export const FIELD_CONTROL =
  "w-full min-w-0 border border-input bg-popover text-base transition-[color,box-shadow,background-color] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"

interface ContactFieldProps {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}

/** Label, control and inline error stacked as one form field. */
export function ContactField({
  id,
  label,
  error,
  children,
}: ContactFieldProps) {
  return (
    <div
      role="group"
      data-slot="field"
      data-invalid={error ? true : undefined}
      className="group/field flex w-full flex-col gap-3 *:w-full data-[invalid=true]:text-destructive [&>.sr-only]:w-auto"
    >
      <label
        htmlFor={id}
        className="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
      >
        {label}
      </label>
      {children}
      {error ? (
        <div
          id={`${id}-error`}
          role="alert"
          className="text-sm font-normal text-destructive"
        >
          {error}
        </div>
      ) : null}
    </div>
  )
}
