"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const showMobileMenu = isMounted && isOpen

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-b border-gray-800/50 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-1 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/iconjt.png" 
                alt="Jawumitech Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Jawumitech<span className="text-[#bff747]">.</span>
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 group/nav-link ${
                    isActive 
                      ? "text-[#bff747] font-semibold" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive 
                        ? "w-full bg-[#bff747]" 
                        : "w-0 bg-[#bff747] group-hover/nav-link:w-full"
                    }`} 
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/923291927168"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta px-6 py-3 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border-2 border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[#bff747]/20"
            >
             
              Lets Connect
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg  transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-[#bff747]" />
            ) : (
              <Menu size={24} className="text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? "text-[#bff747] font-semibold bg-[#bff747]/10 border-[#bff747]/30"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* Mobile CTA Button */}
            <a
              href="https://wa.me/923291927168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#bff747] hover:bg-[#bff747]/90 text-black font-semibold rounded-xl transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
             
              Lets Connect
              <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}