import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

/**
 * Thin, typed wrapper around a page-level `<section>`. Deliberately does
 * NOT own vertical spacing, background, container width, or motion — each
 * section still supplies its own `className` for those (they genuinely
 * differ per section: min-h-screen usage and py-* values vary, and forcing
 * one shared default would flatten real layout differences the audit said
 * to preserve). What this centralizes is the "this is a top-level section"
 * shape itself, and gives a single place to add shared section-level
 * behavior later (e.g. scroll-margin for anchor offset under the fixed
 * dock) without touching every section file again.
 */
export const Section = ({ className, children, ...props }: SectionProps) => (
  <section className={cn(className)} {...props}>
    {children}
  </section>
);
