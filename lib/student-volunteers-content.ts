import { loadContentWithCache, parseJsonBlock } from "./markdown";

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
  const data = loadContentWithCache("student-volunteers.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Student Volunteers | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Meet the student volunteers of ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) || "Student Volunteers",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Supporting ICCoSD-26 with enthusiasm and dedication",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro: (data.sections?.intro as string) || "",
    volunteers:
      ((parseJsonBlock(data.raw, "volunteers") as string[]) || []),
    contributions: (data.sections?.contributions as string) || "",
  };
}

