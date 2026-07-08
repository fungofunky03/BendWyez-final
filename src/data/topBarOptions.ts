import type { BenderSelection, Material, TradeSize } from '../state/types'

// PLACEHOLDER OPTION LISTS — NOT PRODUCTION DATA.
//
// These lists contain ONLY the example values explicitly documented in the
// source material (spec.md / state_management.md). They are marked as
// placeholders because the full option lists are documented as TBD:
//   - state_management.md: "Full option lists are TBD."
//   - component_rules.md:  "Exact option lists are TBD."
//
// Do NOT invent additional benders, materials, or trade sizes here. Additional
// values require verified source material and must be recorded in findings.md.

export const BENDER_OPTIONS: BenderSelection[] = [
  // spec.md documents "MLWK Hand Bender" as an example only.
  { id: 'placeholder-mlwk-hand-bender', label: 'MLWK Hand Bender' },
]

export const MATERIAL_OPTIONS: Material[] = [
  // spec.md documents EMT, RMC, PVC as examples for Top Bar material.
  { id: 'placeholder-emt', label: 'EMT' },
  { id: 'placeholder-rmc', label: 'RMC' },
  { id: 'placeholder-pvc', label: 'PVC' },
]

export const TRADE_SIZE_OPTIONS: TradeSize[] = [
  // spec.md documents 1/2", 3/4", 1" as examples only.
  { id: 'placeholder-half', label: '1/2"' },
  { id: 'placeholder-three-quarter', label: '3/4"' },
  { id: 'placeholder-one', label: '1"' },
]
