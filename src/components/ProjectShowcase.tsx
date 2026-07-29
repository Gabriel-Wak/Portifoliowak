import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../i18n/useTranslation';

interface ProjectShowcaseProps {
  projects: Project[];
  limit?: number;
}

export default function ProjectShowcase({ projects, limit }: ProjectShowcaseProps) {
  const { t } = useTranslation();
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {items.map((project, index) => (
        <ScrollReveal key={project.title} delay={Math.min(index * 60, 180)} variant="up">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card block ${index % 2 === 1 ? 'md:translate-y-12 lg:translate-y-16' : ''}`}
          >
            <div className="project-shot">
              <img
                src={project.image}
                alt={`${t.cta.previewAlt} ${project.title}`}
                loading="lazy"
                decoding="async"
                width={960}
                height={540}
              />
            </div>

            <div className="project-title">
              <h3>{project.title}</h3>
              <span className="project-arrow" aria-hidden="true">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <p className="project-description">{project.description}</p>
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
