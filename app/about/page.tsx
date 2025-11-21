"use client"

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Users, 
  Code2, 
  Shield, 
  Rocket,
} from "lucide-react"
import {Team} from '@/components/team'
import Hero from '@/components/HeroSection';
import LeftRight from '@/components/LeftRight';
import {AboutSection} from '@/components/about';
import FounderSection from '@/components/FounderSection';
import TechStack from '@/components/techstack';
import Marquee from '@/components/Marquee';

const About = () => {
  const valuesRef = useRef<HTMLElement>(null);
  const isInView = useInView(valuesRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We focus on your success and growth.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Always exploring cutting-edge technologies to stay ahead.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision, our expertise — building together as partners.",
    },
    {
      icon: Code2,
      title: "Quality Code",
      description: "Clean, maintainable, and scalable solutions built to last.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We value honesty, transparency, and trust in every project.",
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "Constantly learning, improving, and evolving with technology.",
    },
  ]

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -8,
      scale: 1.02,
      borderColor: "#bff747",
      boxShadow: "0 20px 40px -10px rgba(191, 247, 71, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconHoverVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="bg-black text-white relative">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 lg:top-20 lg:right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 lg:bottom-20 lg:left-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 bg-[#bff747]/5 rounded-full blur-2xl lg:blur-3xl"></div>
      </div>

      <Hero
        title1="ABOUT"
        title2='US'
        image='/HeroImage.webp'
      />
      <Marquee/>

      <AboutSection/>

      <LeftRight
        badge="OUR JOURNEY"
        title="Innovating technology for your"
        titleAccent="success"
        description="We specialize in delivering cutting-edge IT solutions that drive innovation, streamline operations, and empower businesses to achieve their goals."
        buttonText="Get Free Quote"
        buttonLink="/contact"
        sections={[
          {
            step: "01",
            title: "Our Story & Mission",
            description: "Jawumi Tech was founded with a simple mission: to help startups and businesses build their digital future.",
            additional: "We believe that great technology should be accessible to everyone, regardless of size or budget."
          },
          {
            step: "02", 
            title: "Technical Excellence",
            description: "With expertise in modern technologies, we build scalable, performant applications that drive business growth.",
            additional: "Our team stays ahead of the curve with the most efficient and modern tools available."
          },
          {
            step: "03",
            title: "Why Choose JawumiTech", 
            description: "We combine technical expertise with business understanding to deliver solutions that drive real results.",
            additional: "Trusted by startups and established businesses alike."
          }
        ]}
      />

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="text-center mb-16"
          >
            <motion.h3 
              variants={headerVariants}
              className="text-[#bff747] text-lg md:text-xl font-bold mb-4 uppercase tracking-wider"
            >
              OUR VALUES
            </motion.h3>
            <motion.h2 
              variants={headerVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              What Drives <span className="text-[#bff747]">Us</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group p-6 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="w-full h-full"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        variants={iconHoverVariants}
                        className="p-3 bg-[#bff747]/10 rounded-xl"
                      >
                        <Icon size={24} className="text-[#bff747]" />
                      </motion.div>
                      <h3 className="text-xl font-bold group-hover:text-[#bff747] transition-colors duration-300">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {value.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection/>

      <Team/>
      <TechStack/>
    </main>
  );
};

export default About;