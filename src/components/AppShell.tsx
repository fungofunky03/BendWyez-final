import { useState } from 'react'
import { TopBar } from './TopBar'
import { SideDrawer, type NavGroup } from './SideDrawer'
import { useTopBar } from '../state/TopBarContext'

function ContextSummary() {
  // Read-only reflection of global Top Bar state, proving it persists across
  // view changes. No calculator logic (Phase 2+).
  const { benderSelection, material, tradeSize } = useTopBar()
  const rows: Array<[string, string]> = [
    ['Bender', benderSelection?.label ?? 'Not selected'],
    ['Material', material?.label ?? 'Not selected'],
    ['Trade Size', tradeSize?.label ?? 'Not selected'],
  ]
  return (
    <dl className="grid max-w-md grid-cols-[auto,1fr] gap-x-6 gap-y-2 rounded-lg border border-surface-border bg-surface-raised p-4">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="text-sm font-semibold uppercase tracking-wide text-straight">{label}</dt>
          <dd className="text-base font-bold text-white">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function AppShell() {
  const [activeGroup, setActiveGroup] = useState<NavGroup>('Offsets')

  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col sm:flex-row">
        <SideDrawer activeGroup={activeGroup} onSelect={setActiveGroup} />
        <main className="flex-1 p-4 sm:p-6">
          <h2 className="mb-1 text-2xl font-bold text-white">{activeGroup}</h2>
          <p className="mb-6 text-sm font-medium text-straight">
            Calculators for this group arrive in a later phase. The global conduit context below
            persists as you switch groups and across reloads.
          </p>
          <ContextSummary />
        </main>
      </div>
      {/* Modal mounting area — reference modals are implemented in a later phase. */}
      <div id="modal-root" />
    </div>
  )
}
