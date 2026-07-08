// Documentation-level entity shapes from
// conduit-docs-first-readiness/docs/04-architecture/data_models.md.
//
// Only fields documented in the source material are modeled. Fields marked TBD
// in the docs are intentionally optional here and must not be populated with
// invented production values during Phase 1.

export type BenderSelection = {
  id: string
  label: string
  manufacturer?: string
  supportedMaterials?: string[]
  supportedTradeSizes?: string[]
}

export type Material = {
  id: string
  label: string
  dimensionFamily?: string
}

export type TradeSize = {
  id: string
  label: string
  materialId?: string
}

// Global Top Bar state (data_models.md -> GlobalConduitContext).
// Defaults are null: exact production defaults are documented as TBD and must
// not be invented (state_management.md).
export type GlobalConduitContext = {
  benderSelection: BenderSelection | null
  material: Material | null
  tradeSize: TradeSize | null
}
