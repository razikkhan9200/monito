/**
 * Pagination - previous / numbered pages / next.
 *
 * It is a "controlled" component: the parent owns the current page and decides what to do
 * when it changes (fetch data, filter a list ...).
 *
 * Props:
 *   page     current page (1-based)
 *   total    total number of pages
 *   onChange called with the new page number
 */
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

export function Pagination({ page, total, onChange }) {
  // Shared style of the two arrow buttons
  const arrowStyle =
    "flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-primary disabled:opacity-40";

  // Build [1, 2, ... total]
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <button
        className={arrowStyle}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((number) => (
        <button
          key={number}
          onClick={() => onChange(number)}
          // Tells screen readers which page is the current one
          aria-current={number === page ? "page" : undefined}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
            number === page ? "bg-primary text-white" : "text-primary hover:bg-cream",
          )}
        >
          {number}
        </button>
      ))}

      <button
        className={arrowStyle}
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
