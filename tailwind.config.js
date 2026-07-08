/** @type {import('tailwindcss').Config} */
// Job-site-first dark visual system (constitution.md / .cursorrules).
// Strict color semantics:
//   interactive = blue  -> interactive elements AND reference/leader lines
//   bent        = green -> physically bent conduit ONLY (used from Phase 3+)
//   straight    = gray  -> straight conduit sections (used from Phase 3+)
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep black / charcoal surfaces
        surface: {
          DEFAULT: '#0a0a0a',
          raised: '#161616',
          overlay: '#1f1f1f',
          border: '#2a2a2a',
        },
        // Functional accents only
        interactive: {
          DEFAULT: '#3b82f6',
          hover: '#60a5fa',
        },
        bent: '#22c55e',
        straight: '#9ca3af',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
