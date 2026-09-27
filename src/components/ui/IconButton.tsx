import type { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'aria-label'> {
  /** Required, not optional — an icon-only control has no accessible name
   *  without one (Task 04 §13). */
  'aria-label': string;
}

/**
 * Presentational shell for an icon-only control. Accepts a `ref` like any
 * other button (React 19 — no `forwardRef` needed), which Task 05's Modal
 * uses to send initial focus to the close button it renders.
 *
 * Task 10 (Phase 2 global foundation): dropped the default hover/tap scale
 * transform — every current call site (theme toggle, Modal's close button,
 * ImageGallery's nav/dots) already supplies its own hover background-color
 * change, so the scale was pure extra motion, not the only feedback
 * mechanism; removing it matches the new direction's restraint (Task 10
 * §20 calls out "excessive hover scale" specifically). Circular shape
 * (`rounded-full`) is kept — a round icon-only control isn't the "pill"
 * problem the roadmap means to fix (that's elongated text-pills used for
 * buttons/nav/tags), and every current usage (close ✕, prev/next arrows,
 * gallery dots) is a standard, non-decorative pattern for exactly this
 * shape. Added a shared `focus-visible` treatment using the `foreground`
 * token, matching `Button`'s.
 */
export const IconButton = ({ className, type = 'button', ...props }: IconButtonProps) => (
  <button
    type={type}
    className={cn(
      'inline-flex items-center justify-center rounded-full transition-colors',
      'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground',
      className
    )}
    {...props}
  />
);
