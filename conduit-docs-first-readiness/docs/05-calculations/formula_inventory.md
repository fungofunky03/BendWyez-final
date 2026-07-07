# Formula Inventory

Formula areas are listed from the Feature Specification and planning files. Status remains unverified unless explicitly marked otherwise.

| Area | Documented Formula / Concept | Status | Open Questions |
|---|---|---|---|
| Multipliers / Cosecant Method | `1 / Sin` is documented for the Multipliers reference modal. | Unverified. | Degree/radian wrapper behavior and table values TBD. |
| Shrink Constants | `Tan(theta / 2) * Opposite` is documented for Shrink Constants tables. | Unverified. | Angle set, units, and numeric constants TBD. |
| Standard Offset | Inputs: Rise, Bend Angle. Outputs: Shrink, Between Bends, Adjacent. | Unverified. | Formula details, angle constraints, and rounding TBD. |
| Rolling Offset | Inputs: Horizontal Change, Vertical Change / Rise. Output: True Offset. | Unverified. | Formula details and any additional outputs TBD. |
| Parallel Offset | Adjusts spacing for side-by-side multi-conduit runs. | Unverified. | Inputs, spacing model, and formulas TBD. |
| Matching Centers / Bends | Alignment calculators for complex runs. | Unverified. | Supported cases and formulas TBD. |
| Three Point Saddle | Inputs: Rise, Bend Angle. Outputs: Adjacent, Between Bends, Adjust. | Unverified. | Formula details, angle constraints, and rounding TBD. |
| Four Point Saddle | Inputs: Rise, Bend Angle. Outputs: Between Bends, Adjacent. | Unverified. | Formula details, angle constraints, and rounding TBD. |
| Kicks | Kick With 90, Parallel Kicks, and Matching Center / Bend Kicks are documented. | Unverified. | Inputs, outputs, and formulas TBD. |
| Standard 90 Degrees | Outputs: Deduct Mark, Stub length, Deduct, Leg length, Total length. | Unverified. | Required inputs, deduct sources, and formulas TBD. |
| Compound 90s | Obstacle avoidance for circle, rectangle, and square obstacles. | Unverified. | Obstacle geometry inputs and formulas TBD. |
| Segmented 90 Degrees | Calculates shot spacing/radius for multi-shot sweeps, with 9-shot example documented. | Unverified. | Supported shot counts, formulas, and radius rules TBD. |
| Deducts | Deduct reference constants are listed in Phase 2 planning. | Unverified. | Values, material/size dependency, and bender dependency TBD. |
| Conduit Dimensions | OD, ID, Wall Thickness, and Weight per 10 ft documented for reference modal. | Unverified. | Numeric values and authoritative source TBD. |

## Known Angle Mentions

- QuickCenter documents common degree marks: 15, 22.5, 30, and 45.
- Supplemental planning text mentions shrink constants for 15, 22.5, 30, 45, and 60 degrees.

Do not hardcode any angle set or numeric constants until verified.
