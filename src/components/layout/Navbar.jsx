/**
 * Navbar - site header.
 *
 * Features
 *  - Sticky: stays at the top of the viewport while scrolling.
 *  - Desktop (lg+): logo, links, search, CTA, currency, heart + cart.
 *  - Mobile: logo + icons + hamburger that opens a dropdown menu.
 *
 * Props
 *   active      label of the link to underline ("Home", "Category" ...)
 *   variant     "cream" (default) | "white" background
 *   sticky      set false to render a normal static header (used for the design-system samples)
 *   demoCounts  show a fixed demo number on the cart instead of the real one
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { useShop } from "../../context/ShopContext";
import { useGoTo } from "../../hooks/useGoTo";
import { NAV_LINKS, PATHS } from "../../routes/paths";
import { cn } from "../../utils/cn";

/** Small blue bubble with a number, shown on the cart icon. Hidden when 0. */
function CountBadge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-sky px-1 text-[9px] font-bold text-white">
      {count}
    </span>
  );
}

export function Navbar({ active = "Home", variant = "cream", sticky = true, demoCounts = false }) {
  const [menuOpen, setMenuOpen] = useState(false); // mobile dropdown
  const [scrolled, setScrolled] = useState(false); // true once the page is scrolled a little

  const { cartCount } = useShop();
  const goTo = useGoTo();
  const cartItems = demoCounts ? 3 : cartCount;

  // Add a drop shadow once the user scrolls, so the sticky bar separates from the content
  useEffect(() => {
    if (!sticky) return;

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // run once for the initial position
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [sticky]);

  // If the window is resized up to desktop width, close the mobile menu
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setMenuOpen(false);

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "z-40 w-full transition-shadow duration-300",
        // NOTE: `sticky` only works if no ancestor has overflow hidden/clip (see HomePage)
        sticky ? "sticky top-0" : "relative",
        variant === "cream" ? "bg-cream" : "bg-white",
        sticky && (scrolled || menuOpen) && "shadow-[0_4px_20px_rgb(0_23_31/0.10)]",
      )}
    >
      {/* ---------- Top bar ---------- */}
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-[72px] lg:h-[88px]">
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-6 xl:gap-8">
          {/* Arbitrary variant: shrink only the big "Monito" word on small screens */}
          <Logo className="[&>span:first-child]:text-[26px] sm:[&>span:first-child]:text-[32px]" />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  "relative py-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70",
                  // Underline for the active link, drawn with an ::after pseudo-element
                  active === link.label &&
                    "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded after:bg-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: search, CTA, currency, icons, hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 xl:gap-6">
          {/* Search is only shown on very wide screens; mobile gets one inside the dropdown */}
          <div
            className={cn(
              "hidden h-10 w-[200px] items-center gap-2 rounded-full px-4 text-muted xl:flex",
              variant === "cream" ? "bg-white" : "bg-cream-soft",
            )}
          >
            <Search size={14} />
            <input
              aria-label="Search"
              placeholder="Search something here!"
              className="w-full bg-transparent text-[11px] outline-none placeholder:text-muted"
            />
          </div>

          <Button className="hidden h-11 md:inline-flex" onClick={() => goTo(PATHS.designSystem)}>
            Join the community
          </Button>

          <button className="hidden items-center gap-1 text-sm font-bold text-primary md:flex">
            VND <ChevronDown size={12} />
          </button>

          {/* Wishlist icon: display only (no state / count) */}
          <button className="p-1 text-primary" aria-label="Wishlist">
            <Heart size={22} />
          </button>

          <button className="relative p-1 text-primary" aria-label="Cart">
            <ShoppingBag size={22} />
            <CountBadge count={cartItems} />
          </button>

          {/* Hamburger - hidden on desktop */}
          <button
            className="-mr-1 p-1 text-primary lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile dropdown ---------- */}
      {menuOpen && (
        // max-h + overflow lets the menu scroll if it is taller than the screen
        <nav className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto pb-5 lg:hidden" aria-label="Mobile">
          <div className="mb-3 flex h-11 items-center gap-2 rounded-full bg-white px-4 text-muted">
            <Search size={16} />
            <input
              aria-label="Search"
              placeholder="Search something here!"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </div>

          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)} // close the menu after choosing a link
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-semibold text-primary active:bg-white/70",
                  active === link.label ? "bg-white/80" : "hover:bg-white/60",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* The CTA is hidden in the top bar below `md`, so it lives here instead */}
          <Button
            fullWidth
            className="mt-3 md:hidden"
            onClick={() => {
              setMenuOpen(false);
              goTo(PATHS.designSystem);
            }}
          >
            Join the community
          </Button>
        </nav>
      )}
    </header>
  );
}
