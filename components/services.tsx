// components/ServicesSection.tsx
"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowRight, 
  FaProjectDiagram, 
  FaCode, 
  FaDigitalTachograph, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaSearch 
} from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ReactNode;
}

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to solve your unique business challenges efficiently.",
      image: "/Software.png",
      link: "/services/custom-software-development",
      icon: <FaCode className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "High-performance mobile applications for iOS and Android with seamless user experiences.",
      image: "/App.png",
      link: "/services/mobile-development",
      icon: <FaMobileAlt className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 3,
      title: "Web Development",
      description: "Responsive, scalable web applications using modern frameworks and best practices.",
      image: "/Web.png",
      link: "/services/web-development",
      icon: <FaLaptopCode className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 4,
      title: "IT Project Management",
      description: "End-to-end project management ensuring timely delivery within budget constraints.",
      image: "/IT.png",
      link: "/services/it-project-management",
      icon: <FaProjectDiagram className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 5,
      title: "IT Maintenance",
      description: "Proactive maintenance and support to keep your systems running smoothly 24/7.",
      image: "/maintain.png",
      link: "/services/digital-transformation",
      icon: <FaDigitalTachograph className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      id: 6,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to boost visibility and drive organic traffic growth.",
      image: "/SEO.png",
      link: "/services/seo-optimization",
      icon: <FaSearch className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  // Add refs
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  useEffect(() => {
    // Dynamic import to ensure GSAP loads properly
    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
        
        gsap.registerPlugin(ScrollTrigger);

        // Check if all refs are available
        if (!sectionRef.current) return;

        // Header animation
        if (headerRef.current) {
          gsap.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6,
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        }

        // Cards animation with stagger
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.05,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        });

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations');
        // Immediate fallback animations
        if (headerRef.current) {
          headerRef.current.style.opacity = '1';
          headerRef.current.style.transform = 'translateY(0)';
        }
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      }
    };

    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Clean up ScrollTrigger instances if they exist
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white relative overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 opacity-0">
          <h3 className="text-[#bff747] text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider">
            OUR SERVICES
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Transform Your Business With Our <span className="text-[#bff747]">IT Solutions</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Comprehensive technology services designed to drive growth, efficiency, and innovation for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => addToRefs(el, index)}
              className="group h-full flex opacity-0"
            >
              <div className="relative bg-[#0b0b0b] backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#bff747]/30 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#bff747]/20 flex flex-col w-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] text-black rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-[#bff747]/25 group-hover:shadow-[#bff747]/40 group-hover:scale-105 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#bff747] transition-colors duration-300 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={service.link}
                      className="group/btn inline-flex items-center gap-2 px-1 py-2 bg-transparent text-[#bff747] transition-all duration-300 hover:gap-3"
                    >
                      <span className="font-semibold text-xs sm:text-sm">Explore</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl">
              Let&apos;s make something great work together.{' '}
              <Link
                href="/contact"
                className="text-[#bff747] hover:text-[#bff747] font-semibold underline transition-all duration-300 hover:glow-green"
              >
                Get Free Quote
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover\\:glow-green:hover {
          text-shadow: 0 0 20px rgba(191, 247, 71, 0.8);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;