"use client";

import { ArrowRight } from 'lucide-react';
import Image from "next/image"
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const collaborationRef = useRef<HTMLElement>(null);
  const circleButtonRef = useRef<HTMLDivElement>(null);
  const workTextRef = useRef<HTMLSpanElement>(null);
  const togetherTextRef = useRef<HTMLSpanElement>(null);
  const collaborateTextRef = useRef<HTMLHeadingElement>(null);

  const isCollaborationInView = useInView(collaborationRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(collaborationRef, { once: true, margin: "-50px" });

  // WhatsApp number and link
  const whatsappNumber = '923291927168';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Fixed Animation variants - removed transition from variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  const scaleUp = {
    hidden: { scale: 0 },
    visible: {
      scale: 1
    }
  };

  // Common transition settings with proper easing types
  const itemTransition = {
    duration: 0.6,
    ease: "easeOut" as const
  };

  const slideTransition = {
    duration: 0.8,
    ease: "easeOut" as const
  };

  const scaleTransition = {
    duration: 0.6,
    ease: [0.175, 0.885, 0.32, 1.275] as const // Custom cubic-bezier equivalent to back.out(1.7)
  };

  return (
    <>
      {/* Collaboration Section */}
      <section 
        ref={collaborationRef}
        className='overflow-x-hidden pb-20 border-b border-gray-400 relative flex items-center justify-center flex-col gap-6 md:gap-8 text-center bg-black min-h-screen px-4'
      >
        {/* Animated background elements */}
        <div className="absolute bottom-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-3xl animate-pulse" />

        {/* Circle Button - Now with WhatsApp link */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div 
            ref={circleButtonRef}
            variants={scaleUp}
            initial="hidden"
            animate={isCollaborationInView ? "visible" : "hidden"}
            transition={scaleTransition}
            className='z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bff747] hover:bg-black/80 hover:text-white w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full text-black font-bold flex flex-col items-center justify-center text-xs md:text-base tracking-wider transition-all duration-300 hover:scale-110 cursor-pointer group border border-transparent hover:border-[#bff747]'
          >
            <ArrowRight className='group-hover:rotate-[-40deg] transition-transform duration-300 mb-0.5 md:mb-1 w-4 h-4 md:w-6 md:h-6' />
            <span className='text-[10px] md:text-sm'>Get In Touch</span>
          </motion.div>
        </a>
        
        {/* Text Content */}
        <motion.h1 
          variants={itemVariants}
          initial="hidden"
          animate={isCollaborationInView ? "visible" : "hidden"}
          transition={itemTransition}
          className='text-xl md:text-2xl font-bold text-[#bff747]'
        >
          LET'S COLLABORATE
        </motion.h1>
        
        <h1 className='text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] font-bold leading-tight md:leading-none px-2 text-white'>
          <motion.span 
            ref={workTextRef}
            variants={slideInLeft}
            initial="hidden"
            animate={isCollaborationInView ? "visible" : "hidden"}
            transition={slideTransition}
            className='inline-block'
          >
            LET'S WORK
          </motion.span>
          <br/>
          <motion.span 
            ref={togetherTextRef}
            variants={slideInRight}
            initial="hidden"
            animate={isCollaborationInView ? "visible" : "hidden"}
            transition={slideTransition}
            className='inline-block'
          >
            TOGETHER
          </motion.span>
        </h1>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -right-10 sm:-top-40 sm:-right-20 w-48 h-48 sm:w-80 sm:h-80 bg-[#bff747]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-20 -left-10 sm:-bottom-40 sm:-left-20 w-48 h-48 sm:w-80 sm:h-80 bg-[#bff747]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#bff747]/3 rounded-full blur-3xl"
          />
          
          {/* Additional Random Glowing Circles */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/4 right-1/3 w-24 h-24 sm:w-40 sm:h-40 bg-[#bff747]/8 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/3 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-[#bff747]/6 rounded-full blur-xl"
          />
        </div>

        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isFooterInView ? "visible" : "hidden"}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-8">
            {/* Brand Column with Glass Effect */}
            <motion.div 
              variants={itemVariants}
              transition={itemTransition}
              className="lg:col-span-4 border border-gray-400/30 p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-[#0b0b0b] hover:-translate-y-2 transition-all"
            >
              <div className="flex items-center gap-0 mb-4 sm:mb-6">
                <div className="relative">
                  <Image 
                    src="/iconjt.png" 
                    alt="Jawumitech Logo" 
                    width={50} 
                    height={50}  
                    className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain"  
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Jawumitech<span className="text-[#bff747]">.</span>
                  </h2>
                </div>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Transforming ideas into exceptional digital experiences through cutting-edge technology and innovative solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] rounded-full flex items-center justify-center group-hover:bg-transparent transition-all duration-300 border border-transparent group-hover:border-[#bff747] group-hover:scale-110">
                    <FaEnvelope className="text-black group-hover:text-[#bff747] text-base sm:text-lg transition-all duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email us</p>
                    <p className="text-white font-medium text-sm sm:text-base">support@jawumitech.com</p>
                  </div>
                </div>
                
                {/* WhatsApp Contact */}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] rounded-full flex items-center justify-center group-hover:bg-transparent transition-all duration-300 border border-transparent group-hover:border-[#bff747] group-hover:scale-110">
                    <FaPhone className="text-black group-hover:text-[#bff747] text-base sm:text-lg transition-all duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Contact us</p>
                    <p className="text-white font-medium text-sm sm:text-base">+92 329 1927168</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <div className='flex flex-col justify-between lg:col-span-8'>
              {/* Links Grid with Glass Effect */}
              <motion.div 
                variants={itemVariants}
                transition={itemTransition}
                className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 border-b border-gray-400 pb-8 sm:pb-12 mb-8 sm:mb-12 backdrop-blur-sm bg-black/10 p-4 sm:p-6"
              >
                {/* Services */}
                <div className="md:border-r md:border-gray-400/50 md:pr-6 sm:md:pr-8 pb-6 sm:pb-8 md:pb-0 border-b border-gray-400/50 md:border-b-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Services
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Web Development',
                      'Mobile Applications', 
                      'UI/UX Design',
                      'Software Development',
                      'Maintenance Support'
                    ].map((service) => (
                      <li key={service}>
                        <a href="#" className="text-gray-300 hover:text-[#bff747] transition-all duration-300 flex items-center gap-2 group hover:translate-x-1 text-sm sm:text-base">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="md:border-r md:border-gray-400/50 md:pr-6 sm:md:pr-8 pb-6 sm:pb-8 md:pb-0 border-b border-gray-400/50 md:border-b-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Company
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'About Us',
                      'Our Team',
                      'Contact ',
                      'Process',
                      'Blog'
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-300 hover:text-[#bff747] transition-all duration-300 flex items-center gap-2 group hover:translate-x-1 text-sm sm:text-base">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Follow */}
                <div className="pb-6 sm:pb-8 md:pb-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Follow
                  </h3>
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] hover:bg-transparent rounded-full flex items-center justify-center text-black hover:text-[#bff747] border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-110"
                    >
                      <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Newsletter Section with Glass Effect */}
              <motion.div 
                variants={itemVariants}
                transition={itemTransition}
                className="backdrop-blur-md bg-black/15 p-4 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                     Subscribe Our Newsletter:
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-400/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:border-transparent transition-all duration-300 bg-black/20 text-sm sm:text-base w-full"
                    />
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                      Subscribe
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section with Glass Effect */}
          <motion.div 
            variants={itemVariants}
            transition={itemTransition}
            className="border-t border-gray-400/50 pt-6 sm:pt-8 backdrop-blur-sm bg-black/10 p-4 sm:p-6"
          >
            <div className="flex justify-center items-center gap-6">
              <div className="text-gray-400 text-xs sm:text-sm text-center">
                © 2025 Jawumitech. All rights reserved. Developed by Jawad Haider.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;