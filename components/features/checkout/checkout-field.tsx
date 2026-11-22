import { cn } from "@/lib/utils"

export const CHECKOUT_INPUT =
  "h-11 w-full min-w-0 rounded-full border border-input bg-popover px-4 py-1 text-base transition-[color,box-shadow,background-color] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"

interface CheckoutFieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  className?: string
  children: React.ReactNode
}

/** Label, control, hint and inline error stacked as one checkout field. */
export function CheckoutField({
  id,
  label,
  error,
  hint,
  className,
  children,
}: CheckoutFieldProps) {
  return (
    <div
      role="group"
      data-slot="field"
      data-invalid={error ? true : undefined}
      className={cn(
        "group/field flex w-full flex-col gap-3 *:w-full data-[invalid=true]:text-destructive [&>.sr-only]:w-auto",
        className
      )}
    >
      <label
        htmlFor={id}
        className="flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none"
      >
        {label}
      </label>
      {children}
      {hint ? (
        <p
          id={`${id}-hint`}
          className="text-sm leading-normal text-muted-foreground"
        >
          {hint}
        </p>
      ) : null}
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

/** aria wiring shared by every checkout control. */
export function fieldAria(id: string, error?: string, hint?: string) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ")
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
  }
}
