import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Rainbow Gate's corporate gifting catalog — drinkware, eco-friendly gifts, bags, notebooks, gift sets, and tech & desk accessories. Bulk pricing, full branding.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-bg">
        <div className="container-px py-16 md:py-24">
          <p className="eyebrow">Catalog</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-ink md:text-6xl">
            Corporate gifts, ready to brand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            A selection of our most-requested items. Every product can be
            personalized with your logo and packaging. Prices shown are starting
            points — request a quote for exact slab pricing on your quantity.
          </p>
        </div>
      </section>

      {/* One section per category, anchorable via /products#slug */}
      {categories.map((category, index) => {
        const items = products.filter(
          (p) => p.categorySlug === category.slug
        );
        if (items.length === 0) return null;

        return (
          <section
            key={category.slug}
            id={category.slug}
            className={`scroll-mt-24 py-14 md:py-20 ${
              index % 2 === 1 ? "bg-surface" : "bg-bg"
            }`}
          >
            <div className="container-px">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                  {category.name}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  {category.blurb}
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="section-py bg-brand text-white">
        <div className="container-px text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
            Looking for something not listed here?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            We source far beyond this catalog. Tell us your occasion and budget,
            and we&apos;ll put together options that fit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-white/90"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
