"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface HeroProps {
  title1: string
  title2: string
  image: string
}

const Hero = ({
  title1,
  title2,
  image,
}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple fade-in animation on page load
    const timer = setTimeout(() => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.hero-element')
        elements.forEach(el => {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-4')
        })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center relative overflow-hidden py-16 sm:py-20  text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#bff747]/10 rounded-full blur-xl sm:blur-2xl"></div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-[#bff747]/5 rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto">
          {/* Title */}
          <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 opacity-0 translate-y-4 transition-all duration-300 ease-out leading-tight">
            {title1} <span className='text-[#bff747] block sm:inline'>{title2}</span>
          </h1>
          
          {/* Colored Bottom Line */}
          <div className="hero-element opacity-0 translate-y-4 transition-all duration-300 ease-out delay-150">
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#bff747] mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero