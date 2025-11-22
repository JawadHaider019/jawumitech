"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'
import Marquee from '@/components/Marquee';
import Hero from '@/components/HeroSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("service_naa6wb7")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        name: formData.name,
        email: formData.email,
        to_email: 'support@jawumitech.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        reply_to: formData.email,
        time: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      console.log("Sending email with params:", templateParams)

      // Use the promise-based approach
      const result = await emailjs.send(
        "service_naa6wb7", 
        "template_641x5ew", 
        templateParams
      )

      console.log("Email sent successfully:", result)
      
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error: any) {
      console.error("Full EmailJS error:", error)
      
      // Better error handling
      if (error?.status) {
        switch (error.status) {
          case 400:
            setError("Invalid request. Please check your form data.")
            break
          case 403:
            setError("Access denied. Please check your EmailJS credentials.")
            break
          case 404:
            setError("Service or template not found. Please check your IDs.")
            break
          default:
            setError(`Failed to send message (Error ${error.status}). Please try again.`)
        }
      } else {
        setError("Failed to send message. Please check your internet connection and try again.")
      }
      
      // Log detailed error info
      console.log("Error status:", error?.status)
      console.log("Error text:", error?.text)
      console.log("Error message:", error?.message)
    } finally {
      setLoading(false)
    }
  }

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const formVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px -10px rgba(191, 247, 71, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <main className="bg-black">
      <Hero
        title1="LET'S"
        title2='TALK'
        image='/HeroImage.webp'
      />
      <Marquee/>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Get In Touch
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Ready to start your next project? Let's discuss how we can transform your ideas into reality with cutting-edge solutions.
            </motion.p>

            {/* Contact Cards Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-8"
            >
              {/* Email Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 sm:p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#bff747]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="p-3 bg-[#bff747]/10 rounded-lg flex-shrink-0"
                  >
                    <Mail size={24} className="text-[#bff747]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Email</h3>
                    <p className="text-gray-400 text-sm sm:text-base">support@jawumitech.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 sm:p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#bff747]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="p-3 bg-[#bff747]/10 rounded-lg flex-shrink-0"
                  >
                    <Phone size={24} className="text-[#bff747]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Phone</h3>
                    <p className="text-gray-400 text-sm sm:text-base">+92 329 1927168</p>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="p-4 sm:p-6 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl hover:border-[#bff747]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="p-3 bg-[#bff747]/10 rounded-lg flex-shrink-0"
                  >
                    <MapPin size={24} className="text-[#bff747]" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Location</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Remote - Serving Global Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg"
            >
              <p className="text-sm text-gray-400 text-center">
                Typically respond within 2-4 hours during business hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={formVariants}
            className="p-6 sm:p-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-3 text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded-lg focus:border-[#bff747] focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-3 text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded-lg focus:border-[#bff747] focus:outline-none transition-colors text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold mb-3 text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded-lg focus:border-[#bff747] focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#bff747] text-black font-bold rounded-lg transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-[#bff747]/10 border border-[#bff747] rounded-lg text-[#bff747] text-center"
                >
                  ✅ Thanks for reaching out! We'll get back to you soon.
                </motion.div>
              )}
            </form>

            <motion.div 
              variants={itemVariants}
              className="mt-6 p-4 bg-black border border-[#1A1A1A] rounded-lg text-center"
            >
              <p className="text-sm text-gray-400">
                Form not working?{" "}
                <a 
                  href="mailto:support@jawumitech.com" 
                  className="text-[#bff747] hover:underline transition-colors"
                >
                  Click here to email us directly
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}