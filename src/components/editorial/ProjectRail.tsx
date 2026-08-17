import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../../i18n/useTranslation';
import ProjectMedia from '../ProjectMedia';

interface RailCardProps {
  title: string;
  image: string;
  previewImage?: string;
  href: string;
  index: number;
  count: number;
  progress: MotionValue<number>;
  pinned: boolean;
  role?: 'owner';
  featured?: boolean;
  ownerLabel: string;
  accessLabel: string;
  description?: string;
}

function RailCard({
  title,
  image,
  previewImage,
  href,
  index,
  count,
  progress,
  pinned,
  role,
  featured,
  ownerLabel,
  accessLabel,
  description,
}: RailCardProps) {
  const start = index / Math.max(count, 1);
  const mid = (index + 0.45) / Math.max(count, 1);
  const scale = useTransform(progress, [start - 0.2, mid, start + 0.55], [0.9, 1, 0.9]);
  const opacity = useTransform(progress, [start - 0.15, mid, start + 0.6], [0.55, 1, 0.55]);

  return (
    <motion.article
      className={`rail-card${featured ? ' is-featured' : ''}`}
      style={pinned ? { scale, opacity } : undefined}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="rail-card-link">
        <ProjectMedia
          image={image}
          previewImage={previewImage}
          alt={title}
          accessLabel={accessLabel}
          width={720}
          height={450}
          badge={role === 'owner' ? <span className="project-role-badge">{ownerLabel}</span> : null}
        />
        <div className="rail-card-foot">
          <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
          <div className="rail-card-copy">
            <h3 className="rail-card-title">{title}</h3>
            {featured && description ? (
              <p className="rail-card-desc">{description}</p>
            ) : null}
          </div>
          <ArrowUpRight size={18} className="rail-card-arrow" aria-hidden="true" />
        </div>
      </a>
    </motion.article>
  );
}

export default function ProjectRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { t, localizedProjects } = useTranslation();
  const [distance, setDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const measure = () => {
      setViewportHeight(window.innerHeight);
      setDistance(Math.max(0, rail.scrollWidth - window.innerWidth + 48));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    window.addEventListener('resize', measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.35 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  const pinned = !reduced && distance > 0;

  return (
    <section
      className={`rail ${pinned ? 'is-pinned' : ''}`}
      ref={sectionRef}
      style={pinned ? { height: `${distance + viewportHeight}px` } : undefined}
      aria-label={t.homeProjects.title}
    >
      <div className="rail-sticky">
        <div className="rail-head">
          <p className="mono-label">{t.homeProjects.label}</p>
          <h2 className="rail-title">{t.homeProjects.title}</h2>
          <Link to="/projetos" className="link-ed rail-head-link">
            {t.homeProjects.viewAll}
          </Link>
        </div>

        <motion.div className="rail-track" ref={railRef} style={pinned ? { x } : undefined}>
          {localizedProjects.map((project, index) => (
            <RailCard
              key={project.title}
              title={project.title}
              image={project.image}
              previewImage={project.previewImage}
              href={project.projectLink}
              index={index}
              count={localizedProjects.length}
              progress={smooth}
              pinned={pinned}
              role={project.role}
              featured={project.featured}
              ownerLabel={t.projectMeta.owner}
              accessLabel={t.projectMeta.access}
              description={project.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
