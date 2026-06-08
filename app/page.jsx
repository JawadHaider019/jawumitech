export const metadata = {
  title: "Custom E-commerce Development | Jawumitech",
  description:
    "We build custom e-commerce stores and web apps for furniture, beauty, and food brands. Full admin dashboards included. Starting from $999.",
};


import ProcessSection from "@/components/process";
import ServicesSection from "@/components/servicessection";
import FAQSection from "@/components/FAQ";
import Testimonials from "@/components/testimonial";
import WhyChooseUs from "@/components/whyus";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Marquee from "@/components/Marquee";
import { AboutSection } from "@/components/about";
import CaseStudies from "@/components/casestudies";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="bg-white -mt-2">
        <Hero />
        <Partners />
      </div>
      <AboutSection />
      <CaseStudies />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <Marquee />
      <FAQSection />
      <ScrollToTop />
    </>
  );
}
