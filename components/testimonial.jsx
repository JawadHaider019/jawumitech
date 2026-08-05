"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { FaStar, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { getAllProjects } from "../app/data/project";

const countryFlags = {
  "Pakistan": "https://flagcdn.com/pk.svg",
  "UAE": "https://flagcdn.com/ae.svg",
  "Canada": "https://flagcdn.com/ca.svg",
  "USA": "https://flagcdn.com/us.svg",
  "UK": "https://flagcdn.com/gb.svg",
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const widthRef = useRef(0);

  const baseVelocity = -1.5; // Constant speed
  const x = useMotionValue(0);

  // Get testimonials from project data
  const testimonials = React.useMemo(() => {
    const projects = getAllProjects();
    return projects
      .filter((project) => project.testimonial) // Only include projects with testimonials
      .map((project, index) => ({
        id: project.id,
        author: project.testimonial.author,
        position: project.testimonial.position,
        image: project.testimonial.image || "",
        quote: project.testimonial.quote,
        rating: project.testimonial.rating || 5,
        location: "Pakistan", // Default to Pakistan as per project data
      }));
  }, []);

  // Triple testimonials for endless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Initialize and handle screen size
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (scrollRef.current) {
        const fullWidth = scrollRef.current.scrollWidth;
        const setWidthValue = fullWidth / 3;
        setWidth(setWidthValue);
        widthRef.current = setWidthValue;
      }
    };

    // Initial measurement after a short delay to ensure DOM is settled
    const timeoutId = setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [testimonials]);

  // Observer for header fade-in
  useEffect(() => {
    if (!isMounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  const handlePause = () => {
    if (!isMobile) isPausedRef.current = true;
  };
  const handleResume = () => {
    if (!isMobile) isPausedRef.current = false;
  };

  const touchHandlers = isMobile ? {
    onTouchStart: () => { isPausedRef.current = true; },
    onTouchEnd: () => { isPausedRef.current = false; }
  } : {};

  // Endless loop logic using useAnimationFrame for perfect pause/resume
  useAnimationFrame((t, delta) => {
    if (isPausedRef.current || isDraggingRef.current || !widthRef.current) return;

    let moveBy = baseVelocity * (delta / 16); // Normalize speed by frame rate

    // If we've scrolled past one full set, reset to the middle set to keep it endless
    if (x.get() <= -widthRef.current) {
      x.set(x.get() + widthRef.current);
    } else if (x.get() > 0) {
      x.set(x.get() - widthRef.current);
    }

    x.set(x.get() + moveBy);
  });

  const handleDragStart = () => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false;
  };

  if (!isMounted) {
    return (
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-96 max-w-full mx-auto mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16  bg-white text-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-500"
        >

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-black">
            Real People, Real <br /> Results Feedback
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">See what our users are truly accomplishing with honest, and project-based reviews</p>
        </div>

        {/* Running Carousel Container */}
        <div className="mt-16 relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Running carousel */}
          <div className="overflow-hidden">
            <motion.div
              ref={scrollRef}
              style={{ x, width: "fit-content", touchAction: isMobile ? "pan-y" : "auto" }}
              // Desktop hover events
              onHoverStart={handlePause}
              onHoverEnd={handleResume}
              // Mobile touch events
              {...touchHandlers}
              className={`flex gap-6 ${isMobile ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              // Dragging support
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: -width * 2, right: 0 }}
              dragElastic={0.05}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] select-none"
                  whileTap={isMobile ? { scale: 0.98 } : undefined}
                >
                  {/* Testimonial Card */}
                  <div className="relative h-[280px] my-5">
                    {/* Card */}
                    <div className="relative h-full bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                      {/* Large Quote Icon */}
                      <div className="absolute top-4 right-4">
                        <FaQuoteRight className="w-16 h-16 sm:w-20 sm:h-20 text-[#bff747]/40" />
                      </div>

                      {/* Rating stars */}
                      <div className="flex gap-1 mb-4 relative z-10">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="flex-1 relative z-10">
                        <p className="font-['Manrope'] text-gray-700 text-sm md:text-base leading-relaxed line-clamp-4">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Author info with flag */}
                      <div className="pt-4 border-t border-gray-100 mt-4 relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <h4 className="font-['Marcellus'] text-base font-bold text-gray-900">
                              {testimonial.author}
                            </h4>
                            <span className="text-xs text-gray-400">{testimonial.position}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Flag image */}
                            {countryFlags[testimonial.location] && (
                              <div className="relative w-5 h-3.5 overflow-hidden rounded-sm shadow-sm border border-gray-100">
                                <Image
                                  src={countryFlags[testimonial.location]}
                                  alt={`${testimonial.location} flag`}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                            )}
                            <span className="font-['Manrope'] text-xs text-gray-500 uppercase font-semibold">
                              {testimonial.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Animated Elements */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 animate-float blur-xl sm:blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-[#bff747]/10 rounded-full -rotate-12 animate-float-delayed blur-lg sm:blur-xl pointer-events-none"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
        }

        @keyframes floatDelayed {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-8px) rotate(-12deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section >
  );
};

export default Testimonials;
