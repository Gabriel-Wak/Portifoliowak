import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface CountUpProps {
  value: string;
  delay?: number;
}

/** Anima só o prefixo numérico ("4+" → 0…4+). */
export default function CountUp({ value, delay = 0 }: CountUpProps) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const parsed = value.match(/^(\d+)(.*)$/);
    if (reduced || !parsed) {
      setShown(value);
      return;
    }

    const target = Number(parsed[1]);
    const suffix = parsed[2];
    let frame = 0;
    const startedAt = performance.now() + delay * 1000;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, elapsed / 1100);
      const eased = 1 - (1 - t) ** 3;
      setShown(`${Math.round(target * eased)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    setShown(`0${suffix}`);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, delay, reduced]);

  return <>{shown}</>;
}
