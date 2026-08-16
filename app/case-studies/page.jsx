"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Marquee from "@/components/Marquee";
import Hero from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "../data/project";

export default function Portfolio() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const isSectionInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isCardsContainerInView = useInView(cardsContainerRef, {
    once: true,
    margin: "-50px",
  });

  const projects = getAllProjects();

  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 3,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="bg-black min-h-screen">
      <Hero title1="CASE" title2=" STUDIES" image="/HeroImage.webp" />

      <Marquee />

      {/* Case Studies Section */}
      <section
        ref={sectionRef}
        className="bg-white text-black relative overflow-hidden py-12 sm:py-16 lg:py-20"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-black">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Explore our latest case studies and digital experiences built for growing brands.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={cardsContainerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isCardsContainerInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group h-full flex"
                whileTap={{ scale: 0.98 }}
              >
                {/* Card as Link - Now linking to case study page */}
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="relative bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:shadow-xl flex flex-col w-full group"
                >
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-[#bff747] text-black text-xs font-semibold rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-grow gap-3 p-4 sm:p-6 lg:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-sm leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <motion.div whileHover="hover">
                        <div className="group/btn inline-flex items-center gap-2 px-1 py-2 bg-transparent text-black transition-all duration-200">
                          <span className="font-semibold text-xs sm:text-sm lg:text-sm">
                            View Case Study
                          </span>
                          <motion.span
                            variants={linkHoverVariants}
                            className="inline-flex"
                          >
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </motion.span>
                        </div>
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
  );
}
