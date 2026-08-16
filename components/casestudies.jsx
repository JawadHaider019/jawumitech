"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/data/project";

export default function CaseStudies() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const displayProjects = projects.slice(0, 5);
    const total = displayProjects.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
    };

    // Auto-slide every 5 seconds, resetting interval on slide change
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, total]);

    return (
        <section className="relative bg-[#ffffff] py-16  overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative">

                {/* Top Section / Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center max-w-7xl mx-auto "
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-black">
                        What We’ve Built
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        We design high-converting digital experiences that help brands attract customers, build trust, and grow online.
                    </p>
                </motion.div>

                {/* Main Carousel Stack Container */}
                <div className="relative flex items-center justify-center min-h-[550px] md:min-h-[580px] max-w-5xl mx-auto ">

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous case study"
                        className="absolute left-2 sm:left-4 md:left-6 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/90 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/10"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next case study"
                        className="absolute right-2 sm:right-4 md:right-6 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/90 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-white/10"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
                    </button>

                    {/* Animated 3D Carousel Cards Container */}
                    <div className="relative w-full h-full flex items-center justify-center min-h-[540px]">
                        {displayProjects.map((project, idx) => {
                            // Calculate circular offset relative to active card
                            let offset = idx - currentIndex;
                            if (offset > Math.floor(total / 2)) {
                                offset -= total;
                            } else if (offset < -Math.floor(total / 2)) {
                                offset += total;
                            }

                            const isActive = offset === 0;
                            const isLeft = offset === -1;
                            const isRight = offset === 1;

                            // Determine card animation properties based on position
                            let xPos = "0%";
                            let scale = 1;
                            let opacity = 1;
                            let zIndex = 30;
                            let rotateY = 0;

                            if (isLeft) {
                                xPos = "-60%";
                                scale = 0.85;
                                opacity = 0.6;
                                zIndex = 10;
                                rotateY = 5;
                            } else if (isRight) {
                                xPos = "60%";
                                scale = 0.85;
                                opacity = 0.6;
                                zIndex = 10;
                                rotateY = -5;
                            } else if (offset < -1) {
                                xPos = "-120%";
                                scale = 0.7;
                                opacity = 0;
                                zIndex = 0;
                            } else if (offset > 1) {
                                xPos = "120%";
                                scale = 0.7;
                                opacity = 0;
                                zIndex = 0;
                            }

                            return (
                                <motion.div
                                    key={project.id || idx}
                                    initial={false}
                                    animate={{
                                        x: xPos,
                                        scale: scale,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        rotateY: rotateY,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        ease: [0.25, 1, 0.5, 1],
                                    }}
                                    onClick={() => {
                                        if (isLeft) prevSlide();
                                        if (isRight) nextSlide();
                                    }}
                                    className={`absolute w-full max-w-xl px-2 ${isActive
                                        ? "cursor-default z-30"
                                        : "cursor-pointer hover:opacity-85 transition-opacity"
                                        }`}
                                    style={{
                                        transformPerspective: 1000,
                                    }}
                                >
                                    <div className="bg-[#f2f2f4] border border-white/80 rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.07)] flex flex-col gap-4 w-full">
                                        {/* Image Container */}
                                        <div className="w-full h-[240px] sm:h-[280px] md:h-[300px] rounded-[2rem] md:rounded-[2.3rem] relative overflow-hidden flex items-center justify-center group">
                                            <div className="relative w-full h-full rounded-[2rem] md:rounded-[2.3rem] overflow-hidden flex items-center justify-center">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    priority={isActive}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                                            </div>
                                        </div>

                                        {/* Content Container */}
                                        <div className="w-full flex flex-col justify-between px-4 sm:px-6 pb-2">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-[1.25] tracking-tight mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <div className="mb-3">
                                                    <Link
                                                        href={`/case-studies/${project.slug}`}
                                                        className="inline-flex items-center text-gray-900 font-semibold text-xs sm:text-sm group"
                                                    >
                                                        <span className="underline underline-offset-4 decoration-2 decoration-gray-900 group-hover:text-black transition-colors">
                                                            Read More
                                                        </span>
                                                        <div className="w-6 h-6 rounded-full bg-gray-300/80 flex items-center justify-center text-gray-900 ml-2.5 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:translate-x-1">
                                                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Carousel Pagination Indicator Dots */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    {displayProjects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className="transition-all duration-300 focus:outline-none cursor-pointer"
                        >
                            {idx === currentIndex ? (
                                <motion.div
                                    layoutId="activeDot"
                                    className="w-8 h-2.5 rounded-full bg-[#bff747] shadow-xs shadow-[#bff747]/40"
                                />
                            ) : (
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Bottom Action Button */}
                <div className="flex justify-center mt-4">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#bff747] hover:bg-black text-black hover:text-white font-bold rounded-full transition-all duration-300 group shadow-lg shadow-[#bff747]/20"
                    >
                        Explore All Case Studies
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
