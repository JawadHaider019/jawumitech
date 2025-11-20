"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { ArrowRight, Zap, Code, Smartphone, Palette } from "lucide-react"
import { AnimatedDivider } from "@/components/animated-divider"

import { ChevronRight, ChevronUp } from "lucide-react"
import ProcessSection from "@/components/process"
import ServicesSection from "@/components/services"
import FAQSection from "@/components/FAQ"
import Testimonials from '@/components/testimonial'
import TechStack from '@/components/techstack'
import WhyChooseUs from '@/components/whyus'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import {AboutSection} from '@/components/about'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
 
  return (
    <>
      <Hero/>
     <Marquee/>
     <AboutSection/>
     <AnimatedDivider />
      <ServicesSection />
      <AnimatedDivider />
      <WhyChooseUs/>
      <AnimatedDivider />
      <ProcessSection />
      <AnimatedDivider />
      <TechStack />
      <AnimatedDivider />
      <Testimonials />
      <AnimatedDivider />
      <FAQSection />
           <ScrollToTop />
    </>
  )
}