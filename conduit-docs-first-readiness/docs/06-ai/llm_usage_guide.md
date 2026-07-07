# LLM Usage Guide

## Required Behavior

AI agents must read `/docs/00-index.md` first.

Before coding, agents must also read:

- `task_plan.md`.
- `progress.md`.
- `findings.md`.
- `constitution.md`.
- `spec.md`.
- `.cursorrules`.

## Execution Rules

- Execute only the current authorized phase.
- Do not skip dependencies.
- Do not use chat history as project state.
- Do not invent formulas, constants, defaults, data models, UI behavior, or storage behavior.
- Stop on ambiguity and report the blocker.
- Keep changes scoped to the current task.
- Avoid unrelated refactors and feature creep.

## Memory Update Rules

After verified work:

- Update `progress.md` with completed tasks and validation results.
- Update `task_plan.md` only for completed checklist items or documented phase notes.
- Update `findings.md` for architectural choices, bug fixes, math clarifications, source variance, unresolved assumptions, and validation discoveries.

## Calculation Rules

- All formulas must be verified before implementation.
- Log trigonometric formulas, shrink constants, deducts, SVG coordinate math, and rounding decisions in `findings.md`.
- No unverified constants may be hardcoded.

## UX Rules

- Maintain the job-site-first dark, high-contrast visual system.
- Keep green reserved only for physically bent conduit portions.
- Do not add Submit or Calculate buttons to calculator flows.
- Preserve calculation context when opening reference modals.

## Tooling Notes

The AI-first tooling strategy recommends Cursor or Windsurf for multi-file coding work. That recommendation does not override the docs-first read order or execution-memory files.
