import { HeroSection } from "@/components/hero-section";
import { TwoColumnSection } from "@/components/two-column-section";
import { InfoBlock } from "@/components/info-block";
import Image from "next/image";
import { getAboutContent } from "@/lib/about-content";

const aboutContent = getAboutContent();

export const metadata = {
  title: aboutContent.title,
  description: aboutContent.description,
};

export default function About() {
  const {
    heroTitle,
    heroSubtitle,
    heroImage,
    aboutBitMesra,
    aboutIccosd,
    highlights,
    researchTracks,
    ctaSection,
  } = aboutContent;

  return (
    <main>
      <HeroSection
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <TwoColumnSection
            left={
              <div>
                <div className="inline-block px-4 py-2 bg-gold-accent text-primary font-bold rounded-full mb-6">
                  BIT Mesra
                </div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Birla Institute of Technology
                </h2>
                <div className="prose max-w-none text-foreground/80 whitespace-pre-line">
                  {aboutBitMesra}
                </div>
              </div>
            }
            right={
              <Image
                src="/images/bit-mesra-campus.jpg"
                alt="BIT Mesra Campus"
                className="w-full rounded-lg shadow-lg"
              />
            }
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              About ICCoSD
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto whitespace-pre-line">
              {aboutIccosd}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.length > 0 && (
              <InfoBlock title="Conference Highlights" type="highlight">
                <ul className="space-y-2">
                  {highlights.map((item) => (
                    <li key={item.title} className="flex gap-2">
                      <span className="text-gold-accent font-bold">•</span>
                      <span>
                        <strong>{item.title}:</strong> {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Conference Theme: &quot;Connecting Intelligence&quot;
          </h2>
          <div className="max-w-3xl mx-auto bg-gold-accent/10 border-l-4 border-gold-accent p-8 rounded-lg">
            <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-line">
              {researchTracks}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Department of Electronics &amp; Communication Engineering
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {ctaSection}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
