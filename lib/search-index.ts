export interface SearchEntry {
  href: string;
  label: string;
  keywords?: string;
}

const NAV: SearchEntry[] = [
  { href: "/", label: "Home", keywords: "homepage" },
  { href: "/about", label: "About", keywords: "about us conference" },
  {
    href: "/call-for-papers",
    label: "Call for Papers",
    keywords: "cfp papers submit",
  },
];

const COMMITTEES: SearchEntry[] = [
  {
    href: "/committee/organizing",
    label: "Organizing Committee",
    keywords: "organizing",
  },
  {
    href: "/committee/technical",
    label: "Technical Program Committee",
    keywords: "technical program TPC",
  },
  {
    href: "/committee/advisory",
    label: "Advisory Committee",
    keywords: "advisory",
  },
];

const MORE: SearchEntry[] = [
  {
    href: "/student-volunteers",
    label: "Student Volunteers",
    keywords: "volunteers",
  },
  {
    href: "/abstract-proceedings",
    label: "Abstract Proceedings",
    keywords: "proceedings abstract",
  },
  { href: "/directions", label: "Directions", keywords: "venue location map" },
  { href: "/contact", label: "Contact", keywords: "contact us email" },
];

const EXTRA: SearchEntry[] = [
  { href: "/registration", label: "Registration", keywords: "register" },
  {
    href: "/keynote-speakers",
    label: "Keynote Speakers",
    keywords: "keynote speakers invited",
  },
];

export const SEARCH_INDEX: SearchEntry[] = [
  ...NAV,
  ...COMMITTEES,
  ...MORE,
  ...EXTRA,
];

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

export function searchSite(query: string): SearchEntry[] {
  const q = normalize(query);
  if (!q) return SEARCH_INDEX;
  return SEARCH_INDEX.filter((entry) => {
    const label = normalize(entry.label);
    const keywords = entry.keywords ? normalize(entry.keywords) : "";
    return (
      label.includes(q) ||
      keywords.includes(q) ||
      label.split(/\s+/).some((word) => word.startsWith(q))
    );
  });
}
