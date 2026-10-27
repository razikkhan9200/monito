/**
 * Logo - "Monito / Pets for Best" wordmark. Clicking it goes to the home page.
 * `className` lets the parent tweak the size (the Navbar shrinks it on mobile).
 */
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { PATHS } from "../../routes/paths";

export function Logo({ className }) {
  return (
    <Link
      to={PATHS.home}
      aria-label="Monito home"
      className={cn("inline-flex flex-col items-center leading-none text-primary", className)}
    >
      <span className="text-[32px] font-extrabold tracking-tight">Monito</span>
      <span className="mt-0.5 text-[9px] font-bold">Pets for Best</span>
    </Link>
  );
}
