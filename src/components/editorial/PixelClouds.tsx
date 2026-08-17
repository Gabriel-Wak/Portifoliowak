const CLOUDS = [
  { src: '/cloud-a.gif', className: 'pixel-cloud is-a', width: 168, height: 84 },
  { src: '/cloud-b.gif', className: 'pixel-cloud is-b', width: 132, height: 72 },
  { src: '/cloud-c.gif', className: 'pixel-cloud is-c', width: 108, height: 60 },
  { src: '/cloud-a.gif', className: 'pixel-cloud is-d', width: 148, height: 74 },
  { src: '/cloud-b.gif', className: 'pixel-cloud is-e', width: 120, height: 64 },
] as const;

export default function PixelClouds() {
  return (
    <div className="pixel-sky" aria-hidden="true">
      {CLOUDS.map((cloud) => (
        <img
          key={cloud.className}
          src={cloud.src}
          alt=""
          className={cloud.className}
          width={cloud.width}
          height={cloud.height}
          draggable={false}
        />
      ))}
    </div>
  );
}
