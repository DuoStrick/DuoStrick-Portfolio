"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay in milliseconds */
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

/**
 * Wraps children in a div that fades/slides in when it enters the viewport.
 * Uses IntersectionObserver — no layout shift, respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour reduced-motion preference — show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("shown");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => el.classList.add("shown"), delay);
          io.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${direction} ${className}`} style={style}>
      {children}
    </div>
  );
}
