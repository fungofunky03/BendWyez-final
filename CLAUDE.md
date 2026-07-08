# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Conduit Bending Calculator** — a job-site-first PWA for electricians to calculate conduit bends (offsets, saddles, kicks, 90s). Fully client-side, no backend.

Planned stack: React + Vite + TypeScript + Tailwind CSS.

**Current status:** Phase 0 (docs-first readiness) is complete. Phase 1 (scaffold + global state) is the current authorized phase. No production code exists yet.

All project material lives in `conduit-docs-first-readiness/`.

## Required Read Order Before Coding

Read these files in order before writing or modifying any code. Do not skip or reorder.

1. `conduit-docs-first-readiness/docs/00-index.md`
2. `conduit-docs-first-readiness/task_plan.md` — current phase, phase dependencies, authorized scope
3. `conduit-docs-first-readiness/progress.md` — verified completion status and blockers
4. `conduit-docs-first-readiness/findings.md` — architectural decisions, math clarifications, open issues
5. `conduit-docs-first-readiness/constitution.md` — core UI and interaction principles
6. `conduit-docs-first-readiness/spec.md` — full feature scope and calculator I/O
7. `conduit-docs-first-readiness/docs/06-ai/llm_usage_guide.md`
8. `conduit-docs-first-readiness/.cursorrules`

Deeper docs (`01-business`, `02-product`, `03-ux`, `04-architecture`, `05-calculations`) are required reading when working in those domains.

## Phase Gating

Execute only the phase currently authorized in `task_plan.md`. Phases depend on prior phases being verified complete in `progress.md`.

Stop and report (do not guess) when:
- The authorized phase boundary is unclear.
- A formula, constant, default, material value, or bender value would need to be invented.
- A requested change would implement a future phase early.
- Source files conflict in a way that affects the current phase.

## UI Rules

- Dark, high-contrast visual system: black/deep-charcoal backgrounds, white/light-gray text, bold sans-serif typography.
- Color semantics are strict: **blue** = interactive elements and reference/leader lines; **green** = physically bent conduit only; **gray** = straight conduit sections.
- Calculator inputs and outputs must be overlaid on SVG bend diagrams with dashed leader lines — not in standalone form fields.
- Calculations update dynamically on input change. No Submit or Calculate buttons.
- Reference data (Multipliers, Conduit Dimensions) opens as modal overlays to preserve active calculator state.

## Calculation Rules

- Do not guess or hardcode unverified formulas, shrink constants, deduct values, conduit dimensions, or bender defaults.
- Log verified formulas and math clarifications in `findings.md` before relying on them in code.
- JavaScript trig functions expect radians; all calculator inputs are in degrees — degree-to-radian conversion wrappers are required (Phase 2).

## After Completing Work

Update execution memory files after each verified task:

- `progress.md` — mark completed items, record validation results.
- `task_plan.md` — check off completed items; add phase notes if needed.
- `findings.md` — log architectural choices, bug fixes, math clarifications, source variance, and unresolved assumptions.

Do not use chat history as project state. These files are the authoritative execution memory.
