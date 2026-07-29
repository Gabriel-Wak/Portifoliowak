import { useLocale } from '../context/LocaleContext';
import { getTranslations, type TranslationTree } from './translations';
import { projects as projectData } from '../data/projects';

export function useTranslation() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const localizedProjects = projectData.map((project) => ({
    ...project,
    description:
      t.projects[project.title as keyof TranslationTree['projects']] ?? project.description,
  }));

  return { t, locale, localizedProjects };
}
