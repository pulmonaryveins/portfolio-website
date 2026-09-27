import type { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Exported so an interactive element that can't be a plain <div> (e.g.
 * ProjectCard's <button>, Task 06) can still use the exact same base tokens
 * without duplicating the literal class string in two files.
 */
export const surfaceClassName = 'bg-surface border border-border rounded-radius-md';

export type SurfaceProps = ComponentPropsWithRef<'div'>;

/**
 * Extremely lightweight structural base: surface fill, border, and radius
 * only — the three things genuinely shared by every current "card" (project
 * cards, certificate cards, About's skill tiles, Experience's entries).
 *
 * Deliberately does NOT impose hover scale, shadow, click behavior,
 * padding, image ratio, or interactive semantics — those differ by real
 * usage (border width is 1px in some places and 2px in others; fill is
 * `surface` in some and `surface-muted` in others) and the Phase 2 redesign
 * intends to change this shape language anyway, so nothing more than the
 * truly common base is baked in permanently. Callers override via
 * `className` (merged with `cn()`, so e.g. `border-2` correctly wins over
 * the default `border`).
 *
 * Uses the `surface`/`border` color tokens and, since Task 10, the
 * `radius-md` (6px) radius token — a deliberate reduction from the 8px
 * native `rounded-lg` this used through Phase 1, as part of Task 10's
 * global move to a smaller, less SaaS-like radius language.
 *
 * Accepts a `ref` like any other div (React 19 — no `forwardRef` needed),
 * so it can be wrapped with Framer Motion's `motion(Surface)` where a
 * section's card needs animation (see Projects.tsx).
 */
export const Surface = ({ className, ...props }: SurfaceProps) => (
  <div className={cn(surfaceClassName, className)} {...props} />
);
