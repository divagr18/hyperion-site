import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "docs");

export interface DocContent {
  slug: string;
  title: string;
  content: string;
  category?: string;
  [key: string]: any;
}

export function getDocBySlug(slug: string): DocContent | null {
  try {
    const realSlug = slug.endsWith(".md") ? slug : `${slug}.md`;
    const fullPath = path.join(docsDirectory, realSlug);
    
    // Security check: ensure the path is inside the docs directory
    const resolvedPath = path.resolve(fullPath);
    if (!resolvedPath.startsWith(path.resolve(docsDirectory))) {
      return null;
    }

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: slug.replace(/\.md$/, ""),
      title: data.title || slug.split('/').pop()?.replace(/-/g, ' ') || "",
      content,
      ...data,
    };
  } catch (error) {
    console.error(`Error loading doc for slug ${slug}:`, error);
    return null;
  }
}

export function getAllDocSlugs(dir: string = docsDirectory): string[] {
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: Directory not found: ${dir}`);
    return [];
  }
  const slugs: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
        // Skip internal or hidden directories
        if (item.name === "internal" || item.name.startsWith(".")) continue;
        
        const subSlugs = getAllDocSlugs(path.join(dir, item.name));
        slugs.push(...subSlugs.map(s => `${item.name}/${s}`));
    } else if (item.name.endsWith(".md")) {
      slugs.push(item.name.replace(/\.md$/, ""));
    }
  }

  return slugs;
}
