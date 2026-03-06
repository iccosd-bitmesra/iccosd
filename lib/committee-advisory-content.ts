import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface AdvisoryCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  international: string[];
  national: string[];
  note: string;
}

export function getAdvisoryCommitteeContent(): AdvisoryCommitteeContent {
  const data = loadContentWithCache("committee-advisory.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Advisory Committee | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Meet the advisory committee members of ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) || "Advisory Committee",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Global experts guiding ICCoSD-26",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro: (data.sections?.intro as string) || "",
    international:
      ((parseJsonBlock(data.raw, "international") as string[]) || []),
    national:
      ((parseJsonBlock(data.raw, "national") as string[]) || []),
    note: (data.sections?.note as string) || "",
  };
}

