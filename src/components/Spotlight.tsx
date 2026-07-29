import { useEffect, useRef } from 'react';

/**
 * Cursor spotlight via direct DOM updates (no React re-render per mousemove).
 */
export default function Spotlight() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (coarse) {
      layer.style.opacity = '1';
      layer.style.background = `radial-gradient(420px circle at 50% 28%, var(--spotlight-color), transparent 40%)`;
      return;
    }

    let raf = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight * 0.28;
    let visible = false;

    const paint = () => {
      raf = 0;
      layer.style.opacity = visible ? '1' : '0';
      layer.style.background = `radial-gradient(560px circle at ${latestX}px ${latestY}px, var(--spotlight-color), transparent 40%)`;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    const handleMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;
      visible = true;
      schedule();
    };

    const handleLeave = () => {
      visible = false;
      schedule();
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.body.addEventListener('mouseleave', handleLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{ opacity: 0 }}
      aria-hidden="true"
    />
  );
}
