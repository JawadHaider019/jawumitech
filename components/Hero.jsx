"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, PhoneCall, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <section className="w-full bg-white pt-2 sm:pt-4 overflow-hidden font-sans">
      {/* Outer Rounded Black Hero Card */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[70vh] sm:min-h-[95vh] mx-3 sm:mx-6 rounded-3xl bg-[#050505] text-white border border-neutral-900 overflow-hidden flex flex-col justify-between px-6 py-6  sm:px-10"
      >

        {/* Morphing Liquid Glow Orbs (Ambient Animations) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
          {/* Orb 1: Lime Green Accent */}
          <motion.div
            animate={{
              scale: [1, 1.25, 0.9, 1.1, 1],
              x: [0, 60, -40, 20, 0],
              y: [0, -50, 40, -20, 0],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 65% 55%", "50% 60% 30% 70% / 50% 60% 40% 60%", "60% 40% 60% 40% / 60% 50% 60% 50%", "40% 60% 70% 30% / 40% 50% 65% 55%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 left-1/4 w-[380px] h-[380px] bg-[#bff747]/10 rounded-full blur-[110px]"
          />

          {/* Orb 2: Matching Brand Accent Glow */}
          <motion.div
            animate={{
              scale: [1.1, 0.9, 1.2, 0.85, 1.1],
              x: [0, -50, 60, -30, 0],
              y: [0, 40, -60, 30, 0],
              rotate: [360, 270, 180, 90, 0],
              borderRadius: ["50% 50% 30% 70% / 50% 60% 40% 60%", "60% 40% 60% 40% / 40% 60% 50% 50%", "40% 60% 70% 30% / 50% 40% 60% 55%", "50% 50% 30% 70% / 50% 60% 40% 60%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#bff747]/8 rounded-full blur-[130px]"
          />

          {/* Orb 3: Matching Brand Accent Glow */}
          <motion.div
            animate={{
              scale: [0.9, 1.15, 0.8, 1.05, 0.9],
              x: [0, 40, -50, 30, 0],
              y: [0, 60, -30, -50, 0],
              borderRadius: ["60% 40% 60% 40% / 60% 50% 60% 50%", "40% 60% 70% 30% / 50% 60% 40% 60%", "50% 50% 30% 70% / 40% 50% 60% 55%", "60% 40% 60% 40% / 60% 50% 60% 50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute -bottom-20 left-1/3 w-[360px] h-[360px] bg-[#bff747]/6 rounded-full blur-[120px]"
          />
        </div>

        {/* Thin Linear Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* Interactive Mouse Glow Tracker */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute pointer-events-none rounded-full blur-[120px] bg-[#bff747]/15 w-[380px] h-[380px] z-0 hidden md:block"
              style={{
                left: 0,
                top: 0,
              }}
              animate={{
                x: mousePos.x - 190,
                y: mousePos.y - 190,
              }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
            />
          )}
        </AnimatePresence>

        {/* TOP NAVBAR AREA */}
        <div className="flex items-center justify-between w-full z-20">
          {/* Logo (Far Left) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/iconjt.png"
                alt="Jawumitech Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

          </Link>

          {/* Right Action & Menu (Far Right) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2.5 backdrop-blur-sm"
            >
              <span>Book a call</span>
            </Link>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col justify-center items-center gap-1.5 w-10 h-10  transition-all cursor-pointer"
              aria-label="Open Menu"
            >
              <span className="w-5 h-[2px] bg-white rounded-full" />
              <span className="w-5 h-[2px] bg-white rounded-full" />
              <span className="w-5 h-[2px] bg-white rounded-full" />
            </button>
          </div>
        </div>

        {/* SIDE DRAWER NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-pointer"
              />

              {/* Slide-out Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-neutral-950 border-l border-neutral-900 z-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white"
              >
                {/* Header of Drawer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/iconjt.png"
                        alt="Jawumitech Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-12 h-12  transition-colors cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Vertical Navigation Links */}
                <div className="flex flex-col gap-6 sm:gap-8 my-auto pt-8">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 hover:text-[#bff747] transition-all hover:translate-x-2 duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer of Drawer */}
                <div className="space-y-4 pt-8 border-t border-neutral-900">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-3.5 rounded-full bg-[#bff747] text-black font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md shadow-[#bff747]/20"
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* MAIN DISPLAY HEADLINE */}
        <div className="my-auto py-8 sm:py-12 md:py-16 text-center max-w-[92rem] mx-auto z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.02] sm:leading-[1.01]"
          >
            Custom <span className="text-[#bff747] italic">Software Solutions</span> <br className="hidden sm:block" /> That Help Modern Businesses <br className="hidden sm:block" /> <span className="text-[#bff747] italic">Scale and Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-6  leading-relaxed"
          >
            We build custom software, web and mobile apps, AI solutions, and intuitive user experiences that help businesses grow.   </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex  items-center justify-center gap-2 pt-6"
          >
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#bff747] text-black font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-[#bff747]/20 flex items-center gap-2 hover:scale-105"
            >
              <span>Book a call</span>
              <PhoneCall className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105"
            >
              <span>Our services</span>
              <ArrowUpRight className="w-4 h-4 text-[#bff747]" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
