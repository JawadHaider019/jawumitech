// components/About.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { Check, ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const [activeStat, setActiveStat] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])

  const stats = [
    { number: "50+", label: "Project Complete", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "100%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "99%", label: "Satisfied clients", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
  ]

  const features = [
    "Empowering Growth with Smart Solutions",
    "Collaborative Approach for Maximum Impact", 
    "Innovative Solutions, Real-World Results",
  ]

  // Add ref to stats array
  const addToStatsRefs = (el: HTMLDivElement | null, index: number) => {
    statsRef.current[index] = el
  }

  useEffect(() => {
    // Dynamic import to ensure GSAP loads properly
    const initAnimations = async () => {
      try {
        const gsapModule = await import('gsap')
        const ScrollTriggerModule = await import('gsap/ScrollTrigger')
        
        const gsap = gsapModule.default || gsapModule
        const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule
        
        gsap.registerPlugin(ScrollTrigger)

        // Check if all refs are available
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

        // Left content animation
        if (leftContentRef.current) {
          gsap.fromTo(leftContentRef.current,
            { y: 40, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6,
              scrollTrigger: {
                trigger: leftContentRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          )
        }

        // Right content animation
        if (rightContentRef.current) {
          gsap.fromTo(rightContentRef.current,
            { y: 40, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6,
              scrollTrigger: {
                trigger: rightContentRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          )
        }

        // Stats animation with stagger
        statsRef.current.forEach((stat, index) => {
          if (!stat) return
          gsap.fromTo(stat,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: stat,
                start: "top 90%",
                toggleActions: "play none none none",
                markers: false
              }
            }
          )
        })

      } catch (error) {
        console.log('GSAP loading failed, using fallback animations')
        // Immediate fallback animations
        if (headerRef.current) {
          headerRef.current.style.opacity = '1'
          headerRef.current.style.transform = 'translateY(0)'
        }
        if (leftContentRef.current) {
          leftContentRef.current.style.opacity = '1'
          leftContentRef.current.style.transform = 'translateY(0)'
        }
        if (rightContentRef.current) {
          rightContentRef.current.style.opacity = '1'
          rightContentRef.current.style.transform = 'translateY(0)'
        }
        statsRef.current.forEach(stat => {
          if (stat) {
            stat.style.opacity = '1'
            stat.style.transform = 'translateY(0)'
          }
        })
      }
    }

    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      // Clean up ScrollTrigger instances if they exist
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 opacity-0">
          <h1 className='text-base sm:text-lg mb-4 sm:mb-5 md:text-xl font-bold text-[#bff747] uppercase'>
            Innovating technology
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            ABOUT <span className="text-[#bff747]">JAWUMITECH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6 sm:space-y-8 order-2 lg:order-1 opacity-0">
            {/* Main Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We help startups and businesses build their digital future. We blend technical expertise with real-world experience to deliver innovative and reliable solutions.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#bff747] rounded-full flex items-center justify-center mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  ref={(el) => addToStatsRefs(el, index)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-500 cursor-pointer opacity-0 ${
                    activeStat === index 
                      ? "border-[#bff747] bg-[#0b0b0b] scale-105" 
                      : "border-gray-800 bg-[#0b0b0b] hover:border-gray-600"
                  }`}
                  onMouseEnter={() => setActiveStat(index)}
                  onClick={() => setActiveStat(index)}
                >
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className={`transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-gray-400"
                    }`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-white"
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                      activeStat === index ? "text-[#bff747]" : "text-gray-400"
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Link href='/about' className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border-2 border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-[#bff747]/20 text-sm sm:text-base">
                More About
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div ref={rightContentRef} className="opacity-0">
              {/* Main Card */}
              <div className="relative bg-[#0b0b0b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#bff747]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-[#bff747]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {/* Project Complete Highlight */}
                    <div className="bg-[#0b0b0b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                      <div className="text-2xl sm:text-3xl font-bold text-[#bff747] mb-1 sm:mb-2">50+</div>
                      <div className="text-xs sm:text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    
                    {/* Success Rate */}
                    <div className="bg-[#0b0b0b] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
                      <div className="text-2xl sm:text-3xl font-bold text-[#bff747] mb-1 sm:mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-[#bff747]">Success Rate</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                        <span>Client Satisfaction</span>
                        <span>99%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-[#bff747] h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '99%' }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                        <span>Project Success</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-[#bff747] h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out delay-300"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-[#bff747] mb-1 sm:mb-2">5+</div>
                      <div className="text-gray-400 text-sm sm:text-base">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
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
  )
}