import { techStack } from '../data/projects';

const placements = [
  'tech-float-1',
  'tech-float-2',
  'tech-float-3',
  'tech-float-4',
];

/** Fewer floating icons = less paint / composite cost */
export default function TechFloatBg() {
  return (
    <div className="tech-float-bg" aria-hidden="true">
      {techStack.slice(0, 4).map((tech, index) => (
        <img
          key={tech.slug}
          src={`https://cdn.simpleicons.org/${tech.slug}`}
          alt=""
          className={`tech-float-icon ${placements[index]}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
