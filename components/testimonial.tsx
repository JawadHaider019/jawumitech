"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Muhammad Noman",
      position: "Founder",
      image: "/clients/noman.jpeg",
      content:
        "“I'm not very technical, so managing an online store used to feel overwhelming. JawumiTech completely changed that for me. The admin panel they built is clean, simple, and handles everything — orders, stock, customer messages — all in one place. It saves me time every single day.”",
      rating: 5
    },
    {
      id: 2,
      name: "Muhammad Ahmad",
      position: "Founder",
      image: "https://demo.awaikenthemes.com/artistics/it-company/wp-content/uploads/2025/01/author-2.jpg",
      content:
        "“Running a business that focuses on natural foods means I already have a lot on my plate. The website JawumiTech delivered made my life so much easier. Managing products, tracking orders, and updating content is now effortless. It feels like the tech finally supports the business — not the other way around.”",
      rating: 5
    },
    {
      id: 3,
      name: "Sheraz Khan",
      position: "Owner",
      image: "/clients/khan.jpeg",
      content:
        "“Switching from our old manual system was something I kept delaying, but I'm glad I trusted JawumiTech. The POS they built for our clothing store is fast, reliable, and gives us real insight into what's selling. Inventory management used to be a headache — now it's actually easy.”",
      rating: 5
    }
  ];

  // Animation useEffect
  useEffect(() => {
    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule;
        
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;

        // Header animation
        if (headerRef.current) {
          gsap.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6,
              scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        }

        // Cards animation
        cardsRef.current.forEach((card, index) => {
          if (!card) return;
          gsap.fromTo(card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          );
        });

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations');
        if (headerRef.current) {
          headerRef.current.style.opacity = '1';
          headerRef.current.style.transform = 'translateY(0)';
        }
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }
        });
      }
    };

    const timer = setTimeout(initAnimations, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  }, []);

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex justify-start items-start gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-[#bff747]' : 'text-gray-400'}`}
            fill="currentColor"
          />
        ))}
      </div>
    );
  };

  // Add ref to cards array
  const addToCardsRefs = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 opacity-0">
          <h1 className='text-base sm:text-lg mb-4 sm:mb-5 md:text-xl font-bold text-[#bff747] uppercase'>
            Client testimonials
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            WHAT OUR <span className="text-[#bff747]">CLIENTS</span> SAY
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                ref={(el) => addToCardsRefs(el, index)}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0 block' 
                    : 'opacity-0 scale-95 translate-x-10 hidden'
                } opacity-0`}
              >
                <div 
                  className="bg-[#0b0b0b] backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-[#bff747]/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:shadow-2xl hover:shadow-[#bff747]/20 p-6 sm:p-8 lg:p-12 relative"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <StarRating rating={testimonial.rating} />

                    <div className="mb-6 sm:mb-8">
                      <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover border-2 border-[#bff747] w-12 h-12 sm:w-14 sm:h-14"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg sm:text-xl">
                          {testimonial.name}
                        </div>
                        <div className="text-[#bff747] text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 sm:mt-12'>
            <div className="flex justify-center gap-2 order-2 sm:order-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#bff747] scale-125 shadow-lg shadow-[#bff747]/40' 
                      : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex justify-center sm:justify-end items-center gap-3 sm:gap-4 order-1 sm:order-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b0b0b] border border-gray-800 hover:border-[#bff747] rounded-full flex items-center justify-center text-white hover:text-[#bff747] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#bff747]/20"
                aria-label="Previous testimonial"
              >
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b0b0b] border border-gray-800 hover:border-[#bff747] rounded-full flex items-center justify-center text-white hover:text-[#bff747] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#bff747]/20"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animated Elements */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 animate-float blur-xl sm:blur-2xl"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-[#bff747]/10 rounded-full -rotate-12 animate-float delay-1000 blur-lg sm:blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 animate-float delay-500 blur-xl sm:blur-2xl"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;