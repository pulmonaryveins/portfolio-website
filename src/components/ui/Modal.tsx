import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { IconButton } from '@/components/ui/IconButton';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** id of the element that labels this dialog — normally the feature
   *  modal's own <h2> title (all three current modals always have one). */
  ariaLabelledBy?: string;
  /** Fallback label for the rare case there's no visible title to reference. */
  ariaLabel?: string;
  /** Accessible name for the close button. Feature modals should pass
   *  something specific ("Close project details") rather than relying on
   *  a generic default, per Task 05 §12. */
  closeLabel: string;
  /** Extra classes for the panel. Width/radius/border legitimately differ
   *  per feature modal (Task 01 audit found this pre-existing, not
   *  accidental drift), so the generic shell only supplies what's
   *  genuinely shared: position, base fill, shadow, overflow clipping. */
  className?: string;
}

// Shared modal shell (Phase 1, Task 05) for ProjectModal / DesignModal /
// CertificateModal, which the architecture audit found ~85% duplicated
// across backdrop, panel, close button, Escape handling, and body scroll
// locking. Owns only generic dialog infrastructure — no Project/DesignWork/
// Certificate concept appears anywhere in this file.
//
// Backdrop opacity (0.8) and the panel entrance (opacity+scale, 0.2s) are
// standardized here to the majority of the three modals' original values
// (Certificate previously used 0.9 opacity and no `y` offset; Design used a
// 0.5s spring) — Task 05 §22 asks for one restrained shared transition
// based primarily on current behavior, not a new one.
//
// Task 10 (Phase 2 global foundation): panel fill, border, and close-button
// hover now read from the semantic color tokens (`bg-surface`, `border-
// border`, `hover:bg-muted`) instead of literal grays — an exact visual
// match, not a redesign. The backdrop's `bg-black/80` and the close
// button's `bg-white/90 dark:bg-gray-950/90` stay literal: they're
// semi-transparent, and this token system's colors are plain hex custom
// properties rather than the R-G-B-triplet format Tailwind's opacity
// modifier (`bg-x/90`) needs to composite alpha, so `bg-surface/90` would
// silently not work as intended. Radius/border-width stay feature-owned
// (each modal's own `className`) — untouched, per §22.
export const Modal = ({ open, onClose, children, ariaLabelledBy, ariaLabel, closeLabel, className }: ModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Body scroll lock. Captures whatever `overflow` value was already set
  // (rather than assuming it was empty/'unset') and restores exactly that
  // — the two previous implementations both hardcoded 'unset' on cleanup.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Escape-to-close — one listener for all three modals, only while open.
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // Focus on open (into the close button — none of the three modals moved
  // focus into the dialog before; this was a real audit-flagged gap) and
  // restoration on close, back to whatever triggered the open.
  //
  // Restoration runs from this effect's cleanup rather than an `else`
  // branch — deliberately, not just style. DesignModal derives `open` from
  // `!!design` and nulls `design` the instant it closes, which unmounts
  // Modal directly instead of first re-rendering it with `open={false}`;
  // an `else` branch would never run in that case. A cleanup function
  // fires either way (prop change or unmount), so restoration is correct
  // for both that pattern and ProjectModal/CertificateModal's (which keep
  // `open` and the item state separate, so Modal does get an
  // `open={false}` render before its parent eventually unmounts it).
  useEffect(() => {
    if (!open) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => {
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [open]);

  // Focus trap: Tab/Shift+Tab cycle within the panel's focusable elements
  // rather than escaping to the page behind the dialog.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !panel.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !panel.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener('keydown', handleKeyDown);
    return () => panel.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        // Single full-viewport layer: the backdrop IS the click-to-close
        // target and the scroll/centering container, so there's no
        // transparent sibling sitting on top of it swallowing clicks (the
        // previous ProjectModal/CertificateModal had a separate z-[101]
        // wrapper doing exactly that, which meant clicking the dimmed
        // backdrop silently did nothing in those two — a real bug, fixed
        // here by construction rather than intentionally).
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="min-h-screen px-4 py-8 sm:py-16 flex items-center justify-center">
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={ariaLabelledBy}
              aria-label={ariaLabel}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn('relative w-full bg-surface shadow-2xl overflow-hidden', className)}
              onClick={(event) => event.stopPropagation()}
            >
              <IconButton
                ref={closeButtonRef}
                onClick={onClose}
                aria-label={closeLabel}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border border-border hover:bg-muted"
              >
                <X size={20} />
              </IconButton>
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
