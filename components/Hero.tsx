"use client";

import { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
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

  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    },
    hover: {
      backgroundColor: "#bff747",
      color: "#000000",
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
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
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center mb-10 justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#bff747]/5 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        variants={backgroundVariants}
        className="absolute top-20 left-10 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        variants={backgroundVariants}
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            {/* Main Headline */}
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                We Help Startups & Businesses Build Their <span className="text-[#bff747]">Digital Future</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-2xl"
              >
                From concept to launch, we craft sleek, fast, and scalable web and mobile experiences that transform your ideas into reality.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <motion.a
                href="https://wa.me/923291927168"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 border-2 border-[#bff747] text-[#bff747] font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}