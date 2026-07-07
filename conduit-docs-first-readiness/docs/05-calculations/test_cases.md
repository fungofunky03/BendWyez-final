# Test Cases

This is a placeholder test-case matrix. Do not invent numerical expected values until formulas and constants are verified.

## Math Utility Tests

| ID | Area | Inputs | Expected Result | Status |
|---|---|---|---|---|
| MATH-001 | Degree-to-radian conversion | TBD | TBD | Pending formula/helper implementation. |
| MATH-002 | Degree-based sin wrapper | TBD | TBD | Pending formula/helper implementation. |
| MATH-003 | Degree-based tan wrapper | TBD | TBD | Pending formula/helper implementation. |
| MATH-004 | Floating-point tolerance | TBD | TBD | Pending decision. |

## Fractional Inch Conversion Tests

| ID | Area | Inputs | Expected Result | Status |
|---|---|---|---|---|
| FRAC-001 | Decimal to nearest 1/16 inch | TBD | TBD | Pending rounding rules. |
| FRAC-002 | Whole inch plus fractional remainder | TBD | TBD | Pending formatting rules. |
| FRAC-003 | Zero value | TBD | TBD | Pending formatting rules. |
| FRAC-004 | Negative value handling | TBD | TBD | Pending validation rules. |
| FRAC-005 | Optional nearest 1/8 inch behavior | TBD | TBD | Open decision. |

## Calculator Formula Tests

| ID | Calculator | Inputs | Expected Result | Status |
|---|---|---|---|---|
| CALC-OFFSET-001 | Standard Offset | Rise; Bend Angle | Shrink; Between Bends; Adjacent | Pending verified formula. |
| CALC-ROLLING-001 | Rolling Offset | Horizontal Change; Vertical Change / Rise | True Offset | Pending verified formula. |
| CALC-SADDLE3-001 | Three Point Saddle | Rise; Bend Angle | Adjacent; Between Bends; Adjust | Pending verified formula. |
| CALC-SADDLE4-001 | Four Point Saddle | Rise; Bend Angle | Between Bends; Adjacent | Pending verified formula. |
| CALC-KICK90-001 | Kick With 90 | TBD | TBD | Pending workflow definition. |
| CALC-90-001 | Standard 90 | TBD | Deduct Mark; Stub length; Deduct; Leg length; Total length | Pending verified formula. |
| CALC-SEG90-001 | Segmented 90 | TBD | Shot spacing; radius | Pending verified formula. |

## Edge Cases

| ID | Area | Inputs | Expected Result | Status |
|---|---|---|---|---|
| EDGE-001 | Empty input | TBD | TBD | Pending validation design. |
| EDGE-002 | Non-numeric input | TBD | TBD | Pending validation design. |
| EDGE-003 | Zero rise | TBD | TBD | Pending formula and validation design. |
| EDGE-004 | Negative values | TBD | TBD | Pending validation design. |
| EDGE-005 | Unsupported bend angle | TBD | TBD | Pending accepted angle list. |
| EDGE-006 | Unsupported material or trade size | TBD | TBD | Pending option lists. |

## Visual / SVG Output Validation

| ID | Area | Inputs | Expected Result | Status |
|---|---|---|---|---|
| SVG-001 | Bent portions | TBD | Bent portions shown in green only. | Pending SVG implementation. |
| SVG-002 | Straight portions | TBD | Straight portions shown in gray. | Pending SVG implementation. |
| SVG-003 | Reference leader lines | TBD | Dashed blue lines map labels to physical positions. | Pending SVG implementation. |
| SVG-004 | Overlay positioning | TBD | Inputs/outputs overlaid at meaningful geometry points. | Pending SVG implementation. |
| SVG-005 | Mobile readability | TBD | Labels remain legible on mobile job-site layout. | Pending design validation. |
