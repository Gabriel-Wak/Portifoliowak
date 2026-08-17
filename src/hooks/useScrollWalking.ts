import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export function useScrollWalking(enabled: boolean) {
  const { scrollY } = useScroll();
  const [walking, setWalking] = useState(false);
  const timer = useRef<number>();

  useMotionValueEvent(scrollY, 'change', () => {
    if (!enabled) return;
    setWalking(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setWalking(false), 140);
  });

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
    },
    [],
  );

  return walking;
}
