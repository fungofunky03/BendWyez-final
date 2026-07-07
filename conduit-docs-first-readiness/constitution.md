# Conduit Bending Calculator - Core Principles

Source: `Copy of Project Constitution.docx`.

## 1. Utilitarian UI: Job-Site First

The app is used on active construction sites. It must be legible under heavy screen glare, with dirt on the screen, and usable with quick glances.

Required visual system:

- Deep black / charcoal backgrounds.
- Stark white / light-gray text.
- Bold, sans-serif typography.
- Highly legible fractional inches and degrees.

Functional accents only:

- Blue: interactive elements and reference lines.
- Green: physically bent portions of conduit only.
- Gray: straight sections of conduit.

## 2. Visual-First Interaction

The app must avoid sterile form-field experiences where possible. Inputs and outputs should be overlaid directly onto graphical SVG diagrams of the bend.

Dashed leader lines must map data points, such as `Between Bends`, exactly to the physical location on the pipe diagram.

## 3. Contextual and Fast

Calculations update dynamically as the user types. There are no Submit or Calculate buttons.

The following state is globally persistent in the Top Bar across all views:

- Bender type.
- Material.
- Trade Size.

Reference data, including Multipliers and Dimensions, must open as modal overlays to preserve calculation state.

## 4. Reliability and Offline Capability

Electricians often work in concrete basements with no cell service. The app logic must execute entirely client-side.
