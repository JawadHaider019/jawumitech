export const metadata = {
  title: "Custom Software, Web & Mobile App Development Company | Jawumitech",
  description:
    "We design and build custom software, business websites, and mobile apps for growing companies. Reasonable pricing, clear timelines, dedicated developers.",
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
      <Hero />
      <Partners />
      <AboutSection />
      <CaseStudies />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <Marquee />
      <FAQSection />
      <ScrollToTop />
    </>
  );
}
