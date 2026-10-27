/**
 * ShopContext - tiny global store for the cart counter.
 *
 * Why context? The "Add to cart" buttons live deep inside the product cards while
 * the counter badge is in the Navbar. Context lets both sides share state without
 * passing props through every component in between.
 *
 * Usage in any component:
 *   const { cartCount, addToCart } = useShop();
 */
import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  // We only need a number for the badge (no real cart items in this demo)
  const [cartCount, setCartCount] = useState(0);

  const value = {
    cartCount,
    addToCart: () => setCartCount((count) => count + 1),
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

/** Hook to read the shop state. Throws if used outside <ShopProvider>. */
export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside <ShopProvider>");
  return context;
}
