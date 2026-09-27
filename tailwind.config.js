/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // Semantic design tokens. Established as infrastructure in Phase 1
      // Task 02, now the Phase 2 (Task 10) global visual foundation — the
      // values in src/index.css are the actual design decision; this just
      // exposes them as ordinary Tailwind color utilities (`bg-surface`,
      // `text-muted-foreground`, ...) that automatically follow the active
      // theme via CSS custom properties (:root for light, .dark for dark).
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',

        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',

        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',

        interactive: 'var(--interactive)',
        'interactive-foreground': 'var(--interactive-foreground)',
      },

      // Radius tokens. Task 02 reserved these names but left the values as
      // placeholders nothing consumed; Task 10 sets the actual Phase 2
      // values — deliberately small and restrained (the audit found the
      // old site relying on Tailwind's native rounded-full/rounded-lg/
      // rounded-2xl almost everywhere, reading as generic and SaaS-like).
      // Still namespaced as `radius-*` rather than overriding Tailwind's
      // own sm/md/lg scale, so components opt in explicitly instead of
      // every existing `rounded-lg` etc. silently changing.
      //   radius-sm   4px  — small controls: buttons, badges
      //   radius-md   6px  — structural surfaces: cards, panels, modals
      //   radius-lg   8px  — reserved for an occasional larger treatment,
      //                      not a default
      //   radius-full      — pills, reserved for genuinely pill-appropriate
      //                      UI (tags, status) — not buttons/nav/containers
      borderRadius: {
        'radius-sm': 'var(--radius-sm)',
        'radius-md': 'var(--radius-md)',
        'radius-lg': 'var(--radius-lg)',
        'radius-full': 'var(--radius-full)',
      },

      // Semantic container widths. Not theme-dependent (same in light and
      // dark), so plain values rather than CSS variables. Consumed by the
      // `Container` primitive (Phase 1, Task 04).
      //
      // `container-standard` was added in Task 04 to cover max-w-6xl
      // (Certificates, Projects) — Task 02 only anticipated the 4xl/7xl
      // widths and missed this real, already-in-use third width.
      maxWidth: {
        'container-content': '56rem', // ~max-w-4xl — text-centric sections (Experience, Contact)
        'container-standard': '72rem', // ~max-w-6xl — Certificates, Projects
        'container-wide': '80rem', // ~max-w-7xl — grid-heavy sections (About, Design)
        'container-text': '65ch', // long-form prose blocks, if ever isolated from a grid
      },
    },
  },
  plugins: [],
}
