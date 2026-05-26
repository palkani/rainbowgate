/**
 * Single source of truth for company contact details and links.
 * Update values here and they propagate across the whole site
 * (header, footer, contact section, JSON-LD, WhatsApp button).
 */

export const site = {
  name: "Rainbow Gate Corporate Gifts",
  shortName: "Rainbow Gate",
  tagline: "Corporate gifts your team will actually use.",
  description:
    "Personalized corporate gifts for employees and clients. Bulk pricing, full branding, pan-India delivery from Chennai.",

  // Production URL — update once the domain is pointed at Vercel.
  url: "https://www.rainbowgate.online",

  phone: {
    display: "+91 87785 15736",
    href: "tel:+918778515736",
    e164: "+918778515736",
  },

  email: "jerald@rainbowgate.co.in",

  whatsapp: {
    href: "https://wa.me/918778515736?text=Hi%20Rainbow%20Gate%2C%20I%27d%20like%20a%20quote",
    label: "Chat on WhatsApp",
  },

  address: {
    full: "St. Thomas Mount, Chennai, Tamil Nadu 600016, India",
    locality: "St. Thomas Mount",
    region: "Tamil Nadu",
    postalCode: "600016",
    country: "IN",
    // Used for the Contact section map embed.
    mapsQuery: "St. Thomas Mount, Chennai, Tamil Nadu 600016, India",
  },

  social: {
    linkedin:
      "https://www.linkedin.com/company/rainbowgate-promotional-products/",
  },

  foundedYear: 2018,
} as const;

export type Site = typeof site;
