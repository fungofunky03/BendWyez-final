# State Management

## Global State Scope

The Constitution and Feature Specification require persistent Top Bar state across views for:

- Bender Selection.
- Material.
- Trade Size.

## Phase 1 Requirement

Phase 1 must set up global state for the Top Bar. It must not implement calculator logic, formulas, or later-phase reference data.

## Persistence Across Views

Global Top Bar state must persist across all views.

## Reload Persistence

Source files differ:

- Canonical uploaded Task Execution Plan requires Global State for Top Bar Bender, Material, and Size.
- Supplemental `task execution plan.txt` explicitly requires persistent local storage so preferences remain on reload.

Resolution for docs-first readiness:

- Do not implement during Phase 0.
- Phase 1 agent must read `task_plan.md`, `progress.md`, and `findings.md` before deciding.
- If local reload persistence is implemented, it must be documented in `findings.md`, including storage key and behavior.
- If exact defaults are still unknown, use non-production placeholders rather than inventing defaults.

## Allowed State Values

Known examples from the Feature Specification:

- Bender Selection: `MLWK Hand Bender` is an example only.
- Material: `EMT`, `RMC`, `PVC` are examples for Top Bar material.
- Trade Size: `1/2"`, `3/4"`, `1"` are examples only.

Full option lists are TBD.

## TBD / Open Decisions

- Exact default values.
- Full bender list.
- Full material list for Top Bar selection.
- Full trade-size list.
- Whether reload persistence is canonical Phase 1 scope.
- Whether React Context or Zustand should be selected for Phase 1.
