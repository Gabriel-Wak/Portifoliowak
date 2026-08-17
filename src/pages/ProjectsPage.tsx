import { ArrowUpRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import MaskLines from '../motion/MaskLines';
import FadeUp from '../motion/FadeUp';
import { useTranslation } from '../i18n/useTranslation';

export default function ProjectsPage() {
  const { t, localizedProjects } = useTranslation();

  return (
    <>
      <section className="page-head">
        <p className="mono-label">{t.projectsPage.label}</p>
        <MaskLines
          as="h1"
          className="page-head-title"
          lines={t.projectsPage.titleLines}
          stagger={0.08}
          immediate
        />
        <FadeUp delay={0.25} immediate>
          <p className="page-head-lead">{t.projectsPage.body}</p>
        </FadeUp>
      </section>

      <section className="project-ed">
        <ol className="project-ed-list">
          {localizedProjects.map((project, index) => (
            <FadeUp key={project.title} delay={Math.min(index * 0.06, 0.24)}>
              <li>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-ed-row${project.featured ? ' is-featured' : ''}`}
                >
                  <span className="mono-label project-ed-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="project-ed-media">
                    {project.role === 'owner' ? (
                      <span className="project-role-badge">{t.projectMeta.owner}</span>
                    ) : null}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={960}
                      height={600}
                    />
                  </div>
                  <div className="project-ed-copy">
                    {project.featured ? (
                      <span className="mono-label project-ed-kicker">{t.featured.kicker}</span>
                    ) : null}
                    <h2 className="project-ed-title">{project.title}</h2>
                    <p className="project-ed-body">{project.description}</p>
                    {project.tags.length > 0 && (
                      <ul className="project-ed-tags">
                        {project.tags.map((tag) => (
                          <li key={tag} className="mono-label">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <ArrowUpRight className="project-ed-arrow" size={22} aria-hidden="true" />
                </a>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>

      <CTASection />
    </>
  );
}
