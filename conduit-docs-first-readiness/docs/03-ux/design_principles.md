# UX Design Principles

## Job-Site-First Utility

The app is built for electricians on active construction sites. It must be readable under heavy glare, usable with dirt on the screen, and understandable at a quick glance.

## High Contrast

Required palette:

- Backgrounds: deep black / charcoal.
- Text: white / light gray.
- Blue: interactive elements and reference lines.
- Green: physically bent conduit portions only.
- Gray: straight conduit sections.

Green must not be used as a general accent, success color, button color, status badge, or decorative highlight.

## Typography

Typography must be bold, sans-serif, and highly legible for fractional inches and degrees.

## Visual-First Interaction

Inputs and outputs should be overlaid directly on graphical SVG diagrams where possible. The interface should avoid disconnected, sterile calculator forms when a visual overlay can represent the bend more clearly.

## SVG Overlays and Leader Lines

Dashed leader lines must map data points, such as `Between Bends`, exactly to their physical location on the pipe diagram.

Blue is the documented color for interactive elements and reference/leader lines.

## Dynamic Calculation Model

Calculations update dynamically as the user types or changes values.

Do not add Submit or Calculate buttons.

## Context Preservation

Bender Selection, Material, and Trade Size remain globally persistent in the Top Bar across all views.

Reference modals must preserve calculation state while open.

## TBD / Open Decisions

- Exact typography scale is not documented.
- Exact spacing, breakpoint, and component-size tokens are not documented.
- Exact SVG coordinate systems are not documented.
