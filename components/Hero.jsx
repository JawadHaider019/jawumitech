"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const words = ["Software", "Mobile App", "Website"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Software");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 40 : 90;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="w-full bg-white pt-2 sm:pt-4 overflow-hidden font-sans">
      {/* Outer Rounded Black Hero Card */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative min-h-[70vh] sm:min-h-[95vh] mx-3 sm:mx-6 rounded-3xl bg-[#050505] text-white border border-neutral-900 overflow-hidden flex flex-col justify-between px-6 pt-24 pb-12 sm:px-10 sm:pt-28 sm:pb-16"
      >

        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 filter brightness-90 contrast-105 scale-105"
          >
            <source src="/hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay Gradient for text legibility & modern blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70  mix-blend-multiply" />
        </div>

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

        {/* MAIN DISPLAY HEADLINE */}
        <div className="my-auto py-8 sm:py-12 md:py-16 text-center max-w-[92rem] mx-auto z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.02]"
          >
            Custom{" "}
            <span className="inline-flex items-center text-[#bff747] italic whitespace-nowrap min-h-[1em]">
              <span>{displayedText || "\u00A0"}</span>
              <span className="inline-block w-[3px] h-[0.8em] bg-[#bff747] ml-1 animate-pulse align-middle" />
            </span>{" "}
            Solutions <br className="hidden sm:block" /> That Help Modern Businesses <br className="hidden sm:block" /> <span className="text-[#bff747] italic">Scale and Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-6  leading-relaxed"
          >
            From idea to launch, we build reliable digital products custom software, websites, mobile apps, and AI-powered solutions  for companies that need technology that actually works
          </motion.p>
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
