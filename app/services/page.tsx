"use client"

import { Code, Smartphone, Palette, Zap, Wrench, ShoppingCart } from "lucide-react"
import Hero from '@/components/HeroSection'
import Testimonials from "@/components/testimonial"
import FAQSection from '@/components/FAQ'
import ServicesSection from "@/components/services"

export default function Services() {
  return (
    <>
      <Hero
        title1="OUR"
        title2='SERVICES'
        image='/HeroImage.webp'
      />
      <ServicesSection />
      <Testimonials />
      <FAQSection />
    </>
  )
}
