"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { motion, useInView, Variants } from 'framer-motion'

interface LeftRight {
  step: string
  title: string
  description: string
  additional?: string
}

interface LeftRightProps {
  badge?: string
  title: string
  titleAccent?: string
  description: string
  buttonText?: string
  buttonLink?: string
  sections: LeftRight[]
}

const LeftRight = ({
  badge = "OUR JOURNEY",
  title,
  titleAccent,
  description,
  buttonText = "Get Free Quote",
  buttonLink = "/contact",
  sections
}: LeftRightProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px 0px"
  })

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  }

  const leftContentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const rightItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
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

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      color: "#bff747",
      borderColor: "#bff747",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative z-10 w-full text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Mobile: Stack layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-20">
          {/* Left Side - Content */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start py-4 sm:py-8 lg:py-8">
            <motion.div 
              variants={leftContentVariants}
              className="space-y-4 sm:space-y-5 w-full text-center lg:text-left"
            >
              <motion.h3 
                variants={leftContentVariants}
                className="text-[#bff747] text-base sm:text-lg lg:text-xl font-bold"
              >
                {badge}
              </motion.h3>
              
              <motion.h2 
                variants={leftContentVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                {title} {titleAccent && <span className="text-[#bff747]">{titleAccent}</span>}
              </motion.h2>
              
              <motion.p 
                variants={leftContentVariants}
                className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.div 
                variants={leftContentVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href={buttonLink}
                    className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border-2 border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-[#bff747]/20 text-sm sm:text-base">
                    {buttonText}
                    <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Content Sections */}
          <motion.div 
            variants={containerVariants}
            className="lg:w-3/5 flex flex-col gap-8 sm:gap-10 lg:gap-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={rightItemVariants}
                className="min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center py-8 sm:py-12 lg:py-16"
              >
                <div className="w-full space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
                  <motion.div 
                    className="text-[#bff747] text-sm sm:text-base lg:text-lg font-semibold"
                  >
                    STEP {section.step}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
                  >
                    {section.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed"
                  >
                    {section.description}
                  </motion.p>
                  
                  {section.additional && (
                    <motion.p 
                      className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed"
                    >
                      {section.additional}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default LeftRight