import type { Transition, Variants } from 'framer-motion';

/**
 * Shared Framer Motion configuration for the scroll-reveal animation used
 * across About, Certificates, Design, Experience, and Projects — extracted
 * from five near-identical copies of the same variant objects (Phase 1
 * architecture audit, Task 03).
 *
 * Values match each section's original inline definitions exactly, so
 * migrating a section onto these shouldn't change how anything looks or
 * times. Reduced-motion handling is not duplicated per section either: the
 * whole app is wrapped in `<MotionConfig reducedMotion="user">` (see
 * App.tsx), which automatically defers to the OS's reduced-motion setting
 * for every `motion` component below it, including these.
 *
 * What's intentionally NOT here: Hero's OrbitingIcons (bespoke per-icon
 * float paths — see Hero.tsx's own explicit reduced-motion branch), the
 * hover/tap scale transitions on cards and buttons (plain Tailwind
 * transitions, not Framer Motion), and About's two-column x-slide-in
 * (used exactly twice, in one file — not the audited duplication).
 */

/** How many seconds apart staggered children start animating. */
const STAGGER_CHILDREN = 0.1;

/** Duration used by every section's header reveal (title + underline bar). */
export const REVEAL_DURATION = 0.6;

/**
 * Fade + slide up. Shape only — the five original `itemVariants` objects
 * had no `transition` of their own (timing came from the parent stagger or
 * Framer's defaults), so this doesn't bake one in either. Section headers
 * that explicitly set `transition={{ duration: 0.6 }}` should keep passing
 * `revealTransition` (below) alongside this.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Stagger-grid item entrance: fade + scale (Certificates, Design). */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Stagger-grid parent: reveals children `STAGGER_CHILDREN` seconds apart.
 * Children provide their own hidden/visible shape (`fadeUp` or `scaleIn`)
 * and get no transition override from here, matching the original
 * containerVariants/itemVariants pairs exactly.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_CHILDREN },
  },
};

/** Pass alongside `variants={fadeUp}` wherever the original set an explicit `transition={{ duration: 0.6 }}`. */
export const revealTransition: Transition = { duration: REVEAL_DURATION };

/** Shared scroll trigger: animate once, the first time a section enters the viewport. */
export const revealViewport = { once: true };
