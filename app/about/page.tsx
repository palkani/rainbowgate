import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import WhyUs from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rainbow Gate is a Chennai-based corporate gifting company helping HR, admin, and marketing teams across India source, brand, and deliver gifts since 2018.",
  alternates: { canonical: "/about" },
};

const stats = [
  { value: "2018", label: "Gifting since" },
  { value: "200+", label: "Companies served" },
  { value: "7–14 days", label: "Typical delivery" },
  { value: "Pan-India", label: "Shipping reach" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg">
        <div className="container-px py-16 md:py-24">
          <p className="eyebrow">About us</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-ink md:text-6xl">
            A Chennai team that ships on time.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface py-14 md:py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-md">
            <Image
              src={asset("/team.svg")}
              alt="The Rainbow Gate team assembling and packing branded corporate gift orders in Chennai"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>
              Rainbow Gate has been helping HR, admin, and marketing teams
              across India source, brand, and deliver corporate gifts since
              2018. Based in St. Thomas Mount, Chennai, we serve clients from
              one-time event gifting to ongoing employee appreciation programs.
            </p>
            <p>
              We keep the process refreshingly simple: tell us the occasion,
              headcount, and budget, and we come back with curated options,
              mockups with your logo, and transparent slab pricing — usually
              within a single working day.
            </p>
            <p>
              From there, we handle everything — printing, custom packaging,
              quality checks, and dispatch — so the gift lands looking the way
              you imagined, on the date you promised.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg py-14 md:py-20">
        <div className="container-px">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-4xl text-brand md:text-5xl">
                  {stat.value}
                </dd>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Values — reuse the homepage value props for consistency */}
      <WhyUs />

      {/* CTA */}
      <section className="section-py bg-brand text-white">
        <div className="container-px text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
            Let&apos;s plan your next gift.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Whether it&apos;s 20 hampers or 2,000 onboarding kits, we&apos;d love
            to help. Reach us by form, phone, or WhatsApp.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-white/90"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
