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
