import { projects } from '../data/projects';

const placements = [
  'top-[10%] left-[12%] h-[155px] w-[250px]',
  'top-[38%] left-[-0.5%] h-[230px] w-[275px]',
  'top-[72%] left-[6%] h-[115px] w-[165px]',
  'top-[8%] right-[9.5%] h-[125px] w-[145px]',
  'top-[40%] right-[4%] h-[145px] w-[190px]',
  'top-[76%] right-[12%] h-[110px] w-[155px]',
];

export default function FloatingProjects() {
  return (
    <>
      {projects.slice(0, 6).map((project, index) => (
        <a
          key={`${project.title}-float`}
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-card ${placements[index]}`}
          aria-label={`Abrir projeto ${project.title}`}
        >
          <img src={project.image} alt="" aria-hidden="true" />
        </a>
      ))}
    </>
  );
}
