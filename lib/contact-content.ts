import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface OrganizingContact {
  role: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export interface Secretary {
  name: string;
  title: string;
  phone: string;
  responsibility: string;
}

export interface DepartmentContact {
  name: string;
  institution: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  email: string;
  phone: string;
  website: string;
}

export interface QuickContact {
  category: string;
  person: string;
  phone: string;
}

export interface ContactContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  mainEmail: string;
  mainPhone: string;
  contactIntro: string;
  organizingContacts: OrganizingContact[];
  secretaries: Secretary[];
  department: DepartmentContact | null;
  inquiryTypes: string;
  quickContacts: QuickContact[];
  officeHours: string;
  ctaSection: string;
}

export function getContactContent(): ContactContent {
  const data = loadContentWithCache("contact.md");

  return {
    title:
      (data.frontmatter.title as string) || "Contact Us - ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "Get in touch with the ICCoSD-26 organizing committee",
    heroTitle: (data.frontmatter.heroTitle as string) || "Reach Us",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Contact Information for ICCoSD-26",
    heroImage:
      (data.sections?.hero_image as string) || "/hero-conference.jpg",
    mainEmail: (data.frontmatter.mainEmail as string) || "",
    mainPhone: (data.frontmatter.mainPhone as string) || "",
    contactIntro: (data.sections?.contact_intro as string) || "",
    organizingContacts:
      (parseJsonBlock(data.raw, "organizingcontacts") as OrganizingContact[]) ||
      [],
    secretaries:
      (parseJsonBlock(data.raw, "secretaries") as Secretary[]) || [],
    department:
      (parseJsonBlock(data.raw, "departmentcontact") as DepartmentContact) ||
      null,
    inquiryTypes: (data.sections?.inquiry_types as string) || "",
    quickContacts:
      (parseJsonBlock(data.raw, "quickcontacts") as QuickContact[]) || [],
    officeHours: (data.sections?.office_hours as string) || "",
    ctaSection: (data.sections?.cta_section as string) || "",
  };
}

