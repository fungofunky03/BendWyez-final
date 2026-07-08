// Side Drawer navigation groups (spec.md / component_rules.md).
// Route model and navigation order are documented as TBD, so these are simple
// in-app selections that must not discard global Top Bar state. No calculator
// views are implemented in Phase 1.
export const NAV_GROUPS = ['Offsets', 'Saddles', 'Kicks', '90s', 'Reference'] as const
export type NavGroup = (typeof NAV_GROUPS)[number]

export function SideDrawer({
  activeGroup,
  onSelect,
}: {
  activeGroup: NavGroup
  onSelect: (group: NavGroup) => void
}) {
  return (
    <nav
      aria-label="Calculator groups"
      className="w-full shrink-0 border-b border-surface-border bg-surface-raised sm:w-56 sm:border-b-0 sm:border-r"
    >
      <ul className="flex gap-1 overflow-x-auto p-2 sm:flex-col sm:overflow-visible">
        {NAV_GROUPS.map((group) => {
          const isActive = group === activeGroup
          return (
            <li key={group} className="shrink-0 sm:shrink">
              <button
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onSelect(group)}
                className={
                  'w-full rounded-md px-4 py-2 text-left text-base font-semibold transition-colors ' +
                  (isActive
                    ? 'bg-interactive text-white'
                    : 'text-straight hover:bg-surface-overlay hover:text-white')
                }
              >
                {group}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
