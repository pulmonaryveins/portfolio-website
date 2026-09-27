import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type ContainerSize = 'content' | 'standard' | 'wide' | 'text';

const sizeClass: Record<ContainerSize, string> = {
  content: 'max-w-container-content',
  standard: 'max-w-container-standard',
  wide: 'max-w-container-wide',
  text: 'max-w-container-text',
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Semantic max-width, from the Task 02 container tokens. Required —
   *  there's no safe default across sections that currently use three
   *  different widths (see tailwind.config.js). */
  size: ContainerSize;
}

/**
 * Centers content at a semantic max-width and applies the page's
 * responsive horizontal padding. Content-agnostic: no vertical spacing,
 * no background, no typography, no animation — those belong to `Section`,
 * the section itself, or a `motion.div` wrapping this.
 */
export const Container = ({ size, className, children, ...props }: ContainerProps) => (
  <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizeClass[size], className)} {...props}>
    {children}
  </div>
);
