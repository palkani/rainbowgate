import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Heart, Leaf, Sparkles, Truck } from "lucide-react";
import { formatINR, productBySlug } from "@/lib/products";
import LeafMotif from "./LeafMotif";

const kit = productBySlug("employee-welcome-kit");

const includes = [
  "Cork-cover notebook with name personalization",
  "Bamboo pen, laser-engraved",
  "Glass bottle with woven jute sleeve",
  "Reusable bamboo coffee cup",
  "Recyclable kraft gift box",
];

const ecoBadges = [
  { icon: Sparkles, label: "Customizable" },
  { icon: Truck, label: "Pan-India Delivery" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Heart, label: "Made with Care" },
];

export default function WelcomeKit() {
  return (
    <section className="relative overflow-hidden bg-surface section-py">
      {/* Botanical accents — subtle, off to the sides */}
      <LeafMotif className="pointer-events-none absolute -right-6 -top-10 hidden h-72 w-auto rotate-[18deg] text-brand/[0.07] md:block" />
      <LeafMotif className="pointer-events-none absolute -bottom-12 -left-8 hidden h-64 w-auto -rotate-[28deg] text-brand/[0.06] lg:block" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
            <Image
              src={kit?.image ?? "/products/employee-welcome-kit.svg"}
              alt={
                kit?.imageAlt ??
                "Eco-friendly employee welcome kit in recyclable kraft packaging"
              }
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div className="max-w-xl">
            <p className="eyebrow">Signature kit</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
              The Employee Welcome Kit.
            </h2>
            <p className="mt-3 inline-flex items-center gap-2 font-serif text-xl text-brand">
              <Leaf className="h-5 w-5" aria-hidden="true" />
              Better for people, better for planet.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Welcome new joiners with a kit they&apos;ll actually keep. Every
              piece is sustainable, reusable, and branded to your team — a
              thoughtful first impression that reflects your values, not the
              landfill.
            </p>

            <ul className="mt-6 space-y-2.5">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <span className="text-lg font-semibold text-ink">
                From {formatINR(kit?.fromPrice ?? 1200)}
                <span className="font-normal text-ink-muted">
                  {" "}
                  · MOQ {kit?.moq ?? 25} pcs
                </span>
              </span>
              <Link
                href="/contact?product=Employee%20Welcome%20Kit"
                className="btn-primary"
              >
                Request this kit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Eco trust badges */}
        <ul className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {ecoBadges.map((badge) => (
            <li key={badge.label} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <badge.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-3 text-sm font-medium text-ink">
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
