"use client";

import { useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star, Sparkles, CheckCircle } from 'lucide-react';
import Image from 'next/image';

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

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      x: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
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
                We Help Startups & Businesses Build Their <span className="text-[#bff747]">Digital Presence</span>
              </motion.h1>
              
           <motion.p 
    variants={itemVariants}
    className="text-xl text-gray-300 max-w-2xl"
>
    From concept to launch, we design and develop fast, responsive, and SEO-friendly websites and digital experiences that help businesses grow online.
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

          {/* Right Column - Custom Shaped Image with White Overlay */}
          <motion.div 
            variants={imageVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
              
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden 
                [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]
                shadow-2xl shadow-[#bff747]/20
                z-10">
                
                {/* Your Image */}
                <Image
                  src="/Hero.jpg" 
                  alt="Jawumitech Software Agency"
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setIsLoaded(true)}
                />

                {/* Loading animation */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="w-16 h-16 border-4 border-[#bff747]/30 border-t-[#bff747] rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* White Overlay */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute inset-0 w-full h-full overflow-hidden 
                  [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]
                  bg-[#bff747]/20
                  shadow-2xl
                  -translate-x-12 -translate-y-7
                  flex flex-col items-center justify-center p-8 text-center z-20"
              >
              
                        </motion.div>
        
              <motion.div 
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#bff747]/5 rounded-full blur-xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}