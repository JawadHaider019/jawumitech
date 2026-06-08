"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    title: "Custom E-Commerce Development",
    description: [
      "Your main money-maker. We build high-converting custom online stores that offer a powerful alternative to Shopify.",
      "Includes: Custom online stores, Shopify alternative builds, Custom checkout systems, Product management systems, Inventory systems, Payment integration, and Performance optimization."
    ],
    image: "/ecommerce-dashboard.png"
  },
  {
    title: "Admin Dashboard Development",
    description: [
      "Differentiate your business with bespoke internal tools. Most small agencies ignore the backend — we don't.",
      "Includes: Product management, Order management, Inventory tracking, Customer management, Analytics dashboards, and Staff roles & permissions."
    ],
    image: "/Software.png"
  },
  {
    title: "Multi-Vendor Marketplace Development",
    description: [
      "High-ticket engineering for complex ecosystems. Ideal for UAE startups, niche marketplaces, and delivery networks.",
      "Includes: Vendor registration & dashboards, Commission systems, Multi-seller product management, Payout systems, and Marketplace admin controls."
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mobile App Development",
    description: [
      "Supporting service focused strictly on E-commerce & business apps for iOS and Android.",
      "Includes: Ecommerce mobile apps, Vendor apps, Customer apps, Delivery apps, and Order tracking apps."
    ],
    image: "/App.png"
  }
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  // Scroll words animation setup
  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothHeaderProgress = useSpring(headerScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerText = "We build high-performance e-commerce ecosystems that remove technical limitations and give brands the power to scale their business with complete control.";
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
    <div className="bg-black pt-20">
      <section ref={sectionRef} className="w-full bg-black text-white py-24 px-6 md:px-20 overflow-hidden relative rounded-t-[3.5rem]">
        {/* Background Dots UI (matching Hero) */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: `40px 40px`
          }}
        />

        <div className="max-w-8xl mx-auto relative z-10">
          {/* Sync Header STYLE (matching Case Studies/About but in Black) */}
          <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-32">
            <div className="lg:col-span-4">
              <span className="text-8xl font-bold text-[#bff747] uppercase leading-none block">
                OUR <br /> <span className="text-[#bff747]">SERVICES</span>
              </span>
            </div>
            <div className="lg:col-span-8 pt-4">
              <h2 className="text-2xl md:text-4xl font-medium leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1">
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
                  className={`group relative flex flex-col lg:flex-row items-start lg:items-center px-0 transition-all duration-500 cursor-pointer border-t border-gray-800/50 ${isOpen ? "bg-white/5 px-4 md:px-8 py-10 md:py-16" : "hover:bg-white/5 hover:px-2 md:hover:px-4 py-8 md:py-12"}`}
                  onMouseEnter={() => isDesktop && handleMouseEnter(idx)}
                  onMouseLeave={() => isDesktop && handleMouseLeave()}
                  onClick={() => {
                    if (!isDesktop) {
                      setExpanded(isOpen ? null : idx);
                    }
                  }}
                >
                  <div className="flex w-full items-center justify-between lg:contents">
                    <div className="flex items-center gap-4 lg:contents">
                      <div className="lg:w-1/12 flex items-center">
                        <span className={`text-4xl md:text-5xl lg:text-7xl font-bold transition-all duration-500 ${isOpen ? "text-[#bff747] -translate-x-6 text-6xl md:text-7xl lg:text-9xl -rotate-90" : "text-neutral-800"}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="lg:w-7/12 flex flex-col items-start justify-center">
                        <h3 className={`text-2xl md:text-4xl lg:text-6xl font-bold transition-all duration-500 ${isOpen ? "text-white" : "text-neutral-500"}`}>
                          {service.title}
                        </h3>

                        <div className={`hidden lg:block transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-80 mt-4' : 'opacity-0 max-h-0'}`}>
                          <div className="flex flex-col gap-3">
                            {service.description.map((desc, i) => (
                              <p key={i} className="text-gray-400 lg:text-xl leading-relaxed max-w-2xl">
                                {desc}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:hidden">
                      <ArrowUpRight
                        className={`w-6 h-6 transition-all duration-300 ${isOpen ? "text-[#bff747]" : "text-gray-600"
                          } ${isHovered ? "rotate-12 scale-110 text-[#bff747]" : "rotate-0"
                          }`}
                      />
                    </div>
                  </div>

                  <div className={`lg:hidden w-full transition-all duration-700 overflow-hidden ${isOpen ? 'opacity-100 max-h-[500px] mt-6' : 'opacity-0 max-h-0'}`}>
                    <div className="flex flex-col gap-3 pl-12 md:pl-20">
                      {service.description.map((desc, i) => (
                        <p key={i} className="text-gray-400 text-base md:text-lg leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:w-[500px] justify-end overflow-hidden transition-all duration-700 ease-in-out pr-12">
                    <div
                      className={`w-full aspect-video lg:aspect-auto overflow-hidden rounded-[2.5rem] relative transition-all duration-700 ${isOpen ? 'opacity-100 scale-100 h-80' : 'opacity-0 scale-95 h-48'}`}
                    >
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                  </div>

                  <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block transition-all duration-300">
                    <ArrowUpRight
                      className={`w-14 h-14 transition-all duration-300 ${isOpen ? "text-white" : "text-gray-600"
                        } ${isHovered ? "rotate-90 scale-110 text-[#bff747]" : "rotate-0"
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Stats Section */}
          <div className="mt-24 lg:mt-32 pt-20 border-t border-gray-800/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Happy Clients", value: "30+" },
                { label: "Years Expertise", value: "3+" },
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

          {/* Bottom CTA */}
          <div className="mt-32 text-center pb-20">
            <h3 className="text-4xl lg:text-6xl font-bold mb-12 uppercase">Ready to Start <br /> <span className="text-[#bff747] italic">Your Project?</span></h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-[#bff747] text-black font-bold rounded-full border-2 border-[#bff747] hover:bg-black hover:text-[#bff747] transition-all duration-500 hover:scale-110 group shadow-lg shadow-[#bff747]/20"
            >
              Get a Free Quote
              <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-3" />
            </Link>
          </div>
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
