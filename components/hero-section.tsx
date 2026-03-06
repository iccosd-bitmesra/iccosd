import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: number;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink = "#",
  overlayOpacity = 0.4,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Diagonal Overlay Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: "linear-gradient(45deg, #0D5B6F 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `rgba(13, 91, 111, ${overlayOpacity})`,
          }}
        />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute left-0 top-0 bottom-1/2 w-1 bg-gold-accent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Link
            href={ctaLink}
            className="inline-block px-8 py-3 bg-gold-accent text-primary font-bold rounded-lg hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
