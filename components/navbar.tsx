"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, Variants } from "framer-motion"

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
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
     { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  // Animation variants with proper typing
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const mobileItemVariants: Variants = {
    closed: { 
      opacity: 0, 
      x: -20 
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants: Variants = {
    closed: { 
      opacity: 0 
    },
    open: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const logoVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const navLinkVariants: Variants = {
    hover: {
      color: "#ffffff",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const ctaButtonVariants: Variants = {
    hover: {
      backgroundColor: "#000000",
      color: "#bff747",
      scale: 1.05,
      borderColor: "#bff747",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const showMobileMenu = isMounted && isOpen

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-b border-gray-800/50 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover="hover"
            variants={logoVariants}
          >
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
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <motion.div
                  key={link.href}
                  whileHover="hover"
                  variants={navLinkVariants}
                >
                  <Link
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
                </motion.div>
              )
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://wa.me/923291927168"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              whileTap="tap"
              variants={ctaButtonVariants}
              className="group/cta px-6 py-3 bg-[#bff747] text-black font-semibold rounded-full border-2 border-transparent flex items-center gap-2 shadow-lg"
            >
              Lets Connect
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X size={24} className="text-[#bff747]" />
            ) : (
              <Menu size={24} className="text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div 
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href)
                return (
                  <motion.div
                    key={link.href}
                    variants={mobileItemVariants}
                  >
                    <Link
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
                  </motion.div>
                )
              })}
              
              {/* Mobile CTA Button */}
              <motion.div
                variants={mobileItemVariants}
              >
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div 
            key="overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}