import { siteConfig } from "@/content/site-config";

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
  const technical = siteConfig.technicalCommittee;
  return {
    ...technical,
    members: [...technical.members],
  };
}
