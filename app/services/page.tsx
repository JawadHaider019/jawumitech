"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Code, Smartphone, Palette, Zap, Wrench, ShoppingCart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with Next.js, React, and Node.js. We create fast, scalable, and SEO-friendly solutions.",
      features: ["Next.js & React", "Node.js Backend", "Database Design", "API Development"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using modern frameworks.",
      features: ["React Native", "Native Development", "App Store Deployment", "Push Notifications"],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description:
        "Beautiful, intuitive interfaces combined with strategic branding that resonates with your audience.",
      features: ["UI Design", "UX Research", "Brand Strategy", "Design Systems"],
    },
    {
      icon: ShoppingCart,
      title: "POS Software Development",
      description:
        "Modern Point of Sale systems for retail, restaurants, and service businesses. Fast, reliable, and beautiful.",
      features: ["Inventory Management", "Payment Integration", "Real-time Analytics", "Multi-location Support"],
    },
    {
      icon: Zap,
      title: "Digital Presence Setup",
      description: "Complete online presence setup including domain, hosting, email, and initial branding.",
      features: ["Domain Setup", "Hosting", "Email Configuration", "Initial Branding"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your digital products running smoothly.",
      features: ["24/7 Support", "Bug Fixes", "Updates", "Performance Optimization"],
    },
  ]

  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#ADF802]">Services</span>
          </h1>
          <p className="text-xl text-gray-400">Comprehensive solutions tailored to your startup's needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#ADF802] transition-all duration-300 hover:shadow-lg hover:shadow-[#ADF802]/20"
              >
                <div className="mb-6 p-4 bg-[#ADF802]/10 rounded-lg w-fit group-hover:bg-[#ADF802]/20 transition-colors">
                  <Icon size={32} className="text-[#ADF802]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ADF802] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
