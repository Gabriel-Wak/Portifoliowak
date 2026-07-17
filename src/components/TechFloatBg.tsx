import { techStack } from '../data/projects';

const placements = [
  'tech-float-1',
  'tech-float-2',
  'tech-float-3',
  'tech-float-4',
  'tech-float-5',
  'tech-float-6',
];

export default function TechFloatBg() {
  return (
    <div className="tech-float-bg" aria-hidden="true">
      {techStack.slice(0, 6).map((tech, index) => (
        <img
          key={tech.slug}
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt=""
          className={`tech-float-icon ${placements[index]}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}
