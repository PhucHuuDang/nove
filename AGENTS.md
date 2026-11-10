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
