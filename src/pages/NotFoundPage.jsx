/**
 * NotFoundPage - shown for any URL that does not match a route (path="*").
 */
import { Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { PATHS } from "../routes/paths";

export default function NotFoundPage() {
  return (
    <>
      {/* active="" -> no nav link is underlined, since we are not on any of them */}
      <Navbar active="" />

      <main className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-sky">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-primary sm:text-6xl">Oops, page not found</h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-muted">The page you’re looking for does not exist.</p>

        <Link
          to={PATHS.home}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-navy"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
