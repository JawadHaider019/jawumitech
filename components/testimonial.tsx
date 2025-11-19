"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar, FaArrowRight } from 'react-icons/fa';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
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
      image:
        "https://demo.awaikenthemes.com/artistics/it-company/wp-content/uploads/2025/01/author-2.jpg",
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

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;
    const startValue = 0;
    const endValue = 1200;

    const animateCounter = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (endValue - startValue) + startValue);
      setReviewsCount(value);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Simple animation that won't conflict with slides
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Simple fade up for the entire section
      gsap.fromTo(sectionRef.current, 
        {
          y: 50,
          opacity: 0.9
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      <div className="flex justify-start items-start gap-1 mb-4 md:mb-6">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index}
            className={`w-4 h-4 md:w-5 md:h-5 ${index < rating ? 'text-[#bff747]' : 'text-gray-400'}`}
            fill="currentColor"
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={sectionRef} 
      className="bg-black text-white py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-4 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-4 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center w-full">
          <h3 className="text-[#bff747] text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-wider">
            TESTIMONIALS
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            What our <span className="text-[#bff747]">client</span> says
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="w-full">
          <div className="relative">
            {/* Testimonials Slides */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-all duration-500 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100 translate-x-0 block' 
                      : 'opacity-0 scale-95 translate-x-10 hidden'
                  }`}
                >
                  <div 
                    className="bg-[#0b0b0b] backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 lg:p-12 relative overflow-hidden"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#bff747]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <StarRating rating={testimonial.rating} />

                      <div className="mb-6 md:mb-8">
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover border-2 border-[#bff747] w-12 h-12 md:w-14 md:h-14"
                          />
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg md:text-xl">
                            {testimonial.name}
                          </div>
                          <div className="text-[#bff747] text-xs md:text-sm">
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
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 md:mt-8 px-2'>
              <div className="flex justify-center gap-2 order-2 sm:order-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#bff747] scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex justify-center sm:justify-end items-center gap-3 md:gap-4 order-1 sm:order-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#0b0b0b] border border-white/10 rounded-full flex items-center justify-center text-white hover:text-[#bff747] hover:border-[#bff747] transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <FaArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#0b0b0b] border border-white/10 rounded-full flex items-center justify-center text-white hover:text-[#bff747] hover:border-[#bff747] transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;