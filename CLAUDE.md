# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Conduit Bending Calculator** — a job-site-first PWA for electricians to calculate conduit bends (offsets, saddles, kicks, 90s). Fully client-side: no backend, external APIs, telemetry, or network-dependent runtime behavior. The repository directory is named `BendWyez-final`, but all project material uses the product name "Conduit Bending Calculator".

Planned stack: React + Vite + TypeScript + Tailwind CSS.

**Current status:** Phase 0 (docs-first readiness) is complete. Phase 1 (scaffold + global state) is the current authorized phase. No production code exists yet — there is no `package.json`, no `src/`, and therefore no build, test, or lint commands. The repository is documentation-only.

## Repository Layout

All project material lives in `conduit-docs-first-readiness/`:

```
conduit-docs-first-readiness/
├── task_plan.md        # Execution memory: phases, dependencies, authorized scope
├── progress.md         # Execution memory: verified completion status, blockers
├── findings.md         # Execution memory: decisions, math clarifications, source variance
├── constitution.md     # Core UI and interaction principles
├── spec.md             # Full feature scope and calculator I/O
├── PROMPTS.md          # Prompt sequence and phase boundaries (Prompt 0 done; Prompt 1 = Phase 1 only)
├── .cursorrules        # Coding-agent constraints
└── docs/               # Product and architecture source of truth
    ├── 00-index.md
    ├── 01-business/    # vision, personas
    ├── 02-product/     # product overview, feature inventory, access rules
    ├── 03-ux/          # design principles, component rules, job-site usability
    ├── 04-architecture/# system overview, frontend architecture, state, data models, PWA strategy
    ├── 05-calculations/# math assumptions, formula inventory, test cases
    └── 06-ai/          # llm_usage_guide, cursor_windsurf_rules
```

The `docs/` folder is the product/architecture source of truth; the root `task_plan.md`, `progress.md`, and `findings.md` are the execution-memory layer that controls what work may happen next. Agents must not code from chat memory alone.

## Required Read Order Before Coding

Read these files in order before writing or modifying any code. Do not skip or reorder.

1. `conduit-docs-first-readiness/docs/00-index.md`
2. `conduit-docs-first-readiness/task_plan.md` — current phase, phase dependencies, authorized scope
3. `conduit-docs-first-readiness/progress.md` — verified completion status and blockers
4. `conduit-docs-first-readiness/findings.md` — architectural decisions, math clarifications, open issues
5. `conduit-docs-first-readiness/constitution.md` — core UI and interaction principles
6. `conduit-docs-first-readiness/spec.md` — full feature scope and calculator I/O
7. `conduit-docs-first-readiness/docs/06-ai/llm_usage_guide.md`
8. `conduit-docs-first-readiness/docs/06-ai/cursor_windsurf_rules.md` and `conduit-docs-first-readiness/.cursorrules`
9. `conduit-docs-first-readiness/PROMPTS.md` — only after the above; gates the prompt sequence

Deeper docs (`01-business`, `02-product`, `03-ux`, `04-architecture`, `05-calculations`) are required reading when working in those domains.

## Phase Gating

Execute only the phase currently authorized in `task_plan.md`. Phases depend on prior phases being verified complete in `progress.md`. Do not reorder Phases 1–6:

- Phase 1: Project Initialization & Architecture (scaffold, Tailwind dark palette, global Top Bar state) — current
- Phase 2: Core Math Engine — depends on Phase 1
- Phase 3: Visual System: SVGs — depends on Phase 1
- Phase 4: Offset Calculators — depends on Phases 2 and 3
- Phase 5: Saddles, Kicks, and 90s — depends on Phase 4
- Phase 6: Reference Modals and Final Polish — depends on Phase 1

Stop and report (do not guess) when:
- The authorized phase boundary is unclear.
- A formula, constant, default, material value, or bender value would need to be invented.
- A requested change would implement a future phase early.
- Source files conflict in a way that affects the current phase.

## Feature Scope (from spec.md — later phases)

Side-drawer navigation groups: Offsets, Saddles, Kicks, 90s, Reference.

- **Bender Tools:** QuickCenter (bender shoe map), Multiple Bends (sequential bend list)
- **Offsets:** Standard Offset, Rolling Offset, Parallel Offset, Matching Centers / Bends
- **Saddles:** Three Point Saddle, Four Point Saddle
- **Kicks:** Kick With 90°, Parallel Kick (Standard & Forward), Matching Center / Bend Kicks
- **90s:** Standard 90°, Compound 90s (circle/rectangle/square obstacles), Segmented 90° (multi-shot sweeps)
- **Reference modals:** Multipliers (Cosecant `1/Sin`; Shrink `Tan(θ/2) × Opposite`), Conduit Dimensions (OD, ID, Wall Thickness, Weight per 10 ft) for EMT, RMC, IMC, PVC (Sch 20/40/80), AL

Every formula in `docs/05-calculations/formula_inventory.md` is currently marked **Unverified** — see Calculation Rules.

## Planned Source Layout (Phase 1)

`docs/04-architecture/frontend_architecture.md` proposes this `src/` tree as a planning aid. Follow it when scaffolding in Phase 1; do not create it before then:

```
src/
  app/
  components/{top-bar, side-drawer, modals, svg}/
  calculators/{offsets, saddles, kicks, nineties}/
  state/
  utils/
  data/
```

## Open Decisions (do not resolve unilaterally)

Logged in `findings.md`, `progress.md`, and `docs/04-architecture/state_management.md`:

- **State library:** React Context vs Zustand for Phase 1 global Top Bar state — choose the smallest documented approach and log the choice in `findings.md`.
- **Reload persistence:** supplemental planning requires localStorage persistence of Top Bar state; the canonical plan only requires persistence across views.
- **Production defaults:** exact defaults for Bender Selection, Material, and Trade Size are undocumented — use non-production placeholders, never invent defaults.
- **Phase 2:** whether 1/8" rounding is required in addition to 1/16"; the verified angle set for reference constants; unit tests for math utilities.
- **Phase 6:** Vite PWA plugin vs verifying offline capability only.

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
- Do not add dependencies unless a documented need exists in the current phase.

## After Completing Work

Update execution memory files after each verified task:

- `progress.md` — mark completed items, record validation results.
- `task_plan.md` — check off completed items; add phase notes if needed.
- `findings.md` — log architectural choices, bug fixes, math clarifications, source variance, and unresolved assumptions.

Do not use chat history as project state. These files are the authoritative execution memory.
