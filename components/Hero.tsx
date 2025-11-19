// components/HeroSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Video autoplay handling
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center mb-10 justify-center overflow-hidden bg-black pt-20">
   

      {/* Background gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#bff747]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#bff747]/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          <div className="text-white space-y-8">
         
        

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                We Help Startups & Businesses Build Their <span className="text-[#bff747]">Digital Future</span>
              </h1>
              <p className={`text-xl text-gray-300 max-w-2xl transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                From concept to launch, we craft sleek, fast, and scalable web and mobile experiences that transform your ideas into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 items-start sm:items-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              

              <a
                href="https://wa.me/923291927168"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#bff747] text-[#bff747] font-bold rounded-full hover:bg-[#bff747] hover:text-black  transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                  Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

         
          </div>

       
        </div>
      </div>
    </section>
  );
}