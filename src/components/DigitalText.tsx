export default function DigitalText() {
  return (
    <>
      <svg className="digital-filters" aria-hidden="true" focusable="false">
        <defs>
          <filter id="digital-smoke" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="3"
              seed="4"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="9s"
                values="0.008 0.012;0.014 0.018;0.009 0.015;0.008 0.012"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <span className="masked-text" data-text="Digital">
        Digital
      </span>
    </>
  );
}
