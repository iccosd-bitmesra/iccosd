import path from "path";
import fs from "fs";
import { loadContent } from "./markdown";
import { searchEntries, type SearchIndexEntry } from "./search-utils";

export type ContentSearchEntry = {
  href: string;
  label: string;
  snippet?: string;
};

/** Map content file name (without .md) to route and label. */
const CONTENT_TO_PAGE: Record<string, { href: string; label: string }> = {
  home: { href: "/", label: "Home" },
  about: { href: "/about", label: "About" },
  "call-for-papers": { href: "/call-for-papers", label: "Call for Papers" },
  "committee-organizing": {
    href: "/committee/organizing",
    label: "Organizing Committee",
  },
  "committee-technical": {
    href: "/committee/technical",
    label: "Technical Program Committee",
  },
  "committee-advisory": {
    href: "/committee/advisory",
    label: "Advisory Committee",
  },
  "student-volunteers": {
    href: "/student-volunteers",
    label: "Student Volunteers",
  },
  "abstract-proceedings": {
    href: "/abstract-proceedings",
    label: "Abstract Proceedings",
  },
  directions: { href: "/directions", label: "Directions" },
  contact: { href: "/contact", label: "Contact" },
  registration: { href: "/registration", label: "Registration" },
};
/** Pages with no markdown file (e.g. hardcoded pages). */
const STATIC_PAGES: { href: string; label: string }[] = [
  { href: "/keynote-speakers", label: "Keynote Speakers" },
];

/** Strip markdown to plain text for search. */
function markdownToPlainText(md: string): string {
  let text = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^#{1,6}\s+/gm, " ") // headings
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1") // code
    .replace(/^\s*[-*+]\s+/gm, " ") // list items
    .replace(/^\s*\d+\.\s+/gm, " ") // numbered list
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

function getContentFiles(): string[] {
  const contentDir = path.join(process.cwd(), "content");
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
}

export function buildContentIndex(): Map<
  string,
  { label: string; text: string }
> {
  const index = new Map<string, { label: string; text: string }>();
  const files = getContentFiles();

  for (const file of files) {
    const base = file.replace(/\.md$/, "");
    const page = CONTENT_TO_PAGE[base];
    if (!page) continue; // skip footer and any unmapped files

    try {
      const { content } = loadContent(file);
      const text = markdownToPlainText(content);
      index.set(page.href, { label: page.label, text });
    } catch {
      // skip failed files
    }
  }

  for (const page of STATIC_PAGES) {
    if (!index.has(page.href)) {
      index.set(page.href, { label: page.label, text: "" });
    }
  }

  return index;
}

/** Returns the full search index as an array for JSON export (build script) or server use. */
export function getSearchIndexArray(): SearchIndexEntry[] {
  const index = buildContentIndex();
  return Array.from(index.entries()).map(([href, { label, text }]) => ({
    href,
    label,
    text,
  }));
}

export function searchContent(query: string): ContentSearchEntry[] {
  return searchEntries(getSearchIndexArray(), query);
}
