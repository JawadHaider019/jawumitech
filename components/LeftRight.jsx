"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const LeftRight = ({
  badge = "OUR JOURNEY",
  title,
  description,
  subDescription,
  stats,
  buttonText = "Get Free Quote",
  buttonLink = "/contact",
  sections,
  isLight = false,
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px",
  });

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const words = title ? title.split(" ") : [];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const leftContentVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      color: "#bff747",
      borderColor: "#bff747",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`relative z-10 w-full ${isLight ? "text-black" : "text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        {/* Mobile: Stack layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start py-4 sm:py-6">
            <motion.div
              variants={leftContentVariants}
              className="space-y-4  w-full text-center lg:text-left"
            >
              <motion.h3
                variants={leftContentVariants}
                className={`text-md font-bold uppercase ${isLight ? "text-gray-600" : "text-[#bff747]   "}`}
              >
                {badge}
              </motion.h3>

              <motion.h2
                variants={leftContentVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1"
              >
                {words.map((word, i) => (
                  <Word
                    key={i}
                    word={word}
                    progress={smoothProgress}
                    index={i}
                    total={words.length}
                    isLight={isLight}
                  />
                ))}
              </motion.h2>

              {description && (
                <motion.p
                  variants={leftContentVariants}
                  className={`text-sm sm:text-base leading-relaxed ${isLight ? "text-gray-600" : "text-gray-300"}`}
                >
                  {description}
                </motion.p>
              )}

              {subDescription && (
                <motion.p
                  variants={leftContentVariants}
                  className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-gray-500" : "text-gray-400"}`}
                >
                  {subDescription}
                </motion.p>
              )}

              {stats && stats.length > 0 && (
                <motion.div
                  variants={leftContentVariants}
                  className="grid grid-cols-2 gap-4 pt-4 pb-2"
                >
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border ${isLight ? "bg-gray-50 border-gray-200" : "bg-white/5 border-white/10"}`}
                    >
                      <div className="text-xl sm:text-2xl font-bold text-[#bff747]">
                        {stat.value}
                      </div>
                      <div className={`text-xs ${isLight ? "text-gray-600" : "text-gray-400"}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              <motion.div
                variants={leftContentVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={buttonLink}
                    className="group px-6 py-3 text-sm bg-[#bff747] text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[#bff747]/20 border border-[#bff747]"
                  >
                    {buttonText}
                    <FaArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Content Sections */}
          <motion.div
            variants={containerVariants}
            className={`lg:w-3/5 flex flex-col gap-6 sm:gap-8 border-l ${isLight ? "border-black/10" : "border-white/10"} lg:pl-8`}
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  variants={rightItemVariants}
                  className={`flex items-center py-6 sm:py-8 border-b ${isLight ? "border-black/10" : "border-white/5"} last:border-b-0`}
                >
                  <div className="w-full space-y-3 sm:space-y-4 text-center lg:text-left">
                  

                    <motion.h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold leading-tight ${isLight ? "text-black" : "text-white"}`}>
                      {section.title}
                    </motion.h2>

                    {section.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`relative aspect-video w-full h-70 overflow-hidden rounded-3xl border ${isLight ? "border-gray-200" : "border-gray-100/10"} group`}
                      >
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        />
                      </motion.div>
                    )}

                    <motion.p className={`text-xs sm:text-sm lg:text-base leading-relaxed ${isLight ? "text-gray-600" : "text-gray-300"}`}>
                      {section.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

function Word({ word, progress, index, total, isLight }) {
  const start = index / total;
  const end = Math.min(1, (index + 4) / total);

  // Adapt colors based on isLight prop
  const startColor = isLight ? "#d1d5db" : "#404040";
  const endColor = isLight ? "#000000" : "#ffffff";

  const color = useTransform(progress, [start, end], [startColor, endColor]);
  const opacity = useTransform(progress, [start, end], [0.5, 1]);

  return (
    <motion.span style={{ color, opacity }}>
      {word}
    </motion.span>
  );
}

export default LeftRight;
