# Product Overview

## App Purpose

The Conduit Bending Calculator is a visual, client-side calculator for conduit bend work. It is designed for electricians working in active job-site environments.

## Major Calculator Groups

The specification documents these groups:

- Bender Tools.
- Offset Calculators.
- Saddle Calculators.
- Kick Calculators.
- Nineties Calculators.
- Reference Modals.

## Global Navigation

### Top Bar

The Top Bar is persistent and contains dropdowns for:

- Bender Selection.
- Material.
- Trade Size.

This state must remain available globally across views.

### Side Drawer

The Side Drawer groups calculators by logical category:

- Offsets.
- Saddles.
- Kicks.
- 90s.
- Reference.

## Reference Modals

Reference data must open in modal overlays to preserve the current calculation state.

Documented reference modals:

- Multipliers.
- Conduit Dimensions.

## Dynamic Calculation Model

Calculations update dynamically as the user types or changes values.

The app must not use Submit or Calculate buttons for calculator flows.

## Visual Interaction Model

Inputs and outputs should be overlaid directly onto graphical SVG diagrams where possible. Dashed leader lines map data labels to physical locations on the pipe diagram.

## TBD / Open Decisions

- Exact calculator screen order is not documented.
- Routing strategy is not documented.
- Empty states, error states, and validation copy are not documented.
- Exact option sets for Bender Selection, Material, and Trade Size are not fully documented.
