export const metadata = {
  title: "E-commerce & Web Development Services | Jawumitech",
  description:
    "Custom e-commerce stores, admin dashboards, mobile apps, and business management systems. Built with Next.js, React, and Node.js.",
};

import Hero from "@/components/HeroSection";
import Testimonials from "@/components/testimonial";
import FAQSection from "@/components/FAQ";
import ServicesSection from "@/components/servicessection";

export default function Services() {
  return (
    <>
      <Hero title1="OUR" title2="SERVICES" image="/HeroImage.webp" />

      <ServicesSection />
      <Testimonials />
      <FAQSection />
    </>
  );
}
