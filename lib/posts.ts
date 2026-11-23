/**
 * Server-only data layer — uses Node.js fs/path.
 * Do NOT import this file in client components ("use client").
 * Import shared types from './types' instead.
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostMeta, Post } from "./types";
import { getAppForPostTags } from "../data/apps";

export type { PostMeta, Post };

const POSTS_DIR = path.join(process.cwd(), "content/posts");

function readPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

function parseMeta(filename: string): PostMeta {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "DuoStrick Studio",
    category: data.category ?? "Game Dev",
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image ?? "/og-image.png",
    imageAlt: data.imageAlt ?? data.title ?? "",
    readTime: Number(data.readTime) || 5,
    featured: Boolean(data.featured),
    summary: Array.isArray(data.summary) ? data.summary : [],
  };
}

/** All posts sorted newest-first */
export function getAllPosts(): PostMeta[] {
  return readPostFiles()
    .map(parseMeta)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Posts most related to `post`, best first: same app outranks shared tags,
 * which outrank a shared category; ties go to the newer post.
 */
export function getRelatedPosts(post: PostMeta, limit = 4): PostMeta[] {
  const app = getAppForPostTags(post.tags);
  const tags = new Set(post.tags);

  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const sameApp = app !== null && getAppForPostTags(p.tags)?.id === app.id;
      const sharedTags = p.tags.filter((t) => tags.has(t)).length;
      const score = (sameApp ? 100 : 0) + sharedTags * 3 + (p.category === post.category ? 1 : 0);
      return { p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
}

/** Single post (frontmatter + raw markdown content) or null if not found */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    author: data.author ?? "DuoStrick Studio",
    category: data.category ?? "Game Dev",
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image ?? "/og-image.png",
    imageAlt: data.imageAlt ?? data.title ?? "",
    readTime: Number(data.readTime) || 5,
    featured: Boolean(data.featured),
    summary: Array.isArray(data.summary) ? data.summary : [],
    content,
  };
}

/** For generateStaticParams */
export function getAllSlugs(): { slug: string }[] {
  return readPostFiles().map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

/** Extract H2/H3 headings from raw markdown for a Table of Contents */
export function extractHeadings(
  markdown: string
): { id: string; text: string; level: number }[] {
  const pattern = /^(#{2,3})\s+(.+)$/gm;
  const results: { id: string; text: string; level: number }[] = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/`[^`]*`/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-+|-+$/g, "");
    results.push({ id, text, level });
  }
  return results;
}
