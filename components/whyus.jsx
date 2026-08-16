"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

const REASONS = [
  {
    number: "01",
    title: "Trusted Experts",
    description:
      "Our team has years of hands-on experience in software development, web design, and mobile app engineering.",
    rotate: "rotate-[-3deg]",
  },
  {
    number: "02",
    title: "Clear Communication",
    description:
      "Transparent process with regular updates and open collaboration, ensuring no hidden costs or surprises.",
    rotate: "rotate-[2deg]",
  },
  {
    number: "03",
    title: "Reliable Support",
    description:
      "We provide ongoing support to ensure your software, websites, and apps run smoothly long after launch.",
    rotate: "rotate-[-2deg]",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "Tailored solutions designed around your business goals, performance, scalability, and measurable results.",
    rotate: "rotate-[3deg]",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px",
  });

  // Scroll words animation setup (matching Case Studies/About/Services)
  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothHeaderProgress = useSpring(headerScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerText = "We combine technical expertise with strategic insight to build high-performance software, websites, and mobile apps that deliver real, scalable results for your brand.";
  const words = headerText.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        className="w-full bg-black  text-white py-16  relative overflow-hidden z-10"
      >
        {/* Background Dots UI (matching Hero/Services) */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: `40px 40px`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Split Header (matching site style) */}
          <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 mb-20  ">

            <div className="lg:col-span-8 pt-4">
              <h2 className="text-2xl md:text-3xl  font-medium leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1">
                {words.map((word, i) => (
                  <Word key={i} word={word} progress={smoothHeaderProgress} index={i} total={words.length} />
                ))}
              </h2>
            </div>
            <div className="lg:col-span-4 ">
              <span className="text-8xl text-right font-bold text-[#bff747] uppercase leading-none block">
                Why <br /> <span className="text-white/80">Us</span>
              </span>
            </div>
          </div>

          {/* Grid of Cards (kept same as user asked) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto"
          >
            {REASONS.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className={`relative rounded-2xl p-8 min-h-[250px] flex flex-col justify-between backdrop-blur-sm bg-neutral-950 border border-white/5 ${item.rotate} hover:border-[#bff747]/30 lg:hover:rotate-0 transition-all duration-500`}
              >
                <motion.div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <span className="flex items-center justify-center font-bold text-6xl text-[#bff747] group-hover:text-[#bff747]/20 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#bff747]/50 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-[#bff747] " />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Word({ word, progress, index, total }) {
  const start = index / total;
  const end = Math.min(1, (index + 4) / total);

  const color = useTransform(progress, [start, end], ["#404040", "#ffffff"]);
  const opacity = useTransform(progress, [start, end], [0.4, 1]);

  return (
    <motion.span style={{ color, opacity }} className="relative">
      {word}
    </motion.span>
  );
}
