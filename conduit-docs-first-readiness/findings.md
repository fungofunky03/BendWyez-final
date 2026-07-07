# Findings and Error Ledger

Source: `Agent Findings & Discoveries`.

Agent Instructions: Log architectural discoveries, bug resolutions, math clarifications, SVG coordinate decisions, and source-of-truth updates here to prevent repeated mistakes across sessions.

## Docs-First Architecture Decision

Date: 2026-07-07.

The project now uses a docs-first architecture layer before implementation begins.

The `/docs` folder is the product and architecture source of truth. It contains business context, product scope, UX rules, architecture guidance, calculation assumptions, and AI coding guidance.

The root execution-memory files remain the Manus-style execution layer:

- `task_plan.md`: phase plan, dependencies, and current authorized implementation phase.
- `progress.md`: verified completion status and blockers.
- `findings.md`: architectural discoveries, bug resolutions, math clarifications, and unresolved source issues.

Agents must not code from chat memory alone. Agents must read the docs and execution-memory files before implementation.

## Source File Mapping

Canonical files were missing in the local workspace and were created from uploaded equivalents:

- `Task Execution Plan` -> `task_plan.md`.
- `Project Progress Checklist` -> `progress.md`.
- `Agent Findings & Discoveries` -> `findings.md`.
- `Copy of Project Constitution.docx` -> `constitution.md`.
- `Feature Specification` -> `spec.md`.
- `pasted.txt` plus project rules -> `.cursorrules`.
- `Project Overview and Guidance.txt` plus `Prompt1.md.txt` -> `PROMPTS.md`.

Additional inspected planning/support files:

- `Ai first tooling strategy.txt`.
- `Technical implementation plan.txt`.
- `task execution plan.txt`.
- `Project Overview and Guidance.txt`.
- `Prompt1.md.txt`.

## Source Variance and Open Decisions

The uploaded canonical Task Execution Plan and supplemental `task execution plan.txt` are mostly aligned but differ in scope details:

- Supplemental plan requires local storage persistence in Phase 1; canonical uploaded Task Execution Plan only states global Top Bar state.
- Supplemental plan adds unit tests for math utilities in Phase 2; canonical uploaded Task Execution Plan does not list tests explicitly.
- Supplemental plan names shrink constants for 15, 22.5, 30, 45, and 60 degrees; canonical uploaded Task Execution Plan only says reference constants without listing angles.
- Supplemental plan says configure Vite PWA plugin in Phase 6; canonical uploaded Task Execution Plan says verify offline PWA capabilities.

Resolution for Phase 0: do not implement any of these items. Record them as open decisions in docs and execution memory.

## Math and Trigonometry

- JavaScript trigonometric functions require radians; project planning calls for degree-to-radian conversion and degree-based sin/tan wrappers in Phase 2.
- Cosecant Method and shrink formula expressions are documented in the Feature Specification but must be verified before implementation.
- No shrink constants, deduct values, conduit dimensions, or bender defaults are verified for hardcoding.

## UI and Visuals: SVG/Tailwind

- Strict dark, high-contrast, job-site-first UI is required.
- Blue is reserved for interactive elements and reference/leader lines.
- Green is reserved only for physically bent portions of conduit.
- Gray is reserved for straight conduit sections.
- Inputs and outputs should be overlaid on SVG bend diagrams where possible.
- Dashed leader lines must map labels to exact physical locations on the pipe diagram.

## State Management

- Global Top Bar state must include Bender Selection, Material, and Trade Size.
- State must persist across views.
- Reload persistence is an open decision because source files differ. Do not assume production defaults.
