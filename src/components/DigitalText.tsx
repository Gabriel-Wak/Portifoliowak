export default function DigitalText() {
  return (
    <>
      <svg className="digital-filters" aria-hidden="true" focusable="false">
        <defs>
          <filter id="digital-smoke" x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.014 0.05"
              numOctaves="3"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="9s"
                values="0.014 0.05;0.022 0.07;0.01 0.04;0.014 0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="22"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <span className="digital-text" data-text="Digital">
        Digital
      </span>
    </>
  );
}
