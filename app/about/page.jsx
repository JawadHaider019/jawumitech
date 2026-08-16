"use client";

import { Target, Zap, Users, Code2, Shield, Rocket } from "lucide-react";
import { Team } from "@/components/team";
import Hero from "@/components/HeroSection";
import LeftRight from "@/components/LeftRight";
import { AboutSection } from "@/components/about";
import FounderSection from "@/components/FounderSection";
import TechStack from "@/components/techstack";
import Marquee from "@/components/Marquee";

const About = () => {
  return (
    <main className="bg-black text-white relative">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 lg:top-20 lg:right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 lg:bottom-20 lg:left-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 bg-[#bff747]/5 rounded-full blur-2xl lg:blur-3xl"></div>
      </div>

      <Hero title1="ABOUT" title2="US" image="/HeroImage.webp" />

      <Marquee />

      <AboutSection />

      <LeftRight
        badge="OUR JOURNEY & VALUES"
        title="Innovating cutting-edge technology and empowering modern businesses for sustainable digital success"
        stats={[
          { value: "100+", label: "Projects Delivered" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "5+", label: "Years Excellence" },
          { value: "24/7", label: "Expert Support" },
        ]}
        buttonText="Get Free Quote"
        buttonLink="/contact"
        sections={[
          {
            step: "01",
            title: "Our Story & Mission",
            description:
              "Jawumitech was founded to help businesses build their digital future with top-tier technology and modern design accessible to every business, regardless of size or budget.",
            icon: Target,
            image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
          },
          {
            step: "02",
            title: "Technical Excellence",
            description:
              "With deep expertise in modern tech stacks, we craft scalable web and mobile applications leveraging high-performance tools and cloud infrastructure to fuel long-term business growth.",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
          },
          {
            step: "03",
            title: "Why Choose Jawumitech",
            description:
              "We combine technical expertise with strategic business insight to turn ambitious ideas into seamless, high-converting digital experiences trusted by growing startups and established brands.",
            icon: Rocket,
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
          },
          {
            step: "04",
            title: "Innovation First",
            description:
              "We leverage cutting-edge frameworks, modern software architecture, and forward-thinking paradigms to deliver competitive, future-proof digital solutions that keep your business ahead of the curve.",
            icon: Code2,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
          },
          {
            step: "05",
            title: "Collaboration & Integrity",
            description:
              "Your vision meets our engineering expertise. We build solutions together through radical transparency, agile iteration, and deep collaborative partnership at every stage of development.",
            icon: Users,
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
          },
          {
            step: "06",
            title: "Continuous Growth",
            description:
              "We constantly learn, adapt, and evolve with the fast-moving technology landscape, ensuring that your digital platforms always incorporate the latest industry innovations and security best practices.",
            icon: Shield,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
          },
        ]}
      />

      {/* Founder Section */}
      <FounderSection />

      {/* <Team /> */}
      <TechStack />
    </main>
  );
};

export default About;
