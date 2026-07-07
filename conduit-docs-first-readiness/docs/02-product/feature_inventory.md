# Feature Inventory

Only documented features are listed. Unknown values are marked `TBD` and must not be invented during implementation.

| Feature | Purpose | Known Inputs | Known Outputs | Dependencies | Phase if Known | Open Questions |
|---|---|---|---|---|---|---|
| Global Top Bar | Persistent global context for bender, material, and trade size. | Bender Selection; Material; Trade Size. | Selected Bender, Material, and Trade Size available across views. | App shell and global state. | Phase 1. | Exact production defaults are TBD. Full option lists are TBD. Reload persistence requires source reconciliation. |
| Side Drawer | Logical grouping of bend calculators. | Navigation selection: TBD. | Active calculator/view: TBD. | App shell. | Phase 1 placeholder if needed; full behavior TBD. | Exact labels, ordering, route model, and collapsed behavior are TBD. |
| QuickCenter | Visual map of bender shoe with starting/deduct marks and common degree marks. | Bender selection may affect content; exact inputs TBD. | Deduct marks; common degree marks 15, 22.5, 30, 45 relative to benchmark. | Bender data and SVG visual system. | TBD. | Benchmark definition, shoe geometry, and deduct values are TBD. |
| Multiple Bends | Sequential list builder for a series of bends on one conduit. | Sequential bend list: TBD. | Total distance; marks from start point. | Math engine and SVG visual system. | TBD. | Bend list schema, mark calculation rules, and visual layout are TBD. |
| Standard Offset | Calculates common offset values. | Rise; Bend Angle. | Shrink; Between Bends; Adjacent. | Phase 2 math engine; Phase 3 SVG visual system. | Phase 4. | Exact formulas and formatting rules must be verified. |
| Rolling Offset | Calculates true offset from horizontal and vertical changes. | Horizontal Change; Vertical Change / Rise. | True Offset. | Phase 2 math engine; Phase 3 SVG visual system. | Phase 4. | Formula and any additional outputs are TBD. |
| Parallel Offset | Adjusts spacing for side-by-side multi-conduit runs. | Spacing variables: TBD. | Adjusted spacing / mark outputs: TBD. | Phase 2 math engine; Phase 3 SVG visual system. | Offset group; exact phase TBD. | Input set, output set, and formulas are TBD. |
| Matching Centers / Bends | Alignment calculators for complex runs. | TBD. | TBD. | Phase 2 math engine; Phase 3 SVG visual system. | Offset group; exact phase TBD. | Workflow, formulas, and supported cases are TBD. |
| Three Point Saddle | Calculates values for a three-point saddle. | Rise; Bend Angle. | Adjacent; Between Bends; Adjust. | Prior offset work; Phase 2 math engine; Phase 3 SVG visual system. | Phase 5. | Exact formulas and angle constraints are TBD. |
| Four Point Saddle | Calculates values for a four-point saddle. | Rise; Bend Angle. | Between Bends; Adjacent. | Prior offset work; Phase 2 math engine; Phase 3 SVG visual system. | Phase 5. | Exact formulas and angle constraints are TBD. |
| Kick With 90 Degrees | Calculates kick needed after a 90 degree bend. | TBD. | Kick needed after a 90 degree bend; exact outputs TBD. | Prior offset work; Phase 2 math engine; Phase 3 SVG visual system. | Phase 5. | Inputs, formulas, and SVG mapping are TBD. |
| Parallel Kicks | Supports standard and forward parallel kick calculations. | Spacing and rise variables. | TBD. | Prior kick and parallel run logic. | Phase 5 group; exact phase TBD. | Exact variants, formulas, and outputs are TBD. |
| Matching Center / Bend Kicks | Keeps kicked conduits aligned. | TBD. | Alignment outputs: TBD. | Prior kick logic. | Phase 5 group; exact phase TBD. | Workflow and formulas are TBD. |
| Standard 90 Degrees | Calculates standard 90 degree bend values. | TBD. | Deduct Mark; Stub length; Deduct; Leg length; Total length. | Phase 2 math engine; reference constants; visual system. | Phase 5. | Required inputs and deduct values are TBD. |
| Compound 90s | Obstacle avoidance for circle, rectangle, and square obstacles. | Obstacle geometry: TBD. | TBD. | Phase 2 math engine; visual system. | Phase 5 group; exact phase TBD. | Inputs, formulas, and output labels are TBD. |
| Segmented 90 Degrees | Calculates shot spacing/radius for multi-shot sweeps. | Shot count/radius inputs: TBD; 9-shot example documented. | Shot spacing; radius. | Phase 2 math engine; visual system. | Phase 5 group; exact phase TBD. | Supported shot counts and formulas are TBD. |
| Multipliers Modal | Reference table for bend multipliers and shrink constants. | None for modal open; table parameters TBD. | Cosecant Method table; Shrink Constants table. | Verified reference data. | Phase 6. | Numeric table values and verification source are TBD. |
| Conduit Dimensions Modal | Reference table for conduit dimensions. | None for modal open; material/size filters TBD. | OD; ID; Wall Thickness; Weight per 10 ft for documented material families. | Verified reference data. | Phase 6. | Numeric dimension values and canonical source are TBD. |

## Features Explicitly Not Documented

- Authentication.
- User accounts.
- Backend APIs.
- Remote storage.
- Analytics or telemetry.
- Administrative dashboards.
