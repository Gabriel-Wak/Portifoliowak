import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';

const FRAMES = {
  idle: '/pixel-idle.png',
  stand: '/pixel-stand.png',
  smile: '/pixel-smile.png',
  wave: '/pixel-wave.png',
  walk: '/pixel-walk.png',
} as const;

type Mood = 'walk' | 'idle' | 'wave';

export default function PixelMascot({ delay = 0 }: { delay?: number }) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const [mood, setMood] = useState<Mood>(reduced ? 'idle' : 'walk');
  const [bob, setBob] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;

    const walkTimer = window.setTimeout(() => setMood('idle'), 1800);
    const bobTimer = window.setInterval(() => setBob((current) => !current), 480);

    let waveOff = 0;
    const waveLoop = window.setInterval(() => {
      setMood('wave');
      waveOff = window.setTimeout(() => setMood('idle'), 1100);
    }, 5200);

    return () => {
      window.clearTimeout(walkTimer);
      window.clearTimeout(waveOff);
      window.clearInterval(bobTimer);
      window.clearInterval(waveLoop);
    };
  }, [reduced]);

  const src =
    mood === 'walk' ? FRAMES.walk : mood === 'wave' ? FRAMES.wave : bob ? FRAMES.smile : FRAMES.idle;

  return (
    <motion.div
      className="pixel-mascot"
      initial={reduced ? { opacity: 0 } : { opacity: 0, x: 72, y: 18 }}
      animate={
        reduced
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: mood === 'idle' || mood === 'wave' ? [0, -7, 0] : 0,
            }
      }
      transition={
        reduced
          ? { duration: 0.3, delay }
          : mood === 'walk'
            ? { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }
            : {
                opacity: { duration: 0.4, delay },
                x: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
              }
      }
    >
      <img src={src} alt={t.hero.mascotAlt} width={176} height={384} draggable={false} />
      <span className="pixel-mascot-shadow" aria-hidden="true" />
    </motion.div>
  );
}
