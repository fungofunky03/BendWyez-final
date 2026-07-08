import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { BenderSelection, GlobalConduitContext, Material, TradeSize } from './types'
import { BENDER_OPTIONS, MATERIAL_OPTIONS, TRADE_SIZE_OPTIONS } from '../data/topBarOptions'

// Reload persistence (open decision resolved in Phase 1 — see findings.md).
// The canonical plan requires cross-view persistence; the supplemental plan
// requires reload persistence via local storage. Persisting to localStorage
// satisfies both. Only the selected option ids are stored; objects are
// re-resolved from the (placeholder) option lists on hydrate so stale labels
// can never leak in.
const STORAGE_KEY = 'conduit-calc:topbar:v1'

type PersistedSelection = {
  benderId: string | null
  materialId: string | null
  tradeSizeId: string | null
}

export type TopBarContextValue = GlobalConduitContext & {
  setBenderSelection: (value: BenderSelection | null) => void
  setMaterial: (value: Material | null) => void
  setTradeSize: (value: TradeSize | null) => void
  reset: () => void
}

const EMPTY_CONTEXT: GlobalConduitContext = {
  benderSelection: null,
  material: null,
  tradeSize: null,
}

const TopBarContext = createContext<TopBarContextValue | null>(null)

function readPersisted(): GlobalConduitContext {
  if (typeof window === 'undefined') return EMPTY_CONTEXT
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_CONTEXT
    const parsed = JSON.parse(raw) as Partial<PersistedSelection>
    return {
      benderSelection: BENDER_OPTIONS.find((o) => o.id === parsed.benderId) ?? null,
      material: MATERIAL_OPTIONS.find((o) => o.id === parsed.materialId) ?? null,
      tradeSize: TRADE_SIZE_OPTIONS.find((o) => o.id === parsed.tradeSizeId) ?? null,
    }
  } catch {
    return EMPTY_CONTEXT
  }
}

function writePersisted(state: GlobalConduitContext) {
  if (typeof window === 'undefined') return
  try {
    const payload: PersistedSelection = {
      benderId: state.benderSelection?.id ?? null,
      materialId: state.material?.id ?? null,
      tradeSizeId: state.tradeSize?.id ?? null,
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // Persistence is best-effort; private-mode / quota errors are non-fatal.
  }
}

export function TopBarProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GlobalConduitContext>(readPersisted)

  useEffect(() => {
    writePersisted(state)
  }, [state])

  const setBenderSelection = useCallback((benderSelection: BenderSelection | null) => {
    setState((prev) => ({ ...prev, benderSelection }))
  }, [])

  const setMaterial = useCallback((material: Material | null) => {
    setState((prev) => ({ ...prev, material }))
  }, [])

  const setTradeSize = useCallback((tradeSize: TradeSize | null) => {
    setState((prev) => ({ ...prev, tradeSize }))
  }, [])

  const reset = useCallback(() => setState(EMPTY_CONTEXT), [])

  const value = useMemo<TopBarContextValue>(
    () => ({ ...state, setBenderSelection, setMaterial, setTradeSize, reset }),
    [state, setBenderSelection, setMaterial, setTradeSize, reset],
  )

  return <TopBarContext.Provider value={value}>{children}</TopBarContext.Provider>
}

export function useTopBar(): TopBarContextValue {
  const ctx = useContext(TopBarContext)
  if (!ctx) {
    throw new Error('useTopBar must be used within a TopBarProvider')
  }
  return ctx
}
