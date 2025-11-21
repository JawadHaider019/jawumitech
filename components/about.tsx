// components/About.tsx
"use client"

import { useState, useRef } from "react"
import { Check, ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"
import { motion, useInView, Variants } from "framer-motion"

export function AboutSection() {
  const [activeStat, setActiveStat] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px 0px"
  })

  const stats = [
    { number: "50+", label: "Project Complete", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "100%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "99%", label: "Satisfied clients", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
  ]

  const features = [
    "Empowering Growth with Smart Solutions",
    "Collaborative Approach for Maximum Impact", 
    "Innovative Solutions, Real-World Results",
  ]

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const headerVariants: Variants = {
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
  }

  const statItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      borderColor: "#bff747",
      backgroundColor: "rgba(11, 11, 11, 0.9)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const featureItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const progressBarVariants: Variants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
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
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  // Simple float animation using CSS animation
  const floatStyle = {
    animation: "float 3s ease-in-out infinite"
  }

  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className='text-base sm:text-lg mb-4 sm:mb-5 md:text-xl font-bold text-[#bff747] uppercase'
          >
            Innovating technology
          </motion.h1>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            ABOUT <span className="text-[#bff747]">JAWUMITECH</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            {/* Main Description */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We help startups and businesses build their digital future. We blend technical expertise with real-world experience to deliver innovative and reliable solutions.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={featureItemVariants}
                    whileHover="hover"
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#bff747] rounded-full flex items-center justify-center mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statItemVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeStat === index 
                      ? "border-[#bff747] bg-[#0b0b0b] scale-105" 
                      : "border-gray-800 bg-[#0b0b0b] hover:border-gray-600"
                  }`}
                  onMouseEnter={() => setActiveStat(index)}
                  onClick={() => setActiveStat(index)}
                >
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className={`transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-gray-400"
                    }`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-white"
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-gray-400"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Link href='/about' className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border-2 border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-[#bff747]/20 text-sm sm:text-base">
                More About
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <motion.div
              variants={cardVariants}
              className="relative bg-[#0b0b0b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl"
            >
              {/* Animated Background Elements */}
              <motion.div 
                initial={{ opacity: 0.3, scale: 1 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"
              />
              <motion.div 
                initial={{ opacity: 0.2, scale: 1 }}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {/* Project Complete Highlight */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-[#0b0b0b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#bff747] mb-1 sm:mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Projects Delivered</div>
                  </motion.div>
                  
                  {/* Success Rate */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-[#0b0b0b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-[#bff747] mb-1 sm:mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-[#bff747]">Success Rate</div>
                  </motion.div>
                </div>

                {/* Progress Bars */}
                <motion.div 
                  variants={containerVariants}
                  className="space-y-3 sm:space-y-4"
                >
                  <motion.div variants={itemVariants}>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                      <span>Client Satisfaction</span>
                      <span>99%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div 
                        variants={progressBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-[#bff747] h-1.5 sm:h-2 rounded-full"
                        style={{ maxWidth: "99%" }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                      <span>Project Success</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div 
                        variants={progressBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-[#bff747] h-1.5 sm:h-2 rounded-full"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Years of Experience */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800"
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-[#bff747] mb-1 sm:mb-2">5+</div>
                    <div className="text-gray-400 text-sm sm:text-base">Years of Excellence</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Animated Elements - Using CSS animations */}
      <div 
        style={floatStyle}
        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 blur-xl sm:blur-2xl"
      />
      <div 
        style={{...floatStyle, animationDelay: "1s"}}
        className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-[#bff747]/10 rounded-full -rotate-12 blur-lg sm:blur-xl"
      />
      <div 
        style={{...floatStyle, animationDelay: "0.5s"}}
        className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 blur-xl sm:blur-2xl"
      />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
      `}</style>
    </motion.section>
  )
}