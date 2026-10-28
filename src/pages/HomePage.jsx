/**
 * HomePage - route "/". Sections follow the Home design top to bottom:
 * hero, pets, promo banner, products, sellers, adoption, knowledge, footer.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight, CirclePlay } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { PetCard } from "../components/cards/PetCard";
import { ProductCard } from "../components/cards/ProductCard";
import { ArticleCard } from "../components/cards/ArticleCard";
import { pets } from "../data/pets";
import { products } from "../data/products";
import { articles } from "../data/articles";
import hero from "../assets/hero.png";
import banner from "../assets/banner.png";
import adopt from "../assets/adopt.jpg";

const SELLERS = [
  { name: "PETGOOD", cls: "font-extrabold text-primary" },
  { name: "ROYAL CANIN", cls: "font-extrabold text-error" },
  { name: "SHEBA", cls: "font-extrabold text-primary" },
  { name: "pedigree", cls: "font-bold text-primary" },
  { name: "whiskas", cls: "font-bold text-primary" },
  { name: "FELIX", cls: "font-extrabold text-primary" },
  { name: "Kit Cat", cls: "font-extrabold text-primary" },
];

/** Section heading: small lead-in line, big title, optional "View more" button on the right. */
function SectionHead({ lead, title, action = "View more" }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm text-ink">{lead}</p>
        <h2 className="mt-1 text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      </div>
      <Button variant="outline" size="sm" icon={<ChevronRight size={14} />} className="hidden sm:inline-flex">
        {action}
      </Button>
    </div>
  );
}

/** Headline + copy + two buttons, reused by the hero and the promo banner. */
function Pitch({ center = false, small = false, hero = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h1
        className={
          small
            ? "text-3xl font-extrabold text-primary sm:text-4xl"
            : "text-4xl font-extrabold leading-tight text-primary sm:text-5xl lg:text-[56px]"
        }
      >
        One more friend
      </h1>
      <p className={`mt-3 font-bold text-primary ${small ? "text-xl" : "text-2xl sm:text-3xl lg:text-4xl"}`}>Thousands more fun!</p>
      <p className={`mt-5 leading-7 text-ink ${hero ? "max-w-md text-base" : "text-sm"} ${center ? "mx-auto max-w-md" : "max-w-md"}`}>
        Having a pet means you have more joy, a happy person who will always be with you to have fun. We have 200+
        different pets that can meet your needs!
      </p>
      <div className={`mt-6 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
        <Button variant="outline" icon={<CirclePlay size={16} />}>View Intro</Button>
        <Button>Explore Now</Button>
      </div>
    </div>
  );
}

export default function HomePage() {
  // Scroll to #pets / #adopt / #subscribe when a menu link points there
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0 });
  }, [hash]);

  return (
    <>
      {/* Navbar is a direct child of the page so `sticky` works for the whole scroll, not just the hero */}
      <Navbar />

      {/* Hero: text in the page column, image pinned bottom-right and bleeding off the right edge */}
      <section className="relative overflow-hidden rounded-b-[40px] bg-cream sm:rounded-b-[56px]">
        <div className="container-page grid items-center lg:min-h-[575px]">
          <div className="py-10 lg:max-w-[46%] lg:py-16">
            <Pitch hero />
          </div>
        </div>
        <img
          src={hero}
          alt="Smiling woman holding a corgi puppy"
          className="mx-auto block w-full max-w-[560px] lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:w-[52%] lg:max-w-[740px]"
        />
      </section>

      <main>
        <section id="pets" className="container-page scroll-mt-24 pt-14">
          <SectionHead lead="What's new?" title="Take A Look At Some Of Our Pets" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
          </div>
        </section>

        <section className="container-page pt-14">
          <div className="grid overflow-hidden rounded-2xl bg-cream md:grid-cols-[38%_1fr]">
            <img src={banner} alt="Woman laughing with a corgi puppy" className="h-56 w-full object-cover object-left md:h-full" />
            <div className="flex items-center justify-center px-6 py-10"><Pitch center small /></div>
          </div>
        </section>

        <section className="container-page pt-14">
          <SectionHead lead="Hard to choose right products for your pets?" title="Our Products" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        <section className="container-page pt-14">
          <SectionHead lead="Proud to be part of" title="Pet Sellers" action="View all our sellers" />
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-xl">
            {SELLERS.map((s) => <li key={s.name} className={s.cls}>{s.name}</li>)}
          </ul>
        </section>

        <section id="adopt" className="container-page scroll-mt-24 pt-14">
          <div className="grid overflow-hidden rounded-2xl bg-cream md:grid-cols-2">
            <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
              <h2 className="text-3xl font-extrabold text-primary">Adoption</h2>
              <p className="mt-3 text-xl font-bold text-primary">We need help. So do they.</p>
              <p className="mt-4 max-w-sm text-xs leading-5 text-ink">
                Adopt a pet and give it a home. There are thousands of loving companions waiting for their forever family.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button icon={<CirclePlay size={16} />}>Explore Now</Button>
                <Button variant="outline">View Intro</Button>
              </div>
            </div>
            <img src={adopt} alt="A hand holding a dog's paw" className="h-56 w-full object-cover md:h-full" />
          </div>
        </section>

        <section className="container-page pt-14">
          <SectionHead lead="You already know?" title="Useful Pet Knowledge" />
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
