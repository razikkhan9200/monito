/**
 * ArticleCard - one blog post teaser in the "Useful Pet Knowledge" section.
 *
 * Props:
 *   article  { id, tag, title, excerpt, image } (see data/articles.js)
 *
 * It does not use <Card /> because it has a 4:3 photo, and a tag badge.
 */
import { Badge } from "../ui/Badge";

export function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="overflow-hidden rounded-xl">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start gap-3 px-2 pb-3 pt-4">
        <Badge>{article.tag}</Badge>
        <h3 className="text-base font-bold leading-6 text-ink">{article.title}</h3>
        <p className="text-xs leading-5 text-muted">{article.excerpt}</p>
      </div>
    </article>
  );
}
