/** Shared type definitions — safe to import in both Server and Client components */

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readTime: number;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}
