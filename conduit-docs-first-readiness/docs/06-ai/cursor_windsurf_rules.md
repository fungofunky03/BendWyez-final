# Cursor / Windsurf Rules

## Before Code

- Inspect `/docs/00-index.md` before implementation.
- Inspect `task_plan.md`, `progress.md`, and `findings.md`.
- Inspect `constitution.md` and `spec.md`.
- Honor `.cursorrules`.
- Confirm the current phase before writing code.

## Scope

- Keep changes scoped to the current phase.
- Do not implement future phases early.
- Do not add broad abstractions that are not needed for the current phase.
- Do not add dependencies without a documented current-phase need.
- Do not scaffold or implement production app code during Phase 0.

## Formulas and Reference Data

- Do not guess formulas.
- Do not hardcode unverified constants.
- Do not invent bender defaults, material lists, trade-size lists, or conduit dimensions.
- Mark unknowns as `TBD` or record them in `findings.md`.

## UI and UX

- Preserve the strict dark/high-contrast job-site-first visual system.
- Use blue for interactive/reference elements.
- Use green only for physically bent conduit portions.
- Use gray for straight conduit sections.
- Use SVG overlays and leader lines where calculator workflows require visual-first behavior.
- Do not add Submit or Calculate buttons.

## Validation

Before marking progress complete:

- Run the available validation commands for the current phase.
- Do not invent successful results for absent scripts.
- Record validation commands and results in `progress.md`.
- Record architectural discoveries or unresolved issues in `findings.md`.

## Blocker Reporting

Report blockers clearly when:

- Source files are missing or contradictory for the current task.
- A formula or constant is not verified.
- A dependency or framework choice is not documented.
- Implementation would require future-phase work.
- Validation fails.
