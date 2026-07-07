# Data Models

These are documentation-level TypeScript-like shapes for known entities only. They are not implementation code and must not be copied into production without validation.

## Bender Selection

```ts
type BenderSelection = {
  id: string; // TBD
  label: string; // Example documented: "MLWK Hand Bender"
  manufacturer?: string; // TBD
  supportedMaterials?: string[]; // TBD
  supportedTradeSizes?: string[]; // TBD
};
```

## Material

```ts
type Material = {
  id: string; // TBD
  label: string; // Documented examples: "EMT", "RMC", "PVC"
  dimensionFamily?: string; // TBD; reference modal also documents IMC, PVC Sch 20/40/80, and AL
};
```

## Trade Size

```ts
type TradeSize = {
  id: string; // TBD
  label: string; // Documented examples: '1/2"', '3/4"', '1"'
  materialId?: string; // TBD
};
```

## Global Top Bar State

```ts
type GlobalConduitContext = {
  benderSelection: BenderSelection | null;
  material: Material | null;
  tradeSize: TradeSize | null;
};
```

## Calculator Input / Output Payloads

```ts
type CalculatorInputPayload = {
  calculatorId: string;
  values: Record<string, number | string | null>; // Exact fields TBD per calculator
};

type CalculatorOutputPayload = {
  calculatorId: string;
  values: Record<string, number | string | null>; // Exact fields TBD per calculator
  formattedValues?: Record<string, string>; // Fractional inch formatting rules TBD
};
```

Known calculator-specific field examples:

- Standard Offset input fields: Rise, Bend Angle.
- Standard Offset output fields: Shrink, Between Bends, Adjacent.
- Rolling Offset input fields: Horizontal Change, Vertical Change / Rise.
- Rolling Offset output fields: True Offset.
- Three Point Saddle input fields: Rise, Bend Angle.
- Three Point Saddle output fields: Adjacent, Between Bends, Adjust.
- Four Point Saddle input fields: Rise, Bend Angle.
- Four Point Saddle output fields: Between Bends, Adjacent.
- Standard 90 output fields: Deduct Mark, Stub length, Deduct, Leg length, Total length.

## Reference Data Tables

```ts
type MultiplierReferenceRow = {
  angleDegrees: number; // Verified values TBD
  cosecantMultiplier?: number; // Formula documented as 1 / Sin, verification required
  shrinkConstant?: number; // Formula documented as Tan(theta / 2) * Opposite, verification required
};

type ConduitDimensionRow = {
  materialFamily: string; // EMT, RMC, IMC, PVC Sch 20/40/80, AL documented for dimensions modal
  tradeSize: string; // TBD
  outerDiameter?: number; // TBD
  innerDiameter?: number; // TBD
  wallThickness?: number; // TBD
  weightPer10Ft?: number; // TBD
};
```

## TBD / Open Decisions

- Entity IDs and labels.
- Full enumerations.
- Unit conventions.
- Validation/error structures.
- Static reference data source.
- Formatting models for fractional inches.
