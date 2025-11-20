// In your LeftRight component, make sure all text has explicit colors:
"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface LeftRight {
  step: string
  title: string
  description: string
  additional?: string
}

interface LeftRightProps {
  badge?: string
  title: string
  titleAccent?: string
  description: string
  buttonText?: string
  buttonLink?: string
  sections: LeftRight[]
}

const LeftRight = ({
  badge = "OUR JOURNEY",
  title,
  titleAccent,
  description,
  buttonText = "Get Free Quote",
  buttonLink = "/contact",
  sections
}: LeftRightProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const leftContentRef = useRef<HTMLDivElement>(null)

  // Add ref to content array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    contentRefs.current[index] = el
  }

  useEffect(() => {
    // Simple fade-in animation
    const timer = setTimeout(() => {
      if (leftContentRef.current) {
        leftContentRef.current.classList.add('opacity-100')
        leftContentRef.current.classList.remove('opacity-0')
      }
      
      contentRefs.current.forEach((content, index) => {
        if (content) {
          setTimeout(() => {
            content.classList.add('opacity-100')
            content.classList.remove('opacity-0')
          }, index * 200)
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 w-full text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Mobile: Stack layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-20">
          {/* Left Side - Content */}
          <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start py-4 sm:py-8 lg:py-8">
            <div ref={leftContentRef} className="space-y-4 sm:space-y-6 lg:space-y-8 w-full opacity-0 transition-opacity duration-500 text-center lg:text-left">
              <h3 className="text-[#bff747] text-base sm:text-lg lg:text-xl font-bold">{badge}</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {title} {titleAccent && <span className="text-[#bff747]">{titleAccent}</span>}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href={buttonLink}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {buttonText}
                  <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Content Sections */}
          <div className="lg:w-3/5 flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => addToRefs(el, index)}
                className="min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] flex items-center py-8 sm:py-12 lg:py-16 opacity-0 transition-opacity duration-500"
              >
                <div className="w-full space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
                  <div className="text-[#bff747] text-sm sm:text-base lg:text-lg font-semibold">STEP {section.step}</div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">{section.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">{section.description}</p>
                  {section.additional && (
                    <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">{section.additional}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftRight