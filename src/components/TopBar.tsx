import { useTopBar } from '../state/TopBarContext'
import { BENDER_OPTIONS, MATERIAL_OPTIONS, TRADE_SIZE_OPTIONS } from '../data/topBarOptions'

type Option = { id: string; label: string }

function Dropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string | null
  options: Option[]
  onChange: (id: string | null) => void
}) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-wide text-straight">{label}</span>
      <select
        className="w-full rounded-md border border-surface-border bg-surface-raised px-3 py-2 text-base font-semibold text-white focus-visible:border-interactive"
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)}
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export function TopBar() {
  const { benderSelection, material, tradeSize, setBenderSelection, setMaterial, setTradeSize } =
    useTopBar()

  return (
    <header className="sticky top-0 z-20 border-b border-surface-border bg-surface/95 backdrop-blur">
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-end">
        <div className="shrink-0 pr-2">
          <h1 className="text-lg font-bold leading-tight text-white">Conduit Bending</h1>
          <p className="text-xs font-medium text-straight">Job-site calculator</p>
        </div>
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <Dropdown
            label="Bender"
            value={benderSelection?.id ?? null}
            options={BENDER_OPTIONS}
            onChange={(id) =>
              setBenderSelection(BENDER_OPTIONS.find((o) => o.id === id) ?? null)
            }
          />
          <Dropdown
            label="Material"
            value={material?.id ?? null}
            options={MATERIAL_OPTIONS}
            onChange={(id) => setMaterial(MATERIAL_OPTIONS.find((o) => o.id === id) ?? null)}
          />
          <Dropdown
            label="Trade Size"
            value={tradeSize?.id ?? null}
            options={TRADE_SIZE_OPTIONS}
            onChange={(id) => setTradeSize(TRADE_SIZE_OPTIONS.find((o) => o.id === id) ?? null)}
          />
        </div>
      </div>
    </header>
  )
}
