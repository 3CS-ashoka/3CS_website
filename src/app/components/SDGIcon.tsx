interface SDGIconProps {
  number: number;
  title: string;
}

const SDG_COLORS: { [key: number]: string } = {
  1: "#E5243B",  // No Poverty
  2: "#DDA63A",  // Zero Hunger
  3: "#4C9F38",  // Good Health & Well-being
  4: "#C5192D",  // Quality Education
  5: "#FF3A21",  // Gender Equality
  6: "#26BDE2",  // Clean Water
  8: "#A21942",  // Decent Work & Economic Growth
  9: "#FD6925",  // Industry & Innovation
  10: "#DD1367", // Reduced Inequalities
  11: "#FD9D24", // Sustainable Cities
  12: "#BF8B2E", // Responsible Consumption & Production
  13: "#3F7E44", // Climate Action
  14: "#0A97D9", // Life Below Water
  15: "#56C02B", // Life on Land
  17: "#19486A"  // Partnerships
};

export function SDGIcon({ number, title }: SDGIconProps) {
  const color = SDG_COLORS[number] || "#000000";

  return (
    <div
      className="flex items-center justify-center w-12 h-12 rounded-sm flex-shrink-0 relative group"
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold text-lg">{number}</span>
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
        {title}
      </div>
    </div>
  );
}
