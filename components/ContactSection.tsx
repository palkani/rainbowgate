"use client";

import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppFloatingButton";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-ink shadow-sm outline-none placeholder:text-ink-muted/50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
const labelClass = "block text-sm font-medium text-ink";

export default function ContactSection({
  defaultMessage = "",
}: {
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery
  )}&z=15&output=embed`;

  return (
    <section id="contact" className="section-py bg-surface">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="eyebrow">Get a quote</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Tell us what you need.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Share a few details and we&apos;ll come back with product ideas and
            transparent pricing — usually within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-brand">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-brand">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="+91 ..."
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="quantity" className={labelClass}>
                  Estimated Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="Under 50">Under 50 pieces</option>
                  <option value="50–250">50–250 pieces</option>
                  <option value="250–1,000">250–1,000 pieces</option>
                  <option value="1,000+">1,000+ pieces</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Tell us what you need <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  defaultValue={defaultMessage}
                  className={inputClass}
                  placeholder="Occasion, products you have in mind, budget, deadline…"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Request a Quote"}
              </button>

              {/* Live region for screen readers */}
              <p
                role="status"
                aria-live="polite"
                className={
                  status === "success"
                    ? "text-sm font-medium text-brand"
                    : status === "error"
                      ? "text-sm font-medium text-red-700"
                      : "sr-only"
                }
              >
                {status === "success" &&
                  "Thanks — we've received your request and will reply within 24 hours."}
                {status === "error" &&
                  "Something went wrong. Please try again or reach us on WhatsApp."}
              </p>
            </div>
          </form>

          {/* Contact details */}
          <div>
            <ul className="space-y-5">
              <li>
                <a
                  href={site.phone.href}
                  className="group flex items-start gap-4 text-ink transition-colors hover:text-brand"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block text-sm text-ink-muted">Call us</span>
                    <span className="font-medium">{site.phone.display}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 text-ink transition-colors hover:text-brand"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    <span className="block text-sm text-ink-muted">Email us</span>
                    <span className="font-medium">{site.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-ink">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-ink-muted">Visit us</span>
                  <span className="font-medium">{site.address.full}</span>
                </span>
              </li>
            </ul>

            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {site.whatsapp.label}
            </a>

            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <iframe
                src={mapSrc}
                title="Rainbow Gate location — St. Thomas Mount, Chennai"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
