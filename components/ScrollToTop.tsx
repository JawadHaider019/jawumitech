"use client"

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#bff747] text-black p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#bff747]/40 focus:outline-none focus:ring-2 focus:ring-[#bff747] focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} className="sm:w-5 sm:h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;