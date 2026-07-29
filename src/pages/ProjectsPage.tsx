import CTASection from '../components/CTASection';
import ProjectShowcase from '../components/ProjectShowcase';
import { useTranslation } from '../i18n/useTranslation';

export default function ProjectsPage() {
  const { t, localizedProjects } = useTranslation();

  return (
    <>
      <section className="section-shell pt-28 sm:pt-32">
        <div className="section-inner">
          <p className="code-label mb-3 text-center">{t.projectsPage.label}</p>
          <h1 className="mega-heading">{t.projectsPage.title}</h1>
          <p className="body-copy">{t.projectsPage.body}</p>
        </div>
      </section>

      <section className="section-shell section-y">
        <div className="section-inner">
          <ProjectShowcase projects={localizedProjects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
