import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

/**
 * Phase 1, Task 08. Previously this component withheld `children` from the
 * tree entirely (`{!isLoading && children}`) until the timer fired — every
 * visit paid a flat 1.5s delay before the real page existed in the DOM at
 * all, regardless of how fast anything actually loaded (Task 01 audit
 * finding). Now the app mounts immediately; only the cosmetic overlay above
 * it is conditional. The 1.5s timer no longer gates mounting — it only
 * controls how long the intro overlay stays visible before it exits.
 *
 * While the overlay covers the page, the app underneath is made `inert`:
 * unfocusable and unclickable (and hidden from assistive tech) without
 * unmounting it, so a keyboard user can't tab into covered controls and a
 * mouse/touch user can't click through the overlay. `inert` is removed the
 * instant loading finishes, with no extra code — it's a plain boolean prop.
 */
export const LoadingScreen = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div inert={isLoading}>{children}</div>

      {/*
        Purely decorative — nothing is actually being loaded (there's no
        real async work this overlay is reporting on), so it's marked
        aria-hidden rather than given a status role that would announce a
        load state that isn't real. Phase 2 will decide whether this intro
        overlay stays at all.
      */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 border-t-black dark:border-t-white rounded-full mx-auto mb-4"
              />
              <p className="text-xl font-medium">Loading...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
