import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function Categories() {
  return (
    <section className="section-py bg-bg">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="eyebrow">What we make</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Gifts for every occasion.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/products#${category.slug}`}
                className="group block overflow-hidden rounded-lg border border-border shadow-sm transition-all duration-200 ease-out hover:shadow-md"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Gradient scrim so the label stays legible on any photo. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 font-serif text-2xl text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
