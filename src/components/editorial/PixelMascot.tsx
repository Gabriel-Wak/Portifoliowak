import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';
import { useScrollWalking } from '../../hooks/useScrollWalking';

const FRAMES = {
  idle: '/pixel-idle.png',
  stand: '/pixel-stand.png',
  smile: '/pixel-smile.png',
  wave: '/pixel-wave.png',
  walk: '/pixel-walk.png',
} as const;

type Mood = 'walk' | 'idle' | 'wave';

type PixelMascotProps = {
  delay?: number;
  scrollWalk?: boolean;
};

export default function PixelMascot({ delay = 0, scrollWalk = false }: PixelMascotProps) {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const walking = useScrollWalking(scrollWalk && !reduced);
  const { scrollY } = useScroll();
  const [mood, setMood] = useState<Mood>(reduced ? 'idle' : scrollWalk ? 'idle' : 'walk');
  const [bob, setBob] = useState(false);

  const top = useTransform(scrollY, [0, 2200], ['46svh', '74svh']);
  const stepX = useTransform(scrollY, (value) => (walking ? Math.sin(value * 0.075) * 14 : 0));

  useEffect(() => {
    if (reduced || scrollWalk) return undefined;

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
  }, [reduced, scrollWalk]);

  useEffect(() => {
    if (reduced || !scrollWalk) return undefined;

    const bobTimer = window.setInterval(() => setBob((current) => !current), 480);
    return () => window.clearInterval(bobTimer);
  }, [reduced, scrollWalk]);

  const isWalking = scrollWalk ? walking : mood === 'walk';
  const src = isWalking
    ? FRAMES.walk
    : mood === 'wave'
      ? FRAMES.wave
      : bob
        ? FRAMES.smile
        : FRAMES.idle;

  const idleBob = !isWalking && (mood === 'idle' || mood === 'wave');

  return (
    <motion.div
      className={`pixel-mascot${scrollWalk ? ' is-scroll-walk' : ''}`}
      style={scrollWalk && !reduced ? { top, x: stepX } : undefined}
      initial={reduced ? { opacity: 0 } : scrollWalk ? { opacity: 0, y: 18 } : { opacity: 0, x: 72, y: 18 }}
      animate={
        reduced
          ? { opacity: 1 }
          : scrollWalk
            ? {
                opacity: 1,
                y: idleBob ? [0, -7, 0] : 0,
              }
            : {
                opacity: 1,
                x: 0,
                y: idleBob ? [0, -7, 0] : 0,
              }
      }
      transition={
        reduced
          ? { duration: 0.3, delay }
          : scrollWalk
            ? {
                opacity: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
                y: idleBob
                  ? { duration: 1.7, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.2 },
              }
            : isWalking
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
