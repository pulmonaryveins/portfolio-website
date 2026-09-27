import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary';

const variantClass: Record<ButtonVariant, string> = {
  primary: 'bg-interactive text-interactive-foreground hover:bg-gray-800 dark:hover:bg-gray-200',
  secondary: 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700',
};

const focusVisibleClass =
  'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/**
 * Real `<button>` semantics only — link-styled-as-button usages (Hero's
 * "Get in Touch"/"Download CV" anchors) are deliberately kept local rather
 * than forced through this, per Task 04's guidance against invalid nested
 * interactive markup or unnecessary polymorphic (`asChild`) complexity.
 *
 * The two variants correspond to the only two button color treatments that
 * actually exist in the app today (Design's Show More / Show Less) — no
 * speculative variants.
 *
 * Task 10 (Phase 2 global foundation): dropped the pill shape (`rounded-
 * full`) for the small `radius-sm` token and the hover/tap scale transform,
 * per the new restrained/structured direction — a button no longer needs
 * to grow to signal interactivity, its own color change already does that.
 * `primary`'s resting color now reads from the `interactive`/`interactive-
 * foreground` tokens (exact match for the literal black/white it replaced);
 * `secondary`'s gray-200/800 didn't have a precise token match (`muted` is
 * gray-100/800), so it stays literal for now rather than force a close-but-
 * not-exact swap.
 */
export const Button = ({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) => (
  <button
    type={type}
    className={cn(
      'px-8 py-3 rounded-radius-sm font-medium transition-colors',
      focusVisibleClass,
      variantClass[variant],
      className
    )}
    {...props}
  />
);
