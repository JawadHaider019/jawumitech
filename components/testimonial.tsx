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
  const [isMounted, setIsMounted] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Muhammad Noman",
      position: "Founder",
      image: "/clients/noman.jpeg",
      content: "“I'm not very technical, so managing an online store used to feel overwhelming. JawumiTech completely changed that for me. The admin panel they built is clean, simple, and handles everything — orders, stock, customer messages — all in one place. It saves me time every single day.”",
      rating: 5
    },
    {
      id: 2,
      name: "Muhammad Ahmad",
      position: "Founder",
      image: "/clients/Ahmad.png",
      content: "“Running a business that focuses on natural foods means I already have a lot on my plate. The website JawumiTech delivered made my life so much easier. Managing products, tracking orders, and updating content is now effortless. It feels like the tech finally supports the business — not the other way around.”",
      rating: 5
    },
    {
      id: 3,
      name: "Sheraz Khan",
      position: "Owner",
      image: "/clients/khan.jpeg",
      content: "“Switching from our old manual system was something I kept delaying, but I'm glad I trusted JawumiTech. The POS they built for our clothing store is fast, reliable, and gives us real insight into what's selling. Inventory management used to be a headache — now it's actually easy.”",
      rating: 5
    }
  ];

  // Initialize component
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simplified animation without GSAP
  useEffect(() => {
    if (!isMounted) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [isMounted]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !isMounted) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, isMounted]);

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex justify-start items-start gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${index < rating ? 'text-[#bff747]' : 'text-gray-400'}`}
            fill="currentColor"
          />
        ))}
      </div>
    );
  };

  // Add ref to cards array
  const addToCardsRefs = useCallback((el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  }, []);

  if (!isMounted) {
    return (
      <section className="relative py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-96 max-w-full mx-auto mb-6"></div>
              <div className="h-4 bg-gray-700 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 opacity-0 transition-opacity duration-500">
          <h1 className='text-base sm:text-lg mb-4 sm:mb-5 md:text-xl font-bold text-[#bff747] uppercase tracking-wide'>
            Client testimonials
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            WHAT OUR <span className="text-[#bff747]">CLIENTS</span> SAY
          </h2>
         
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards - FIXED: Removed absolute positioning conflict */}
          <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                ref={(el) => addToCardsRefs(el, index)}
                className={`transition-all duration-500 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 translate-x-0 block' 
                    : 'opacity-0 scale-95 translate-x-10 hidden'
                }`}
              >
                <div 
                  className="bg-[#0b0b0b] backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-[#bff747]/30 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#bff747]/20 p-6 sm:p-8 lg:p-10 h-full"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <StarRating rating={testimonial.rating} />

                    <div className="flex-grow mb-6 sm:mb-8">
                      <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose">
                        {testimonial.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover border-2 border-[#bff747]"
                            sizes="(max-width: 640px) 48px, 56px"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-white font-bold text-lg sm:text-xl truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-[#bff747] text-sm sm:text-base truncate">
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
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 order-2 sm:order-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:ring-offset-2 focus:ring-offset-black ${
                    index === currentSlide 
                      ? 'bg-[#bff747] scale-125 shadow-lg shadow-[#bff747]/40' 
                      : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrow Controls */}
            <div className="flex justify-center sm:justify-end items-center gap-3 sm:gap-4 order-1 sm:order-2 w-full sm:w-auto">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b0b0b] border border-gray-800 hover:border-[#bff747] rounded-full flex items-center justify-center text-white hover:text-[#bff747] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#bff747]/20 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous testimonial"
              >
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </button>
              
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0b0b0b] border border-gray-800 hover:border-[#bff747] rounded-full flex items-center justify-center text-white hover:text-[#bff747] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#bff747]/20 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animated Elements */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#bff747]/10 rounded-full rotate-12 animate-float blur-xl sm:blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-[#bff747]/10 rounded-full -rotate-12 animate-float-delayed blur-lg sm:blur-xl pointer-events-none"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(12deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(12deg); 
          }
        }
        
        @keyframes floatDelayed {
          0%, 100% { 
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
    </section>
  );
};

export default Testimonials;