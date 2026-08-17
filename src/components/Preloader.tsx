import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SEEN_KEY = 'wak:intro-seen';

/**
 * Cortina de entrada: o wordmark aparece sob máscara e a cortina sobe.
 * Roda uma vez por sessão para não atrapalhar a navegação.
 */
export default function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SEEN_KEY) !== '1';
  });

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = 'hidden';
    const hold = reduced ? 320 : 1500;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SEEN_KEY, '1');
      setVisible(false);
    }, hold);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [visible, reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: reduced ? 0.25 : 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <span className="preloader-mask">
            <motion.span
              className="preloader-word"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: reduced ? 0.2 : 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              GABRIEL WAK
            </motion.span>
          </span>
          <motion.span
            className="preloader-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduced ? 0.2 : 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
