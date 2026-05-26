import Image from "next/image";
import Link from "next/link";
import LeafMotif from "./LeafMotif";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Subtle botanical accent, top-right */}
      <LeafMotif className="pointer-events-none absolute -right-10 -top-16 hidden h-80 w-auto rotate-[24deg] text-brand/[0.06] lg:block" />
      <div className="container-px relative grid min-h-[70vh] items-center gap-12 py-16 md:min-h-[80vh] md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow">Corporate Gifting · Chennai</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            Corporate gifts your team will actually use.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Branded, bulk, and delivered fast. From eco-friendly drinkware to
            fully customized gift sets — Rainbow Gate handles personalization,
            packaging, and pan-India delivery so HR and admin teams don&apos;t
            have to.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/products" className="btn-secondary">
              Browse Catalog
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md lg:aspect-[5/6]">
          <Image
            src="/hero.svg"
            alt="An arrangement of branded corporate gifts — drinkware, notebooks and a gift set — prepared for a client presentation"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
