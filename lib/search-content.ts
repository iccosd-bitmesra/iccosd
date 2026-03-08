import path from "path";
import fs from "fs";
import { loadContent } from "./markdown";

export interface ContentSearchEntry {
  href: string;
  label: string;
  snippet?: string;
}

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

const SNIPPET_LENGTH = 120;
const SNIPPET_PADDING = 40;

function extractSnippet(
  text: string,
  query: string,
  maxLength: number = SNIPPET_LENGTH,
): string {
  const lower = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q)
    return text.slice(0, maxLength) + (text.length > maxLength ? "…" : "");

  const pos = lower.indexOf(q);
  if (pos === -1) {
    // try word boundaries
    const words = q.split(/\s+/).filter(Boolean);
    for (const word of words) {
      const p = lower.indexOf(word);
      if (p !== -1) {
        const start = Math.max(0, p - SNIPPET_PADDING);
        const end = Math.min(text.length, p + word.length + SNIPPET_PADDING);
        let snippet = text.slice(start, end);
        if (start > 0) snippet = "…" + snippet;
        if (end < text.length) snippet = snippet + "…";
        return snippet.replace(/\s+/g, " ").trim();
      }
    }
    return text.slice(0, maxLength) + (text.length > maxLength ? "…" : "");
  }

  const start = Math.max(0, pos - SNIPPET_PADDING);
  const end = Math.min(text.length, pos + q.length + SNIPPET_PADDING);
  let snippet = text.slice(start, end);
  if (start > 0) snippet = "…" + snippet;
  if (end < text.length) snippet = snippet + "…";
  return snippet.replace(/\s+/g, " ").trim();
}

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, " ");
}

export function searchContent(query: string): ContentSearchEntry[] {
  const index = buildContentIndex();
  const q = normalize(query);
  const results: ContentSearchEntry[] = [];

  if (!q) {
    for (const [href, { label }] of index) {
      results.push({ href, label });
    }
    return results;
  }

  for (const [href, { label, text }] of index) {
    const searchable = normalize(label + " " + text);
    const queryWords = q.split(/\s+/).filter(Boolean);
    const matches = queryWords.every((word) => searchable.includes(word));
    if (matches) {
      const snippet = extractSnippet(text, query);
      results.push({ href, label, snippet });
    }
  }

  // Sort: label match first, then by position of match in content
  results.sort((a, b) => {
    const aLabelMatch = normalize(a.label).includes(q) ? 1 : 0;
    const bLabelMatch = normalize(b.label).includes(q) ? 1 : 0;
    if (bLabelMatch !== aLabelMatch) return bLabelMatch - aLabelMatch;
    return 0;
  });

  return results;
}
