"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa"

const teamMembers = [
  {
    name: "Jawad Haider",
    position: "Founder / CEO",
    image: "/team/jawadfounder.webp",
    description: "Leads the vision and direction of the company while also contributing as a full stack developer. Guides the team, ensures technical standards, and focuses on building high-quality products."
  },
  {
    name: "Aqib Mansoor",
    position: "Full Stack Developer",
    image: "/team/aqibdev.webp",
    description: "Specialized in building scalable web applications. Passionate about creating smooth user experiences and delivering reliable, high-quality projects."
  },
  {
    name: "Haseeb Ur Rehman",
    position: "Software Developer",
    image: "/team/Haseebdev.webp",
    description: "Develops custom software solutions and business applications. Focused on efficiency, reliability, and simplifying daily operations for clients."
  },
  {
    name: "Muhammad Jamshaid",
    position: "Project Manager",
    image: "/team/jamshaidDev.webp",
    description: "Manages projects from planning to delivery. Coordinates the team, ensures timely execution, and maintains clear communication with clients."
  }
]

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animation useEffect
  useEffect(() => {
    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap')
        const ScrollTriggerModule = await import('gsap/ScrollTrigger')
        
        const gsap = gsapModule.default || gsapModule
        const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule
        
        gsap.registerPlugin(ScrollTrigger)

        if (!sectionRef.current) return

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
          )
        }

        // Cards animation with stagger
        cardsRef.current.forEach((card, index) => {
          if (!card) return
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
          )
        })

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations')
        if (headerRef.current) {
          headerRef.current.style.opacity = '1'
          headerRef.current.style.transform = 'translateY(0)'
        }
        cardsRef.current.forEach(card => {
          if (card) {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }
        })
      }
    }

    const timer = setTimeout(initAnimations, 100)
    return () => clearTimeout(timer)
  }, [])

  const totalSlides = Math.ceil(teamMembers.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Add ref to cards array
  const addToCardsRefs = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el
  }

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-black text-white">
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
            Meet the experts
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            OUR EXPERT<span className="text-[#bff747]"> TEAM</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute -left-6 sm:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-black/90 to-black/70 hover:from-[#bff747]/20 hover:to-[#bff747]/10 border border-[#bff747]/30 rounded-full p-3 sm:p-4 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#bff747]/30 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#bff747] transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute -right-6 sm:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-black/90 to-black/70 hover:from-[#bff747]/20 hover:to-[#bff747]/10 border border-[#bff747]/30 rounded-full p-3 sm:p-4 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#bff747]/30 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#bff747] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex justify-center space-x-6 mb-8">
            <button
              onClick={prevSlide}
              className="bg-gradient-to-r from-black/90 to-black/70 hover:from-[#bff747]/20 hover:to-[#bff747]/10 border border-[#bff747]/30 rounded-full p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-6 h-6 text-[#bff747]" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gradient-to-l from-black/90 to-black/70 hover:from-[#bff747]/20 hover:to-[#bff747]/10 border border-[#bff747]/30 rounded-full p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <FaChevronRight className="w-6 h-6 text-[#bff747]" />
            </button>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 px-4">
                    {teamMembers
                      .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                      .map((member, index) => {
                        const globalIndex = slideIndex * itemsPerView + index
                        
                        return (
                          <div
                            key={index}
                            ref={(el) => addToCardsRefs(el, globalIndex)}
                            className="group cursor-pointer relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-96 opacity-0"
                            role="button"
                            tabIndex={0}
                          >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                              <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={index === 0}
                              />
                              
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                              {/* Position Badge */}
                              <div className="flex justify-between items-start mb-4">
                                <div className="rounded-full bg-[#bff747] text-black px-3 py-1 text-xs font-medium">
                                  {member.position}
                                </div>
                              
                              </div>

                              {/* Content */}
                              <div className="space-y-3">
                                {/* Title */}
                                <h3 className="font-bold text-xl leading-tight">
                                  {member.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-200 text-sm leading-relaxed ">
                                  {member.description}
                                </p>

      
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 lg:mt-16 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-[#bff747] scale-125 shadow-lg shadow-[#bff747]/40' 
                      : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-[#bff747] animate-ping opacity-30"></div>
                  )}
                </button>
              ))}
            </div>
          )}
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
  )
}