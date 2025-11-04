"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X ,ArrowRight} from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  // Prevent hydration mismatch by only showing mobile menu after mount
  const showMobileMenu = isMounted && isOpen

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 
       bg-black/80 backdrop-blur-md border-b border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logojt.png" 
              alt="JG Logo" 
              width={180} 
              height={90}  
              className="w-auto h-14 object-contain"  
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#ADF802] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
               <a
              href="https://wa.me/923205917168"
              target="_blank"
              rel="noopener noreferrer"
             className="flex px-4 py-3 bg-[#ADF802] text-black font-semibold rounded-full text-center mt-4"
            >
            Lets Connect
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#ADF802]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Only render after client-side mount */}
        {showMobileMenu && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-300 hover:text-[#ADF802] hover:bg-[#0A0A0A] rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
           
                      <a
              href="https://wa.me/923205917168"
              target="_blank"
              rel="noopener noreferrer"
             className="flex w-40 px-4 py-3 bg-[#ADF802] text-black font-semibold rounded-full text-center mt-4"
            >
            Lets Connect
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}