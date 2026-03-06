import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  aboutBitMesra: string;
  aboutIccosd: string;
  highlights: AboutHighlight[];
  researchTracks: string;
  ctaSection: string;
}

export function getAboutContent(): AboutContent {
  const data = loadContentWithCache("about.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "About ICCoSD-26 & BIT Mesra",
    description:
      (data.frontmatter.description as string) ||
      "Learn about the International Conference on Communication and Smart Devices and Birla Institute of Technology Mesra",
    heroTitle: (data.frontmatter.heroTitle as string) || "About Us",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "ICCoSD-26 & Birla Institute of Technology Mesra",
    heroImage:
      (data.sections?.hero_image as string) || "/hero-conference.jpg",
    aboutBitMesra: (data.sections?.about_bit_mesra as string) || "",
    aboutIccosd: (data.sections?.about_iccosd as string) || "",
    highlights:
      (parseJsonBlock(data.raw, "highlights") as AboutHighlight[]) || [],
    researchTracks: (data.sections?.research_tracks as string) || "",
    ctaSection: (data.sections?.cta_section as string) || "",
  };
}

