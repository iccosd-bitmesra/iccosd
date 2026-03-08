/** Client-safe search helpers (no Node APIs). */

export interface SearchIndexEntry {
  href: string;
  label: string;
  text: string;
}

export interface SearchResultEntry {
  href: string;
  label: string;
  snippet?: string;
}

const SNIPPET_LENGTH = 120;
const SNIPPET_PADDING = 40;

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, " ");
}

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

/** Run search over a preloaded index (client or server). */
export function searchEntries(
  entries: SearchIndexEntry[],
  query: string,
): SearchResultEntry[] {
  const q = normalize(query);
  if (!q) {
    return entries.map((e) => ({ href: e.href, label: e.label }));
  }

  const results: SearchResultEntry[] = [];
  for (const entry of entries) {
    const searchable = normalize(entry.label + " " + entry.text);
    const queryWords = q.split(/\s+/).filter(Boolean);
    const matches = queryWords.every((word) => searchable.includes(word));
    if (matches) {
      results.push({
        href: entry.href,
        label: entry.label,
        snippet: extractSnippet(entry.text, query),
      });
    }
  }

  results.sort((a, b) => {
    const aLabelMatch = normalize(a.label).includes(q) ? 1 : 0;
    const bLabelMatch = normalize(b.label).includes(q) ? 1 : 0;
    if (bLabelMatch !== aLabelMatch) return bLabelMatch - aLabelMatch;
    return 0;
  });

  return results;
}
