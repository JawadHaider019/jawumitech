"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when side menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3 sm:py-4"
          : "bg-gradient-to-b from-black/0 via-black/0 to-transparent py-4 sm:py-6"
          }`}
      >
        <div className=" mx-auto px-6 sm:px-14 lg:px-16 pt-2">
          <div className="flex justify-between items-center h-12 sm:h-14">
            {/* Logo (Far Left) */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/iconjt.png"
                  alt="Jawumitech Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-sm font-semibold transition-colors duration-200 ${isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#bff747] rounded-full shadow-sm shadow-[#bff747]/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action & Hamburger Menu */}
            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/contact"
                className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/30 bg-[#bff747] hover:bg-white text-black hover:text-black font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 backdrop-blur-sm group shadow-md"
              >
                <span>Book a call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Hamburger Trigger */}
              {/* <button
                onClick={() => setIsOpen(true)}
                className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full hover:bg-white/10 transition-all cursor-pointer text-white"
                aria-label="Open Menu"
              >
                <span className="w-5 h-[2px] bg-white rounded-full transition-all" />
                <span className="w-5 h-[2px] bg-white rounded-full transition-all" />
                <span className="w-5 h-[2px] bg-white rounded-full transition-all" />
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Side Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 cursor-pointer"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-neutral-950 border-l border-neutral-900 z-50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white"
            >
              {/* Header of Drawer */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/iconjt.png"
                      alt="Jawumitech Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">
                    jawumitech<span className="text-[#bff747]">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer text-white"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vertical Navigation Links */}
              <div className="flex flex-col gap-6 sm:gap-8 my-auto pt-8">
                {navLinks.map((link, idx) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-3xl sm:text-4xl font-bold tracking-tight transition-all hover:translate-x-2 duration-300 ${isActive
                          ? "text-[#bff747]"
                          : "text-slate-200 hover:text-[#bff747]"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer of Drawer */}
              <div className="space-y-4 pt-8 border-t border-neutral-900">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#bff747] hover:brightness-110 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#bff747]/20"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

