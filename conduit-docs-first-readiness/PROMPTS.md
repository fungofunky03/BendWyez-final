# Prompt Library

Project: Conduit Bending Calculator

This file records the prompt sequence used by AI coding agents. Agents must still read `/docs/00-index.md`, `task_plan.md`, `progress.md`, and `findings.md` before acting. This file is not a substitute for execution memory.

## Prompt 0: Docs-First Repository Architecture Setup

Purpose: prepare the repository for AI-assisted implementation using a strict docs-first workflow before Phase 1 coding.

Prompt 0 acceptance criteria:

- Create `/docs/00-index.md`.
- Create business, product, UX, architecture, calculations, and AI guidance docs.
- Populate docs only from existing project material.
- Mark unknowns as `TBD` or open questions.
- Do not write production code.
- Do not scaffold React/Vite.
- Do not invent formulas.
- Update `findings.md`, `progress.md`, and `task_plan.md`.

Status: completed in this workspace on 2026-07-07.

## Prompt 1: Project Kickoff and Setup

Source file inspected: `Prompt1.md.txt`.

Prompt 1 may be run only after Prompt 0 passes. Prompt 1 is limited to Phase 1:

- Scaffold React + Vite + TypeScript.
- Configure Tailwind CSS.
- Apply dark, high-contrast job-site-first visual system.
- Create initial app shell.
- Create persistent global Top Bar state for Bender Selection, Material, and Trade Size.
- Update execution-memory files after verification.

Prompt 1 must not implement Phase 2+ math, SVG bend diagrams, calculators, reference modals, or final PWA behavior.

## Prompt Sequencing Rule

Use Prompt 0 before Prompt 1. Do not start implementation until docs-first readiness is complete and `progress.md` records that status.
