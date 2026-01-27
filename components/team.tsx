"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Jawad Haider",
    position: "Founder / CEO",
    image: "/team/jawadfounder.webp",
    description: "Leads the vision and direction of the company while also contributing as a full stack developer. Guides the team, ensures technical standards, and focuses on building high-quality products."
  },
  {
    name: "Daniel Mansoor",
    position: "Full Stack Developer",
    image: "/team/aqibdev.webp",
    description: "Specialized in building scalable web applications. Passionate about creating smooth user experiences and delivering reliable, high-quality projects."
  },
  {
    name: "Haseeb Ur Rehman",
    position: "Software Developer",
    image: "/team/Haseebdev.webp",
    description: "Develops custom software solutions and business applications. Focused on efficiency, reliability, and simplifying daily operations for clients."
  },
  {
    name: "Muhammad Jamshaid",
    position: "Project Manager",
    image: "/team/jamshaidDev.webp",
    description: "Manages projects from planning to delivery. Coordinates the team, ensures timely execution, and maintains clear communication with clients."
  }
];

export function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Fixed Animation variants - removed transition from variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // Common transition settings
  const itemTransition = {
    duration: 0.8,
    ease: "easeOut" as const
  };

  const headerTransition = {
    duration: 1,
    ease: "easeOut" as const
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-black to-[#0A0A0A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header: Split layout */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left px-2 sm:px-4 py-8 sm:py-12 text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Large Subheading */}
          <motion.h2 
            variants={headerVariants}
            transition={headerTransition}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-wide max-w-md leading-tight mb-6 lg:mb-0"
          >
            Meet Our <br /> Expert <br /> Team
          </motion.h2>

          {/* Right: Main Heading */}
          <motion.h1 
            variants={headerVariants}
            transition={headerTransition}
            className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-none tracking-tight text-center lg:text-right"
          >
            Creative{" "}
            <span
              className="text-[#bff747]"
              style={{ WebkitTextStroke: "1px sm:1.5px #bff747" }}
            >
              Minds
            </span>
          </motion.h1>
        </motion.div>

        {/* Team Members Container - Changed to flex column on mobile */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 py-8 sm:py-10 relative text-white"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              transition={itemTransition}
              className="group flex flex-col items-center space-y-3 sm:space-y-4 relative cursor-pointer w-full"
            >
              {/* Member Text Block - Above image */}
              <div className="text-center leading-tight w-full">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold uppercase tracking-wide mb-1 sm:mb-2"
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-[#bff747] text-xs sm:text-sm uppercase tracking-wider font-semibold"
                >
                  {member.position}
                </motion.p>
              </div>

              {/* Image Container - Responsive height */}
              <div className="relative w-full h-[450px] overflow-hidden border border-white/20 transition-all duration-500 ease-in-out group-hover:border-[#bff747] group-hover:shadow-2xl group-hover:shadow-[#bff747]/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:contrast-110 grayscale"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  priority={i === 0}
                />
                
                {/* Gradient Overlay - Changes on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Description Text - Only shows on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-200">
                    {member.description}
                  </p>
                </div>

                {/* Hover Enhancement Overlay */}
                <div className="absolute inset-0 bg-[#bff747]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-[#bff747]/10 rounded-full blur-lg sm:blur-xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#bff747]/10 rounded-full blur-md sm:blur-lg pointer-events-none"
      />
    </section>
  );
}