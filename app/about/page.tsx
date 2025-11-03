"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {  Target, Zap, Users, Code2, Shield, Rocket , Mail, Github, Linkedin, ExternalLink, GraduationCap, Award, Clock } from "lucide-react"
import { StatsCounter } from "@/components/stats-counter"
import { AnimatedDivider } from "@/components/animated-divider"
import Image from "next/image"

export default function About() {
  const skills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "Mobile App Development", percentage: 85 },
    { name: "UI/UX Design", percentage: 88 },
    { name: "POS Software Development", percentage: 80 },
    { name: "Database Design", percentage: 92 },
    { name: "API Development", percentage: 94 },
    { name: "AI Integration", percentage: 75 },
  ]

 const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on your success and growth.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Always exploring cutting-edge technologies to stay ahead.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Your vision, our expertise — building together as partners.",
  },
  {
    icon: Code2,
    title: "Quality Code",
    description: "Clean, maintainable, and scalable solutions built to last.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We value honesty, transparency, and trust in every project.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Constantly learning, improving, and evolving with technology.",
  },
]




  const technicalExpertise = [
    { category: "Frontend", technologies: "React, Next.js, TypeScript, Tailwind CSS, Vue.js" },
    { category: "Backend", technologies: "Node.js, Python, Express, FastAPI, REST & GraphQL" },
    { category: "Mobile", technologies: "React Native, Flutter, iOS & Android Development" },
    { category: "Database", technologies: "MongoDB, PostgreSQL, Firebase, Redis, SQL" },
    { category: "Tools", technologies: "Git, Figma, Postman, VS Code, Jira" },
  ]


  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-[#ADF802]">JawumiTech</span>
          </h1>
          <p className="text-xl text-gray-400">Transforming ideas into digital realities since day one</p>
        </div>
      </section>

      <AnimatedDivider />
{/* Story Section */}
<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  {/* Main Story */}
  <div className="text-center mb-20">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ADF802]/10 border border-[#ADF802]/20 mb-6">
      <span className="w-2 h-2 bg-[#ADF802] rounded-full animate-pulse"></span>
      <span className="text-[#ADF802] text-sm font-medium">Our Journey</span>
    </div>
    <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      Our Story
    </h2>
    <div className="max-w-3xl mx-auto space-y-6">
      <p className="text-gray-300 text-xl leading-relaxed">
        Jawumi Tech was founded with a simple mission: to help startups and businesses build their digital future. 
        We believe that great technology should be accessible to everyone, regardless of size or budget.
      </p>
      <p className="text-gray-300 text-xl leading-relaxed">
      Founded by Jawad Haider, a passionate full-stack developer and visionary entrepreneur, our approach blends technical expertise with real-world experience to deliver solutions that are both innovative and reliable.
      </p>
    </div>
  </div>

  {/* Enhanced Founder Section */}
  <div className="mb-20 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-[#ADF802]/5 to-transparent rounded-3xl blur-3xl"></div>
    <div className="relative py-16 px-8 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border border-[#2A2A2A] rounded-3xl shadow-2xl">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ADF802] to-[#8BC400] bg-clip-text text-transparent">
          Meet the Founder
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl">Founder & Full-Stack Developer</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Founder Avatar & Social */}
       <div className="flex-shrink-0 w-full lg:w-2/5">
  <div className="flex flex-col items-center">
    <div className="relative mb-6 lg:mb-8 group w-full max-w-xs sm:max-w-sm md:max-w-md">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ADF802] to-[#8BC400] rounded-2xl lg:rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#ADF802] to-[#8BC400] flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-black shadow-xl lg:shadow-2xl shadow-[#ADF802]/30 overflow-hidden border-2 sm:border-3 lg:border-4 border-white/10">
        <Image
          src="/founder.png"
          alt="Jawad Haider - Founder"
          width={320}
          height={320}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  </div>
</div>
        {/* Founder Info */}
        <div className="flex-1 lg:w-3/5">
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Jawad Haider
            </h3>
            <p className="text-[#ADF802] font-semibold text-2xl mb-6">Founder & Full-Stack Developer</p>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
             With years of hands-on experience in full-stack development, I’m passionate about creating digital solutions that solve real-world problems. My journey in technology began with a deep curiosity and a drive to turn ideas into meaningful, impactful web experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
              What sets me apart is the ability to combine technical expertise with strategic thinking. I don’t just write code—I design scalable, maintainable systems that align with business goals, ensuring every project delivers measurable value. As the founder of Jawumitech, I lead a team dedicated to crafting innovative, results-driven web solutions for clients across industries.
              </p>
            </div>
          </div>


          {/* Current Focus */}
          <div className="bg-gradient-to-r from-[#ADF802]/10 to-transparent border-l-4 border-[#ADF802] p-6 rounded-r-xl hover:shadow-lg hover:shadow-[#ADF802]/10 transition-all duration-300">
            <h4 className="font-bold text-xl mb-3 text-[#ADF802] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ADF802] rounded-full"></span>
              Current Focus & Vision
            </h4>
            <p className="text-gray-300">
              Leveraging years of hands-on industry experience to build innovative SaaS products, integrate AI into modern web applications, and help startups achieve technical excellence through cutting-edge digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Values */}
  <div className="mb-20">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ADF802]/10 border border-[#ADF802]/20 mb-6">
        <span className="w-2 h-2 bg-[#ADF802] rounded-full animate-pulse"></span>
        <span className="text-[#ADF802] text-sm font-medium">What Drives Us</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Our Values
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, index) => {
        const Icon = value.icon
        return (
          <div
            key={index}
            className="group p-8 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border border-[#1A1A1A] rounded-2xl hover:border-[#ADF802] hover:shadow-2xl hover:shadow-[#ADF802]/10 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="mb-6 p-4 bg-[#ADF802]/10 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <Icon size={28} className="text-[#ADF802]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ADF802] transition-colors">{value.title}</h3>
            <p className="text-gray-400 leading-relaxed">{value.description}</p>
          </div>
        )
      })}
    </div>
  </div>

  {/* Skills */}
  <div className="mb-16">
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ADF802]/10 border border-[#ADF802]/20 mb-6">
        <span className="w-2 h-2 bg-[#ADF802] rounded-full animate-pulse"></span>
        <span className="text-[#ADF802] text-sm font-medium">Our Expertise</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Technical Skills
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        {skills.slice(0, 4).map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg group-hover:text-[#ADF802] transition-colors">{skill.name}</span>
              <span className="text-[#ADF802] font-bold text-lg bg-[#ADF802]/10 px-3 py-1 rounded-full">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-[#0A0A0A] rounded-full h-4 border border-[#1A1A1A] overflow-hidden group-hover:border-[#ADF802]/30 transition-colors">
              <div
                className="bg-gradient-to-r from-[#ADF802] to-[#8BC400] h-4 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(173,248,2,0.3)] relative"
                style={{ width: `${skill.percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-8">
        {skills.slice(4, 8).map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg group-hover:text-[#ADF802] transition-colors">{skill.name}</span>
              <span className="text-[#ADF802] font-bold text-lg bg-[#ADF802]/10 px-3 py-1 rounded-full">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-[#0A0A0A] rounded-full h-4 border border-[#1A1A1A] overflow-hidden group-hover:border-[#ADF802]/30 transition-colors">
              <div
                className="bg-gradient-to-r from-[#ADF802] to-[#8BC400] h-4 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_15px_rgba(173,248,2,0.3)] relative"
                style={{ width: `${skill.percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-400">Numbers that speak for themselves</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatsCounter end={50} label="Projects Delivered" suffix="+" />
          <StatsCounter end={100} label="Client Satisfaction" suffix="%" />
          <StatsCounter end={5} label="Years Experience" suffix="+" />
        </div>
      </section>

      <AnimatedDivider />

      <Footer />
    </main>
  )
}