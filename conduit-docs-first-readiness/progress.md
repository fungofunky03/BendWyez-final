# Project Progress Checklist

Source: `Project Progress Checklist`.

Agent Instructions: Check items off sequentially only after tasks are verified complete.

## Phase 0: Docs-First Readiness Gate

[x] Docs-first readiness completed.

Completion notes:

- `/docs/00-index.md` created.
- `/docs` now contains business, product, UX, architecture, calculations, and AI guidance sections.
- Canonical Markdown source files were created where the uploaded project files used non-canonical names or DOCX-only storage.
- No production app code was written.
- No React/Vite scaffold was created.
- No formulas or calculator logic were implemented.

## Implementation Phases

[x] Phase 1: Project Initialization & Architecture.
[ ] Phase 2: Core Math Engine.
[ ] Phase 3: Visual System: SVGs.
[ ] Phase 4: Offset Calculators.
[ ] Phase 5: Saddles, Kicks, and 90s.
[ ] Phase 6: Reference Modals and Final Polish.

## Phase 1 Completion Notes

Date: 2026-07-08.

- Scaffolded React 18 + Vite 5 + TypeScript + Tailwind CSS 3 at the repo root.
- Applied the job-site-first dark visual system: black/charcoal surfaces, white/light-gray text, bold sans-serif; strict functional accent tokens (`interactive`=blue, `bent`=green, `straight`=gray) defined in `tailwind.config.js`. Green/gray are defined but not yet applied to conduit visuals (Phase 3).
- Built the app shell: persistent Top Bar (Bender/Material/Trade Size dropdowns), Side Drawer nav groups (Offsets, Saddles, Kicks, 90s, Reference), main content area, and an empty `#modal-root` mount point.
- Implemented persistent global Top Bar state via React Context with `localStorage` reload persistence (see `findings.md`).
- No calculator logic, formulas, SVG diagrams, reference-modal content, or PWA tooling were added.

Validation results:

- `npm run build` (runs `tsc --noEmit` then `vite build`) succeeds; Tailwind utilities are generated in the emitted CSS.
- `npm run typecheck` passes with `strict`, `noUnusedLocals`, and `noUnusedParameters` enabled.
- `npm run dev` serves the app (HTTP 200, correct document title).

## Current Blocker

None. Phase 2 (Core Math Engine) is the next authorized phase but requires formula/constant verification before any implementation (see `findings.md` and Calculation Rules).

## Open Decisions That Must Be Resolved Before or During Later Phases

- Exact production defaults for Bender Selection, Material, and Trade Size are not documented.
- Reload persistence is described in supplemental planning material but not in the canonical uploaded Task Execution Plan; implementation agents must confirm against `task_plan.md` and `findings.md` before coding.
- Formula constants, conduit dimension numeric values, bender shoe geometry, and calculator-specific expected numerical outputs remain unverified.
- Exact PWA mechanism is TBD. Later Phase 6 must decide whether verification alone is sufficient or whether a Vite PWA plugin is required.
