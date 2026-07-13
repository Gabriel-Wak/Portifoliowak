import { projects } from '../data/projects';

export default function MobileProjectStrip() {
  return (
    <div className="mobile-project-strip lg:hidden" aria-label="Projetos em destaque">
      <div className="mobile-project-track">
        {projects.slice(0, 6).map((project) => (
          <a
            key={`mobile-${project.title}`}
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-project-card card-3d"
          >
            <img src={project.image} alt={`Preview do projeto ${project.title}`} loading="lazy" />
            <span>{project.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
