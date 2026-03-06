import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface CommitteeMember {
  title: string;
  name: string;
  position: string;
}

export interface SimpleMember {
  name: string;
  position: string;
}

export interface OrganizingCommitteeContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  committee: Record<string, CommitteeMember[]>;
  publicity: SimpleMember[];
  accommodation: SimpleMember[];
  registration: SimpleMember[];
}

export function getOrganizingCommitteeContent(): OrganizingCommitteeContent {
  const data = loadContentWithCache("committee-organizing.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Organizing Committee | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Meet the organizing committee members of ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) || "Organizing Committee",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Meet the leaders behind ICCoSD-26",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    committee:
      ((parseJsonBlock(data.raw, "committee") as Record<
        string,
        CommitteeMember[]
      >) || {}) as Record<string, CommitteeMember[]>,
    publicity:
      ((parseJsonBlock(data.raw, "publicity") as SimpleMember[]) || []),
    accommodation:
      ((parseJsonBlock(data.raw, "accommodation") as SimpleMember[]) || []),
    registration:
      ((parseJsonBlock(data.raw, "registration") as SimpleMember[]) || []),
  };
}

