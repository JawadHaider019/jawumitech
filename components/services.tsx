"use client";
import React from "react";
import { Code, Palette, Share2, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = [
  {
    number: "01",
    title: "Web Development",
    icon: Code,
    description: [
      "Build responsive, scalable, and SEO-friendly websites and custom web applications tailored to your business needs."
    ],
    features: [
      "Custom Website Development",
      "Responsive Design",
      "API Integration",
      "Database Setup",
      "E-commerce Stores",
      "Performance Optimization"
    ],
    technologies: ["Next.js", "React", "Node.js","Laravel", "MongoDB", "MySQL"],
    deliveryTime: "2–4 weeks"
  },
  {
    number: "02",
    title: "UI/UX Design",
    icon: Palette,
    description: [
      "Design intuitive and visually appealing interfaces that enhance user experience and strengthen your brand presence."
    ],
    features: [
      "UI Design",
      "UX Research",
      "Brand Identity",
      "Design Systems",
      "Wireframes & Prototypes",
      "Usability Testing"
    ],
    technologies: ["Figma", "Adobe XD"],
    deliveryTime: "2–4 weeks"
  },
  {
    number: "03",
    title: "Social Media Marketing",
    icon: Share2,
    description: [
      "Manage and grow your brand’s presence on platforms like Facebook, Instagram, and Tiktok through engaging content and strategic campaigns."
    ],
    features: [
      "Platform Management",
      "Engagement Tracking",
      "Advertising Campaigns",
      "Analytics & Reporting",
      "Strategy Planning"
    ],
    technologies: ["Facebook Ads", "Instagram Ads", "Tiktok Ads", "Analytics Tools"],
    deliveryTime: "Ongoing Support"
  },
  {
    number: "04",
    title: "IT Maintenance & Support",
    icon: Wrench,
    description: [
      "Proactive monitoring, updates, and troubleshooting to ensure your systems stay secure and perform optimally."
    ],
    features: [
      "24/7 Support",
      "Security Updates",
      "Performance Optimization",
      "Regular Backups",
      "Bug Fixes",
      "Server Support"
    ],
    technologies: ["Hosting Services", "Monitoring Tools"],
    deliveryTime: "Ongoing Support"
  }
];

// Fixed Animation variants - removed transition from variants and moved to component props
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
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const backgroundVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1
  }
};

// Common transition settings
const itemTransition = {
  duration: 0.6,
  ease: "easeOut" as const
};

const headerTransition = {
  duration: 0.8,
  ease: "easeOut" as const
};

const backgroundTransition = {
  duration: 1.2,
  ease: "easeOut" as const
};

const hoverTransition = {
  duration: 0.3,
  ease: "easeOut" as const
};

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        variants={backgroundVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={backgroundTransition}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#bff747]/3 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={headerTransition}
        >
          <motion.h3 
            className="text-[#bff747] text-lg sm:text-xl font-bold mb-3 sm:mb-4 uppercase tracking-wider"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            SERVICES
          </motion.h3>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Transform Your Business With Our <span className="text-[#bff747]">IT Solutions</span>
          </motion.h2>
        </motion.div>
  
        {/* Service Blocks */}
        <motion.div 
          className="space-y-8 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                transition={itemTransition}
                whileHover={{ 
                  scale: 1.02
                }}
                className="group relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#bff747]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
                  whileHover={{ opacity: 1 }}
                  transition={hoverTransition}
                />
                
                <div className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-12 group-hover:bg-white/5 transition-all duration-500 rounded-3xl p-8 lg:p-10 border border-white/10 group-hover:border-[#bff747]/30">
                  {/* Number & Icon Section */}
                  <div className="flex-shrink-0 w-full lg:w-48 flex flex-col items-center lg:items-start gap-6">
                    {/* Animated Number */}
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={hoverTransition}
                    >
                      <span
                        className="text-7xl sm:text-8xl lg:text-9xl font-black text-transparent leading-none select-none"
                        style={{ WebkitTextStroke: "2px #333" }}
                      >
                        {service.number}
                      </span>
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={hoverTransition}
                      >
                        <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-[#bff747] opacity-0 group-hover:opacity-100" />
                      </motion.div>
                    </motion.div>

                    {/* Delivery Time */}
                    <motion.div 
                      className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left"
                      whileHover={{ x: 5 }}
                      transition={hoverTransition}
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <motion.div 
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <span>{service.deliveryTime}</span>
                      </div>
                    </motion.div>
                  </div>
    
                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    {/* Title & Description */}
                    <div>
                      <motion.h3 
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white group-hover:text-[#bff747] transition-colors duration-300"
                        whileHover={{ x: 10 }}
                        transition={hoverTransition}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <div className="space-y-3 mb-6">
                        {service.description.map((paragraph, pIdx) => (
                          <motion.p 
                            key={pIdx}
                            className="text-lg text-gray-300 leading-relaxed max-w-4xl"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * pIdx + 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                    </div>

                    {/* Features & Technologies */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <motion.h4 
                          className="text-white font-semibold mb-3 flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={hoverTransition}
                        >
                          <div className="w-2 h-2 bg-[#bff747] rounded-full" />
                          Key Features
                        </motion.h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, fIdx) => (
                            <motion.div 
                              key={fIdx}
                              className="flex items-center gap-3 text-gray-300 group-hover:text-white/90 transition-colors duration-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.05 * fIdx + 0.4, ease: "easeOut" }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 bg-[#bff747] rounded-full flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                                transition={hoverTransition}
                              />
                              <span className="text-sm lg:text-base">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <motion.h4 
                          className="text-white font-semibold mb-3 flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={hoverTransition}
                        >
                          <div className="w-2 h-2 bg-[#bff747] rounded-full" />
                          Technologies
                        </motion.h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, tIdx) => (
                            <motion.span
                              key={tIdx}
                              className="px-3 py-1 bg-black/50 border border-gray-700 rounded-full text-sm text-gray-300 group-hover:border-[#bff747]/50 transition-colors duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 * tIdx + 0.5, ease: "easeOut" }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: "rgba(191, 247, 71, 0.1)"
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}