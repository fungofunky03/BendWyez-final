---
name: testing-conduit-app
description: Run and test the Conduit Bending Calculator (React/Vite/TS) locally. Use when verifying UI or global Top Bar state changes.
---

# Testing the Conduit Bending Calculator

Client-side only app (no backend, no auth, no secrets). React 18 + Vite + TypeScript + Tailwind. App code is at the repo root (`src/`, `index.html`); planning/execution-memory docs live in `conduit-docs-first-readiness/`.

## Run locally

```bash
source ~/.nvm/nvm.sh && nvm use 22   # Node 22 required by the Vite 5 toolchain
npm install
npm run dev                          # serves on :3000, falls back to :3001+ if taken
```

Other useful commands:
- `npm run build` (runs `tsc --noEmit` then `vite build`)
- `npm run typecheck`

No lint/test scripts are configured yet. There is no CI on the repo as of Phase 1.

## Devin Secrets Needed

None. Everything runs locally in the browser.

## Primary test flow — global Top Bar state

The headline Phase 1 feature is persistent global state for the Top Bar (Bender / Material / Trade Size). Verify all three behaviors:

1. **Live update:** pick options in the three Top Bar dropdowns; the context summary in the main area must update immediately (no submit/calculate button). Use distinct, non-first values (e.g. Material=RMC, Trade Size=3/4") so you're not fooled by defaults.
2. **Cross-view persistence:** click Side Drawer groups (Offsets/Saddles/Kicks/90s/Reference). The heading changes but the selections must NOT reset.
3. **Reload persistence (localStorage):** reload the page. Selections must be restored. The active Side Drawer group intentionally resets to "Offsets" — only the Top Bar context is persisted, not the active view.

Storage lives in `localStorage` under key `conduit-calc:topbar:v1` (ids only), e.g.:
```json
{"benderId":"...","materialId":"...","tradeSizeId":"..."}
```
Check it in the browser console if you need direct evidence. A broken implementation would show "Not selected" after a view switch or reload.

## Notes / gotchas

- Option lists are placeholders only (spec.md examples): Bender=MLWK Hand Bender; Material=EMT/RMC/PVC; Trade Size=1/2"/3/4"/1". Full lists and production defaults are still TBD, so don't treat missing options as a bug.
- Native `<select>` dropdowns: click to open, then click the option. The stripped DOM returned with screenshots shows `selectedindex`/`selected` which is reliable evidence of the chosen value.
- If port 3000 is busy, Vite prints the actual port — read the dev-server output rather than assuming 3000.
- The dark palette (black bg, white text, blue active nav) is the quickest signal that Tailwind is wired correctly; an unstyled white page means the CSS pipeline broke.
