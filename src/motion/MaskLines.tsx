import { motion, useReducedMotion } from 'framer-motion';

interface MaskLinesProps {
  /** Cada item é uma linha própria; quebras são intencionais, não automáticas. */
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  /** Títulos acima da dobra animam na entrada, sem esperar scroll. */
  immediate?: boolean;
}

/**
 * Revela linhas de texto por baixo de uma máscara, uma após a outra.
 * Assinatura de movimento do site: usada só em títulos de seção.
 */
export default function MaskLines({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.09,
  as: Tag = 'div',
  immediate = false,
}: MaskLinesProps) {
  const reduced = useReducedMotion();
  const target = reduced ? { opacity: 1 } : { y: '0%' };
  const trigger = immediate
    ? { animate: target }
    : { whileInView: target, viewport: { once: true, margin: '0px 0px -12% 0px' } };

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={`mask-line ${lineClassName}`}>
          <motion.span
            className="mask-line-inner"
            initial={reduced ? { opacity: 0 } : { y: '110%' }}
            {...trigger}
            transition={{
              duration: reduced ? 0.3 : 0.9,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
