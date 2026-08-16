"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiTailwindcss,
  SiFirebase,
  SiStripe,
  SiExpress,
  SiPhp,
  SiFigma,
  SiAdobe,
  SiCloudinary,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";

// Updated tech stack with colored icons
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white hover:text-white" },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB] hover:text-[#61DAFB]",
  },
  {
    name: "JavaScript",
    icon: TbBrandJavascript,
    color: "text-[#FFCA28] hover:text-[#FFCA28]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933] hover:text-[#339933]",
  },
  { name: "Express", icon: SiExpress, color: "text-white hover:text-white" },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "text-[#FF2D20] hover:text-[#FF2D20]",
  },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4] hover:text-[#777BB4]" },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248] hover:text-[#47A248]",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1] hover:text-[#4479A1]",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-[#FFCA28] hover:text-[#FFCA28]",
  },
  { name: "Vercel", icon: SiVercel, color: "text-white hover:text-white" },
  {
    name: "Figma",
    icon: SiFigma,
    color: "text-[#F24E1E] hover:text-[#F24E1E]",
  },
  {
    name: "Adobe",
    icon: SiAdobe,
    color: "text-[#FF0000] hover:text-[#FF0000]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4] hover:text-[#06B6D4]",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    color: "text-[#FF69B4] hover:text-[#FF69B4]",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "text-[#3448C5] hover:text-[#3448C5]",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    color: "text-[#008CDD] hover:text-[#008CDD]",
  },
  { name: "GitHub", icon: FaGitAlt, color: "text-white hover:text-white" },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-white">
            Our Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            We leverage modern, scalable, and high-performance tools to build robust digital solutions.
          </p>
        </motion.div>

        {/* Icons Grid */}
        <div className="flex justify-center">
          <motion.div className="flex flex-wrap justify-center gap-6 max-w-6xl">
            {techStack.map((tech, i) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 40,
                  }}
                  animate={
                    isInView
                      ? {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }
                      : {
                        opacity: 0,
                        scale: 0.5,
                        y: 40,
                      }
                  }
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05, // Same stagger as GSAP
                    ease: [0.34, 1.56, 0.64, 1], // Matches GSAP's back.out(1.7)
                  }}
                  className="flex flex-col items-center justify-center cursor-pointer group"
                >
                  <div
                    className={`text-4xl md:text-5xl ${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2`}
                  >
                    <IconComponent />
                  </div>
                  <span className="text-white/70 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
