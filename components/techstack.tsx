"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiVercel,
  SiDocker,
  SiGraphql,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiFirebase,
  SiStripe,
  SiSocketdotio,
  SiPrisma,
  SiFastapi,
  SiExpress,
  SiJavascript,
  SiDotnet,
  SiPhp,
  SiFigma,
  SiAdobexd,
  SiAmazon,
  SiCloudinary
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaAws, FaGitAlt } from 'react-icons/fa';
import { RiAiGenerate } from 'react-icons/ri';

// Updated tech stack with colored icons
const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white hover:text-white" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB] hover:text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6] hover:text-[#3178C6]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933] hover:text-[#339933]" },
  { name: "Express", icon: SiExpress, color: "text-white hover:text-white" },
  { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20] hover:text-[#FF2D20]" },
  { name: "PHP", icon: SiPhp, color: "text-[#777BB4] hover:text-[#777BB4]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248] hover:text-[#47A248]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1] hover:text-[#4479A1]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1] hover:text-[#4169E1]" },
  { name: "GraphQL", icon: SiGraphql, color: "text-[#E10098] hover:text-[#E10098]" },
  { name: "REST APIs", icon: SiFastapi, color: "text-[#009688] hover:text-[#009688]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28] hover:text-[#FFCA28]" },
  { name: "Supabase", icon: SiPostgresql, color: "text-[#3ECF8E] hover:text-[#3ECF8E]" },
  { name: "AWS", icon: SiAmazon, color: "text-[#FF9900] hover:text-[#FF9900]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED] hover:text-[#2496ED]" },
  { name: "Vercel", icon: SiVercel, color: "text-white hover:text-white" },
  { name: "React Native", icon: SiReact, color: "text-[#61DAFB] hover:text-[#61DAFB]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E] hover:text-[#F24E1E]" },
  { name: "Adobe XD", icon: SiAdobexd, color: "text-[#FF61F6] hover:text-[#FF61F6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4] hover:text-[#06B6D4]" },
  { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-[#FF69B4] hover:text-[#FF69B4]" },
  { name: "GSAP", icon: SiFramer, color: "text-[#88CE02] hover:text-[#88CE02]" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-[#3448C5] hover:text-[#3448C5]" },
  { name: "Stripe", icon: SiStripe, color: "text-[#008CDD] hover:text-[#008CDD]" },
  { name: "AI APIs", icon: RiAiGenerate, color: "text-[#10B981] hover:text-[#10B981]" },
  { name: "WebSockets", icon: SiSocketdotio, color: "text-white hover:text-white" },
  { name: "GitHub", icon: FaGitAlt, color: "text-white hover:text-white" }
];

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const icons = containerRef.current?.querySelectorAll('.tech-icon');
            if (icons) {
              // Animate icons in with stagger
              gsap.to(icons, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)"
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#bff747] text-lg md:text-xl font-bold mb-4 uppercase tracking-wider">
            TECHNOLOGIES
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Tech <span className="text-[#bff747]">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We work with the latest and most reliable technologies to build exceptional digital experiences.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="flex flex-wrap justify-center gap-6 max-w-6xl"
          >
            {techStack.map((tech, i) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={i}
                  className="tech-icon flex flex-col items-center justify-center cursor-pointer group opacity-0 scale-50 translate-y-10"
                >
                  <div className={`text-4xl md:text-5xl ${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2`}>
                    <IconComponent />
                  </div>
                  <span className="text-white/70 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Categories */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 border border-gray-700 rounded-full">Frontend</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">Backend</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">Mobile</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">Database</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">DevOps</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">Design</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">APIs</span>
            <span className="px-3 py-1 border border-gray-700 rounded-full">Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;