import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import Logo from "./Logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "How It Works", href: "/#how-it-works" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-px py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {site.tagline} Branded, bulk, and delivered across India from
              Chennai.
            </p>
          </div>

          {/* Products / categories */}
          <nav aria-label="Product categories">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products#${category.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get in touch */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{site.address.full}</span>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rainbow Gate on LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-white/60">
          <p>&copy; 2026 Rainbow Gate Corporate Gifts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
