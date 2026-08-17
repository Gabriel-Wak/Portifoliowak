import type { ReactNode } from 'react';

type ProjectMediaProps = {
  image: string;
  previewImage?: string;
  alt: string;
  accessLabel: string;
  badge?: ReactNode;
  width?: number;
  height?: number;
};

export default function ProjectMedia({
  image,
  previewImage,
  alt,
  accessLabel,
  badge,
  width = 960,
  height = 600,
}: ProjectMediaProps) {
  return (
    <div className="project-media">
      {badge}
      <img
        src={previewImage ?? image}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
      />
      <span className="project-media-access btn-ed">{accessLabel}</span>
    </div>
  );
}
