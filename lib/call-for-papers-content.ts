import { siteConfig } from "@/content/site-config";

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
  const cfp = siteConfig.callForPapers;
  return {
    ...cfp,
    topics: [...cfp.topics],
    dates: [...cfp.dates],
  };
}
