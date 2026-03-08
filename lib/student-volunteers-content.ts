import { siteConfig } from "@/content/site-config";

export interface StudentVolunteersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  volunteers: string[];
  contributions: string;
}

export function getStudentVolunteersContent(): StudentVolunteersContent {
  const volunteers = siteConfig.studentVolunteers;
  return {
    ...volunteers,
    volunteers: [...volunteers.volunteers],
  };
}
