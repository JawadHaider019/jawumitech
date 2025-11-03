"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  text: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="p-8 bg-[#0A0A0A] border border-[#ADF802]/30 rounded-lg glow-border">
                <p className="text-gray-300 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 bg-[#ADF802]/20 border border-[#ADF802] text-[#ADF802] rounded-full hover:bg-[#ADF802]/30 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 bg-[#ADF802]/20 border border-[#ADF802] text-[#ADF802] rounded-full hover:bg-[#ADF802]/30 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-[#ADF802] w-8" : "bg-[#1A1A1A]"}`}
          />
        ))}
      </div>
    </div>
  )
}
