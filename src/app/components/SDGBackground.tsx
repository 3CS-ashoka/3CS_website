export function SDGBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sdg-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* SDG colored circles */}
            <circle cx="50" cy="50" r="30" fill="#E5243B" opacity="0.3" />
            <circle cx="150" cy="50" r="30" fill="#DDA63A" opacity="0.3" />
            <circle cx="50" cy="150" r="30" fill="#4C9F38" opacity="0.3" />
            <circle cx="150" cy="150" r="30" fill="#26BDE2" opacity="0.3" />
            <circle cx="100" cy="100" r="20" fill="#FF3A21" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sdg-pattern)" />
      </svg>
    </div>
  );
}
