import { useRef } from 'react';
import { MotionValue, motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../i18n/useTranslation';

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [22, 0]);
  return (
    <span className="statement-word">
      <motion.span style={{ opacity, y }}>{word}</motion.span>
    </span>
  );
}

/**
 * Frase-tese fixa: cada palavra sobe e ganha contraste conforme a rolagem.
 */
export default function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { t } = useTranslation();
  const words = t.statement.text.split(' ');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  });

  return (
    <section className="statement" ref={ref}>
      <div className="statement-inner">
        <p className="mono-label statement-label">{t.statement.label}</p>
        <p className="statement-text">
          {reduced
            ? t.statement.text
            : words.map((word, index) => {
                const start = index / words.length;
                const end = Math.min(1, (index + 0.85) / words.length);
                return (
                  <Word
                    key={`${word}-${index}`}
                    word={word}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
        </p>
      </div>
    </section>
  );
}
