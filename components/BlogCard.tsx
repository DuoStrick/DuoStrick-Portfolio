import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "../lib/types";
import { formatDate, categoryClass } from "../lib/postUtils";
import { Icon } from "./ui";

function Thumb({ post, sizes }: { post: PostMeta; sizes: string }) {
  const hasRealImage = post.image && post.image !== "/og-image.png";
  return hasRealImage ? (
    <Image
      src={post.image}
      alt={post.imageAlt || post.title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      sizes={sizes}
    />
  ) : (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "var(--bg-tint)", color: "var(--brand)" }}>
      <Icon name="book" size={36} />
    </div>
  );
}

interface BlogCardProps { post: PostMeta; featured?: boolean }

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const dateStr = formatDate(post.date);

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group card grid md:grid-cols-[1.15fr_1fr] overflow-hidden">
        <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[340px]">
          <Thumb post={post} sizes="(max-width: 768px) 100vw, 55vw" />
        </div>
        <div className="p-7 md:p-10 flex flex-col justify-between gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="tag tag-brand">Featured</span>
              <span className={`tag ${categoryClass(post.category)}`}>{post.category}</span>
            </div>
            <h2 className="display-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>{post.title}</h2>
            <p className="body mt-4 line-clamp-3">{post.description}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="small" style={{ color: "var(--muted)" }}>
              <time dateTime={post.date}>{dateStr}</time> · {post.readTime} min read
            </p>
            <span className="arrow-dot"><Icon name="arrow-up-right" size={16} /></span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
      <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden" style={{ background: "var(--card)" }}>
        <Thumb post={post} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      </div>
      <div className="pt-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 small" style={{ color: "var(--muted)" }}>
          <span className={`tag ${categoryClass(post.category)}`}>{post.category}</span>
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="line-clamp-2" style={{ fontSize: "1.2rem", fontWeight: 750, letterSpacing: "-0.03em", lineHeight: 1.3 }}>
          {post.title}
        </h3>
        <p className="body small mt-2 line-clamp-2 flex-1">{post.description}</p>
        <p className="small mt-4" style={{ color: "var(--muted)" }}>
          <time dateTime={post.date}>{dateStr}</time>
        </p>
      </div>
    </Link>
  );
}
