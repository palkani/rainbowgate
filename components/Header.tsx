"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import Logo from "./Logo";
import { WhatsAppIcon } from "./WhatsAppFloatingButton";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll, trap focus, and close on ESC while the menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    focusable?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="container-px flex h-16 items-center justify-between md:h-20"
        aria-label="Primary"
      >
        <Link href="/" className="rounded-sm" aria-label="Rainbow Gate — home" onClick={close}>
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand/5 sm:flex"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Request Quote
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-border bg-surface md:hidden"
        >
          <ul className="container-px flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-md px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-bg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-3 px-2 pb-2">
              <Link href="/contact" onClick={close} className="btn-primary w-full">
                Request Quote
              </Link>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="btn-secondary w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {site.whatsapp.label}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
