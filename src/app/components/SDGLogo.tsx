export function SDGLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="98" stroke="#00689D" strokeWidth="2" fill="white"/>

      {/* SDG Color Wheel - 17 segments */}
      <g>
        {/* Segment 1 - Red (#E5243B) */}
        <path d="M 100 100 L 195 100 A 95 95 0 0 1 178 147 Z" fill="#E5243B"/>

        {/* Segment 2 - Orange (#DDA63A) */}
        <path d="M 100 100 L 178 147 A 95 95 0 0 1 147 178 Z" fill="#DDA63A"/>

        {/* Segment 3 - Green (#4C9F38) */}
        <path d="M 100 100 L 147 178 A 95 95 0 0 1 100 195 Z" fill="#4C9F38"/>

        {/* Segment 4 - Red (#C5192D) */}
        <path d="M 100 100 L 100 195 A 95 95 0 0 1 53 178 Z" fill="#C5192D"/>

        {/* Segment 5 - Orange Red (#FF3A21) */}
        <path d="M 100 100 L 53 178 A 95 95 0 0 1 22 147 Z" fill="#FF3A21"/>

        {/* Segment 6 - Cyan (#26BDE2) */}
        <path d="M 100 100 L 22 147 A 95 95 0 0 1 5 100 Z" fill="#26BDE2"/>

        {/* Segment 7 - Yellow (#FFC20A) */}
        <path d="M 100 100 L 5 100 A 95 95 0 0 1 22 53 Z" fill="#FFC20A"/>

        {/* Segment 8 - Burgundy (#A21942) */}
        <path d="M 100 100 L 22 53 A 95 95 0 0 1 53 22 Z" fill="#A21942"/>

        {/* Segment 9 - Orange (#FD6925) */}
        <path d="M 100 100 L 53 22 A 95 95 0 0 1 100 5 Z" fill="#FD6925"/>

        {/* Segment 10 - Pink (#DD1367) */}
        <path d="M 100 100 L 100 5 A 95 95 0 0 1 147 22 Z" fill="#DD1367"/>

        {/* Segment 11 - Orange (#FD9D24) */}
        <path d="M 100 100 L 147 22 A 95 95 0 0 1 178 53 Z" fill="#FD9D24"/>

        {/* Segment 12 - Gold (#BF8B2E) */}
        <path d="M 100 100 L 178 53 A 95 95 0 0 1 195 100 Z" fill="#BF8B2E"/>

        {/* Additional segments in overlapping pattern */}
        <path d="M 100 100 L 168 68 A 70 70 0 0 1 168 132 Z" fill="#3F7E44" opacity="0.9"/>
        <path d="M 100 100 L 132 168 A 70 70 0 0 1 68 168 Z" fill="#0A97D9" opacity="0.9"/>
        <path d="M 100 100 L 32 132 A 70 70 0 0 1 32 68 Z" fill="#56C02B" opacity="0.9"/>
        <path d="M 100 100 L 68 32 A 70 70 0 0 1 132 32 Z" fill="#00689D" opacity="0.9"/>
        <path d="M 100 100 L 150 100 A 50 50 0 0 1 100 150 Z" fill="#19486A" opacity="0.9"/>
      </g>

      {/* Center Circle */}
      <circle cx="100" cy="100" r="35" fill="white"/>

      {/* SDG Text */}
      <text x="100" y="95" fontSize="16" fontWeight="bold" fill="#00689D" textAnchor="middle" fontFamily="Arial, sans-serif">SDG</text>
      <text x="100" y="112" fontSize="10" fill="#00689D" textAnchor="middle" fontFamily="Arial, sans-serif">GOALS</text>
    </svg>
  );
}
