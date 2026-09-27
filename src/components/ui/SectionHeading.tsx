import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  /** Small label rendered above the title (e.g. a section index or
   *  category) — optional and unused by any current section; the slot
   *  exists so a later section-redesign task can opt in with its own copy
   *  without another primitive change. Adding no new content this task,
   *  per §43. */
  eyebrow?: ReactNode;
  /** Escape hatch for a genuine one-off size exception. No current section
   *  needs this — Task 10 unifies the two inconsistent heading scales the
   *  audit found (`text-3xl sm:text-4xl md:text-5xl` vs `text-4xl
   *  sm:text-5xl`) into the one below. */
  headingClassName?: string;
}

/**
 * Section title, extracted from six sections' duplicated markup (Task 01
 * audit). Presentation only — no Framer Motion inside it; the calling
 * section wraps this in its own `motion.div` (Task 03's `fadeUp`/
 * `revealTransition`/`revealViewport`), so different sections stay free to
 * animate it differently later.
 *
 * Task 10 (Phase 2 global foundation) retired the centered-title + black/
 * white underline-bar treatment (explicitly authorized: roadmap §9 — "we
 * are now allowed to change it"). That pairing read as a decorative,
 * landing-page/marketing device; the new treatment is a left-aligned title
 * with an optional small label above it, closer to an editorial section
 * marker than a hero-style centerpiece — no gradient text, nothing
 * animated internally, still just a title.
 */
export const SectionHeading = ({ children, eyebrow, className, headingClassName, ...props }: SectionHeadingProps) => (
  <div className={cn('text-left', className)} {...props}>
    {eyebrow && <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground">{eyebrow}</p>}
    <h2 className={cn('text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground', headingClassName)}>
      {children}
    </h2>
  </div>
);
