import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Generic small label/tag. Structurally opinionated only about the things
 * genuinely shared by "a badge" as a concept — compact type and a small
 * default radius (Task 10 §21) — and still deliberately silent on color/
 * fill/border/padding, since the app has at least three distinct real chip
 * treatments (project tech tags, project category badge, design tool
 * tags), plus one deliberately bare text-only usage ("+2 more") with no
 * background at all. Every current usage already fully specifies its own
 * text size, padding, background, and radius, so this default is inert
 * everywhere it's used today (`cn()`/tailwind-merge lets a call site's own
 * classes win) and only matters for a future badge that doesn't set
 * everything itself.
 *
 * A non-interactive `<span>` is never focusable, so nothing extra is
 * needed to satisfy "don't make labels focusable" (Task 04 §13).
 *
 * Knows nothing about Project/DesignWork/Certificate — just renders
 * whatever children it's given.
 */
export const Badge = ({ className, ...props }: BadgeProps) => (
  <span className={cn('inline-flex items-center rounded-radius-sm px-2 py-0.5 text-xs font-medium', className)} {...props} />
);
