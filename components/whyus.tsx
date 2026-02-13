"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Trusted Experts",
    description: "Our team has years of hands-on experience in web development, UI/UX, and social media marketing.",
 
    rotate: "rotate-[-3deg]",
  },
  {
    number: "02",
       title: "Clear Communication",
    description: "Transparent process with regular updates and open collaboration, ensuring no hidden costs or surprises.",
 
    rotate: "rotate-[2deg]",
  },
  {
    number: "03",
    title: "Reliable Support",
    description: "We provide ongoing support to ensure your websites, social media campaigns, and digital products run smoothly.",
 
    rotate: "rotate-[-2deg]",
  },
  {
    number: "04",
   title: "Custom Solutions",
    description: "Tailored solutions designed for your business goals, performance, scalability, and measurable results.",
 
    rotate: "rotate-[3deg]",
  },
];


export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px 0px"
  });

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
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
     hover: {
      y: -8,
      scale: 1.02,
     
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

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
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full bg-black text-white py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          variants={backgroundVariants}
          className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"
        />
        <motion.div 
          variants={backgroundVariants}
          transition={{ delay: 0.3 }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div 
          variants={headerVariants}
          className="mb-16 text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-[#bff747] text-lg md:text-xl font-bold mb-4 uppercase tracking-wider"
          >
            Trusted Expertise
          </motion.h3>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Why Choose <span className="text-[#bff747]">Us</span>
          </motion.h1>
        
        </motion.div>

        {/* Grid of Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
        >
          {SERVICES.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover="hover"
              className={`relative rounded-2xl p-6 min-h-[200px] flex flex-col justify-between backdrop-blur-sm bg-[#0b0b0b] text-white border border-white/10 ${item.rotate}`}
            >
              <motion.div 
    
                className="w-full h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className='flex items-center justify-center font-bold text-5xl text-[#bff747]'>
                    {item.number}
                  </span>
                  <ArrowUpRight className='w-6 h-6 text-[#bff747] ' />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}