# Component Architecture & AI Code Generation Standards

This document establishes the architecture, directory structure, and engineering rules for all React and Next.js components in **nove**.

These rules are synthesized from our clean code principles (`clean-code-rules.md`) and Vercel's production engineering guidelines (`vercel-react-best-practices` and `vercel-composition-patterns`). **All human developers and AI agents must follow these conventions.**

---

## 1. Directory Structure & Component Classification

To prevent monoliths and maintain separation of concerns as the project scales, components are categorized into **3 strict layers**:

```
components/
├── ui/                   # 1. Atomic UI Primitives (Design System)
├── shared/               # 2. Cross-Cutting Reusable Components
├── features/             # 3. Domain-Driven Feature Modules
│   └── <feature-name>/
│       ├── components/   # Private sub-components for this feature
│       ├── hooks/        # Feature-specific hooks
│       ├── types.ts      # Feature-specific TypeScript types
│       └── <feature>.tsx # Feature root container
├── providers.tsx         # Global client providers
└── theme-provider.tsx    # Theme configuration
```

### Layer 1: Primitive UI (`components/ui/`)

- **Purpose**: Pure, reusable design system primitives (shadcn / base-ui).
- **Rules**:
  - Zero business logic, zero domain knowledge, zero network requests.
  - Highly accessible, styled with Tailwind CSS and `cva`.
  - Exported as isolated components (e.g. `button.tsx`, `dialog.tsx`).

### Layer 2: Shared Components (`components/shared/`)

- **Purpose**: Domain-agnostic components used across multiple pages and features.
- **Examples**: `theme-toggle.tsx`, `empty-state.tsx`, `page-header.tsx`, `confirm-dialog.tsx`, `user-avatar.tsx`.
- **Rules**:
  - Reusable across different features.
  - Composes `components/ui/` primitives.
  - Does NOT contain business rules specific to a single feature (e.g. no billing logic in shared).

### Layer 3: Feature Modules (`components/features/<feature-name>/`)

- **Purpose**: Self-contained domain features (e.g., `auth/`, `billing/`, `workspace/`, `settings/`).
- **Internal Structure**:
  ```
  components/features/auth/
  ├── components/
  │   ├── login-form.tsx
  │   ├── oauth-buttons.tsx
  │   └── password-input.tsx
  ├── hooks/
  │   └── use-login-mutation.ts
  ├── types.ts
  └── auth-card.tsx
  ```
- **Rules**:
  - Feature-specific UI, hooks, and types stay encapsulated in their feature directory.
  - If a sub-component is only used within this feature, keep it inside `features/<feature-name>/components/`.
  - Pages in `app/` simply import the feature container.

---

## 2. Next.js App Router Architecture (`app/`)

Next.js `app/` directory handles **routing, metadata, and data loading** — not large UI component trees:

- **Pages are thin**: A page should fetch data (or define metadata) and delegate presentation to a feature component.
  ```tsx
  // app/(dashboard)/billing/page.tsx
  import { BillingDashboard } from "@/components/features/billing/billing-dashboard"

  export const metadata = { title: "Billing & Plans" }

  export default async function BillingPage() {
    return <BillingDashboard />
  }
  ```
- **Server Components by Default**:
  - Every component is a React Server Component (RSC) unless interactivity (hooks, event listeners, browser APIs) is required.
  - **Push `"use client"` down to the leaf**: Never mark an entire page or large layout as `"use client"`. Extract the interactive widget into its own file with `"use client"`.

---

## 3. Strict Rules for AI Code Generation

### Rule 1: The 150-Line Limit (Single Responsibility Principle)

- Aim to keep component files under **150 lines**.
- If a component exceeds 150 lines, it is doing too much. Extract sub-components, custom hooks, or utility functions into separate files.
- Each component must have **one reason to change**.

### Rule 2: NEVER Define Components Inside Components (`rerender-no-inline-components`)

- **Wrong**:
  ```tsx
  // ❌ Horrible performance: re-mounts on every render, destroys state
  function UserList({ users }) {
    function UserRow({ user }) {
      return <div>{user.name}</div>
    }
    return (
      <div>
        {users.map((u) => (
          <UserRow key={u.id} user={u} />
        ))}
      </div>
    )
  }
  ```
- **Correct**:
  ```tsx
  // ✅ Defined at module level or in its own file
  function UserRow({ user }: { user: User }) {
    return <div>{user.name}</div>
  }

  export function UserList({ users }: { users: User[] }) {
    return (
      <div>
        {users.map((u) => (
          <UserRow key={u.id} user={u} />
        ))}
      </div>
    )
  }
  ```

### Rule 3: Avoid Boolean Prop Proliferation (`architecture-avoid-boolean-props`)

- Do NOT add endless boolean flags (`isCompact`, `hasBorder`, `showIcon`, `isModal`, `withHeader`, `isPrimary`).
- **Use Composition or Compound Components**:
  ```tsx
  // ❌ Fragile & confusing
  <ProfileCard isCompact hasAction withHeader showBadges isEditable />

  // ✅ Composable & self-explanatory
  <Card size="sm">
    <CardHeader>
      <CardTitle>Profile</CardTitle>
      <Badge>Active</Badge>
    </CardHeader>
    <CardContent>...</CardContent>
    <CardFooter>
      <Button>Edit</Button>
    </CardFooter>
  </Card>
  ```

### Rule 4: Prefer Children Over Render Props (`patterns-children-over-render-props`)

- Use standard `children` composition instead of props like `renderHeader={() => ...}` or `renderActions={() => ...}`.

### Rule 5: React 19 Conventions

- **No `forwardRef`**: React 19 natively passes `ref` as a prop.
  ```tsx
  // ✅ React 19 way
  export function CustomInput({ ref, className, ...props }: CustomInputProps) {
    return <input ref={ref} className={className} {...props} />
  }
  ```
- Use `use()` instead of `useContext()`.

### Rule 6: Eliminating Waterfalls & Performance (`async-parallel`, `async-suspense-boundaries`)

- Use `Promise.all()` for independent parallel data fetching in Server Components.
- Use `<Suspense fallback={<Skeleton />}>` around slow or async sections to enable progressive streaming.
- Hoist static objects, arrays, and icons outside the component body (`rendering-hoist-jsx`).

### Rule 7: NO Barrel Files (`bundle-barrel-imports`)

- Do NOT create or use giant barrel files like `components/index.ts` or `ui/index.ts`.
- **Import directly from the module**:
  ```tsx
  // ❌ Barrel import causes huge dependency trees
  import { Button, Input, Dialog } from "@/components"

  // ✅ Statically analyzable direct import
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Dialog } from "@/components/ui/dialog"
  ```

### Rule 8: Derive State During Render (`rerender-derived-state-no-effect`)

- Never use `useEffect` just to calculate or sync state that can be computed from props:
  ```tsx
  // ❌ Redundant effect & extra re-render
  const [fullName, setFullName] = useState("")
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`)
  }, [firstName, lastName])

  // ✅ Derive immediately in render
  const fullName = `${firstName} ${lastName}`
  ```

### Rule 9: Safe Conditional Rendering (`rendering-conditional-render`)

- Avoid `count && <Badge>{count}</Badge>` because rendering `0` prints `0` directly into the DOM.
- **Always use explicit ternary**:
  ```tsx
  // ❌ May render "0" text
  {
    unreadCount && <Badge>{unreadCount}</Badge>
  }

  // ✅ Clean and safe
  {
    unreadCount > 0 ? <Badge>{unreadCount}</Badge> : null
  }
  ```

---

## 4. Standard Component Template

When generating a new component, follow this structure:

```tsx
// 1. "use client" only if interactivity/state is required
"use client"

// 2. External imports
import * as React from "react"
import { LucideIcon } from "lucide-react"

// 3. Internal direct imports (no barrels)
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// 4. TypeScript Props Interface (descriptive, minimal boolean flags)
interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  change?: {
    value: string
    isPositive: boolean
  }
  className?: string
}

// 5. Component definition with explicit props typing
export function StatCard({
  title,
  value,
  icon: Icon,
  change,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change ? (
          <p
            className={cn(
              "mt-1 text-xs font-medium",
              change.isPositive ? "text-emerald-600" : "text-destructive"
            )}
          >
            {change.isPositive ? "+" : ""}
            {change.value} from last month
          </p>
        ) : null}
      </CardContent>
    </Card>
  )
}
```

---

## 5. Summary Checklist for Code Reviews & Agent Generations

Before committing any component, verify:

- [ ] Is it in the right directory (`ui/`, `shared/`, or `features/<feature>/`)?
- [ ] Is the file under 150-200 lines?
- [ ] Are all imports direct (no barrel files)?
- [ ] Is `"use client"` pushed down to the smallest interactive leaf?
- [ ] Are there zero inline component declarations?
- [ ] Is state derived during render without unnecessary `useEffect`?
- [ ] Are conditional renders written with ternary (`condition ? ... : null`)?
- [ ] Do `npm run typecheck` and `npm run lint` pass cleanly?
