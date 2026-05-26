import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";

export default function AboutSnippet() {
  return (
    <section className="section-py bg-surface">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
          <Image
            src={asset("/team.svg")}
            alt="The Rainbow Gate team preparing branded corporate gift orders at their Chennai workshop"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            A Chennai team that ships on time.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Rainbow Gate has been helping HR, admin, and marketing teams across
            India source, brand, and deliver corporate gifts since 2018. Based
            in St. Thomas Mount, Chennai, we serve clients from one-time event
            gifting to ongoing employee appreciation programs.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-base font-medium text-brand transition-colors hover:text-brand-soft"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
