import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface Highlight {
  stat: string;
  label: string;
  label_alt?: string;
  description: string;
}

export interface HomeDate {
  label: string;
  date: string;
}

export interface HomeCTA {
  title: string;
  description: string;
  cta: string;
  link: string;
}

export interface HomeOrganizer {
  code: string;
  name: string;
  tagline: string;
}

export interface HomeConfig {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroDate: string;
  heroCTA: string;
  heroCTALink: string;
  institution: string;
  theme: string;
  heroImageUrl: string;
  highlights: Highlight[];
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  themeSectionTitle: string;
  themeHeadline: string;
  themeDescription: string;
  homeDates: HomeDate[];
  homeCtas: HomeCTA[];
  homeOrganizers: HomeOrganizer[];
  sections: Record<string, string>;
}

export function getHomeContent(): HomeConfig {
  const homeData = loadContentWithCache("home.md");

  return {
    title: (homeData.frontmatter.title as string) || "",
    description: (homeData.frontmatter.description as string) || "",
    heroTitle: (homeData.frontmatter.heroTitle as string) || "",
    heroSubtitle: (homeData.frontmatter.heroSubtitle as string) || "",
    heroTagline: (homeData.frontmatter.heroTagline as string) || "",
    heroDate: (homeData.frontmatter.heroDate as string) || "",
    heroCTA: (homeData.frontmatter.heroCTA as string) || "Register Now",
    heroCTALink:
      (homeData.frontmatter.heroCTALink as string) || "/registration",
    institution: (homeData.frontmatter.institution as string) || "",
    theme: (homeData.frontmatter.theme as string) || "",
    heroImageUrl:
      (homeData.sections?.hero_image as string) || "/hero-conference.jpg",
    highlights:
      ((parseJsonBlock(homeData.raw, "highlights") as Highlight[]) || []),
    aboutTitle: (homeData.frontmatter.aboutTitle as string) || "",
    aboutLead: (homeData.frontmatter.aboutLead as string) || "",
    aboutBody: (homeData.frontmatter.aboutBody as string) || "",
    themeSectionTitle:
      (homeData.frontmatter.themeSectionTitle as string) || "",
    themeHeadline: (homeData.frontmatter.themeHeadline as string) || "",
    themeDescription:
      (homeData.frontmatter.themeDescription as string) || "",
    homeDates:
      ((parseJsonBlock(homeData.raw, "home_dates") as HomeDate[]) || []),
    homeCtas:
      ((parseJsonBlock(homeData.raw, "home_ctas") as HomeCTA[]) || []),
    homeOrganizers:
      ((parseJsonBlock(homeData.raw, "home_organizers") as HomeOrganizer[]) ||
        []),
    sections: homeData.sections || {},
  };
}
