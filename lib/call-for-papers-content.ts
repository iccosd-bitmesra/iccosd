import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface CFPTopic {
  title: string;
  items: string[];
}

export interface CFPDate {
  label: string;
  date: string;
}

export interface CallForPapersContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  noticeTitle: string;
  noticeBody: string;
  generalGuidelines: string;
  acceptedPapers: string;
  topics: CFPTopic[];
  dates: CFPDate[];
  authorGuidelines: string;
  ctaText: string;
}

export function getCallForPapersContent(): CallForPapersContent {
  const data = loadContentWithCache("call-for-papers.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Call for Papers | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Submit your research papers to ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) || "Call for Papers",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Share your research with the global community",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    noticeTitle:
      (data.frontmatter.noticeTitle as string) || "Call for Papers Open",
    noticeBody: (data.sections?.notice_body as string) || "",
    generalGuidelines: (data.sections?.general_guidelines as string) || "",
    acceptedPapers: (data.sections?.accepted_papers as string) || "",
    topics: (parseJsonBlock(data.raw, "topics") as CFPTopic[]) || [],
    dates: (parseJsonBlock(data.raw, "dates") as CFPDate[]) || [],
    authorGuidelines: (data.sections?.author_guidelines as string) || "",
    ctaText: (data.sections?.cta_section as string) || "",
  };
}

