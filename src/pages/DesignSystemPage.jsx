/**
 * DesignSystemPage - route "/design-system".
 *
 * A living style guide: every reusable component and design token is shown here
 * with realistic examples. Handy when building new pages, because you can see
 * what already exists before creating something new.
 */
import { useState } from "react";
import { ChevronRight, Gift, PlayCircle, ShoppingBag } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Checkbox } from "../components/ui/Checkbox";
import { Badge } from "../components/ui/Badge";
import { Pagination } from "../components/ui/Pagination";
import { Alert } from "../components/ui/Alert";
import { PetCard } from "../components/cards/PetCard";
import { ProductCard } from "../components/cards/ProductCard";
import { pets } from "../data/pets";
import { products } from "../data/products";
import { px } from "../utils/format";

// Colour swatches. `cls` is a full class name written out in a string so Tailwind can detect it.
const SWATCHES = [
  { name: "Primary", hex: "#003459", cls: "bg-primary" },
  { name: "Navy", hex: "#002A48", cls: "bg-navy" },
  { name: "Cream", hex: "#FCEED5", cls: "bg-cream" },
  { name: "Yellow", hex: "#F7DBA7", cls: "bg-yellow" },
  { name: "Ink", hex: "#00171F", cls: "bg-ink" },
  { name: "Muted", hex: "#667479", cls: "bg-muted" },
  { name: "Success", hex: "#389B75", cls: "bg-success" },
  { name: "Error", hex: "#D94F4F", cls: "bg-error" },
];

// Sample card data for the "Card" section (built from the real mock data)
const SAMPLE_PET = pets[0];
const SAMPLE_PET_WITH_ACTION = {
  ...pets[1],
  id: "SH100",
  name: "SH100 - Shiba Inu Sepia",
  gender: "Female",
  price: 34000000,
  image: px(38987918),
};
const SAMPLE_PRODUCT = products[2];
const SAMPLE_PRODUCT_WITH_ACTION = products[1];

/** Wrapper for one block of the page: title, description and content. */
function Section({ title, description, children }) {
  return (
    <section className="container-page pt-14">
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p className="mb-6 mt-1 text-xs text-muted">{description}</p>
      {children}
    </section>
  );
}

/** Small grey label under a sample card. */
function Caption({ children }) {
  return <p className="mt-3 text-[11px] text-muted">{children}</p>;
}

export default function DesignSystemPage() {
  // State for the interactive demos (pagination + checkboxes)
  const [page, setPage] = useState(1);
  const [remember, setRemember] = useState(false);
  const [agree, setAgree] = useState(true);

  return (
    <>
      <Navbar active="Components" />

      {/* ---------- Page header ---------- */}
      <header className="bg-cream py-12 sm:py-16">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-wide text-primary">Monito • Website design system</p>
          <h1 className="mt-3 text-4xl font-extrabold text-primary sm:text-5xl">Little details. Big consistency.</h1>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-ink">
            A shared visual language for every friend, every essential and every step home. Editable examples organized
            for reusable components and shared styles.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Foundations", "Forms & feedback", "Commerce", "Navigation"].map((tag) => (
              <span key={tag} className="rounded-full bg-white px-4 py-1.5 text-[11px] font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- Colours ---------- */}
      <Section
        title="Color / Brand & semantic palette"
        description="Deep blue brings trust. Soft cream brings warmth. Semantic tones make every state clear."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {SWATCHES.map((swatch) => (
            <div key={swatch.name}>
              <div className={`h-[72px] rounded-lg ${swatch.cls}`} />
              <p className="mt-2 text-[11px] font-semibold text-ink">{swatch.name}</p>
              <p className="text-[10px] text-muted">{swatch.hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Typography ---------- */}
      <Section
        title="Typography / Be Vietnam Pro"
        description="Friendly, confident and readable. Use bold headings with generous line height and quiet supporting text."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-4xl font-extrabold text-primary sm:text-5xl">One more friend</p>
            <p className="text-2xl font-bold text-primary sm:text-3xl">Thousands more fun!</p>
            <p className="text-xl font-bold text-primary">Take a look at our pets</p>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-7 text-ink">
              Having a pet means you have more joy. Find a new friend and all the little things they’ll love.
            </p>
            <p className="text-xs font-semibold text-primary">Email address *</p>
            <p className="text-[11px] text-muted">Gene: Female • Age: 02 months</p>
            <p className="text-[11px] font-bold uppercase text-primary">Pets for best</p>
          </div>
        </div>
      </Section>

      {/* ---------- Buttons ---------- */}
      <Section
        title="Button / Variants & sizes"
        description="48px primary actions, outline secondary actions, quiet links and a clear disabled state. All use a friendly pill silhouette."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button>Explore Now</Button>
          <Button variant="outline" icon={<PlayCircle size={18} />}>
            View Intro
          </Button>
          <Button icon={<ShoppingBag size={16} />}>Add to cart</Button>
          <Button disabled>Continue</Button>
          <Button variant="link" icon={<ChevronRight size={16} />}>
            View more
          </Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button size="sm">Small primary</Button>
          <Button size="sm" variant="outline">
            Small outline
          </Button>
        </div>
      </Section>

      {/* ---------- Inputs ---------- */}
      <Section
        title="Input / Default, filled, error & helper"
        description="Consistent labels, 48px fields and useful helper copy. Validation describes the next step."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Input label="Email address" required placeholder="you@example.com" />
          <Input
            label="Full name"
            required
            defaultValue="Linh Nguyen"
            success
            helper="This is how we’ll address you."
          />
          <Input
            label="Email address"
            required
            defaultValue="linh@"
            error="Enter a valid email, such as you@example.com."
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Input
            label="Password"
            required
            type="password"
            defaultValue="Password12"
            helper="At least 8 characters, one uppercase letter and one number."
          />
          <Select
            label="What is this about?"
            required
            placeholder="Choose a topic"
            options={["Adoption", "Products", "Delivery", "Other"]}
          />
        </div>
      </Section>

      {/* ---------- Checkbox, badge, pagination ---------- */}
      <Section
        title="Checkbox, badge & pagination"
        description="Small controls and metadata share the same navy accent and simple, recognizable forms."
      >
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Checkbox label="Remember me" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <Checkbox
              label="I agree to the Terms of Service"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Badge>Pet knowledge</Badge>
            <Badge tone="gift" icon={<Gift size={13} className="text-error" />}>
              Free Cat Food
            </Badge>
            <Badge tone="success">Available</Badge>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination page={page} total={5} onChange={setPage} />
        </div>
      </Section>

      {/* ---------- Alerts ---------- */}
      <Section
        title="Alert / Information, success & error"
        description="Inline feedback keeps people informed without interrupting their shopping journey."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Alert>Your order includes Free Toy & Free Shaker and Free Cat Food.</Alert>
          <Alert tone="success">Welcome discount applied. You saved 50.000 VND!</Alert>
          <Alert tone="error">That password doesn’t match. Please try again or reset it.</Alert>
        </div>
      </Section>

      {/* ---------- Cards ---------- */}
      <Section
        title="Card / Pets & products"
        description="Photography first, clear details and a heart icon on every card. Examples with an action include the next step."
      >
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <PetCard pet={SAMPLE_PET} />
            <Caption>Pet card · Default</Caption>
          </div>
          <div>
            <PetCard pet={SAMPLE_PET_WITH_ACTION} withAction />
            <Caption>Pet card · Saved + action</Caption>
          </div>
          <div>
            <ProductCard product={SAMPLE_PRODUCT} />
            <Caption>Product card · Default</Caption>
          </div>
          <div>
            <ProductCard product={SAMPLE_PRODUCT_WITH_ACTION} withAction />
            <Caption>Product card · Saved + action</Caption>
          </div>
        </div>
      </Section>

      {/* ---------- Navbar samples ---------- */}
      <Section
        title="Navbar / Desktop"
        description="Shared navigation, search, community CTA and consistent saved-item counts."
      >
        {/* The desktop navbar needs ~960px, so on small screens the samples scroll sideways */}
        <div className="-mx-4 overflow-x-auto sm:mx-0">
          <div className="min-w-[960px]">
            {/* sticky={false}: these are static samples, only the real header should stick */}
            <Navbar variant="white" active="Components" demoCounts sticky={false} />
            <Navbar variant="cream" active="Home" demoCounts sticky={false} />
          </div>
        </div>
      </Section>
    </>
  );
}
