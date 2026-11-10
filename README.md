# nove

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

## Commit Conventions & Contributing

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via **Commitlint**, **Husky**, and **lint-staged**.

- See [CONTRIBUTING.md](CONTRIBUTING.md) for full commit and branching guidelines.
- To use an interactive commit CLI wizard: `npm run commit`

## Component Architecture & Standards

To maintain scalability and clarity as agents generate code:

- See [docs/COMPONENT_ARCHITECTURE.md](docs/COMPONENT_ARCHITECTURE.md) for directory layers (`ui/`, `shared/`, `features/`), 150-line limits, and composition rules.
- See [clean-code-rules.md](clean-code-rules.md) for core software engineering principles.
