# System Overview

## Documented Stack

- React with TypeScript.
- Vite.
- Tailwind CSS.
- Custom SVG visualization components.

Supporting technical notes mention React 18 specifically.

## Runtime Model

The app logic must execute entirely client-side.

The current documentation does not define a backend, database, external API dependency, authentication system, telemetry, or remote storage.

## UI Architecture Direction

The app is visual-first. Bend diagrams should be custom SVGs with:

- Green arcs for physically bent portions.
- Gray straight conduit sections.
- Blue reference/leader lines and interactive/reference elements.
- Input/output overlays positioned over the SVG where possible.

## PWA / Offline Direction

Offline reliability is required by the Constitution. Final PWA verification belongs to a later phase unless the task plan is updated.

## Current Implementation Status

No production app code should exist as part of Phase 0 docs-first readiness. React/Vite scaffolding begins only in Phase 1 after this documentation gate is complete.

## TBD / Open Decisions

- Exact React version should be confirmed during Phase 1 setup.
- Dependency list is not finalized.
- Whether to add `lucide-react` is TBD; it appears in technical notes but is not required by canonical Phase 1.
- Exact PWA implementation mechanism is TBD.
