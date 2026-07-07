# Offline and PWA Strategy

## Current Requirement

The Constitution requires app logic to execute entirely client-side because electricians may work in areas with no cell service.

## Backend Dependency Rule

Core calculator behavior must not depend on:

- Backend APIs.
- Databases.
- External network calls.
- Authentication services.
- Remote storage.

## Phase Timing

The canonical uploaded Task Execution Plan places offline PWA verification in Phase 6.

Supplemental `task execution plan.txt` mentions configuring the Vite PWA plugin in Phase 6. The exact mechanism is therefore TBD until Phase 6 unless `task_plan.md` is updated earlier.

## Phase 0 Rule

Do not add a service worker, PWA plugin, manifest, cache strategy, or build tooling during Phase 0.

## Phase 1 Rule

Do not add PWA dependencies during Phase 1 unless `task_plan.md` is explicitly updated to require them.

## Later Verification Topics

Phase 6 should verify or decide:

- Whether a service worker is required.
- Whether a Vite PWA plugin is required.
- Offline startup behavior.
- Static asset caching.
- Whether reference tables must be embedded locally.
- Whether any runtime network dependency exists.

## TBD / Open Decisions

- PWA plugin choice.
- Cache strategy.
- App manifest requirements.
- Offline validation checklist.
