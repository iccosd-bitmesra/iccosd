import { loadContentWithCache } from "./markdown";

export interface RegistrationContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  noticeTitle: string;
  noticeBody: string;
  introHeading: string;
  introBody: string;
}

export function getRegistrationContent(): RegistrationContent {
  const data = loadContentWithCache("registration.md");

  return {
    title: (data.frontmatter.title as string) || "Registration | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Register for ICCoSD-26. View registration fees, process, and important details.",
    heroTitle: (data.frontmatter.heroTitle as string) || "Registration",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Join us for an exceptional conference experience",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    noticeTitle:
      (data.frontmatter.noticeTitle as string) || "Registration Open",
    noticeBody:
      (data.sections?.notice_body as string) ||
      "Registration for ICCoSD-26 is currently open. The conference will be held on February 18-19, 2026. Secure your spot now to be part of this prestigious event.",
    introHeading:
      (data.frontmatter.introHeading as string) || "Registration Details",
    introBody:
      (data.sections?.intro_body as string) ||
      "Registration for ICCoSD-26 is open to authors, academicians, industry professionals, and attendees. Please complete your registration through the official registration portal.",
  };
}

