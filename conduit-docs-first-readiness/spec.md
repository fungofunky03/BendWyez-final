# Feature Specification: Conduit Bending Calculator

Source: `Feature Specification`.

## 1. Global Navigation and State

### Top Bar: Persistent

Dropdowns for:

- Bender Selection, for example `MLWK Hand Bender`.
- Material, for example `EMT`, `RMC`, `PVC`.
- Trade Size, for example `1/2"`, `3/4"`, `1"`.

### Side Drawer

Logical grouping of bend calculators:

- Offsets.
- Saddles.
- Kicks.
- 90s.
- Reference.

## 2. Bender Tools

### QuickCenter

Visual map of the bender shoe. Shows deduct marks for starting points and common degree marks, including `15`, `22.5`, `30`, and `45`, relative to benchmark.

### Multiple Bends

Sequential list builder that plots a series of bends on a single conduit, calculating total distance and marks from the start point.

## 3. Offset Calculators

### Standard Offset

Inputs:

- Rise.
- Bend Angle.

Outputs:

- Shrink.
- Between Bends.
- Adjacent.

### Rolling Offset

Inputs:

- Horizontal Change.
- Vertical Change / Rise.

Output:

- True Offset.

### Parallel Offset

Adjusts spacing for side-by-side multi-conduit runs.

### Matching Centers / Bends

Alignment calculators for complex runs.

## 4. Saddle Calculators

### Three Point Saddle

Inputs:

- Rise.
- Bend Angle.

Outputs:

- Adjacent.
- Between Bends.
- Adjust.

### Four Point Saddle

Inputs:

- Rise.
- Bend Angle.

Outputs:

- Between Bends.
- Adjacent.

## 5. Kick Calculators

### Kick With 90 Degrees

Calculates kick needed after a 90 degree bend.

### Parallel Kick: Standard and Forward

Spacing and rise variables for parallel runs.

### Matching Center / Bend Kicks

Keeps kicked conduits aligned.

## 6. Nineties Calculators

### Standard 90 Degrees

Outputs:

- Deduct Mark.
- Stub length.
- Deduct.
- Leg length.
- Total length.

### Compound 90s

Obstacle avoidance for:

- Circle.
- Rectangle.
- Square.

### Segmented 90 Degrees

Calculates shot spacing/radius for multi-shot sweeps, for example a 9-shot sweep.

## 7. Reference Modals

### Multipliers

Tables for:

- Cosecant Method: `1 / Sin`.
- Shrink Constants: `Tan(theta / 2) * Opposite`.

### Conduit Dimensions

Tables for:

- OD.
- ID.
- Wall Thickness.
- Weight per 10 ft.

Material families documented for the dimensions modal:

- EMT.
- RMC.
- IMC.
- PVC: Sch 20 / 40 / 80.
- AL.
