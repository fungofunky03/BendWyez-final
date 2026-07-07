# Business Vision

## Purpose

The Conduit Bending Calculator helps electricians calculate and visualize conduit bends in the field.

The app is intended to support bend families documented in the project specification, including offsets, saddles, kicks, 90 degree bends, bender tools, and reference tables.

## Why Electricians Need It

The documented use case is active construction work where speed, reliability, and readability matter. Electricians need bend information that can be understood quickly and mapped directly to the physical conduit.

The app must therefore emphasize:

- Visual-first bend diagrams.
- Direct input/output overlays on SVGs where possible.
- Dashed leader lines that map results to the real conduit geometry.
- Dynamic updates as values change.
- No Submit or Calculate buttons.

## Field and Job-Site Context

The project Constitution states that the app is used on active construction sites and must remain legible under heavy screen glare, with dirt on the screen, and during quick glances.

The interface must prioritize job-site utility over decorative polish.

## Reliability and Offline Requirement

Electricians may work in concrete basements with no cell service. The app logic must execute entirely client-side and must not depend on backend or network access for core calculations.

## TBD / Open Decisions

- Exact business model is not documented.
- Paid tiers, subscriptions, account systems, analytics, and organizational administration are not documented and are out of scope.
- Distribution channel is not documented.
