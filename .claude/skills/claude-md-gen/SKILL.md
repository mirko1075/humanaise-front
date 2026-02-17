---
name: claude-md-gen
description: Generate or improve a CLAUDE.md file for any project following Anthropic's official best practices. Analyzes the codebase, detects stack and patterns, and produces a concise, high-quality CLAUDE.md with optional modular .claude/rules/ files.
argument-hint: "[project-path] [--rules] [--improve]"
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(ls *), Bash(cat package.json), Bash(cat *.toml), Bash(cat *.json), Bash(cat *.yaml), Bash(cat *.yml), Glob, Grep, Read, Write, Edit, AskUserQuestion
---

## Arguments

- **Target project path and options:** "$ARGUMENTS"

Parse the arguments:
- `project_path`: Path to the project root (defaults to current working directory if empty)
- `--rules`: Also generate modular `.claude/rules/*.md` files with path-specific frontmatter
- `--improve`: Analyze and improve an existing CLAUDE.md instead of generating from scratch

## Guiding Principles

Before you start, internalize these rules from Anthropic's official documentation:

1. **Conciseness is king** — Target under 300 lines. Every token competes for attention in the context window. Bloated files cause Claude to ignore instructions.
2. **Specific and actionable** — "Run `npm test -- --watch`" is good. "Test your code" is worthless.
3. **Include what Claude can't guess** — Commands, non-obvious conventions, architectural decisions, gotchas.
4. **Exclude what Claude already knows** — Standard language conventions, things obvious from reading code, long tutorials.
5. **Never do a linter's job** — Formatting rules belong in ESLint/Prettier/Biome configs with hooks, not in CLAUDE.md.
6. **Self-test every line** — Ask: "Would removing this cause Claude to make mistakes?" If not, cut it.

## Phase 1: Project Analysis

Thoroughly analyze the project at `project_path`:

### 1a. Detect the stack

Read these files (if they exist):
- `package.json` / `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml` / `bun.lockb`
- `tsconfig.json` / `jsconfig.json`
- `Cargo.toml` / `go.mod` / `requirements.txt` / `pyproject.toml` / `Gemfile` / `build.gradle` / `pom.xml`
- `Dockerfile` / `docker-compose.yml`
- `.env.example`
- `app.json` / `expo-env.d.ts` (Expo/React Native)
- `next.config.*` / `nuxt.config.*` / `vite.config.*` / `webpack.config.*`

Determine:
- Primary language(s) and version
- Framework (React, React Native/Expo, Next.js, Vue, Django, Rails, etc.)
- Package manager (npm, yarn, pnpm, bun, cargo, pip, etc.)
- Test framework (Jest, Vitest, pytest, etc.)
- Linter/formatter (ESLint, Prettier, Biome, Ruff, etc.)
- Build system (Webpack, Vite, tsc, cargo, etc.)
- CI/CD (GitHub Actions, CircleCI, etc.)
- Monorepo structure if applicable

### 1b. Detect project structure

Run `ls` on the project root and key directories. Identify:
- Source code layout (src/, app/, lib/, packages/)
- Test location (tests/, __tests__, *.test.*, *.spec.*)
- Configuration directory (.claude/, .github/, etc.)
- Documentation (docs/, README.md)

### 1c. Detect existing patterns

Search for:
- API call patterns (fetch, axios, ky, tRPC, etc.)
- State management (Redux, Zustand, Context, Pinia, etc.)
- Routing approach
- Database/ORM (Prisma, Drizzle, SQLAlchemy, ActiveRecord, etc.)
- Auth patterns
- Error handling conventions

### 1d. Detect existing commands

Read `package.json` scripts, `Makefile`, `Taskfile`, or equivalent to find:
- Build commands
- Test commands (full suite + single test)
- Lint/format commands
- Dev server commands
- Deploy commands

### 1e. Read existing CLAUDE.md (if --improve)

If `--improve` flag is set and a CLAUDE.md already exists, read it and analyze:
- What's good and should be kept
- What's too vague and needs specificity
- What's redundant or bloated
- What's missing based on the project analysis
- What violates the best practices (too long, linter work, generic advice, etc.)

## Phase 2: User Preferences

Ask the user these questions using AskUserQuestion:

**Question 1 — Scope:**
- "Generate project CLAUDE.md only" (shared with team via git)
- "Generate project CLAUDE.md + modular .claude/rules/ files" (for larger projects)
- "Generate personal ~/.claude/CLAUDE.md" (applies to all your projects)

**Question 2 — Detail level:**
- "Lean (under 100 lines) — essentials only" (Recommended for most projects)
- "Standard (100-200 lines) — essentials + architecture overview"
- "Comprehensive (200-300 lines) — detailed, for complex/monorepo projects"

**Question 3 — Include workflow rules?**
- "Yes — include git conventions, PR process, commit format"
- "No — keep it focused on code and commands"

If the `--rules` flag was passed, skip Question 1 and default to generating rules files.

## Phase 3: Generate the CLAUDE.md

Based on all analysis and user preferences, generate a CLAUDE.md following this structure.

IMPORTANT RULES FOR GENERATION:
- Use terse, imperative statements. Not prose paragraphs.
- Every command must be the exact, copy-pasteable command.
- Only include sections relevant to this specific project.
- Do NOT include sections with generic/obvious content.
- Do NOT add comments explaining why a section exists.
- Do NOT include formatting/style rules that are handled by linters.
- Prefer bullet points over paragraphs.

### Section order (include only what's relevant):

```markdown
# [Project Name]

## Build & Run
[Exact commands for build, dev, start — with any required flags or env vars]

## Test
[Exact commands for full suite, single test, watch mode, coverage]
[Test file naming convention only if non-standard]

## Lint & Format
[Exact commands — only if not auto-run via hooks]

## Code Style
[ONLY non-obvious conventions that differ from standard defaults]
[Things Claude would get wrong without being told]

## Architecture
[Key directories and their purpose — brief, not exhaustive]
[Critical architectural boundaries or layering rules]

## Patterns
[Project-specific patterns for API calls, state, error handling]
[Only include if there's a specific way things MUST be done]

## Workflow
[Branch naming, commit format, PR conventions]
[Only if requested by user]

## Gotchas
[Non-obvious things that will trip Claude up]
[Environment-specific quirks, required env vars]
```

### Write the file

- Write to `<project_path>/CLAUDE.md` (or `~/.claude/CLAUDE.md` if personal scope was chosen)
- If a CLAUDE.md already exists and `--improve` was set, use Edit to modify in place

## Phase 4: Generate Rules Files (if requested)

If the user chose rules files or passed `--rules`, generate modular `.claude/rules/*.md` files.

Create the directory `<project_path>/.claude/rules/` and generate **only** rules that are meaningfully path-specific:

Example structure:
```
.claude/rules/
├── testing.md          (paths: **/*.test.*, **/*.spec.*)
├── api.md              (paths: src/api/**/*, app/api/**/*)
├── components.md       (paths: src/components/**/*, app/components/**/*)
└── database.md         (paths: prisma/**/*, src/models/**/*)
```

Each rules file must:
- Have YAML frontmatter with `paths:` glob patterns
- Be focused on ONE concern
- Be under 50 lines
- Contain only instructions relevant when editing those specific files

Do NOT create rules files for concerns that apply globally — those belong in CLAUDE.md.

## Phase 5: Validate & Present

After writing all files:

1. Count the total lines of the generated CLAUDE.md — warn if over 300
2. Self-test: review every line and flag any that are:
   - Too vague to be actionable
   - Something Claude would do correctly without being told
   - Duplicating what a linter already enforces
3. Show the user:
   - Full content of the generated CLAUDE.md
   - List of generated rules files (if any) with their path patterns
   - A brief note on what was included and why
   - Suggestions for what to add later as the project evolves

If `--improve` was used, show a before/after diff summary of what changed and why.
