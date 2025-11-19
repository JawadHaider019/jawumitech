"use client"

import { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link"

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftContentRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    { step: "01", title: "Understanding your needs", description: "We start by listening to your challenges and goals to identify your unique IT requirements." },
    { step: "02", title: "Customized consultation", description: "We provide tailored solutions after analyzing your requirements." },
    { step: "03", title: "Collaboration with stakeholders", description: "We collaborate closely with your team for seamless execution." }
  ];

  // Add ref to steps array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    stepsRef.current[index] = el;
  };

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    const initAnimations = async () => {
      if (!mounted || !sectionRef.current) return;

      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.gsap || gsapModule.default;
        const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
        
        if (!gsap || !ScrollTrigger) {
          throw new Error('GSAP modules not found');
        }

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Left content animation
          if (leftContentRef.current) {
            gsap.fromTo(leftContentRef.current,
              { y: 30, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.6,
                scrollTrigger: {
                  trigger: leftContentRef.current,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          }

          // Pin left side on desktop only
          if (window.innerWidth >= 1024 && leftSideRef.current) {
            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              pin: leftSideRef.current,
              pinSpacing: false,
              anticipatePin: 1,
            });
          }

          // Steps animation
          stepsRef.current.forEach((step, index) => {
            if (!step) return;
            gsap.fromTo(step,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: step,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          });
        }, sectionRef);

        cleanup = () => ctx.revert();

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations');
        // Fallback: show elements immediately
        if (leftContentRef.current) {
          leftContentRef.current.style.opacity = '1';
          leftContentRef.current.style.transform = 'translateY(0)';
        }
        stepsRef.current.forEach(step => {
          if (step) {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0) scale(1)';
          }
        });
      }
    };

    // Initialize with delay
    const timer = setTimeout(initAnimations, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 lg:top-20 lg:right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 lg:bottom-20 lg:left-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 bg-[#bff747]/5 rounded-full blur-2xl lg:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
        {/* Left Side - Sticky content */}
        <div ref={leftSideRef} className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen flex items-start lg:items-center py-8 sm:py-12 lg:py-0">
          <div ref={leftContentRef} className="space-y-6 lg:space-y-8 w-full opacity-0">
            <h3 className="text-[#bff747] text-lg sm:text-xl font-bold">HOW IT WORK</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Streamlining success through proven <span className="text-[#bff747]">process</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              Our step-by-step approach ensures seamless project execution, from understanding your needs to delivering tailored IT solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <FaArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Steps */}
        <div className="lg:w-3/5 flex flex-col gap-12 lg:gap-0">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="min-h-[60vh] lg:h-screen flex items-center justify-center py-12 sm:py-16 lg:py-0 opacity-0"
            >
              <div className="w-full max-w-2xl space-y-4 lg:space-y-6">
                <div className="text-[#bff747] text-base lg:text-lg font-semibold">STEP {step.step}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">{step.title}</h3>
                <p className="text-gray-300 text-base lg:text-lg xl:text-xl leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;