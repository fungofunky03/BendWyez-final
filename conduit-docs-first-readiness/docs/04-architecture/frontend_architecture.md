# Frontend Architecture

This is a documentation-level architecture proposal based on the current project files. It is not an instruction to create code during Phase 0.

## Likely Boundaries

### App Shell

Responsible for the persistent application frame, including:

- Top Bar.
- Side Drawer.
- Main calculator content area.
- Modal mounting area.

### Global State Provider

Responsible for globally available Top Bar state:

- Bender Selection.
- Material.
- Trade Size.

React Context or Zustand is mentioned in project material; Phase 1 should choose the smallest documented approach that satisfies scope.

### Top Bar

Responsible for persistent dropdown controls and quick access to the current global conduit context.

### Side Drawer

Responsible for navigation groupings:

- Offsets.
- Saddles.
- Kicks.
- 90s.
- Reference.

### Calculator Views

Responsible for individual calculator workflows, such as Standard Offset, Rolling Offset, Saddles, Kicks, and 90s.

Calculator views must not be implemented during Phase 0. Phase order controls when each view is allowed.

### Math Utilities

Responsible for verified math helpers, including degree-to-radian conversion, sin/tan wrappers, fractional inch conversion, and verified reference constants.

Math utilities belong to Phase 2.

### SVG Diagram Components

Responsible for conduit visuals, bend arcs, straight sections, overlays, and leader lines.

Base visual system work belongs to Phase 3.

### Reference Modal Components

Responsible for Multipliers and Conduit Dimensions modal overlays.

Reference modals belong to Phase 6.

## Proposed Documentation-Level Directory Boundaries

No files should be created from this tree during Phase 0. It is a planning aid only.

```txt
src/
  app/
  components/
    top-bar/
    side-drawer/
    modals/
    svg/
  calculators/
    offsets/
    saddles/
    kicks/
    nineties/
  state/
  utils/
  data/
```

## TBD / Open Decisions

- Routing strategy is not documented.
- Exact component names are not authoritative.
- State library choice is TBD for implementation.
- Data-loading strategy for static reference tables is TBD.
