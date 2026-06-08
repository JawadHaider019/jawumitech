"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/app/data/project";

export default function CaseStudies() {
    const containerRef = useRef(null);
    // Limit to 4 projects for the stack
    const displayProjects = projects.slice(0, 4);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-white font-sans py-16">
            <div className="max-w-8xl mx-auto px-6 lg:px-8 ">
                {/* Top Section / Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center   max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 text-black">
                        OUR BEST <br />  WORK
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        We design high-converting digital experiences that help brands attract customers, build trust, and grow online.
                    </p>
                </motion.div>

                {/* Cards Container with Stack Animation */}
                <div className="relative h-[300vh]">
                    <div className="sticky top-0 h-screen overflow-hidden">
                        {/* Visual Grid Background */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
                                backgroundSize: `40px 40px`
                            }}
                        />

                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {displayProjects.map((project, i) => (
                                <StudyCard
                                    key={project.id}
                                    project={project}
                                    index={i}
                                    total={displayProjects.length}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function StudyCard({ project, index, total, scrollYProgress }) {
    const start = index / total;
    const end = (index + 1) / total;

    // Translation reveal
    const y = useTransform(scrollYProgress, [start - 0.2, start], ["100vh", "0vh"]);

    // Stacking offset
    const topOffset = index * 40;

    // Scaling
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.96]);

    // Dimming
    const brightness = useTransform(scrollYProgress, [start, end], ["100%", "85%"]);

    return (
        <motion.div
            style={{
                y,
                scale,
                filter: `brightness(${brightness})`,
                marginTop: `${topOffset}px`,
                zIndex: index + 10
            }}
            className="absolute inset-x-0 mx-auto w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row h-[450px] lg:h-[500px]"
        >
            {/* Subtle Inner Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: `30px 30px`
                }}
            />

            {/* Content Side */}
            <div className="flex p-8 lg:p-14 flex flex-col justify-center align-center relative z-10">
                <div>

                    <h3 className="text-4xl lg:text-7xl font-semibold text-black mb-6 tracking-tighter leading-[0.9]">
                        {project.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-500  leading-relaxed max-w-md mb-8">
                        {project.description}
                    </p>

                    <Link
                        href={`/case-studies/${project.slug}`}
                        className="inline-flex items-center gap-4 px-6 py-3 bg-[#bff747] text-black hover:bg-black hover:text-white font-bold rounded-full transition-all duration-500 group"
                    >
                        Read More
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>


            </div>

            {/* Visual Side */}
            <div className="flex-1 relative bg-gray-50 overflow-hidden group">
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className=" absolute top-10 right-10 ">
                    <span className="text-sm font-bold text-black bg-[#bff747] px-4 py-2 rounded-full uppercase tracking-widest">{project.category}</span>

                </div>
                <div className=" absolute bottom-10 right-10 ">
                    <span className="text-gray-400 font-bold text-7xl  block  font-serif">0{index + 1}</span>
                </div>

            </div>
        </motion.div>
    );
}
