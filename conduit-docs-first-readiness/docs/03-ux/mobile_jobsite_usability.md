# Mobile Job-Site Usability

## Design Context

The app is used on active construction sites. It must be legible under glare, usable with dirt on the screen, and understandable through quick glances.

## Requirements

- Mobile-first layout.
- Large, job-site-friendly tap targets.
- Bold, high-contrast typography.
- Minimal cognitive load.
- Clear visual mapping from calculator values to conduit geometry.
- Dynamic updates without Submit or Calculate buttons.
- Persistent calculation context through the global Top Bar.
- Modal reference data that does not erase the current calculator context.

## Glare-Resistant Contrast

The visual system must use deep black/charcoal backgrounds with white/light-gray text. Functional accents must remain limited to blue, green, and gray according to the Constitution.

## Quick-Glance Readability

Values should be placed where they are physically meaningful on the SVG, with dashed leader lines connecting values to the relevant conduit section.

## TBD / Open Decisions

- Exact mobile breakpoints are not documented.
- Minimum tap target dimensions are not documented.
- Landscape orientation behavior is not documented.
- Error messaging and validation display are not documented.
