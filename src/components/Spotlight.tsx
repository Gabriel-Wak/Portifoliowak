import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    setIsCoarse(coarse);

    if (coarse) {
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight * 0.28 });
      setVisible(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const size = isCoarse ? 420 : 600;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, var(--spotlight-color), transparent 40%)`,
      }}
    />
  );
}
