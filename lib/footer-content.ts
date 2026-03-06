import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface QuickLink {
  title: string;
  href: string;
  icon?: string;
}

export interface ImportantDate {
  label: string;
  value: string;
}

export interface Acknowledgment {
  title: string;
  description: string;
  imageUrl: string;
  website: string;
}

export interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterConfig {
  siteName: string;
  siteTagline: string;
  email: string;
  phone: string;
  address: string;
  copyright: string;
  departmentName: string;
  quickLinks: QuickLink[];
  importantDates: ImportantDate[];
  acknowledgments: Acknowledgment[];
  footerSections: FooterSection[];
  socialLinks: SocialLink[];
  bottomText: string;
}

export function getFooterContent(): FooterConfig {
  const footerData = loadContentWithCache("footer.md");

  return {
    siteName: (footerData.frontmatter.siteName as string) || "ICCoSD-26",
    siteTagline: (footerData.frontmatter.siteTagline as string) || "",
    email: (footerData.frontmatter.email as string) || "",
    phone: (footerData.frontmatter.phone as string) || "",
    address: (footerData.frontmatter.address as string) || "",
    copyright: (footerData.frontmatter.copyright as string) || "",
    departmentName:
      (footerData.frontmatter.departmentName as string) || "",
    quickLinks:
      ((parseJsonBlock(footerData.raw, "quicklinks") as QuickLink[]) || []),
    importantDates:
      ((parseJsonBlock(footerData.raw, "importantdates") as ImportantDate[]) ||
        []),
    acknowledgments:
      ((parseJsonBlock(footerData.raw, "acknowledgments") as Acknowledgment[]) ||
        []),
    footerSections:
      ((parseJsonBlock(footerData.raw, "footersections") as FooterSection[]) ||
        []),
    socialLinks:
      ((parseJsonBlock(footerData.raw, "sociallinks") as SocialLink[]) || []),
    bottomText: (footerData.sections?.bottom_text as string) || "",
  };
}
