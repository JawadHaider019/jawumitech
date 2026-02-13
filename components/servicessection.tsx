// components/ServicesSection.tsx
"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
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
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isCardsContainerInView = useInView(cardsContainerRef, { once: true, margin: "-50px" });

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive, scalable, and SEO-friendly websites and custom web applications tailored to your business needs.",
    image: "/Web.png",
    link: "/services",
    icon: <FaLaptopCode className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  
  {
    id: 2,
    title: "UI/UX Design",
    description: "Design intuitive and visually appealing interfaces that enhance user experience and strengthen your brand presence.",
    image: "/UX.png",
    link: "/services",
    icon: <FaProjectDiagram className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Manage and grow your brand’s presence on social platforms like Facebook, Instagram, and LinkedIn through engaging content and strategic campaigns.",
    image: "/SEO.png",
    link: "/services",
    icon: <FaSearch className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    id: 4,
    title: "IT Maintenance & Support",
    description: "Proactive monitoring, updates, and troubleshooting to ensure your systems stay secure and perform optimally.",
    image: "/maintain.png",
    link: "/services",
    icon: <FaDigitalTachograph className="w-5 h-5 sm:w-6 sm:h-6" />
  }
];



  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 25 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -6,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants: Variants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  const linkHoverVariants: Variants = {
    hover: {
      x: 3,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white relative overflow-hidden py-12 sm:py-16 lg:py-20"
      id="services"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl" 
        />
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl" 
        />
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-[#bff747] text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider"
          >
            SERVICES
          </motion.h3>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Expert <span className="text-[#bff747]">IT Solutions</span> for Your Business
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={cardsContainerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isCardsContainerInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 "
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group h-full flex"
              whileTap={{ scale: 0.98 }}
            >
              {/* Card as Link */}
              <Link 
                href={service.link}
                className="relative bg-[#0b0b0b] backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 hover:border-[#bff747]/30 transition-all duration-200 overflow-hidden hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#bff747]/15 flex flex-col w-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                
                {/* Image Section */}
                <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden flex-shrink-0">
                  <motion.div
                    variants={imageHoverVariants}
                    className="w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    variants={iconHoverVariants}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] text-black rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-[#bff747]/25"
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-4 sm:p-6 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-white group-hover:text-[#bff747] transition-colors duration-200 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow group-hover:text-white/90 transition-colors duration-200">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <motion.div whileHover="hover">
                      <button 
                        onClick={(e) => e.preventDefault()} // Prevent double navigation
                        className="group/btn inline-flex items-center gap-2 px-1 py-2 bg-transparent text-[#bff747] transition-all duration-200 hover:text-[#bff747]/90"
                      >
                        <span className="font-semibold text-xs sm:text-sm lg:text-sm">Explore</span>
                        <motion.span
                          variants={linkHoverVariants}
                          className="inline-flex"
                        >
                          <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;