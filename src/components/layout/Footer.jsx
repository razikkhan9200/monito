/** Footer: newsletter signup band + links, socials, legal row. */
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../ui/SocialIcons";
import { NAV_LINKS } from "../../routes/paths";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <footer id="subscribe" className="mt-20 bg-cream pb-8 pt-12 rounded-t-[40px]">
      <div className="container-page">
        <div className="flex flex-col gap-5 rounded-2xl bg-primary p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xs text-xl font-bold leading-7 text-white sm:text-2xl">
            Register now so you don&apos;t miss our programs
          </h2>
          {done ? (
            <p className="flex items-center gap-2 text-sm font-semibold text-white" role="status">
              <CheckCircle2 size={18} /> Thanks! You&apos;re subscribed.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row lg:max-w-xl">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                placeholder="Enter your Email"
                className="h-12 min-w-0 flex-1 rounded-lg border border-[#cfd6d9] px-4 text-sm outline-none focus:border-primary"
              />
              <Button type="submit">Subscribe Now</Button>
            </form>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <nav className="flex gap-8 text-sm font-semibold text-primary" aria-label="Footer">
            {NAV_LINKS
              .map((l) => (
                <Link key={l.label} to={l.to} className="hover:underline">
                  {l.label}
                </Link>
              ))}
          </nav>
          <div className="flex gap-5 text-primary">
            {[[FacebookIcon, "Facebook"], [InstagramIcon, "Instagram"], [TwitterIcon, "Twitter"], [YoutubeIcon, "YouTube"]].map(([Icon, name]) => (
              <a key={name} href="#" aria-label={name} className="hover:opacity-70">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-4 border-t border-primary/15 pt-6 text-xs text-muted sm:grid-cols-3">
          <p>© 2026 Monito. All rights reserved.</p>
          <Logo className="justify-self-center" />
          <p className="flex gap-6 sm:justify-self-end">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
