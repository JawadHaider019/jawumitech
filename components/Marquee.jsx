// components/AdvancedMarquee.tsx
"use client";
import React, { useState } from "react";

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const techStack = [
    "Custom Ecommerce ",
    "*",
    "Multi-Vendor Platform ",
    "*",
    "Mobile App ",
    "*",
    "UI/UX Design",
    "*",
    "Growth Strategy",
    "*",
    "User Experience",
  ];

  return (
    <section className="py-4 overflow-hidden bg-[#bff747]">
      <div className="container mx-auto px-4">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-20 ${isPaused ? "animate-pause" : "animate-scroll"}`}
          >
            {/* Original set */}
            {techStack.map((tech, i) => (
              <span
                key={`original-${i}`}
                className="flex-shrink-0 text-black text-4xl  transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {/* First duplicate */}
            {techStack.map((tech, i) => (
              <span
                key={`duplicate-1-${i}`}
                className="flex-shrink-0 text-black text-4xl  transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {/* Second duplicate for better seamless effect */}
            {techStack.map((tech, i) => (
              <span
                key={`duplicate-2-${i}`}
                className="flex-shrink-0 text-black text-5xl  transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: max-content;
          }

          .animate-pause {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Marquee;
