"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from '@emailjs/browser'

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

  return (
    <main className="bg-black">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-[#ADF802]">Talk</span>
          </h1>
          <p className="text-xl text-gray-400">Ready to start your next project? Get in touch with us today.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="gap-12">
          {/* Contact Info */}
          <div >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="flex gap-2 justify-between items-center space-y-6 mb-12">
              <div className="flex gap-4">
                <div className="p-3 bg-[#ADF802]/10 rounded-lg h-fit">
                  <Mail size={24} className="text-[#ADF802]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">support@jawumitech.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-[#ADF802]/10 rounded-lg h-fit">
                  <Phone size={24} className="text-[#ADF802]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+923205917168</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-[#ADF802]/10 rounded-lg h-fit">
                  <MapPin size={24} className="text-[#ADF802]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Remote - Serving Global Clients</p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Contact Form */}
          {/* <div className="p-8 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded focus:border-[#ADF802] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded focus:border-[#ADF802] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-[#1A1A1A] rounded focus:border-[#ADF802] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded text-red-500 text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#ADF802] text-black font-bold rounded hover:shadow-lg hover:shadow-[#ADF802]/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-[#ADF802]/10 border border-[#ADF802] rounded text-[#ADF802] text-center">
                  ✅ Thanks for reaching out! We'll get back to you soon.
                </div>
              )}
            </form>

            <div className="mt-6 p-4 bg-black border border-[#1A1A1A] rounded text-center">
              <p className="text-sm text-gray-400">
                Form not working?{" "}
                <a 
                  href="mailto:support@jawumitech.com" 
                  className="text-[#ADF802] hover:underline"
                >
                  Click here to email us directly
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}