"use client";

import { IntentLink } from "@/components/intent-link";
import { useEffect, useRef, useState, useCallback } from "react";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import {
  searchEntries,
  type SearchIndexEntry,
  type SearchResultEntry,
} from "@/lib/search-utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEBOUNCE_MS = 200;
const SEARCH_INDEX_URL = "/search-index.json";

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultEntry[]>([]);
  const [indexLoading, setIndexLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indexRef = useRef<SearchIndexEntry[] | null>(null);

  const resetAndClose = useCallback(() => {
    setQuery("");
    setResults([]);
    setHighlightedIndex(0);
    onClose();
  }, [onClose]);

  // Load search index when modal opens (once per session)
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    const run = () => {
      if (indexRef.current !== null) {
        setResults(searchEntries(indexRef.current, ""));
        setQuery("");
        setHighlightedIndex(0);
        return;
      }
      setIndexLoading(true);
      fetch(SEARCH_INDEX_URL)
        .then((res) => res.json())
        .then((data: SearchIndexEntry[]) => {
          indexRef.current = data;
          setResults(searchEntries(data, ""));
        })
        .catch(() => setResults([]))
        .finally(() => setIndexLoading(false));
      setQuery("");
      setHighlightedIndex(0);
    };

    const tid = setTimeout(run, 0);
    return () => clearTimeout(tid);
  }, [isOpen]);

  // Run client-side search when query changes (debounced)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!isOpen) return;

    debounceRef.current = setTimeout(() => {
      const index = indexRef.current;
      if (index === null) return;
      setResults(searchEntries(index, query));
      setHighlightedIndex(0);
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetAndClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((i) => (i < results.length - 1 ? i + 1 : 0));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((i) => (i > 0 ? i - 1 : results.length - 1));
        return;
      }
      if (e.key === "Enter" && results[highlightedIndex]) {
        e.preventDefault();
        window.location.href = results[highlightedIndex].href;
        resetAndClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, highlightedIndex, resetAndClose]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const item = el.querySelector(`[data-index="${highlightedIndex}"]`);
    item?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [highlightedIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const loading = indexLoading;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Search site"
      onClick={(e) => e.target === e.currentTarget && resetAndClose()}
    >
      <div
        className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
          <SearchIcon className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages and content…"
            className="flex-1 min-w-0 py-2 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoComplete="off"
            aria-label="Search"
          />
          {loading ? (
            <Loader2 className="w-5 h-5 text-muted-foreground animate-spin shrink-0" />
          ) : (
            <kbd className="hidden sm:inline text-xs text-muted-foreground border border-gray-200 rounded px-2 py-1">
              Esc
            </kbd>
          )}
        </div>
        <div
          ref={listRef}
          className="max-h-[min(60vh,400px)] overflow-y-auto py-2"
        >
          {loading && results.length === 0 ? (
            <p className="px-4 py-6 text-center text-muted-foreground text-sm">
              Loading…
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-6 text-center text-muted-foreground text-sm">
              No pages match &quot;{query}&quot;
            </p>
          ) : (
            <ul className="space-y-0.5" role="listbox">
              {results.map((entry, i) => (
                <SearchResultItem
                  key={entry.href}
                  entry={entry}
                  index={i}
                  isHighlighted={i === highlightedIndex}
                  onClose={resetAndClose}
                />
              ))}
            </ul>
          )}
        </div>
        <p className="px-4 py-2 text-xs text-muted-foreground border-t border-gray-100">
          <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd>{" "}
          to move • <kbd className="font-mono">Enter</kbd> to open
        </p>
      </div>
    </div>
  );
}

function SearchResultItem({
  entry,
  index,
  isHighlighted,
  onClose,
}: {
  entry: SearchResultEntry;
  index: number;
  isHighlighted: boolean;
  onClose: () => void;
}) {
  return (
    <li role="option" aria-selected={isHighlighted} data-index={index}>
      <IntentLink
        href={entry.href}
        onClick={onClose}
        className={`flex flex-col gap-0.5 px-4 py-2.5 text-left text-sm transition-colors ${
          isHighlighted
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-muted"
        }`}
      >
        <span className="font-medium">{entry.label}</span>
        {entry.snippet && (
          <span
            className={`text-xs truncate ${isHighlighted ? "text-primary/80" : "text-muted-foreground"}`}
          >
            {entry.snippet}
          </span>
        )}
      </IntentLink>
    </li>
  );
}
