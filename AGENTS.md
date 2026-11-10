<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Development & Git Conventions

- **Commit Messages**: Must adhere to [Conventional Commits](https://www.conventionalcommits.org/) (enforced by Commitlint):
  - `feat`: New features
  - `fix`: Bug fixes
  - `docs`: Documentation
  - `style`: Formatting / styling
  - `refactor`: Refactoring code
  - `perf`: Performance
  - `test`: Tests
  - `build`: Dependencies / build system
  - `ci`: CI workflows
  - `chore`: Maintenance
- **Quality Checks**:
  - Run `npm run typecheck` to verify TypeScript types.
  - Run `npm run lint` for ESLint verification.
  - Pre-commit hooks (`lint-staged`) will automatically format and lint staged files.

# Component Architecture & Generation Rules

When creating or modifying components, strictly adhere to [docs/COMPONENT_ARCHITECTURE.md](docs/COMPONENT_ARCHITECTURE.md):

1. **3-Layer Directory Structure**:
   - `components/ui/`: Design system primitives only (shadcn/base-ui). Zero business logic.
   - `components/shared/`: Cross-cutting reusable UI components (e.g. `theme-toggle.tsx`, `empty-state.tsx`).
   - `components/features/<feature>/`: Self-contained feature modules (e.g. `features/auth/`, `features/billing/`).
   - `app/`: Next.js routes and layouts. Keep pages thin and compose feature components.

2. **Clean Code & Performance Constraints**:
   - **File Size**: Max ~150 lines per component. Decompose larger components into focused sub-components.
   - **No Inline Components**: Never define a component inside another component body (`rerender-no-inline-components`).
   - **No Barrel Imports**: Always import directly from individual module files (e.g. `@/components/ui/button`, never `@/components`).
   - **RSC by Default**: Keep components as React Server Components unless interactivity/hooks are required; push `"use client"` to the smallest possible leaf components.
   - **Composition over Boolean Props**: Favor compound components and `children` composition over endless boolean flags (`isCompact`, `hasIcon`, `showFooter`).
   - **React 19 Conventions**: No `forwardRef` (pass `ref` directly as prop). Use `use()` instead of `useContext()`.
   - **Safe Conditionals**: Use explicit ternary `condition ? <A /> : null` instead of `condition && <A />`.
   - **Derive State in Render**: Compute values during render; do not use `useEffect` to sync derived state.
