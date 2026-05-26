import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatINR, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-200 ease-out hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 45vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-ink-muted">
          From {formatINR(product.fromPrice)} · MOQ {product.moq} pcs
        </p>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-soft"
        >
          Request Quote
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">for {product.name}</span>
        </Link>
      </div>
    </article>
  );
}
