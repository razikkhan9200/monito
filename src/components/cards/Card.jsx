/**
 * Card - the shared shell for PetCard and ProductCard.
 *
 * Layout: square photo (with a heart icon on top) + a text area below.
 * The text area is `children`, so each card type decides what goes inside.
 *
 * Props:
 *   image     photo URL
 *   alt       alt text for the photo
 *   children  content shown under the photo
 */
import { WishlistButton } from "./WishlistButton";

export function Card({ image, alt, children }) {
  return (
    // `group` lets the image react when the whole card is hovered (zoom effect below)
    <article className="group flex h-full flex-col rounded-2xl bg-white p-2.5 shadow-card transition-shadow hover:shadow-card-hover">
      {/* relative: positions the heart; overflow-hidden clips the zoomed image to the rounded corners */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={alt}
          loading="lazy" // don't download images that are far below the fold
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <WishlistButton />
      </div>

      {/* flex-1 makes the text area fill the card so cards in a row have equal height */}
      <div className="flex flex-1 flex-col gap-2 px-2 pb-2 pt-3">{children}</div>
    </article>
  );
}
