"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react"

const teamMembers = [
  {
    name: "Aqib Mansoor",
    position: "Full Stack Developer",
    image: "/team/aqibdev.png",
    description: "Specialized in building scalable web applications. Passionate about creating smooth user experiences and delivering high-quality projects.",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    name: "Haseeb Ur Rehman",
    position: "Software Developer",
    image: "/team/haseebdev.png",
    description: "Experienced in developing custom software and business solutions. Focused on creating efficient and reliable applications that simplify operations.",
    skills: ["Python", "Django", "PostgreSQL", "Docker"]
  },
  {
    name: "Muhammad Jamshaid",
    position: "Project Manager",
    image: "/team/jamshaiddev.png",
    description: "Skilled in managing projects and coordinating teams. Ensures timely delivery of high-quality work while keeping communication clear and organized.",
    skills: ["Agile", "Scrum", "JIRA", "Team Leadership"]
  }
]

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Calculate items per view based on screen size and detect mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
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

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setFlippedCards(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      )
    }
  }

  const isCardFlipped = (index: number) => {
    return flippedCards.includes(index)
  }

  return (
    <div className="relative mx-4 sm:mx-6 lg:mx-8 xl:mx-20 my-16 sm:my-24">
   

      <div className="text-center mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ADF802]/10 to-[#ADF802]/5 border border-[#ADF802]/20 mb-6 backdrop-blur-sm">
          <div className="w-2 h-2 bg-[#ADF802] rounded-full" >
          </div>
          <span className="text-[#ADF802] text-sm font-medium tracking-wide">MEET THE TEAM</span>
          
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
          Our <span className="text-[#ADF802]">Dream</span> Team
        </h2>
        
        <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
          Meet the brilliant minds behind our success. A dedicated team of professionals 
          committed to turning your vision into reality.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="hidden sm:flex absolute -left-6 sm:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-black/90 to-black/70 hover:from-[#ADF802]/20 hover:to-[#ADF802]/10 border border-[#ADF802]/30 rounded-2xl p-3 sm:p-4 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#ADF802]/30 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#ADF802] transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
        
        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="hidden sm:flex absolute -right-6 sm:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-black/90 to-black/70 hover:from-[#ADF802]/20 hover:to-[#ADF802]/10 border border-[#ADF802]/30 rounded-2xl p-3 sm:p-4 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#ADF802]/30 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#ADF802] transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-center space-x-6 mb-8">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-black/90 to-black/70 hover:from-[#ADF802]/20 hover:to-[#ADF802]/10 border border-[#ADF802]/30 rounded-xl p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#ADF802]" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-l from-black/90 to-black/70 hover:from-[#ADF802]/20 hover:to-[#ADF802]/10 border border-[#ADF802]/30 rounded-xl p-4 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#ADF802]" />
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
                      const isFlipped = isCardFlipped(globalIndex)
                      
                      return (
                        <div
                          key={index}
                          className="group perspective-1000"
                          onMouseEnter={() => setIsHovering(true)}
                          onMouseLeave={() => setIsHovering(false)}
                          onClick={() => handleCardClick(globalIndex)}
                        >
                          {/* Enhanced Flip Card */}
                          <div className={`relative w-full lg:h-100 h-70 mx-auto transition-transform duration-1000 transform-style-preserve-3d ${
                            isMobile 
                              ? (isFlipped ? 'rotate-y-180' : '') 
                              : 'group-hover:rotate-y-180'
                          }`}>
                            {/* Front Side - Enhanced */}
                            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] border border-[#2A2A2A] rounded-2xl lg:rounded-3xl overflow-hidden group-hover:border-[#ADF802] hover:shadow-2xl hover:shadow-[#ADF802]/20 transition-all duration-700 hover:-translate-y-2">
                              {/* Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#ADF802]/0 via-[#ADF802]/5 to-[#ADF802]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              {/* Image Container */}
                              <div className="relative aspect-[4/5] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ADF802]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={400}
                                  height={500}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                
                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-0 z-30">
                                  <div className="bg-gradient-to-t from-black/80 to-transparent p-4  backdrop-blur-sm">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#ADF802] transition-colors duration-300">
                                      {member.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm lg:text-base font-medium">
                                      {member.position}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Back Side - Enhanced */}
                            <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] border-2 border-[#ADF802] rounded-2xl lg:rounded-3xl overflow-hidden rotate-y-180 p-4 items-center flex gap-2 flex-col justify-center">
                              {/* Header */}
                              <h3 className="text-xl lg:text-2xl font-bold text-[#ADF802]">
                                {member.name}
                              </h3>
                              <p className="text-gray-300 italic text-sm lg:text-base font-medium">
                                {member.position}
                              </p>

                              {/* Description */}
                              <p className="text-gray-200 text-sm lg:text-base leading-relaxed text-center">
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

        {/* Enhanced Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-12 lg:mt-16 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-[#ADF802] scale-125 shadow-lg shadow-[#ADF802]/40' 
                    : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-[#ADF802] animate-ping opacity-30"></div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CSS for 3D flip effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        /* Smooth transitions for mobile */
        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 1000px;
          }
        }
      `}</style>
    </div>
  )
}