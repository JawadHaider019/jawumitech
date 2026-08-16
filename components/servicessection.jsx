"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: "Software Development",
    description: [
      "We design and build business software, internal tools, and platforms built around how your business actually works — not a generic template. Includes e-commerce systems, admin dashboards, and multi-vendor platforms."
    ],
    image: "/software-dev.png",
    link: "/services/custom-software-development/"
  },
  {
    title: "Website Development",
    description: [
      "Fast, SEO-ready websites and web applications, hand-coded for speed and built to turn visitors into customers — not just look good."
    ],
    image: "/website-dev.png",
    link: "/services/website-development/"
  },
  {
    title: "Mobile App Development",
    description: [
      "iOS, Android, and cross-platform apps designed around real user behavior and built to scale from day one."
    ],
    image: "/mobile-dev.png",
    link: "/services/mobile-app-development/"
  }
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  // Scroll words animation setup (matching Case Studies/About)
  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothHeaderProgress = useSpring(headerScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerText = "We build custom software, websites, and mobile apps that remove technical limitations and give businesses the power to scale with complete control.";
  const words = headerText.split(" ");

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle hover-based expansion
  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
    setExpanded(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setExpanded(null);
  };

  // Entrance animations for service items
  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const items = serviceItemsRef.current.filter(Boolean);
      if (items.length > 0) {
        gsap.fromTo(items,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [mounted]);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-24 overflow-hidden relative">
      {/* Background Dots UI (matching Hero) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `40px 40px`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Sync Header STYLE (matching Case Studies/About but in Black) */}
        <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 mb-20 ">
          <div className="lg:col-span-5">
            <span className="text-8xl font-bold text-[#bff747] uppercase leading-none block">
              What <br /> <span className="text-[#fff]/80">We Do</span>
            </span>
          </div>
          <div className="lg:col-span-7 pt-4">
            <h2 className="text-2xl md:text-3xl  font-medium leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1">
              {words.map((word, i) => (
                <Word key={i} word={word} progress={smoothHeaderProgress} index={i} total={words.length} />
              ))}
            </h2>
          </div>
        </div>

        {/* Service List - Accordion/List UI */}
        <div className="flex flex-col">
          {SERVICES.map((service, idx) => {
            const isOpen = expanded === idx;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                ref={el => serviceItemsRef.current[idx] = el}
                className={`group relative flex flex-col lg:flex-row items-start lg:items-center px-0 transition-all duration-500 cursor-pointer border-t border-gray-800/50 ${isOpen ? "bg-white/5 px-4 md:px-8 py-7 md:py-10" : "hover:bg-white/5 hover:px-2 md:hover:px-4 py-5 md:py-8"}`}
                onMouseEnter={() => isDesktop && handleMouseEnter(idx)}
                onMouseLeave={() => isDesktop && handleMouseLeave()}
                onClick={() => {
                  if (!isDesktop) {
                    setExpanded(isOpen ? null : idx);
                  }
                }}
              >
                {/* Top Row for Mobile (Number + Title + Arrow) */}
                <div className="flex w-full items-center justify-between lg:contents">
                  <div className="flex items-center gap-4 lg:contents">
                    <div className="lg:w-1/12 flex items-center">
                      <span className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 ${isOpen ? "text-[#bff747] -translate-x-4 text-4xl md:text-5xl lg:text-7xl -rotate-90" : "text-neutral-800"}`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title - Column 2 Part 1 */}
                    <div className="lg:w-7/12 flex flex-col items-start justify-center">
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-500 ${isOpen ? "text-white" : "text-neutral-500"}`}>
                        {service.title}
                      </h3>

                      {/* Description - Desktop Position */}
                      <div className={`hidden lg:block transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-60 mt-2' : 'opacity-0 max-h-0'}`}>
                        <div className="flex flex-col gap-1">
                          {service.description.map((desc, i) => (
                            <p key={i} className="text-gray-400 lg:text-md leading-relaxed max-w-xl">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator (Mobile) - Always visible */}
                  <div className="lg:hidden">
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${isOpen ? "text-[#bff747]" : "text-gray-600"
                        } ${isHovered ? "rotate-12 scale-110 text-[#bff747]" : "rotate-0"
                        }`}
                    />
                  </div>
                </div>

                {/* Description Reveal - Mobile Position */}
                <div className={`lg:hidden w-full transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-96 mt-4' : 'opacity-0 max-h-0'}`}>
                  <div className="flex flex-col gap-2 pl-12 md:pl-16">
                    {service.description.map((desc, i) => (
                      <p key={i} className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Image Reveal - Desktop Only */}
                <div className="hidden lg:flex lg:w-[450px] justify-end overflow-hidden transition-all duration-700 ease-in-out pr-6">
                  <div
                    className={`w-full aspect-video lg:aspect-auto overflow-hidden rounded-[2rem] relative transition-all duration-700 ${isOpen ? 'opacity-100 scale-100 h-64' : 'opacity-0 scale-95 h-40'}`}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover  transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Arrow Indicator (Desktop) - Always visible, links to detail page */}
                <Link
                  href={service.link}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-300 z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRight
                    className={`w-10 h-10 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-600"
                      } ${isHovered ? "rotate-90 scale-110 text-[#bff747]" : "rotate-0"
                      }`}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Animated Stats Section */}
        <div className=" pt-16 border-t border-gray-800/50">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { label: "Projects Delivered", value: "100+" },
              { label: "Years Expertise", value: "5+" },
              { label: "Success Rate", value: "100%" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#bff747] mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

function Word({ word, progress, index, total }) {
  const start = index / total;
  const end = Math.min(1, (index + 4) / total);

  // Transitions from neutral-700 to white
  const color = useTransform(progress, [start, end], ["#404040", "#ffffff"]);
  const opacity = useTransform(progress, [start, end], [0.4, 1]);

  return (
    <motion.span style={{ color, opacity }} className="relative">
      {word}
    </motion.span>
  );
}
