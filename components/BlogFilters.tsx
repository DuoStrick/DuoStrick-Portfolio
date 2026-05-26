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

  return (
    <>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {CATEGORIES.map(cat => {
          const isActive = active === cat;
          const count = cat === "All" ? null : posts.filter(p => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => select(cat)}
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              style={isActive
                ? { background: "var(--pill-active-bg)", color: "var(--pill-active-color)", border: "1.5px solid var(--pill-active-bg)" }
                : { background: "var(--pill-bg)",        color: "var(--pill-color)",        border: "1.5px solid var(--pill-border)" }}
              aria-pressed={isActive}
            >
              {cat}
              {count !== null && <span className="ml-1.5 text-xs opacity-60">{count}</span>}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {paged.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {paged.map(post => <BlogCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div className="text-center py-16 rounded-2xl mb-12" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <p style={{ color: "var(--muted)" }}>No posts in this category yet. Check back soon!</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "var(--pill-bg)", color: page === 1 ? "var(--muted)" : "var(--body-text)", border: "1px solid var(--border)", cursor: page === 1 ? "not-allowed" : "pointer" }}
          >← Prev</button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPage(n)}
              className="w-9 h-9 rounded-full text-sm font-medium"
              style={{ background: n === page ? "var(--pill-active-bg)" : "var(--pill-bg)", color: n === page ? "var(--pill-active-color)" : "var(--body-text)", border: "1px solid var(--border)" }}
              aria-current={n === page ? "page" : undefined}
            >{n}</button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "var(--pill-bg)", color: page === totalPages ? "var(--muted)" : "var(--body-text)", border: "1px solid var(--border)", cursor: page === totalPages ? "not-allowed" : "pointer" }}
          >Next →</button>
        </nav>
      )}
    </>
  );
}
