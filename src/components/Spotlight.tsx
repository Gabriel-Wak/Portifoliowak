import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--spotlight-color), transparent 40%)`,
      }}
    />
  );
}
