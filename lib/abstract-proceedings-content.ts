import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface PublicationDetail {
  label: string;
  value: string;
}

export interface AbstractProceedingsContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  aboutProceedings: string;
  downloadSection: string;
  publication: PublicationDetail[];
  note: string;
  citation: string;
}

export function getAbstractProceedingsContent(): AbstractProceedingsContent {
  const data = loadContentWithCache("abstract-proceedings.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Abstract Proceedings | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Download the abstract proceedings from ICCoSD-26.",
    heroTitle: (data.frontmatter.heroTitle as string) || "Proceedings",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "IEEE International Conference on Communication and Smart Devices",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro: (data.sections?.intro as string) || "",
    aboutProceedings: (data.sections?.about_proceedings as string) || "",
    downloadSection: (data.sections?.download_section as string) || "",
    publication:
      (parseJsonBlock(data.raw, "publication") as PublicationDetail[]) || [],
    note: (data.sections?.note as string) || "",
    citation: (data.sections?.citation as string) || "",
  };
}

