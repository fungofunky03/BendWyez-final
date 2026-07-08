# Task Execution Plan

Project: Conduit Bending Calculator

Status: Phase 0 documentation readiness complete; implementation not started.

Current Phase: Phase 1 - Project Initialization & Architecture

## Source Mapping

Canonical Markdown file created from uploaded source material:

- `Task Execution Plan` -> `task_plan.md`.
- Supplemental variant inspected: `task execution plan.txt`.

The supplemental variant includes additional details not present in the canonical uploaded Task Execution Plan, including local reload persistence, unit tests for math utilities, shrink constants for 60 degrees, and Vite PWA plugin configuration. These items are recorded as open decisions where they affect phase scope.

## Phase 0: Docs-First Readiness Gate

[x] Create `/docs` product and architecture source-of-truth layer.
[x] Create canonical Markdown source files from uploaded equivalents where canonical filenames were missing.
[x] Record docs-first architecture decision in `findings.md`.
[x] Record docs-first readiness status in `progress.md`.

Do not reorder Phase 1 through Phase 6. Phase 0 is an added documentation-readiness gate before implementation begins.

## Phases and Dependencies

### Phase 1: Project Initialization & Architecture

[x] Scaffold React/Vite/TS project.
[x] Configure Tailwind CSS for specific Dark Mode palette: black background, white text, blue/green/gray accents.
[x] Setup Global State: Top Bar Bender, Material, Size.

Supplemental open decision from `task execution plan.txt`:

- [x] Determine whether Phase 1 must include local reload persistence for global Top Bar state. The supplemental plan requires local storage, while the canonical uploaded Task Execution Plan only requires persistent state across views.

Phase 1 notes:

- React 18 + Vite 5 + TypeScript + Tailwind 3 scaffold created at repo root. Global state uses React Context (smallest documented option per `frontend_architecture.md`).
- Reload persistence decision: implemented via `localStorage`, which satisfies both the canonical (cross-view) and supplemental (reload) source variants. Storage key and behavior are documented in `findings.md`.
- Top Bar option lists use documented example values only, marked as placeholders (`src/data/topBarOptions.ts`); defaults are `null`. Full option lists and production defaults remain TBD.
- No Phase 2+ work (math, SVG diagrams, calculators, reference-modal content, PWA) was implemented.

### Phase 2: Core Math Engine

[ ] Implement `utils/math.ts`: degree-to-radian conversion and sin/tan wrappers.
[ ] Implement Decimal to Fractional Inch converter with 1/16th accuracy.
[ ] Implement reference constants: Deducts and Shrink constants.

Depends on: Phase 1.

Supplemental open decisions from `task execution plan.txt` and technical notes:

- [ ] Determine whether 1/8 inch rounding is also required or whether 1/16 inch is the only accepted target.
- [ ] Determine verified angle set for reference constants before hardcoding any constants.
- [ ] Write unit tests for all math utilities after formulas are verified.

### Phase 3: Visual System: SVGs

[ ] Create base SVG `<Conduit Diagram />` component.
[ ] Implement Green highlighting for arcs and Gray for straights.
[ ] Create absolute-positioned Input/Output overlays for the SVGs.

Depends on: Phase 1.

### Phase 4: Offset Calculators

[ ] Build Standard Offset view.
[ ] Build Rolling Offset view.
[ ] Wire SVG inputs directly to `math.ts` logic for dynamic updates.

Depends on: Phase 2 and Phase 3.

### Phase 5: Saddles, Kicks, and 90s

[ ] Build 3-Point and 4-Point Saddle calculators.
[ ] Build 90 degree and Kick calculators.

Depends on: Phase 4.

### Phase 6: Reference Modals and Final Polish

[ ] Implement Multipliers overlay modal.
[ ] Implement Conduit Dimensions data tables modal.
[ ] Verify offline PWA capabilities.

Depends on: Phase 1.

Supplemental open decision from `task execution plan.txt`:

- [ ] Determine whether Phase 6 requires configuring a Vite PWA plugin or only verifying offline capability.
