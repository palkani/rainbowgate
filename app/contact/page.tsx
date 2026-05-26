import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a corporate gifting quote from Rainbow Gate in Chennai. Share your occasion, quantity, and budget — we reply within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string | string[] };
}) {
  const productParam = Array.isArray(searchParams.product)
    ? searchParams.product[0]
    : searchParams.product;

  const defaultMessage = productParam
    ? `I'd like a quote for the ${productParam}. Please share pricing and customization options.`
    : "";

  return (
    <>
      <section className="bg-bg">
        <div className="container-px py-16 md:py-24">
          <h1 className="max-w-3xl font-serif text-5xl leading-tight tracking-tight text-ink md:text-6xl">
            Let&apos;s talk corporate gifts.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Tell us about your requirement and we&apos;ll respond with product
            ideas and transparent pricing — usually within 24 hours. Prefer to
            talk? Call us or message us on WhatsApp.
          </p>
        </div>
      </section>

      <ContactSection defaultMessage={defaultMessage} />
    </>
  );
}
