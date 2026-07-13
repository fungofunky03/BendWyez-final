# Contributing to Conduit Bending Calculator

Thank you for your interest in contributing! This project uses a **docs-first** workflow — all implementation decisions trace back to documentation before code is written.

---

## Before You Start

Read the required documentation in this order:

1. [`conduit-docs-first-readiness/docs/00-index.md`](conduit-docs-first-readiness/docs/00-index.md)
2. [`conduit-docs-first-readiness/task_plan.md`](conduit-docs-first-readiness/task_plan.md) — current phase and authorized scope
3. [`conduit-docs-first-readiness/progress.md`](conduit-docs-first-readiness/progress.md) — verified completion status and blockers
4. [`conduit-docs-first-readiness/findings.md`](conduit-docs-first-readiness/findings.md) — architecture decisions and math clarifications
5. [`conduit-docs-first-readiness/constitution.md`](conduit-docs-first-readiness/constitution.md) — core UI and interaction principles
6. [`conduit-docs-first-readiness/spec.md`](conduit-docs-first-readiness/spec.md) — full feature scope and calculator I/O
7. [`conduit-docs-first-readiness/docs/06-ai/llm_usage_guide.md`](conduit-docs-first-readiness/docs/06-ai/llm_usage_guide.md)
8. [`conduit-docs-first-readiness/.cursorrules`](conduit-docs-first-readiness/.cursorrules)

Do not skip or reorder these files.

---

## Phase Gating

Work is divided into phases. **Only implement the phase currently authorized in `task_plan.md`.**

- Phase 0 (docs-first readiness): ✅ complete
- Phase 1 (project initialization and architecture): current authorized phase
- Phase 2+: not yet authorized

Stop and report — do not guess — when:

- The authorized phase boundary is unclear.
- A formula, constant, default, material value, or bender value would need to be invented.
- A requested change would implement a future phase early.
- Source files conflict in a way that affects the current phase.

---

## Making Changes

### Docs changes (`conduit-docs-first-readiness/`)

- Keep execution-memory files up to date: `progress.md`, `task_plan.md`, `findings.md`.
- Log any new formulas, constants, or architectural decisions in `findings.md` **before** relying on them in code.
- Never invent values (shrink constants, bender defaults, conduit dimensions) without a cited source.

### Code changes (`src/`)

- Follow the dark high-contrast visual system defined in `constitution.md`.
- Color semantics are strict: **blue** = interactive elements and reference/leader lines; **green** = physically bent conduit; **gray** = straight conduit sections.
- Calculator inputs and outputs must be overlaid on SVG bend diagrams — not in standalone form fields.
- Calculations update dynamically on input change. No Submit/Calculate buttons.
- All JavaScript trig functions expect radians; wrap degree inputs in a `deg2rad` helper.

---

## Pull Request Guidelines

1. **Branch from** `Bendwyez-main` (the default branch).
2. **PR title:** use a short imperative phrase, e.g. `Add offset calculator SVG diagram`.
3. **PR description:** explain _what_ changed and _why_, referencing relevant doc files when applicable.
4. **Scope:** keep PRs focused on a single phase task. Do not bundle unrelated changes.
5. **Update execution-memory files** (`progress.md`, `task_plan.md`, `findings.md`) as part of the same PR if your change affects project state.

---

## Code Review

All pull requests receive automated code review from **[CodeRabbit](https://coderabbit.ai)** in addition to human review.

CodeRabbit will:

- Post a summary and walkthrough on each PR.
- Comment on specific lines with findings.
- Flag formula constants that are not cited in `findings.md`.
- Check that phase gating rules are respected.

Address all review comments before requesting a human merge. If you disagree with a CodeRabbit finding, leave a reply explaining your reasoning.

---

## Questions

If something is unclear or blocked by an open decision logged in `findings.md`, open a GitHub Issue rather than guessing. The docs-first workflow exists precisely to prevent invented assumptions from entering the codebase.
