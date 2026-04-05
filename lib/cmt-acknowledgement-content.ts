import { siteConfig } from "@/content/site-config";

export interface CmtAcknowledgementContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageUrlMobile: string;
  body: string;
}

export function getCmtAcknowledgementContent(): CmtAcknowledgementContent {
  return { ...siteConfig.cmtAcknowledgement };
}
