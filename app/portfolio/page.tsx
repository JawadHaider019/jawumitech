"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { ExternalLink, ArrowUpRight, Github } from "lucide-react"
import Marquee from '@/components/Marquee';
import Hero from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isCardsContainerInView = useInView(cardsContainerRef, { once: true, margin: "-50px" });

const projects = [
  {
    id: 1,
    title: "Pure Clay – Organic Food",
    description: "An online platform for organic wellness products featuring subscriptions, easy navigation, and storytelling to engage customers and boost online orders.",
    image: "/Projects/pureclay.webp",
    liveLink: "https://www.pureclay.org/"
  },
  {
    id: 2,
    title: "TimeXperts – IT Outsourcing",
    description: "A corporate website showcasing IT outsourcing services, staffing solutions, and client partnerships, designed to enhance credibility and attract business inquiries.",
    image: "/Projects/timeexpert.webp",
    liveLink: "https://timexperts.com.pk/"
  },
  {
    id: 3,
    title: "Natura Bliss – Organic Skincare",
    description: "A user-friendly e-commerce site for organic skincare products, highlighting the brand story, subscription options, and product offerings to increase customer engagement.",
    image: "/Projects/naturabliss.webp",
    liveLink: "https://naturablissorganics.com/"
  },
  {
    id: 4,
    title: "Gogency – Travel Agency Platform",
    description: "A B2B travel management platform with automated client onboarding, bookings, and communication tools to streamline operations and improve customer satisfaction.",
    image: "/Projects/gogency.webp",
    liveLink: "https://www.gogency.com/"
  },
  {
    id: 5,
    title: "Xpert Advisers – Education Consultancy",
    description: "A consultancy platform enabling lead management, real-time client communication, and automated branded websites to increase efficiency and client engagement.",
    image: "/Projects/xpert-advisor.webp",
    liveLink: "http://xpertadvisers.com/"
  },
  {
    id: 6,
    title: "SZ Naturals – Herbal Hair Care",
    description: "An e-commerce site for herbal hair care products presenting brand philosophy, product focus, and testimonials to increase trust and online sales.",
    image: "/Projects/sznaturals.webp",
    liveLink: "https://sznaturals.com"
  }
]


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
  }

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
  }

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
  }

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
  }

  const cardHoverVariants: Variants = {
    hover: {
      y: -6,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const imageHoverVariants: Variants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  }

  const linkHoverVariants: Variants = {
    hover: {
      x: 3,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }
  }

  return (
    <main className="bg-black min-h-screen">
      <Hero
        title1="OUR"
        title2='PORTFOLIO'
        image='/HeroImage.webp'
      />
      <Marquee />

      {/* Portfolio Section */}
      <section 
        ref={sectionRef}
        className="bg-black text-white  relative overflow-hidden py-12 sm:py-16 lg:py-20"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              OUR WORK
            </motion.h3>
            <motion.h2 
              variants={itemVariants}
              className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            >
              Featured <span className="text-[#bff747]">Projects</span>
            </motion.h2>
           
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            ref={cardsContainerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isCardsContainerInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group h-full flex"
                whileTap={{ scale: 0.98 }}
              >
                {/* Card as Link */}
                <Link 
                  href={project.liveLink}
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
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                  
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex flex-col flex-grow gap-3 p-4 sm:p-6 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-white group-hover:text-[#bff747] transition-colors duration-200 ">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-sm leading-relaxed  flex-grow group-hover:text-white/90 transition-colors duration-200">
                      {project.description}
                    </p>

                   

                    <div className="mt-auto">
                      <motion.div whileHover="hover">
                        <button 
                          onClick={(e) => e.preventDefault()} // Prevent double navigation
                          className="group/btn inline-flex items-center gap-2 px-1 py-2 bg-transparent text-[#bff747] transition-all duration-200 hover:text-[#bff747]/90"
                        >
                          <span className="font-semibold text-xs sm:text-sm lg:text-sm">View</span>
                          <motion.span
                            variants={linkHoverVariants}
                            className="inline-flex"
                          >
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
    </main>
  )
}