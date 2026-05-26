/**
 * Product & category catalog data.
 *
 * This is the single place to edit what appears in the Categories grid,
 * Featured Products grid, and the /products catalog page.
 *
 * To add a product: append an object to `products`, set `categorySlug`
 * to a valid category, and drop a matching photo in /public/products/
 * (see public/products/README.md for the naming convention).
 */

export type CategorySlug =
  | "drinkware"
  | "eco-friendly"
  | "bags"
  | "notebooks"
  | "gift-sets"
  | "tech-desk"
  | "apparel"
  | "writing"
  | "lifestyle";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** One-line description used on the catalog page. */
  blurb: string;
  /** 3:4 portrait image. Swap the placeholder for a real photo. */
  image: string;
  /** Descriptive alt text — never leave generic. */
  imageAlt: string;
}

export interface Product {
  slug: string;
  name: string;
  /** Starting per-unit price in INR. */
  fromPrice: number;
  /** Minimum order quantity (pieces). */
  moq: number;
  categorySlug: CategorySlug;
  /** One-line selling description. */
  description: string;
  /** Square (1:1) image. Swap the placeholder for a real product photo. */
  image: string;
  /** Descriptive alt text — never leave generic. */
  imageAlt: string;
  /** Surfaced in the homepage "Featured" grid when true. */
  featured?: boolean;
}

export const categories: Category[] = [
  {
    slug: "drinkware",
    name: "Drinkware",
    blurb: "Bottles, tumblers and mugs that earn a spot on every desk.",
    image: "/products/category-drinkware.svg",
    imageAlt: "Branded corporate drinkware including steel bottles and tumblers",
  },
  {
    slug: "eco-friendly",
    name: "Eco-Friendly",
    blurb: "Sustainable materials your sustainability team will sign off on.",
    image: "/products/category-eco-friendly.svg",
    imageAlt: "Eco-friendly corporate gifts made from bamboo and recycled materials",
  },
  {
    slug: "bags",
    name: "Bags",
    blurb: "Totes, laptop bags and travel kits, branded edge to edge.",
    image: "/products/category-bags.svg",
    imageAlt: "Branded corporate tote and laptop bags",
  },
  {
    slug: "notebooks",
    name: "Notebooks",
    blurb: "Premium journals and planners with custom covers and inserts.",
    image: "/products/category-notebooks.svg",
    imageAlt: "Premium branded corporate notebooks and journals",
  },
  {
    slug: "gift-sets",
    name: "Gift Sets",
    blurb: "Curated, ready-to-gift boxes for onboarding and festivals.",
    image: "/products/category-gift-sets.svg",
    imageAlt: "Curated corporate gift sets in branded packaging",
  },
  {
    slug: "tech-desk",
    name: "Tech & Desk",
    blurb: "Chargers, organisers and desk accessories that get daily use.",
    image: "/products/category-tech-desk.svg",
    imageAlt: "Branded tech accessories and desk organisers for corporate gifting",
  },
  {
    slug: "apparel",
    name: "Apparel",
    blurb: "Caps and wearables, embroidered or printed with your logo.",
    image: "/products/category-apparel.svg",
    imageAlt: "Branded corporate apparel including caps with embroidered logos",
  },
  {
    slug: "writing",
    name: "Writing",
    blurb: "Pens and writing instruments, branded for events and giveaways.",
    image: "/products/category-writing.svg",
    imageAlt: "Branded corporate pens and writing instruments",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    blurb: "Umbrellas, stress balls and everyday brand giveaways.",
    image: "/products/category-lifestyle.svg",
    imageAlt: "Promotional lifestyle gifts including umbrellas and stress balls",
  },
];

export const products: Product[] = [
  {
    slug: "bamboo-water-bottle",
    name: "Bamboo Water Bottle",
    fromPrice: 350,
    moq: 50,
    categorySlug: "drinkware",
    description: "Stainless steel core with a natural bamboo sleeve and laser-etched logo.",
    image: "/products/bamboo-water-bottle.svg",
    imageAlt: "Bamboo-sleeved stainless steel corporate water bottle",
    featured: true,
  },
  {
    slug: "eco-friendly-gift-set",
    name: "Eco Friendly Gift Set",
    fromPrice: 850,
    moq: 25,
    categorySlug: "eco-friendly",
    description: "Recycled-material notebook, seed pen and jute pouch in a kraft box.",
    image: "/products/eco-friendly-gift-set.svg",
    imageAlt: "Eco friendly corporate gift set with recycled notebook and seed pen",
    featured: true,
  },
  {
    slug: "premium-notebook",
    name: "Premium Notebook",
    fromPrice: 220,
    moq: 100,
    categorySlug: "notebooks",
    description: "A5 hardcover with debossed logo, elastic closure and ribbon marker.",
    image: "/products/premium-notebook.svg",
    imageAlt: "Premium A5 hardcover corporate notebook with debossed logo",
    featured: true,
  },
  {
    slug: "branded-tote-bag",
    name: "Branded Tote Bag",
    fromPrice: 180,
    moq: 100,
    categorySlug: "bags",
    description: "Heavyweight cotton canvas tote with a full-colour print area.",
    image: "/products/branded-tote-bag.svg",
    imageAlt: "Branded cotton canvas corporate tote bag",
    featured: true,
  },
  {
    slug: "steel-tumbler-set",
    name: "Steel Tumbler Set",
    fromPrice: 450,
    moq: 50,
    categorySlug: "drinkware",
    description: "Double-walled vacuum tumblers, set of two, in a gift sleeve.",
    image: "/products/steel-tumbler-set.svg",
    imageAlt: "Double-walled stainless steel corporate tumbler set",
    featured: true,
  },
  {
    slug: "desk-organizer",
    name: "Desk Organizer",
    fromPrice: 650,
    moq: 25,
    categorySlug: "tech-desk",
    description: "Multi-slot wooden organiser for pens, cards and devices.",
    image: "/products/desk-organizer.svg",
    imageAlt: "Wooden corporate desk organiser with multiple slots",
    featured: true,
  },
  {
    slug: "wireless-charger",
    name: "Wireless Charger",
    fromPrice: 950,
    moq: 30,
    categorySlug: "tech-desk",
    description: "Fast 15W wireless pad with a printed or engraved brand area.",
    image: "/products/wireless-charger.svg",
    imageAlt: "Branded 15W wireless charging pad for corporate gifting",
    featured: true,
  },
  {
    slug: "festive-gift-hamper",
    name: "Festive Gift Hamper",
    fromPrice: 1500,
    moq: 20,
    categorySlug: "gift-sets",
    description: "Premium festive box of treats and keepsakes, fully customisable.",
    image: "/products/festive-gift-hamper.svg",
    imageAlt: "Premium festive corporate gift hamper in branded packaging",
    featured: true,
  },
  // Eco "Employee Welcome Kit" line — featured in its own homepage spotlight.
  {
    slug: "employee-welcome-kit",
    name: "Employee Welcome Kit",
    fromPrice: 1200,
    moq: 25,
    categorySlug: "gift-sets",
    description:
      "Sustainable onboarding box: cork notebook, bamboo pen, jute-sleeve bottle and bamboo cup in recyclable kraft packaging.",
    image: "/products/employee-welcome-kit.svg",
    imageAlt: "Eco-friendly employee welcome kit with cork notebook, bamboo pen, glass bottle and bamboo cup in a kraft gift box",
  },
  {
    slug: "glass-bottle-jute-sleeve",
    name: "Glass Bottle with Jute Sleeve",
    fromPrice: 420,
    moq: 50,
    categorySlug: "drinkware",
    description: "Borosilicate glass bottle with a woven jute sleeve and bamboo lid.",
    image: "/products/glass-bottle-jute-sleeve.svg",
    imageAlt: "Glass water bottle wrapped in a jute sleeve with a bamboo lid",
  },
  {
    slug: "bamboo-coffee-cup",
    name: "Bamboo Coffee Cup",
    fromPrice: 320,
    moq: 50,
    categorySlug: "drinkware",
    description: "Reusable bamboo-fibre travel cup with a silicone band and lid.",
    image: "/products/bamboo-coffee-cup.svg",
    imageAlt: "Reusable bamboo-fibre coffee cup with silicone band",
  },
  {
    slug: "cork-cover-notebook",
    name: "Cork Cover Notebook",
    fromPrice: 280,
    moq: 100,
    categorySlug: "notebooks",
    description: "Natural cork-bound A5 notebook with optional name personalization.",
    image: "/products/cork-cover-notebook.svg",
    imageAlt: "A5 notebook with a natural cork cover and personalized name",
  },
  {
    slug: "bamboo-pen",
    name: "Bamboo Pen",
    fromPrice: 45,
    moq: 200,
    categorySlug: "eco-friendly",
    description: "Smooth-writing bamboo-barrel pen with a laser-engraved logo.",
    image: "/products/bamboo-pen.svg",
    imageAlt: "Bamboo-barrel pen with a laser-engraved corporate logo",
  },
  // Classic promotional range
  {
    slug: "usb-flash-drive",
    name: "USB Flash Drive",
    fromPrice: 180,
    moq: 100,
    categorySlug: "tech-desk",
    description: "Swivel USB drive (8–64 GB) with a printed or engraved logo.",
    image: "/products/usb-flash-drive.jpg",
    imageAlt: "Branded swivel USB flash drive with a printed corporate logo",
  },
  {
    slug: "sports-water-bottle",
    name: "Sports Water Bottle",
    fromPrice: 120,
    moq: 100,
    categorySlug: "drinkware",
    description: "Squeezable BPA-free sports bottle in a full range of colours.",
    image: "/products/sports-water-bottle.jpg",
    imageAlt: "Branded squeezable sports water bottle for corporate giveaways",
  },
  {
    slug: "logo-pen",
    name: "Logo Pen",
    fromPrice: 25,
    moq: 250,
    categorySlug: "writing",
    description: "Smooth click pen with a full-colour barrel and printed logo.",
    image: "/products/logo-pen.jpg",
    imageAlt: "Branded plastic click pen with a coloured barrel and printed logo",
  },
  {
    slug: "promotional-umbrella",
    name: "Promotional Umbrella",
    fromPrice: 380,
    moq: 50,
    categorySlug: "lifestyle",
    description: "Wind-resistant umbrella with a large branded canopy panel.",
    image: "/products/promotional-umbrella.jpg",
    imageAlt: "Branded promotional umbrella with a printed canopy",
  },
  {
    slug: "laptop-messenger-bag",
    name: "Laptop Messenger Bag",
    fromPrice: 650,
    moq: 50,
    categorySlug: "bags",
    description: "Padded laptop messenger bag with an embroidered or printed logo.",
    image: "/products/laptop-messenger-bag.jpg",
    imageAlt: "Branded padded laptop messenger bag with an embroidered logo",
  },
  {
    slug: "baseball-cap",
    name: "Baseball Cap",
    fromPrice: 160,
    moq: 100,
    categorySlug: "apparel",
    description: "Structured cotton cap with embroidered front logo, all colours.",
    image: "/products/baseball-cap.jpg",
    imageAlt: "Branded structured baseball cap with an embroidered front logo",
  },
  {
    slug: "stress-ball",
    name: "Stress Ball",
    fromPrice: 60,
    moq: 200,
    categorySlug: "lifestyle",
    description: "Soft foam stress ball printed with your logo — a desk favourite.",
    image: "/products/stress-ball.jpg",
    imageAlt: "Branded soft foam stress ball printed with a corporate logo",
  },
];

export const featuredProducts: Product[] = products.filter((p) => p.featured);

/** Format an INR price for display, e.g. 1500 -> "₹1,500". */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function categoryBySlug(slug: CategorySlug): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
