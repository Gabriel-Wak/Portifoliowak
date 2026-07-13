import { projects } from '../data/projects';

const placements = [
  'top-[10%] left-[8%] h-[155px] w-[250px]',
  'top-[38%] left-[-7.5%] h-[250px] w-[400px]',
  'top-[72%] right-[0.1%] h-[250px] w-[405px]',
  'top-[11%] right-[1%] h-[180px] w-[300px]',
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
          className={`floating-card card-3d ${placements[index]}`}
          aria-label={`Abrir projeto ${project.title}`}
        >
          <img src={project.image} alt="" aria-hidden="true" />
        </a>
      ))}
    </>
  );
}
