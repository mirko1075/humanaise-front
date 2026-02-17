# CLAUDE.md Best Practices Reference

> Compiled from Anthropic's official documentation, engineering blog, and community expertise.

## The Golden Rules

1. **Shorter is better.** Every token competes for attention. Target under 300 lines. HumanLayer's root CLAUDE.md is under 60 lines.
2. **Be specific and actionable.** "Run `pytest tests/ -v`" not "test your code."
3. **Include what Claude can't infer.** Commands with flags, non-standard conventions, architectural constraints.
4. **Exclude what Claude already knows.** Standard language conventions, obvious patterns.
5. **Don't duplicate linter work.** Formatting belongs in tool configs + hooks, not instructions.
6. **Self-test every line.** "Would removing this cause Claude to make mistakes?" If no, delete it.

## What to Include vs Exclude

### Include
| Content | Example |
|---------|---------|
| Exact build/test/lint commands | `npm run test -- --coverage --passWithNoEmptyTestSuites` |
| Non-default code conventions | "Use ES modules (import/export), not CommonJS (require)" |
| Architectural boundaries | "Never import from `app/` in `lib/` — lib must remain framework-agnostic" |
| Test conventions | "Use `describe('FeatureName')` / `it('should...')` pattern" |
| Required env vars | "Requires `DATABASE_URL` and `REDIS_URL` in `.env`" |
| Common gotchas | "Hot reload breaks if you edit files in `native/` — restart the dev server" |
| Git workflow | "Use conventional commits: `feat:`, `fix:`, `chore:`" |

### Exclude
| Content | Why |
|---------|-----|
| "Write clean code" | Too vague, Claude does this by default |
| "Use 2-space indentation" | Linter's job (Prettier/ESLint config) |
| File-by-file descriptions | Claude can read the code |
| Long API documentation | Link to docs instead |
| Standard language patterns | Claude already knows TypeScript, Python, etc. |
| Frequently changing info | Goes stale, causes wrong behavior |
| Code snippets | Go stale; use `@file` imports or `file:line` references |

## File Hierarchy

| Level | Location | Scope | Shared? |
|-------|----------|-------|---------|
| Enterprise | `/Library/Application Support/ClaudeCode/CLAUDE.md` | All users | IT-managed |
| User | `~/.claude/CLAUDE.md` | All projects | Personal |
| Project | `./CLAUDE.md` or `./.claude/CLAUDE.md` | This project | Team (git) |
| Project local | `./CLAUDE.local.md` | This project | Personal |
| Rules | `./.claude/rules/*.md` | Path-scoped | Team (git) |

More specific files take precedence over broader ones.

## Rules Files: When and How

Use `.claude/rules/` when:
- The project is large enough that different areas need different instructions
- You have path-specific conventions (e.g., API files vs component files)
- Your CLAUDE.md exceeds 200 lines and needs decomposition

Rules file format:
```yaml
---
paths:
  - "src/api/**/*.ts"
  - "src/services/**/*.ts"
---

# API Development Rules
- All endpoints validate input with Zod schemas
- Return `{ data, error, status }` shape consistently
- Log errors with `logger.error()`, never `console.error()`
```

## Progressive Disclosure with @imports

For large projects, keep CLAUDE.md lean and reference details:
```markdown
## Architecture
See @docs/architecture.md for full system design.
```

The `@path/to/file` syntax loads file contents on demand. Supports relative and absolute paths, recursive imports up to 5 levels.

## Emphasis for Critical Rules

Add "IMPORTANT:" or "NEVER:" prefix to rules that must not be ignored:
```markdown
- IMPORTANT: Always run `npx tsc --noEmit` before committing
- NEVER: Do not commit changes to `config/production.yml`
```

## Anti-Patterns

1. **The 500-line monster** — Claude ignores half of it. Split into CLAUDE.md + rules.
2. **Vague platitudes** — "Write good tests" teaches nothing.
3. **Linter-in-markdown** — Use actual linter configs and hooks.
4. **Stale snippets** — Code examples rot; reference files instead.
5. **Dumping ground** — Adding hotfix notes accumulates noise. Prune regularly.
6. **Task-specific instructions** — Narrow scenarios waste tokens 95% of the time.
7. **Mixing concerns** — Team conventions in CLAUDE.md, personal prefs in CLAUDE.local.md.

## Diagnostic Tips (from Anthropic)

- If Claude keeps doing something wrong despite having a rule → file is too long, rule is getting lost
- If Claude asks questions answered in CLAUDE.md → phrasing is ambiguous
- Run `/init` on existing projects to get improvement suggestions
