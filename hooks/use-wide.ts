import { useSyncExternalStore } from "react"

const QUERY = "(min-width: 64rem)"

/** True at the `lg` breakpoint and up. False during SSR. */
export function useWide() {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(QUERY)
      mql.addEventListener("change", callback)
      return () => mql.removeEventListener("change", callback)
    },
    () => window.matchMedia(QUERY).matches,
    () => false
  )
}
