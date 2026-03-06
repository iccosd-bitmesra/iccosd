import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface TechnicalCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  members: string[];
  note: string;
}

export function getTechnicalCommitteeContent(): TechnicalCommitteeContent {
  const data = loadContentWithCache("committee-technical.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Technical Program Committee | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Meet the technical program committee members of ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) ||
      "Technical Program Committee",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Expert reviewers and program organizers",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro: (data.sections?.intro as string) || "",
    members: ((parseJsonBlock(data.raw, "members") as string[]) || []),
    note: (data.sections?.note as string) || "",
  };
}

