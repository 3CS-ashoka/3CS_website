import { useState, useEffect } from "react";

interface HeroBannerProps {
  images: string[];
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  scrimClassName?: string;
}

export function HeroBanner({
  images,
  children,
  className = "py-24",
  overlayOpacity = 1,
  scrimClassName = "bg-gradient-to-r from-black/60 via-black/40 to-transparent",
}: HeroBannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`relative bg-[#0d2238] text-white overflow-hidden ${className}`}>
      {images.length > 0 && (
        <div className="absolute inset-0 z-0">
          {images.map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${src}')`,
                opacity: index === currentImageIndex ? overlayOpacity : 0,
              }}
            />
          ))}
          <div className={`absolute inset-0 ${scrimClassName}`} />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
