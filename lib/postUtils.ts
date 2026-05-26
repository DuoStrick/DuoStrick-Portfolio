/**
 * Pure utility functions — no Node.js APIs.
 * Safe to import in both Server and Client components.
 */

/** Format a date string like "May 20, 2026" */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Category → CSS class suffix */
export function categoryClass(cat: string): string {
  switch (cat) {
    case "Game Dev":       return "cat-game-dev";
    case "Tips & Tricks":  return "cat-tips";
    case "Studio News":    return "cat-studio-news";
    case "Updates":        return "cat-updates";
    default:               return "badge-default";
  }
}
