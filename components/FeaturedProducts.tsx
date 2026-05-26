import { featuredProducts } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="section-py bg-bg">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="eyebrow">Bestsellers</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Loved by 200+ companies.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
