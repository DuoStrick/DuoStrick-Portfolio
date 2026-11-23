"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import type { PostMeta } from "../lib/types";

const CATEGORIES = ["All", "Game Dev", "Tips & Tricks", "Studio News", "Updates"] as const;
const PER_PAGE = 6;

export default function BlogFilters({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState("All");
  const [page,   setPage  ] = useState(1);

  const filtered = active === "All" ? posts : posts.filter(p => p.category === active);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function select(cat: string) { setActive(cat); setPage(1); }

  const pill = (isActive: boolean) => ({
    background: isActive ? "var(--btn-dark-bg)" : "var(--btn-light-bg)",
    color: isActive ? "var(--btn-dark-text)" : "var(--text)",
  });

  return (
    <>
      <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar" role="group" aria-label="Filter by category">
        {CATEGORIES.map(cat => {
          const isActive = active === cat;
          const count = cat === "All" ? posts.length : posts.filter(p => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => select(cat)}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-bold"
              style={pill(isActive)}
              aria-pressed={isActive}
            >
              {cat}
              <span className="ml-1.5 text-xs" style={{ opacity: 0.6 }}>{count}</span>
            </button>
          );
        })}
      </div>

      {paged.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-12">
          {paged.map(post => <BlogCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div className="card text-center py-16 mb-12">
          <p style={{ color: "var(--muted)" }}>No posts in this category yet. Check back soon!</p>
        </div>
      )}

      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="rounded-full px-4 py-2 text-sm font-bold disabled:opacity-40"
            style={pill(false)}
          >← Prev</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPage(n)}
              className="w-10 h-10 rounded-full text-sm font-bold"
              style={pill(n === page)}
              aria-current={n === page ? "page" : undefined}
            >{n}</button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="rounded-full px-4 py-2 text-sm font-bold disabled:opacity-40"
            style={pill(false)}
          >Next →</button>
        </nav>
      )}
    </>
  );
}
