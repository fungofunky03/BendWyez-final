# Documentation Index

The Conduit Bending Calculator uses a docs-first workflow. AI implementation agents must read the repository documentation before writing code and must stop on ambiguity instead of guessing.

## Repository Documentation Layers

### Product and Architecture Source of Truth

The `/docs` folder contains the product, business, UX, architecture, calculations, and AI-coding source of truth.

Use these docs to understand what should be built and what must not be invented.

### Execution Memory Layer

The root execution-memory files control what work may happen next:

- `task_plan.md`: current phase, phase dependencies, and authorized scope.
- `progress.md`: verified completion status and blockers.
- `findings.md`: discoveries, bug fixes, math clarifications, source variance, and architectural decisions.

Agents must not code from chat memory alone.

## Authoritative Root Files

- `constitution.md`: core job-site-first principles, visual rules, dynamic interaction model, and offline/client-side requirement.
- `spec.md`: documented feature scope, calculator groups, known inputs, known outputs, and reference modal scope.
- `.cursorrules`: coding-agent constraints for Cursor/Windsurf-style implementation.
- `PROMPTS.md`: prompt sequence and phase boundaries.

## Required Read Order for AI Coding Agents

1. `/docs/00-index.md`.
2. `task_plan.md`.
3. `progress.md`.
4. `findings.md`.
5. `constitution.md`.
6. `spec.md`.
7. `/docs/01-business/vision.md` and `/docs/01-business/personas.md`.
8. `/docs/02-product/product_overview.md`, `/docs/02-product/feature_inventory.md`, and `/docs/02-product/access_rules.md`.
9. `/docs/03-ux/design_principles.md`, `/docs/03-ux/component_rules.md`, and `/docs/03-ux/mobile_jobsite_usability.md`.
10. `/docs/04-architecture/system_overview.md`, `/docs/04-architecture/frontend_architecture.md`, `/docs/04-architecture/state_management.md`, `/docs/04-architecture/data_models.md`, and `/docs/04-architecture/offline_pwa_strategy.md`.
11. `/docs/05-calculations/math_assumptions.md`, `/docs/05-calculations/formula_inventory.md`, and `/docs/05-calculations/test_cases.md`.
12. `/docs/06-ai/llm_usage_guide.md` and `/docs/06-ai/cursor_windsurf_rules.md`.
13. `PROMPTS.md` only after the above are read.

## Implementation Gating

Implementation must stop when:

- The current phase is unclear.
- Source files conflict in a way that affects the current phase.
- A formula, constant, default option, material list, bender value, data model, or UI behavior would need to be invented.
- A requested change would implement a future phase early.
- Validation cannot be run or produces unresolved failures.

## Source Mapping

The canonical Markdown files were created from existing uploaded project materials:

- `Task Execution Plan` -> `task_plan.md`.
- `Project Progress Checklist` -> `progress.md`.
- `Agent Findings & Discoveries` -> `findings.md`.
- `Copy of Project Constitution.docx` -> `constitution.md`.
- `Feature Specification` -> `spec.md`.

Additional supporting files inspected:

- `Ai first tooling strategy.txt`.
- `Technical implementation plan.txt`.
- `task execution plan.txt`.
- `Project Overview and Guidance.txt`.
- `Prompt1.md.txt`.
- `pasted.txt`.

## Open Documentation Rule

Unknowns must be documented as `TBD`, open decisions, or blockers. They must not be silently filled in by an AI agent.
