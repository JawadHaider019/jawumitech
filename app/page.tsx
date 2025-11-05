"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Code, Smartphone, Palette } from "lucide-react"
import { AnimatedDivider } from "@/components/animated-divider"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ChevronRight, ChevronUp } from "lucide-react"


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null) 
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  const [openIndex, setOpenIndex] = useState<number | null>(null)

 const FAQS = [
  {
    question: "How long does it take to build a website or app?",
    answer: "The timeline depends on complexity and features. A simple website may take 3-6 weeks, while a fully-featured web or mobile application can take 8-16 weeks. We provide a detailed project timeline with milestones during the proposal phase."
  },
  {
    question: "What is the cost of developing a website or app?",
    answer: "Costs vary based on project complexity, design, and functionality. We provide transparent quotes upfront and offer phased development options for startups or budget-conscious businesses."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! We provide ongoing support including bug fixes, updates, performance optimization, and security patches. Flexible support plans can be customized to meet your business needs."
  },
  {
    question: "Can you work with startups or small budgets?",
    answer: "Absolutely! We help startups launch MVPs efficiently by prioritizing core features and scalable solutions. Our phased approach ensures quality without exceeding budget."
  },
  {
    question: "Which technologies and frameworks do you specialize in?",
    answer: "We specialize in modern tech stacks including Next.js, React, TypeScript, Node.js, Laravel, MongoDb, MySql, React Native, AWS, and Vercel."
  },
  {
    question: "Will I have ownership of the source code and design assets?",
    answer: "Yes, 100%. Upon final payment, you own all code, design assets, and intellectual property. We believe you should have full control over your project."
  },
  {
    question: "Do you handle UI/UX design?",
    answer: "Yes. We provide end-to-end design services, including research, wireframing, prototyping, and high-fidelity UI/UX design. Our goal is to create interfaces that are intuitive and visually appealing."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices: code reviews, automated testing, continuous integration, and thorough QA processes. This ensures maintainable, scalable, and high-performance solutions."
  },
  {
    question: "Can I request changes or add features mid-project?",
    answer: "Yes. We follow an agile workflow, allowing for changes while managing impact on timeline and budget. We maintain transparency and communicate clearly about adjustments."
  },
  {
    question: "Do you integrate third-party services?",
    answer: "Yes. We can integrate payment gateways, analytics, social logins, cloud storage, and other APIs to enhance your project functionality."
  },
{
  question: "How will you communicate during the project?",
  answer: "We stay in touch via WhatsApp for quick updates and clarifications. For detailed discussions, milestone reviews, or sharing files, we can also use email or project management tools. This ensures you're always informed and involved throughout the project."
},
  {
    question: "What if I’m not tech-savvy?",
    answer: "No worries! We build user-friendly admin panels and dashboards that are easy to use. Plus, our support team is always available to help."
  },
  {
    question: "Can you optimize my project for SEO and performance?",
    answer: "Yes. We follow best practices for SEO, page speed, and performance optimization to ensure your website or app ranks well and loads fast."
  },
  {
    question: "What makes you different from other development agencies?",
    answer: "We combine technical expertise with a client-focused approach. From strategy to support, we prioritize your business goals and long-term success."
  }
];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openIndex === index ? null : index)
  }

  
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, scalable, and modern web applications built with Next.js and React.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
    },
    {
      icon: Zap,
      title: "Digital Presence",
      description: "Complete branding and online presence setup for startups.",
    },
  ]

  const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "Express", 
    "Laravel", "PHP", "MongoDB", "MySQL", 
    "GraphQL", "REST APIs", "Firebase", "Supabase", "AWS", "Docker", "Vercel",
    "React Native", 
    "Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "GSAP",
    "Cloudinary", "Stripe", "Payment APIs", "AI APIs",
    "WebSockets", "Git", "GitHub"
  ]

  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ADF802]/5 via-transparent to-transparent pointer-events-none" />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ADF802]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ADF802]/5 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline */}
          <div
            className={`mb-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="inline-block px-4 py-2 bg-[#ADF802]/10 border border-[#ADF802]/30 rounded-full text-[#ADF802] text-sm font-semibold">
              ✨ Welcome to JawumiTech
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We Help Startups & Businesses Build Their <span className="text-[#ADF802]">Digital Future</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            From concept to launch, we craft sleek, fast, and scalable web and mobile experiences that transform your
            ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://wa.me/923291927168"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#ADF802] text-[#ADF802] font-bold rounded-full hover:bg-[#ADF802]/10 hover:shadow-lg hover:shadow-[#ADF802]/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact on WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div
            className={`mb-12 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-gray-400 mb-4">Trusted by Startups Worldwide</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="px-4 py-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg text-sm text-gray-300">
                Top Rated on Clutch
              </div>
              <div className="px-4 py-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg text-sm text-gray-300">
                50+ Projects Delivered
              </div>
              <div className="px-4 py-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg text-sm text-gray-300">
                100% Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-400 text-lg">Comprehensive solutions for your digital needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#ADF802] transition-all duration-300 hover:shadow-lg hover:shadow-[#ADF802]/20 cursor-pointer"
              >
                <div className="mb-4 p-3 bg-[#ADF802]/10 rounded-lg w-fit group-hover:bg-[#ADF802]/20 transition-colors">
                  <Icon size={24} className="text-[#ADF802]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#ADF802] font-semibold hover:gap-3 transition-all"
          >
            Explore All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <AnimatedDivider />

  

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose JawumiTech?</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
          We're not just developers — we're your growth partners. Every project we take on is guided by
          innovation, collaboration, and a drive to deliver measurable results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#ADF802]">End-to-End Expertise</h3>
            <p className="text-gray-400">From design to deployment — we handle it all under one roof.</p>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#ADF802]">Tailored Solutions</h3>
            <p className="text-gray-400">Every product is custom-built to match your goals and brand identity.</p>
          </div>
          <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
            <h3 className="text-xl font-semibold mb-2 text-[#ADF802]">Reliable Partnership</h3>
            <p className="text-gray-400">We believe in transparency, communication, and long-term success.</p>
          </div>
        </div>
      </section>
       <AnimatedDivider />

    {/* Tech Stack Carousel */}
      <section className="py-16   overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Tech Stack</h2>
          <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            We work with the latest and most reliable technologies to build exceptional digital experiences.
          </p>

          <div 
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onClick={() => setIsCarouselPaused(!isCarouselPaused)}
          >
            <div 
              className={`flex gap-4 ${isCarouselPaused ? 'animate-pause' : 'animate-scroll'}`}
              style={{
                animation: isCarouselPaused ? 'none' : 'scroll 30s linear infinite'
              }}
            >
              {/* First set */}
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-gray-300 text-sm hover:border-[#ADF802] hover:text-[#ADF802] transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {techStack.map((tech, i) => (
                <span
                  key={i + techStack.length}
                  className="flex-shrink-0 px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-gray-300 text-sm hover:border-[#ADF802] hover:text-[#ADF802] transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            
            .animate-pause {
              animation-play-state: paused;
            }
          `}</style>

         
        </div>
      </section>

      <AnimatedDivider />
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
  <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
    We follow a clear, structured workflow to ensure every project is delivered on time, on budget, and exceeds expectations.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
      <div className="text-4xl  font-bold tracking-widest text-[#ADF802] pb-3">01</div>
      <h3 className="text-xl font-semibold mb-2">Plan</h3>
      <p className="text-gray-400">Understanding your goals, target audience, and project requirements.</p>
    </div>
    <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
      <div className="text-4xl  font-bold tracking-widest text-[#ADF802] pb-3">02</div>
      <h3 className="text-xl font-semibold mb-2">Design</h3>
      <p className="text-gray-400">Crafting intuitive, visually stunning UI/UX tailored to your brand.</p>
    </div>
    <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
      <div className="text-4xl  font-bold tracking-widest text-[#ADF802] pb-3">03</div>
      <h3 className="text-xl font-semibold mb-2">Develop</h3>
      <p className="text-gray-400">Building fast, scalable, and maintainable web and mobile solutions.</p>
    </div>
    <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#ADF802] transition">
      <div className="text-4xl  font-bold tracking-widest text-[#ADF802] pb-3">04</div>
      <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
      <p className="text-gray-400">Deploying your product and providing ongoing support for continuous growth.</p>
    </div>
  </div>
</section>

<AnimatedDivider />

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <TestimonialsCarousel
          testimonials={[
            {
              name: "Ahsan Khan",
              role: "Car Rental Business Owner",
              text: "I was struggling with manual bookings and paperwork until JawumiTech built our rental system. Now everything runs automatically - bookings, payments, even fleet maintenance tracking. It's like having an extra employee!",
            },
            {
              name: "Muhammad Usman",
              role: "Fashion Retail Owner",
              text: "Honestly, I was skeptical about switching from our old cash register, but the POS system JawumiTech created for our clothing store has been a game-changer. I can now track what's selling in real-time and manage inventory without the usual headaches.",
            },
            {
              name: "Muhammad Noman",
              role: "Organic Beauty Products Founder",
              text: "As someone who's not very tech-savvy, I was worried about managing an online store. But JawumiTech made it so simple - the admin panel they built lets me handle orders, track inventory, and communicate with customers all in one place. It just works.",
            },
            {
              name: "Kevin Martinez",
              role: "Multi-store Owner",
              text: "Managing three stores used to mean juggling multiple systems and spreadsheets. Now with JawumiTech's centralized system, I can see everything at once. The best part? The real-time reporting that helps me make quick decisions.",
            },
            {
              name: "Christopher Brown",
              role: "Restaurant Owner",
              text: "Our restaurant was drowning in phone orders and reservation chaos. The system JawumiTech built not only streamlined online orders but the table management feature has eliminated double-bookings. Our staff actually has time to focus on customer service now!",
            }
          ]}
        />
      </section>

      <AnimatedDivider />   
 
  



    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
   {/* Section Header - Split Layout */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-12 text-white max-w-6xl mx-auto gap-8 lg:gap-0">
  {/* Heading */}
  <h1 className="text-5xl font-bold uppercase leading-tight lg:leading-none text-left lg:text-left">
    FREQUENTLY <br />ASKED <br />
    <span className="text-[#ADF802]">QUESTIONS</span>
  </h1>

  {/* Description */}
  <p className="text-sm sm:text-base md:text-lg text-gray-300 tracking-wide max-w-md leading-relaxed text-left lg:text-left">
    Get answers to common questions about our process, pricing, and partnership approach. 
    Can't find what you're looking for? Contact us directly.
  </p>
</div>

{/* FAQ List */}
<div className="max-w-6xl mx-auto  shadow-xl overflow-hidden divide-y divide-white/10">
  {FAQS.map((faq, idx) => {
    const isOpen = expandedIndex === idx;
    return (
      <div
        key={idx}
        className={`group cursor-pointer transition-all duration-300 ${
          isOpen ? "bg-white/5" : "hover:bg-white/5"
        }`}
        onClick={() => setExpandedIndex(isOpen ? null : idx)}
      >
        {/* Header Row */}
        <div className="flex flex-col justify-between md:flex-row items-center md:items-start px-6 md:px-12 py-6 ">
          {/* Left: Number */}
          {/* <div className="flex flex-col items-start justify-start md:w-1/6 w-full text-left">
            <span className="text-4xl  font-bold tracking-widest text-white pt-3">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div> */}
          
          {/* Center: Question */}
          <div className="flex flex-col justify-center md:w-2/3 w-full pl-0 md:pl-4 md:pr-8 min-h-[60px]">
            <span className="text-xl font-bold uppercase tracking-tight text-left w-full">
              {faq.question}
            </span>
          </div>
          
          {/* Right: Arrow */}
          <div className="flex flex-col items-end justify-center md:w-1/6 w-full">
            <div className="mb-2">
              {isOpen ? (
                <ChevronUp  className="w-8 h-8 text-[#ADF802]" />
              ) : (
                <ChevronRight className="w-8 h-8 text-white group-hover:text-[#ADF802] transition-colors" />
              )}
            </div>
          </div>
        </div>

      {isOpen && (
  <div className="w-full flex flex-col gap-3 mt-4">
    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left w-full p-10">
      {faq.answer}
    </p>
  </div>
)}

      </div>
    );
  })}
</div>

    
    </section>


      <Footer />
    </main>
  )
}