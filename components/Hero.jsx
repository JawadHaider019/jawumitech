"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, LayoutDashboard, Smartphone, Store } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1 + (i * 0.1),
        duration: 0.5,
      }
    })
  };

  const ctaButtonVariants = {
    hover: {
      backgroundColor: "#000000",
      color: "#bff747",
      scale: 1.05,
      borderColor: "#bff747",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const servicesCards = [
    {
      icon: ShoppingBag,
      title: "E-Commerce Stores",
      desc: "High-converting online storefronts built for scale.",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboards",
      desc: "Full control over products, orders, and data.",
    },
    {
      icon: Store,
      title: "Marketplaces",
      desc: "Multi-vendor platforms for complex ecosystems.",
    },
    {
      icon: Smartphone,
      title: "Ecommerce Apps",
      desc: "Native mobile experiences for iOS and Android.",
    }
  ];

  const avatars = [
    "/clients/Ahmad.png",
    "/clients/khan.jpeg",
    "/clients/noman.jpeg"
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-28 pb-10 xl:pt-36 rounded-b-[3.5rem] z-20"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `40px 40px`
        }}
      />

      {/* Animated breathing glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#bff747] rounded-full mix-blend-screen filter blur-[200px] pointer-events-none"
      />

      <div className="relative z-10 max-w-8xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 sm:gap-2 items-center">

          {/* LEFT COLUMN - HEADINGS & CTAs */}
          <div className="text-white space-y-8 relative z-20">
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                CUSTOM <span className="text-[#bff747]"> <br className="block sm:hidden" /> E-COMMERCE</span>
                <br />
                <span className="text-[#bff747]">WEBSITES </span> BUILT FOR
                <br />  SCALABLE GROWTH
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-md sm:text-lg text-gray-400 max-w-lg leading-relaxed relative"
              >
                We build high-converting online stores with full admin dashboards, so you can manage products, orders, and content yourself. No Shopify fees. No template limitations.
              </motion.p>
            </div>

            {/* CTAs and Social Proof */}
            <div className="pt-4 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Primary Button */}
              <motion.a
                href="/contact"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000"
                }}
                whileTap={{ scale: 0.95 }}
                className="group/cta px-8 py-4 bg-[#bff747] text-black font-bold rounded-full flex items-center gap-3 shadow-lg shadow-[#bff747]/20 transition-all duration-300"
              >
                Book a Free Call
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover/cta:translate-x-2"
                />
              </motion.a>

              {/* Avatars & Social Proof */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={avatarVariants}
                      className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-neutral-800"
                    >
                      <Image
                        src={src}
                        alt="Client"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.src = "/placeholder-user.jpg" }}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    variants={avatarVariants}
                    custom={3}
                    className="w-12 h-12 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs font-bold"
                  >
                    +50
                  </motion.div>
                </div>
                <div>
                  <div className="font-bold text-white leading-tight">50+ Projects</div>
                  <div className="text-xs text-gray-400">Completed Successfully</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN - 2x2 CARD GRID */}
          <div className="w-full relative lg:pl-10">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-20"
            >
              {servicesCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(30,30,30,0.8)",
                      y: -5
                    }}
                    className="bg-[#111] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center min-h-[220px] transition-all"
                  >
                    <div className="w-12 h-12 mb-6 rounded-full bg-[#bff747]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#bff747]" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

