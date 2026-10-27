/**
 * ProductCard - one product in the "Our Products" grid.
 *
 * Props:
 *   product     { id, name, category, size?, price, image, gift } (see data/products.js)
 *   withAction  show the "Add to cart" button (increments the Navbar cart badge)
 */
import { Gift, ShoppingBag } from "lucide-react";
import { formatPrice } from "../../utils/format";
import { useShop } from "../../context/ShopContext";
import { Button } from "../ui/Button";
import { Card } from "./Card";

export function ProductCard({ product, withAction = false }) {
  const { addToCart } = useShop();

  return (
    <Card image={product.image} alt={product.name}>
      <h3 className="min-h-[2.5rem] text-sm font-bold leading-5 text-ink">{product.name}</h3>

      <p className="text-[11px] text-muted">
        Product: {product.category}
        {/* Size is optional: only render the separator + size when it exists */}
        {product.size && (
          <>
            <span className="mx-1">•</span> Size: {product.size}
          </>
        )}
      </p>

      <p className="mt-auto text-sm font-bold text-ink">{formatPrice(product.price)}</p>

      {/* Free-gift strip */}
      <div className="flex items-center gap-2 rounded-md bg-cream px-2.5 py-2 text-[11px] font-semibold text-primary">
        <Gift size={14} className="shrink-0 text-error" />
        <span>• {product.gift}</span>
      </div>

      {withAction && (
        <Button fullWidth className="mt-1 h-10" icon={<ShoppingBag size={16} />} onClick={addToCart}>
          Add to cart
        </Button>
      )}
    </Card>
  );
}
