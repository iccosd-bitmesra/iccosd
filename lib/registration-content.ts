import { siteConfig } from "@/content/site-config";

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
  const registration = siteConfig.registration;
  return {
    ...registration,
  };
}
