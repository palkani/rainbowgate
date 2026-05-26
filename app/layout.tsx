import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import "./globals.css";

// Display face for headings & eyebrows. Single weight is all DM Serif ships.
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

// Workhorse UI face for body, nav, buttons.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rainbow Gate — Corporate Gifts Your Team Will Actually Use",
    template: "%s | Rainbow Gate Corporate Gifts",
  },
  description: site.description,
  keywords: [
    "corporate gifts Chennai",
    "bulk corporate gifting India",
    "branded employee gifts",
    "personalized client gifts",
    "eco-friendly corporate gifts",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Rainbow Gate — Corporate Gifts Your Team Will Actually Use",
    description: site.description,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rainbow Gate Corporate Gifts — branded gifting from Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Gate — Corporate Gifts Your Team Will Actually Use",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.locality,
    addressLocality: "Chennai",
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.social.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          // Organization schema — feeds rich results and disambiguates the brand.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
