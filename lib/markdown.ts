import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentData {
  frontmatter: Record<string, unknown>;
  content: string;
  raw: string;
}

export interface ParsedMarkdown extends ContentData {
  sections?: Record<string, string>;
}

/**
 * Parse markdown file with YAML frontmatter
 */
export function parseMarkdown(filePath: string): ParsedMarkdown {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Parse content sections delimited by ---SECTION_NAME---
    const sections: Record<string, string> = {};
    const sectionRegex = /---(\w+)---\n([\s\S]*?)(?=---\w+---|$)/g;
    let match;

    while ((match = sectionRegex.exec(content)) !== null) {
      sections[match[1].toLowerCase()] = match[2].trim();
    }

    return {
      frontmatter: data,
      content: content.replace(sectionRegex, "").trim(),
      raw: fileContent,
      sections,
    };
  } catch (error) {
    console.error(`Error parsing markdown file: ${filePath}`, error);
    return {
      frontmatter: {},
      content: "",
      raw: "",
    };
  }
}

/**
 * Load markdown file from content directory
 */
export function loadContent(fileName: string): ParsedMarkdown {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, fileName);
  return parseMarkdown(filePath);
}

/**
 * Parse JSON data block in markdown (e.g., for lists, arrays)
 */
export function parseJsonBlock(content: string, blockName: string): unknown {
  const blockRegex = new RegExp(
    `\`\`\`json:${blockName}\n([\s\S]*?)\n\`\`\``,
    "i",
  );
  const match = content.match(blockRegex);

  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch (error) {
      console.error(`Error parsing JSON block: ${blockName}`, error);
      return null;
    }
  }

  return null;
}

/**
 * Get all markdown files in a directory
 */
export function getAllContentFiles(subdir: string = ""): string[] {
  try {
    const contentDir = path.join(process.cwd(), "content", subdir);
    if (!fs.existsSync(contentDir)) {
      return [];
    }
    return fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));
  } catch (error) {
    console.error(`Error reading content directory: ${subdir}`, error);
    return [];
  }
}

/**
 * Cache for parsed markdown (simple in-memory cache)
 */
const markdownCache: Map<string, ParsedMarkdown> = new Map();

export function loadContentWithCache(fileName: string): ParsedMarkdown {
  if (markdownCache.has(fileName)) {
    return markdownCache.get(fileName)!;
  }

  const content = loadContent(fileName);
  markdownCache.set(fileName, content);
  return content;
}

export function clearMarkdownCache(): void {
  markdownCache.clear();
}
