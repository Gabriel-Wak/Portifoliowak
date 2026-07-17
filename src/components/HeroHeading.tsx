import { useLayoutEffect, useRef } from 'react';
import DigitalText from './DigitalText';
import MotionWord from './MotionWord';

export default function HeroHeading() {
  const headingRef = useRef<HTMLDivElement>(null);
  const digitalRef = useRef<HTMLSpanElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const digital = digitalRef.current;
    const mascot = mascotRef.current;
    if (!heading || !digital || !mascot) return;

    const positionMascot = () => {
      const headingRect = heading.getBoundingClientRect();
      const digitalRect = digital.getBoundingClientRect();
      const height = digitalRect.height * 0.98;

      mascot.style.height = `${height}px`;
      mascot.style.top = `${digitalRect.bottom - headingRect.top - height}px`;
      mascot.style.left = `${digitalRect.right - headingRect.left}px`;
    };

    positionMascot();

    const observer = new ResizeObserver(positionMascot);
    observer.observe(heading);
    observer.observe(digital);

    window.addEventListener('resize', positionMascot, { passive: true });
    document.fonts?.ready.then(positionMascot);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', positionMascot);
    };
  }, []);

  return (
    <div ref={headingRef} className="hero-heading">
      <h1 className="hero-title">
        <MotionWord variant="3d">
          <span className="hero-line">Experiência</span>
        </MotionWord>
        <span ref={digitalRef} className="digital-line">
          <DigitalText />
        </span>
        <MotionWord variant="glow">
          <span className="hero-line">Excepcional</span>
        </MotionWord>
      </h1>
      <img
        ref={mascotRef}
        src="/boneco.png"
        alt=""
        className="hero-mascot"
        width={120}
        height={120}
        decoding="sync"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
