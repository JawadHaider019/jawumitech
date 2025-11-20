"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { 
  Code2, 
  Rocket, 
  Cpu, 
  Zap,
  ArrowUpRight,
  Target,
  TrendingUp
} from 'lucide-react'

const FounderSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [imageLoaded, setImageLoaded] = useState(false)



  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:min-h-screen lg:flex lg:items-center lg:justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Effects - Responsive */}
      <div className="absolute inset-0">
      
        <div className="absolute bottom-10 right-4 sm:bottom-1/4 sm:right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-[#8BC400] to-[#bff747] rounded-full blur-xl sm:blur-2xl lg:blur-3xl opacity-5"></div>
        
        {/* Grid Pattern - Hidden on mobile for performance */}
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(rgba(191,247,71,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,247,71,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-[#bff747] uppercase mb-4 lg:mb-6'>
              The Visionary
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Meet The <span className="bg-gradient-to-r from-[#bff747] to-[#8BC400] bg-clip-text text-transparent">Architect</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="xl:col-span-5 space-y-6 lg:space-y-8"
          >
            {/* Image Container */}
            <div className="relative group">
              {/* Outer Glow - Reduced on mobile */}
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#bff747] to-[#8BC400] rounded-xl sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl lg:blur-2xl opacity-15 sm:opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              
              {/* Main Image Card */}
              <div className="relative bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Animated Border - Desktop only */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#bff747] to-[#8BC400] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]">
                  <div className="w-full h-full bg-[#0A0A0A] rounded-2xl"></div>
                </div>

                {/* Image */}
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src="/founder.webp"
                    alt="Jawad Haider - Founder & CEO"
                    width={600}
                    height={600}
                    className={`w-full h-auto object-cover transition-all duration-500 ${
                      imageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                    } group-hover:scale-105`}
                    onLoad={() => setImageLoaded(true)}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  
                  {/* Overlay Gradient - Desktop only */}
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute top-3 right-3 bg-gradient-to-r from-[#bff747] to-[#8BC400] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm backdrop-blur-sm"
                  >
                    FOUNDER
                  </motion.div>
                </div>

                {/* Floating Elements - Desktop only */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="hidden lg:block absolute -top-2 -left-2 w-6 h-6 bg-[#bff747] rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="hidden lg:block absolute -bottom-2 -right-2 w-4 h-4 bg-[#8BC400] rounded-full blur-sm"
                />
              </div>
            </div>

          
    
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="xl:col-span-7 space-y-6 lg:space-y-8"
          >
            {/* Name & Title */}
            <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                Jawad <span className="bg-gradient-to-r from-[#bff747] to-[#8BC400] bg-clip-text text-transparent">Haider</span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start items-center"
              >
                <div className="flex items-center gap-2 text-[#bff747] font-semibold text-sm sm:text-base">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Founder & CEO</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Full-Stack Architect</span>
                </div>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left"
            >
              <p>
                With over 5 years of intensive experience in full-stack development and system architecture, 
                I've dedicated my career to transforming complex business challenges into elegant digital solutions. 
                My journey began with a simple belief: technology should empower, not complicate.
              </p>
              
              <p>
                What distinguishes my approach is the fusion of deep technical expertise with strategic business acumen. 
                I don't just build applications—I architect ecosystems that scale, perform, and drive measurable ROI for 
                businesses ranging from ambitious startups to established enterprises.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-[#0b0b0b] rounded-xl lg:rounded-2xl p-6  backdrop-blur-sm group hover:border-[#bff747]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3 ">
              
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-lg sm:text-xl  font-bold text-white flex items-center gap-2 justify-center lg:justify-start">
                    Future Vision
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#bff747] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-md ">
                    Designing the foundation for a world driven by intelligent automation — where workflows manage themselves, 
                    systems optimize continuously, and businesses scale without human limitations. This is the future I'm working toward.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection