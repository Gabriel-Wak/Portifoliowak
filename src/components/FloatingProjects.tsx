import { projects } from '../data/projects';

const desktopPlacements = [
  'float-desk-1',
  'float-desk-2',
  'float-desk-3',
  'float-desk-4',
];

const mobilePlacements = [
  'float-mob-1',
  'float-mob-2',
  'float-mob-3',
  'float-mob-4',
];

export default function FloatingProjects() {
  const items = projects.slice(0, 4);

  return (
    <>
      {items.map((project, index) => (
        <a
          key={`${project.title}-float`}
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-card card-3d ${desktopPlacements[index]} ${mobilePlacements[index]}`}
          aria-label={`Abrir projeto ${project.title}`}
        >
          <img src={project.image} alt="" aria-hidden="true" />
        </a>
      ))}
    </>
  );
}
