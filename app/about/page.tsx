"use client"

import { useEffect, useRef } from 'react';
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
  const sectionRef = useRef<HTMLElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftContentRef = useRef<HTMLDivElement>(null);


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

  

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initAnimations = async () => {
      if (!mounted || !sectionRef.current) return;

      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.gsap || gsapModule.default;
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
        
        if (!gsap || !ScrollTrigger) {
          throw new Error('GSAP modules not found');
        }

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Left content animation
          if (leftContentRef.current) {
            gsap.fromTo(leftContentRef.current,
              { y: 30, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.6,
                scrollTrigger: {
                  trigger: leftContentRef.current,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          }

          // Pin left side on desktop only
          if (window.innerWidth >= 1024 && leftSideRef.current) {
            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              pin: leftSideRef.current,
              pinSpacing: false,
              anticipatePin: 1,
            });
          }

          // Content animations
          contentRefs.current.forEach((content, index) => {
            if (!content) return;
            gsap.fromTo(content,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: content,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          });
        }, sectionRef);

        cleanup = () => ctx.revert();

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations');
        // Fallback: show elements immediately
        if (leftContentRef.current) {
          leftContentRef.current.style.opacity = '1';
          leftContentRef.current.style.transform = 'translateY(0)';
        }
        contentRefs.current.forEach(content => {
          if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          }
        });
      }
    };

    // Initialize with delay
    const timer = setTimeout(initAnimations, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <main className="bg-black text-white relative ">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[#bff747] text-lg md:text-xl font-bold mb-4 uppercase tracking-wider">
              OUR VALUES
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What Drives <span className="text-[#bff747]">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border border-white/10 rounded-2xl hover:border-[#bff747] transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#bff747]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-[#bff747]" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#bff747] transition-colors">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
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