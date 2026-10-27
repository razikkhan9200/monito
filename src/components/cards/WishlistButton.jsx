/**
 * WishlistButton - round heart icon on the top-right corner of a card image.
 *
 * Display only: it has no state and does not save anything. To make it work
 * later, keep a list of saved ids (e.g. in ShopContext) and toggle it on click.
 */
import { Heart } from "lucide-react";

export function WishlistButton() {
  return (
    <button
      aria-label="Wishlist"
      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm backdrop-blur transition-transform hover:scale-110"
    >
      <Heart size={18} />
    </button>
  );
}
