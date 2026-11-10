# Contributing & Git Standards

To maintain high code quality, automated semantic versioning, and a clean Git history, this project follows enterprise-grade Git conventions.

---

## 1. Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                                              | Example                                          |
| :--------- | :------------------------------------------------------- | :----------------------------------------------- |
| `feat`     | A new feature                                            | `feat(auth): add OAuth2 Google login`            |
| `fix`      | A bug fix                                                | `fix(cart): prevent duplicate checkout requests` |
| `docs`     | Documentation-only changes                               | `docs(readme): add environment setup guide`      |
| `style`    | Formatting changes (whitespace, semicolons, etc.)        | `style(ui): format button component`             |
| `refactor` | Code change that neither fixes a bug nor adds a feature  | `refactor(db): extract query helper`             |
| `perf`     | A code change that improves performance                  | `perf(image): optimize banner load time`         |
| `test`     | Adding missing tests or correcting existing tests        | `test(auth): add unit test for token refresh`    |
| `build`    | Build system or dependency updates (npm, tailwind, etc.) | `build(deps): update next to 16.4.4`             |
| `ci`       | CI/CD configuration files and scripts                    | `ci(github): add PR commitlint check`            |
| `chore`    | Maintenance tasks that do not alter src/test files       | `chore: update gitignore`                        |
| `revert`   | Reverts a previous commit                                | `revert: revert feat(auth) commit`               |

### Rules & Best Practices

1. **Imperative mood**: Use "add", "fix", "remove", not "added", "fixes", "removing".
2. **Lower-case subject**: Subject line should start with lower-case (e.g. `feat: add ...` instead of `feat: Add ...`).
3. **No trailing period**: Never end the subject line with a period (`.`).
4. **Scope (optional)**: Use lower-case nouns or nouns in kebab-case (e.g., `feat(user-profile): ...`).
5. **Breaking Changes**: Add `!` after type/scope or include `BREAKING CHANGE:` in the footer:
   ```
   feat(api)!: drop support for v1 endpoints
   ```

---

## 2. Interactive Commit Assistant (Commitizen)

If you prefer a guided CLI prompt to write standard commit messages:

```bash
# Stage your changes
git add .

# Run the Commitizen CLI prompt
npm run commit
```

---

## 3. Git Hooks (Automated Gates)

We use **Husky** and **lint-staged** to automatically guard code standards:

- **`commit-msg`**: Validates commit message against Commitlint rules. Any non-compliant commit message will be blocked.
- **`pre-commit`**: Automatically runs `lint-staged` (ESLint auto-fix & Prettier) and `tsc --noEmit` (TypeScript typecheck) on staged files before allowing the commit.

---

## 4. Branch Naming Convention

Branch names must be lower-case with hyphens and follow one of these prefixes:

- `feature/<ticket-or-name>`: e.g. `feature/user-authentication`
- `fix/<ticket-or-name>`: e.g. `fix/cart-item-count`
- `refactor/<name>`: e.g. `refactor/header-navigation`
- `chore/<name>`: e.g. `chore/upgrade-dependencies`

---

## 5. Pull Request Standards

1. PR title must also adhere to the Conventional Commits format (e.g., `feat(auth): implement Google OAuth`).
2. All CI checks (Lint, Typecheck, Commitlint) must pass before merging.
3. Use **Squash and Merge** or **Rebase and Merge** to maintain a clean, linear git history.
