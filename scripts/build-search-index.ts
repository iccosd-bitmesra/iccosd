/**
 * Build-time script: generates public/search-index.json for client-side search.
 * Run before next build: pnpm run build:search
 */
import fs from "fs";
import path from "path";
import { getSearchIndexArray } from "../lib/search-content";

const outPath = path.join(process.cwd(), "public", "search-index.json");
const index = getSearchIndexArray();
fs.writeFileSync(outPath, JSON.stringify(index), "utf-8");
console.log(`Wrote ${index.length} entries to ${outPath}`);
