"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "923291927168";
  const defaultMessage = encodeURIComponent(
    "Hello! I am interested in your services and would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-[4.25rem] right-4 sm:bottom-20 sm:right-6 md:bottom-24 md:right-8 z-50 flex items-center group pointer-events-auto">
      {/* Tooltip Label */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="hidden sm:flex items-center mr-2.5 md:mr-3 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full bg-black/90 backdrop-blur-md text-white text-[11px] md:text-xs font-semibold border border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap"
      >
        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#25D366] mr-1.5 md:mr-2 animate-pulse" />
        Chat with us
      </motion.div>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 cursor-pointer"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10" />
      </motion.a>
    </div>
  );
}
