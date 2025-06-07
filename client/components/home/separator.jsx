export const CustomSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 400 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    {/* Left Arrows */}
    <g transform="translate(50, 50)">
      <path d="M0 0 L5 5 L0 10 Z" fill="black" />
      <path d="M7 0 L12 5 L7 10 Z" fill="black" />
      <path d="M14 0 L19 5 L14 10 Z" fill="black" />
      <path d="M21 0 L26 5 L21 10 Z" fill="black" />
      <path d="M28 0 L33 5 L28 10 Z" fill="black" />
    </g>

    {/* Center Text */}
    <text x="200" y="60" fontSize="16" textAnchor="middle" fill="black">
      or
    </text>

    {/* Right Icons */}
    <g transform="translate(300, 50)">
      <circle cx="5" cy="5" r="4" fill="black" />
      <circle cx="15" cy="5" r="4" fill="black" />
      <circle cx="25" cy="5" r="4" fill="black" />
      <circle cx="35" cy="5" r="4" fill="black" />
      <circle cx="45" cy="5" r="4" fill="black" />
    </g>
  </svg>
);
