# Component Rules

This document describes expected behavior only. It does not define implementation code.

## Top Bar Dropdowns

- Must be persistent across all views.
- Must expose Bender Selection, Material, and Trade Size.
- Must update global state immediately when changed.
- Must use documented option values only.
- Must not invent production defaults.
- Must remain readable and usable in a mobile job-site context.

Open questions:

- Exact option lists are TBD.
- Exact default selections are TBD.
- Reload persistence behavior requires source reconciliation.

## Side Drawer

- Must group calculators logically by Offsets, Saddles, Kicks, 90s, and Reference.
- Must support quick navigation between calculator groups.
- Must not discard global Top Bar state.

Open questions:

- Exact navigation order is TBD.
- Route model is TBD.
- Collapsed/expanded behavior is TBD.

## Modal Overlays

- Reference data must be shown in modal overlays.
- Documented modals: Multipliers and Conduit Dimensions.
- Modals must preserve the active calculation state behind them.
- Modals must use the required dark, high-contrast visual system.

Open questions:

- Exact modal sizing and close behavior are TBD.
- Table filtering and search behavior are TBD.

## SVG Input / Output Overlays

- Calculator inputs and outputs should be overlaid directly onto SVG bend diagrams where possible.
- Overlays must correspond to physical locations on the pipe diagram.
- Dashed leader lines must map labels and values to the conduit geometry.
- Blue is used for interactive/reference overlays and leader lines.

Open questions:

- Exact SVG dimensions and coordinate systems are TBD.
- Exact overlay placement rules are TBD.

## Numeric Inputs

- Numeric values must update calculations dynamically on change.
- Calculator flows must not require Submit or Calculate buttons.
- Inputs should be shown in the visual overlay model where possible.
- Inches and degrees must be legible and unambiguous.

Open questions:

- Validation rules are TBD.
- Empty, negative, zero, and invalid numeric handling are TBD.
- Fractional input parsing is TBD.

## Result Labels

- Result labels must be visually connected to the relevant conduit location where possible.
- Labels must be high-contrast and legible at quick glance.
- Labels must not imply verified formulas until formulas are implemented and tested.

Open questions:

- Exact unit formatting is TBD.
- Exact label positions are TBD.

## Leader Lines

- Leader lines are dashed reference lines.
- Leader lines map data points to the exact physical location on the pipe diagram.
- Blue is the documented color for reference lines.

Open questions:

- Leader-line dash pattern is TBD.
- Collision/overlap behavior is TBD.
