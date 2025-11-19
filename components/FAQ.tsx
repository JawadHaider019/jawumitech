// components/FAQSection.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "How long does it take to build a website or app?",
    answer: "The timeline depends on complexity and features. A simple website may take 3-6 weeks, while a fully-featured web or mobile application can take 8-16 weeks. We provide a detailed project timeline with milestones during the proposal phase."
  },
  {
    question: "What is the cost of developing a website or app?",
    answer: "Costs vary based on project complexity, design, and functionality. We provide transparent quotes upfront and offer phased development options for startups or budget-conscious businesses."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! We provide ongoing support including bug fixes, updates, performance optimization, and security patches. Flexible support plans can be customized to meet your business needs."
  },
  {
    question: "Can you work with startups or small budgets?",
    answer: "Absolutely! We help startups launch MVPs efficiently by prioritizing core features and scalable solutions. Our phased approach ensures quality without exceeding budget."
  },
  {
    question: "Which technologies and frameworks do you specialize in?",
    answer: "We specialize in modern tech stacks including Next.js, React, TypeScript, Node.js, Laravel, MongoDb, MySql, React Native, AWS, and Vercel."
  },
  {
    question: "Will I have ownership of the source code and design assets?",
    answer: "Yes, 100%. Upon final payment, you own all code, design assets, and intellectual property. We believe you should have full control over your project."
  },
  {
    question: "Do you handle UI/UX design?",
    answer: "Yes. We provide end-to-end design services, including research, wireframing, prototyping, and high-fidelity UI/UX design. Our goal is to create interfaces that are intuitive and visually appealing."
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices: code reviews, automated testing, continuous integration, and thorough QA processes. This ensures maintainable, scalable, and high-performance solutions."
  },
  {
    question: "Can I request changes or add features mid-project?",
    answer: "Yes. We follow an agile workflow, allowing for changes while managing impact on timeline and budget. We maintain transparency and communicate clearly about adjustments."
  },
  {
    question: "Do you integrate third-party services?",
    answer: "Yes. We can integrate payment gateways, analytics, social logins, cloud storage, and other APIs to enhance your project functionality."
  },
  {
    question: "How will you communicate during the project?",
    answer: "We stay in touch via WhatsApp for quick updates and clarifications. For detailed discussions, milestone reviews, or sharing files, we can also use email or project management tools. This ensures you're always informed and involved throughout the project."
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "No worries! We build user-friendly admin panels and dashboards that are easy to use. Plus, our support team is always available to help."
  },
  {
    question: "Can you optimize my project for SEO and performance?",
    answer: "Yes. We follow best practices for SEO, page speed, and performance optimization to ensure your website or app ranks well and loads fast."
  },
  {
    question: "What makes you different from other development agencies?",
    answer: "We combine technical expertise with a client-focused approach. From strategy to support, we prioritize your business goals and long-term success."
  }
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Memoized toggle handler
  const handleToggle = useCallback((index: number) => {
    setExpandedIndex(current => current === index ? null : index);
  }, []);

  // Animation setup - ULTRA EARLY MOBILE TRIGGERS
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Wait for the next frame to ensure DOM is ready
    setTimeout(() => {
      // Clean up any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768;

        // ULTRA EARLY SCROLL TRIGGER POSITIONS FOR MOBILE
        const mobileStart = "top 100%";  // Trigger when element is 110% from top (VERY EARLY)
        const desktopStart = "top 90%";  // Earlier on desktop too
        const mobileDuration = 0.5;      // Slightly longer to feel smooth
        const desktopDuration = 0.7;

        // Force set initial styles to ensure visibility
        gsap.set([headerRef.current, faqContainerRef.current], {
          opacity: 1,
          y: 0,
          x: 0,
          clearProps: "all"
        });

        // Header animation - ULTRA EARLY ON MOBILE
        if (headerRef.current) {
          gsap.from(headerRef.current.children, {
            y: isMobile ? 20 : 40,
            opacity: 0,
            duration: isMobile ? mobileDuration : desktopDuration,
            stagger: isMobile ? 0.05 : 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: isMobile ? mobileStart : desktopStart, // ULTRA EARLY
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          });
        }

        // FAQ container animation - ULTRA EARLY ON MOBILE
        if (faqContainerRef.current) {
          gsap.from(faqContainerRef.current, {
            y: isMobile ? 25 : 50,
            opacity: 0,
            duration: isMobile ? mobileDuration : desktopDuration,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqContainerRef.current,
              start: isMobile ? mobileStart : desktopStart, // ULTRA EARLY
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          });

         
        }

        // Background elements - ULTRA EARLY ON MOBILE
        const bgElements = section.querySelectorAll('.bg-element');
        if (bgElements.length > 0) {
          gsap.set(bgElements, { opacity: 1, scale: 1 });
          
          gsap.from(bgElements, {
            scale: 0,
            opacity: 0,
            duration: isMobile ? 1.2 : 1.5,
            stagger: isMobile ? 0.15 : 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: isMobile ? mobileStart : desktopStart, // ULTRA EARLY
              end: "bottom top",
              toggleActions: "play none none reverse"
            }
          });
        }

        // Force refresh
        ScrollTrigger.refresh();

      }, section);

    }, 100);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Card expansion animations - SIMPLIFIED to match original design
  useEffect(() => {
    faqItemsRef.current.forEach((item, index) => {
      if (!item) return;

      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      
      if (expandedIndex === index) {
        // EXPAND ANIMATION - Just animate the answer and icon
        gsap.to(answer, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          rotation: 45,
          duration: 0.3,
          ease: "power2.out"
        });

      } else {
        // COLLAPSE ANIMATION
        gsap.to(answer, {
          opacity: 0,
          y: 10,
          duration: 0.3,
          ease: "power2.in"
        });
        
        gsap.to(icon, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [expandedIndex]);

  // Keyboard accessibility
  const handleKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle(index);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setExpandedIndex(prev => prev !== null ? Math.min(prev + 1, FAQS.length - 1) : 0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setExpandedIndex(prev => prev !== null ? Math.max(prev - 1, 0) : FAQS.length - 1);
    }
  }, [handleToggle]);

  // Add ref to each FAQ item
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current[index] = el;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black text-white pb-12 md:pb-20 px-4 md:px-20 relative z-20"
      aria-label="Frequently Asked Questions"
      style={{ opacity: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="bg-element absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-[#bff747]/10 rounded-full blur-2xl md:blur-3xl" 
          style={{ opacity: 1 }}
        />
        <div 
          className="bg-element absolute bottom-10 md:bottom-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-[#bff747]/5 rounded-full blur-2xl md:blur-3xl" 
          style={{ opacity: 1 }}
        />
        <div 
          className="bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#bff747]/3 rounded-full blur-2xl md:blur-3xl" 
          style={{ opacity: 1 }}
        />
      </div>

 {/* Section Header */}
<div 
  ref={headerRef} 
  className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-4 md:px-6 py-8 md:py-12 text-white relative z-10"
  style={{ opacity: 1 }}
>
  <div className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase text-white leading-tight md:leading-none">
    <h3 className="text-[#bff747] text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-wider">
      FAQ
    </h3>
    EVERYTHING<br />
    <span className="text-[#bff747]">YOU NEED</span><br />
    TO KNOW
  </div>

  <p className="text-sm text-white/90 tracking-wide max-w-md mt-6 md:mt-0 md:pt-8 lg:pt-12 text-center md:text-left">
    Find answers to common questions about our development process, 
    pricing, timelines, and support. Can't find what you're looking for? 
    Contact us directly for personalized assistance.
  </p>
</div>

      {/* FAQ List */}
      <div 
        ref={faqContainerRef}
        className="max-w-6xl mx-auto rounded-xl md:rounded-2xl border border-white/10 bg-black/80 backdrop-blur-sm shadow-lg md:shadow-xl overflow-hidden divide-y divide-white/10 relative z-10"
        style={{ opacity: 1 }}
      >
        {FAQS.map((faq, index) => {
          const isOpen = expandedIndex === index;
          
          return (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className={`faq-item group flex flex-col md:flex-row items-center justify-between md:items-start px-4 md:px-6 lg:px-12 py-6 md:py-8 lg:py-10 transition-all duration-300 cursor-pointer ${
                isOpen ? "bg-[#0b0b0b] border-l-2 md:border-l-4 border-[#bff747]" : ""
              }`}
              onClick={() => handleToggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              style={{ opacity: 1 }}
            >
              {/* Question and Answer */}
              <div className="flex flex-col justify-center md:w-5/6 w-full pl-0 md:pl-4 md:pr-8">
                <h3 className="hover:pl-2 transition-all text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tight text-left w-full text-white group-hover:text-[#bff747] transition-all duration-300">
                  {faq.question}
                </h3>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`faq-answer mt-3 md:mt-4 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Toggle Icon */}
              <div className="flex items-center justify-end md:w-1/6 w-full mt-3 md:mt-0">
                <div 
                  className="faq-icon transform transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-[#bff747]" />
                  ) : (
                    <ArrowDownRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#bff747] transition-colors duration-300" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;