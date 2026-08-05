"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const Hero = ({ title1, title2, image }) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, {
    once: true,
    margin: "-100px 0px",
  });

  // Animation variants with proper typing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
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
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center relative overflow-hidden py-16 sm:py-20 text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-neutral-950">
        {image && (
          <Image
            src={image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        )}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={backgroundVariants}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#bff747]/10 rounded-full blur-xl sm:blur-2xl"
        />

        <motion.div
          variants={backgroundVariants}
          transition={{ delay: 0.2 }}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-[#bff747]/5 rounded-full blur-xl sm:blur-2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} className="mx-auto">
          {/* Title */}
          <motion.h1
            variants={titleVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            {title1}{" "}
            <span className="text-[#bff747] block sm:inline">{title2}</span>
          </motion.h1>

          {/* Colored Bottom Line */}
          <motion.div
            variants={lineVariants}
            className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#bff747] mx-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
