import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Categories from "@/components/Categories";
import WelcomeKit from "@/components/WelcomeKit";
import HowItWorks from "@/components/HowItWorks";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import AboutSnippet from "@/components/AboutSnippet";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Corporate Gifts in Chennai · Bulk, Branded, Delivered",
  description:
    "Personalized corporate gifts for employees and clients. Bulk pricing, full branding, and pan-India delivery from Chennai. Samples in 24 hours.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Categories />
      <WelcomeKit />
      <HowItWorks />
      <FeaturedProducts />
      <WhyUs />
      <Testimonials />
      <AboutSnippet />
      <ContactSection />
    </>
  );
}
