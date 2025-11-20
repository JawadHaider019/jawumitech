"use client";

import { ArrowRight } from 'lucide-react';
import Image from "next/image"
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from 'react';

const Footer = () => {
  const collaborationRef = useRef<HTMLElement>(null);
  const circleButtonRef = useRef<HTMLDivElement>(null);
  const workTextRef = useRef<HTMLSpanElement>(null);
  const togetherTextRef = useRef<HTMLSpanElement>(null);
  const collaborateTextRef = useRef<HTMLHeadingElement>(null);

  // WhatsApp number and link
  const whatsappNumber = '923291927168';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    // Dynamic import to ensure GSAP loads properly
    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
        
        gsap.registerPlugin(ScrollTrigger);

        // Check if all refs are available
        if (!collaborationRef.current || !workTextRef.current || !togetherTextRef.current || !circleButtonRef.current) return;

        // FASTER Collaboration section animations
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: collaborationRef.current,
            start: "top 85%", // Trigger earlier
            end: "bottom 15%",
            toggleActions: "play none none none",
            markers: false // Remove debug markers
          }
        });

        tl.fromTo(collaborateTextRef.current, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 } // Faster duration
        )
        .fromTo(workTextRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }, // Faster duration
          "-=0.3" // Reduced overlap
        )
        .fromTo(togetherTextRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }, // Faster duration
          "-=0.4" // Reduced overlap
        )
        .fromTo(circleButtonRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: "back.out(1.7)" }, // Faster duration
          "-=0.3" // Reduced overlap
        );

        // FASTER Footer animations with better triggers
        const footerElements = document.querySelectorAll('.footer-element');
        footerElements.forEach((element, index) => {
          gsap.fromTo(element,
            { y: 20, opacity: 0 }, // Reduced initial movement
            {
              y: 0,
              opacity: 1,
              duration: 0.4, // Much faster
              delay: index * 0.05, // Reduced delay
              scrollTrigger: {
                trigger: element,
                start: "top 95%", // Trigger much earlier
                end: "bottom 10%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        });

        // Ensure footer bottom section is always visible
        const footerBottom = document.querySelector('.footer-bottom-element');
        if (footerBottom) {
          gsap.fromTo(footerBottom,
            { y: 10, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              scrollTrigger: {
                trigger: footerBottom,
                start: "top 98%", // Very early trigger
                end: "bottom top",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        }

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations');
        // Immediate fallback animations
        const elements = document.querySelectorAll('.footer-element, .footer-bottom-element, [class*="opacity-0"]');
        elements.forEach((el) => {
          const htmlElement = el as HTMLElement;
          htmlElement.style.opacity = '1';
          htmlElement.style.transform = 'translateY(0)';
        });
        
        if (circleButtonRef.current) {
          circleButtonRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
        
        // Immediate text element animations
        if (collaborateTextRef.current) {
          collaborateTextRef.current.style.opacity = '1';
          collaborateTextRef.current.style.transform = 'translateY(0)';
        }
        if (workTextRef.current) {
          workTextRef.current.style.opacity = '1';
          workTextRef.current.style.transform = 'translateX(0)';
        }
        if (togetherTextRef.current) {
          togetherTextRef.current.style.opacity = '1';
          togetherTextRef.current.style.transform = 'translateX(0)';
        }
      }
    };

    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Clean up ScrollTrigger instances if they exist
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      {/* Collaboration Section */}
      <section 
        ref={collaborationRef}
        className='overflow-x-hidden pb-20 border-b border-gray-400 relative flex items-center justify-center flex-col gap-6 md:gap-8 text-center bg-black min-h-screen px-4'
      >
        {/* Animated background elements */}
        <div className="absolute bottom-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-3xl animate-pulse" />

        {/* Circle Button - Now with WhatsApp link */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div 
            ref={circleButtonRef}
            className='z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#bff747] hover:bg-black/80 hover:text-white w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full text-black font-bold flex flex-col items-center justify-center text-xs md:text-base tracking-wider transition-all duration-300 hover:scale-110 cursor-pointer group border border-transparent hover:border-[#bff747]'
            style={{ transform: 'translate(-50%, -50%) scale(0)' }}
          >
            <ArrowRight className='group-hover:rotate-[-40deg] transition-transform duration-300 mb-0.5 md:mb-1 w-4 h-4 md:w-6 md:h-6' />
            <span className='text-[10px] md:text-sm'>Get In Touch</span>
          </div>
        </a>
        
        {/* Text Content */}
        <h1 ref={collaborateTextRef} className='text-xl md:text-2xl font-bold text-[#bff747] opacity-0'>LET'S COLLABORATE</h1>
        <h1 className='text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem] font-bold leading-tight md:leading-none px-2  text-white'>
          <span ref={workTextRef} className='inline-block opacity-0'>LET'S WORK</span>
          <br/>
          <span ref={togetherTextRef} className='inline-block opacity-0'>TOGETHER</span>
        </h1>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-10 sm:-top-40 sm:-right-20 w-48 h-48 sm:w-80 sm:h-80 bg-[#bff747]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-10 sm:-bottom-40 sm:-left-20 w-48 h-48 sm:w-80 sm:h-80 bg-[#bff747]/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-[#bff747]/3 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Additional Random Glowing Circles */}
          <div className="absolute top-1/4 right-1/3 w-24 h-24 sm:w-40 sm:h-40 bg-[#bff747]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-[#bff747]/6 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute top-3/4 right-1/5 w-32 h-32 sm:w-48 sm:h-48 bg-[#bff747]/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/5 left-3/4 w-20 h-20 sm:w-28 sm:h-28 bg-[#bff747]/4 rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute bottom-1/5 right-3/4 w-24 h-24 sm:w-36 sm:h-36 bg-[#bff747]/9 rounded-full blur-xl animate-pulse delay-1200"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-8">
            {/* Brand Column with Glass Effect */}
            <div className="footer-element lg:col-span-4 border border-gray-400/30 p-4 sm:p-6 rounded-2xl backdrop-blur-lg bg-[#0b0b0b] hover:-translate-y-2 transition-all opacity-0">
              <div className="flex items-center gap-0 mb-4 sm:mb-6">
                <div className="relative">
                  <Image 
                    src="/iconjt.png" 
                    alt="Jawumitech Logo" 
                    width={50} 
                    height={50}  
                    className="relative w-16 h-16 sm:w-20 sm:h-20 object-contain"  
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Jawumitech<span className="text-[#bff747]">.</span>
                  </h2>
                </div>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Transforming ideas into exceptional digital experiences through cutting-edge technology and innovative solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] rounded-full flex items-center justify-center group-hover:bg-transparent transition-all duration-300 border border-transparent group-hover:border-[#bff747] group-hover:scale-110">
                    <FaEnvelope className="text-black group-hover:text-[#bff747] text-base sm:text-lg transition-all duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email us</p>
                    <p className="text-white font-medium text-sm sm:text-base">support@jawumitech.com</p>
                  </div>
                </div>
                
                {/* WhatsApp Contact */}
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] rounded-full flex items-center justify-center group-hover:bg-transparent transition-all duration-300 border border-transparent group-hover:border-[#bff747] group-hover:scale-110">
                    <FaPhone className="text-black group-hover:text-[#bff747] text-base sm:text-lg transition-all duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Contact us</p>
                    <p className="text-white font-medium text-sm sm:text-base">+92 329 1927168</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='flex flex-col justify-between lg:col-span-8'>
              {/* Links Grid with Glass Effect */}
              <div className="footer-element lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 border-b border-gray-400 pb-8 sm:pb-12 mb-8 sm:mb-12 backdrop-blur-sm bg-black/10 p-4 sm:p-6 opacity-0">
                {/* Services */}
                <div className="md:border-r md:border-gray-400/50 md:pr-6 sm:md:pr-8 pb-6 sm:pb-8 md:pb-0 border-b border-gray-400/50 md:border-b-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Services
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Web Development',
                      'Mobile Applications', 
                      'UI/UX Design',
                      'Software Development',
                      'Maintenance Support'
                    ].map((service) => (
                      <li key={service}>
                        <a href="#" className="text-gray-300 hover:text-[#bff747] transition-all duration-300 flex items-center gap-2 group hover:translate-x-1 text-sm sm:text-base">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="md:border-r md:border-gray-400/50 md:pr-6 sm:md:pr-8 pb-6 sm:pb-8 md:pb-0 border-b border-gray-400/50 md:border-b-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Company
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'About Us',
                      'Our Team',
                      'Contact ',
                      'Process',
                      'Blog'
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-gray-300 hover:text-[#bff747] transition-all duration-300 flex items-center gap-2 group hover:translate-x-1 text-sm sm:text-base">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Follow */}
                <div className="pb-6 sm:pb-8 md:pb-0">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 pb-2 inline-block">
                    Follow
                  </h3>
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-[#bff747] hover:bg-transparent rounded-full flex items-center justify-center text-black hover:text-[#bff747] border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-110"
                    >
                      <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter Section with Glass Effect */}
              <div className="footer-element  backdrop-blur-md bg-black/15 p-4 rounded-2xl opacity-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                     Subscribe Our Newsletter:
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-400/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:border-transparent transition-all duration-300 bg-black/20 text-sm sm:text-base w-full"
                    />
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                      Subscribe
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with Glass Effect - Always visible */}
          <div className="footer-bottom-element border-t border-gray-400/50 pt-6 sm:pt-8 backdrop-blur-sm bg-black/10 p-4 sm:p-6 opacity-0">
            <div className="flex justify-center items-center gap-6">
              <div className="text-gray-400 text-xs sm:text-sm text-center">
                © 2025 Jawumitech. All rights reserved. Developed by Jawad Haider.
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-15px) rotate(120deg); }
            66% { transform: translateY(10px) rotate(240deg); }
          }
          .animate-float {
            animation: float 12s ease-in-out infinite;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;