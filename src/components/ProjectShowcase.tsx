import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectShowcaseProps {
  projects: Project[];
  limit?: number;
}

export default function ProjectShowcase({ projects, limit }: ProjectShowcaseProps) {
  const items = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {items.map((project, index) => (
        <a
          key={project.title}
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-card ${index % 2 === 1 ? 'md:mt-16' : ''}`}
        >
          <div className="project-shot">
            <img src={project.image} alt={`Preview do projeto ${project.title}`} />
          </div>

          <div className="project-title">
            <h3>{project.title}</h3>
            <span className="project-arrow" aria-hidden="true">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>

          <p className="project-description">{project.description}</p>
        </a>
      ))}
    </div>
  );
}
