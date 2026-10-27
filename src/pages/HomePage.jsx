/**
 * HomePage - route "/".
 *
 * Intentionally empty: only the sticky Navbar is kept. Build new sections
 * inside <main> using the reusable components in `components/ui` and `components/cards`.
 */
import { Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { PATHS } from "../routes/paths";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">Start building here</h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-muted">
          The page is empty. Use the ready-made components to build your layout.
        </p>
        <Link to={PATHS.designSystem} className="mt-6 text-sm font-semibold text-primary hover:underline">
          View all components →
        </Link>
      </main>
    </>
  );
}
