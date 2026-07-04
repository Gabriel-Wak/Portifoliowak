import { techStack } from '../data/projects';

export default function TechMarquee() {
  const stack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {stack.map((tech, index) => (
          <div key={`${tech.slug}-${index}`} className="marquee-icon-wrap" title={tech.name}>
            <img
              src={`https://cdn.simpleicons.org/${tech.slug}`}
              alt={tech.name}
              className="marquee-icon"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
