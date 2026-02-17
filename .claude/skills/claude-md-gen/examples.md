# CLAUDE.md Examples by Stack

## Example 1: React Native / Expo (TypeScript)

```markdown
# MyApp

## Build & Run
- Dev: `npx expo start`
- iOS: `npx expo run:ios`
- Android: `npx expo run:android`
- EAS build: `eas build --platform ios --profile preview`

## Test
- Full suite: `npm test`
- Single file: `npm test -- path/to/file.test.ts`
- Watch: `npm test -- --watch`

## Typecheck
- `npx tsc --noEmit` — run before every commit

## Code Style
- Use path aliases: `@/components/Button` not `../../components/Button`
- Use ES modules everywhere, never CommonJS
- Hooks go in `hooks/` with `use` prefix: `useAuth.ts`, `useBle.ts`

## Architecture
- `app/` — Expo Router file-based routing (tabs + stack)
- `components/` — Shared UI components
- `hooks/` — Custom React hooks
- `services/` — API and external service integrations
- `stores/` — Zustand state stores
- `types/` — Shared TypeScript types

## Patterns
- API calls: use `services/api.ts` client, never raw fetch
- State: Zustand stores with selectors, no prop drilling
- Navigation: Expo Router `useRouter()` and `useLocalSearchParams()`
- Forms: React Hook Form with Zod validation

## Gotchas
- Expo Go doesn't support native modules — use dev client for BLE
- Hot reload breaks after native/ edits — restart `npx expo start`
- IMPORTANT: Check `app.json` version matches `eas.json` before builds
```

**Line count: ~38 lines. Lean and effective.**

---

## Example 2: Next.js Full-Stack (TypeScript)

```markdown
# Platform

## Build & Run
- Dev: `pnpm dev`
- Build: `pnpm build`
- Start: `pnpm start`
- DB: `pnpm db:push` (Drizzle push), `pnpm db:studio` (Drizzle Studio)

## Test
- Unit: `pnpm test`
- E2E: `pnpm test:e2e` (requires `pnpm dev` running)
- Single: `pnpm test -- path/to/file.test.ts`

## Code Style
- Server components by default, `"use client"` only when needed
- Use `@/` path alias for all imports
- Colocate types with their module, only share via `types/` when used in 3+ places

## Architecture
- `app/` — Next.js App Router (RSC by default)
- `app/api/` — Route handlers (REST endpoints)
- `components/` — Shared React components
- `lib/` — Framework-agnostic utilities (NEVER import from `app/` or `components/`)
- `db/` — Drizzle schema, migrations, and queries

## Patterns
- Data fetching: Server components fetch directly, client components use SWR
- Mutations: Server Actions for forms, route handlers for programmatic calls
- Auth: `lib/auth.ts` wraps NextAuth — always use `getServerSession()` in server context
- Errors: throw `AppError` from `lib/errors.ts`, caught by error boundaries

## Gotchas
- `lib/` must never import from `app/` — this breaks the dependency boundary
- NEVER use `"use client"` on layout components — breaks streaming
- Drizzle migrations are auto-generated — never edit `db/migrations/` by hand
```

**Line count: ~35 lines.**

---

## Example 3: Python Backend (FastAPI)

```markdown
# API Service

## Build & Run
- Install: `uv sync`
- Dev: `uv run uvicorn app.main:app --reload`
- Docker: `docker compose up`

## Test
- Full: `uv run pytest`
- Single: `uv run pytest tests/test_users.py -v`
- Coverage: `uv run pytest --cov=app --cov-report=html`

## Typecheck
- `uv run mypy app/`

## Architecture
- `app/` — FastAPI application
- `app/api/` — Route modules (one per resource)
- `app/models/` — SQLAlchemy models
- `app/schemas/` — Pydantic request/response schemas
- `app/services/` — Business logic (no HTTP concerns here)
- `app/db/` — Database session and migrations

## Patterns
- Routes call services, services call repos — never skip layers
- Use `Depends()` for all dependency injection
- Pydantic schemas for all request validation — never access `request.body` directly
- Alembic for migrations: `uv run alembic revision --autogenerate -m "description"`

## Gotchas
- Requires `DATABASE_URL` and `REDIS_URL` in `.env`
- SQLAlchemy sessions are async — always use `async with get_session() as db`
- IMPORTANT: Run `uv run alembic upgrade head` after pulling new migrations
```

**Line count: ~30 lines.**

---

## Rules File Examples

### `.claude/rules/testing.md`
```yaml
---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "**/*.spec.ts"
---

- Descriptive names: `it('should return 404 when user not found')`
- One assertion per test when possible
- Use `faker` for test data, never hardcoded strings
- Mock external services, never real API calls in tests
- Arrange-Act-Assert structure
```

### `.claude/rules/api-routes.md`
```yaml
---
paths:
  - "app/api/**/*"
  - "src/api/**/*"
---

- Validate all inputs at the route handler boundary
- Return consistent `{ data, error }` shape
- Use appropriate HTTP status codes (201 for creation, 204 for deletion)
- Log errors with structured logger, never console.log
- Wrap handlers in try/catch — unhandled exceptions crash the process
```

### `.claude/rules/database.md`
```yaml
---
paths:
  - "db/**/*"
  - "prisma/**/*"
  - "drizzle/**/*"
  - "src/models/**/*"
---

- Never edit auto-generated migration files
- Always include rollback strategy in migration comments
- Use transactions for multi-table operations
- Index foreign keys and frequently queried columns
```
