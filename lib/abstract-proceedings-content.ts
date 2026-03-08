import { siteConfig } from "@/content/site-config";

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
  const proceedings = siteConfig.abstractProceedings;
  return {
    ...proceedings,
    publication: [...proceedings.publication],
  };
}
