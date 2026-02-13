"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline depends on project scope and features. A standard business website typically takes 3–6 weeks, while a custom web application may take 6–12 weeks. We provide a clear development roadmap with defined milestones before starting."
  },
  {
    question: "How much does a professional website cost?",
    answer: "Pricing depends on design complexity, functionality, and integrations. We provide transparent custom quotes based on your requirements, ensuring scalable solutions that fit your business goals and budget."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer: "Yes. We offer ongoing website maintenance, performance monitoring, security updates, and technical support to ensure your website remains fast, secure, and up to date."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely. We help startups and growing businesses launch professional websites by focusing on essential features first, with scalable architecture for future expansion."
  },
  {
    question: "Which technologies do you use for web development?",
    answer: "We work with modern technologies including Next.js, React, TypeScript, Node.js, Laravel, MongoDB, MySQL, AWS, and Vercel to build secure, scalable, and high-performance web applications."
  },
  {
    question: "Will I own the website and source code?",
    answer: "Yes. After project completion and final payment, you receive full ownership of the website, source code, and design assets. You maintain complete control over your digital product."
  },
  {
    question: "Do you provide UI/UX design services?",
    answer: "Yes. We design user-focused interfaces through research, wireframes, and high-fidelity UI/UX design to ensure your website delivers a seamless and engaging user experience."
  },
  {
    question: "How do you ensure website quality and performance?",
    answer: "We follow structured development processes including testing, performance optimization, SEO best practices, and security checks to deliver reliable and scalable web solutions."
  },
  {
    question: "Can I request changes during development?",
    answer: "Yes. We maintain clear communication throughout the project and can accommodate changes with proper impact assessment on timeline and scope."
  },
  {
    question: "Do you integrate payment gateways and third-party services?",
    answer: "Yes. We integrate payment gateways, analytics tools, CRM systems, cloud storage, and other third-party APIs to enhance your website functionality."
  },
  {
    question: "How do you communicate during a project?",
    answer: "We provide regular progress updates via WhatsApp and email. For structured discussions, we schedule review meetings to ensure transparency and alignment at every stage."
  },
  {
    question: "What if I am not technical?",
    answer: "No problem. We build easy-to-manage admin dashboards and provide guidance so you can confidently manage your website without technical expertise."
  },
  {
    question: "Do you optimize websites for SEO?",
    answer: "Yes. We implement on-page SEO best practices, fast loading speeds, clean code structure, and mobile responsiveness to help your website rank better in search engines."
  },
  {
    question: "What makes your agency different?",
    answer: "We combine technical expertise with a structured development process, clear communication, and long-term support to deliver digital solutions focused on real business growth."
  }
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isFaqContainerInView = useInView(faqContainerRef, { once: true, margin: "-50px" });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const answerVariants: Variants = {
    collapsed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    },
    expanded: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 45 }
  };

  const handleToggle = (index: number) => {
    setExpandedIndex(current => current === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
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
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-black text-white pb-12 md:pb-20 px-4 md:px-20 relative z-20"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          className="absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-[#bff747]/10 rounded-full blur-2xl md:blur-3xl" 
        />
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-[#bff747]/5 rounded-full blur-2xl md:blur-3xl" 
        />
        <motion.div 
          variants={backgroundVariants}
          initial="hidden"
          animate={isSectionInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#bff747]/3 rounded-full blur-2xl md:blur-3xl" 
        />
      </div>

      {/* Section Header */}
      <motion.div 
        ref={headerRef}
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-4 md:px-6 py-8 md:py-12 text-white relative z-10"
      >
        <div className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase text-white leading-tight md:leading-none">
          <motion.h3 
            variants={itemVariants}
            className="text-[#bff747] text-lg md:text-xl font-bold mb-3 md:mb-4 uppercase tracking-wider"
          >
            FAQ
          </motion.h3>
          EVERYTHING<br />
          <span className="text-[#bff747]">YOU NEED</span><br />
          TO KNOW
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-sm text-white/90 tracking-wide max-w-md mt-6 md:mt-0 md:pt-8 lg:pt-12 text-center md:text-left"
        >
          Find answers to common questions about our development process, 
          pricing, timelines, and support. Can't find what you're looking for? 
          Contact us directly for personalized assistance.
        </motion.p>
      </motion.div>

      {/* FAQ List */}
      <motion.div 
        ref={faqContainerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isFaqContainerInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto rounded-xl md:rounded-2xl border border-white/10 bg-black/80 backdrop-blur-sm shadow-lg md:shadow-xl overflow-hidden divide-y divide-white/10 relative z-10"
      >
        {FAQS.map((faq, index) => {
          const isOpen = expandedIndex === index;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group flex flex-col md:flex-row items-center justify-between md:items-start px-4 md:px-6 lg:px-12 py-6 md:py-8 lg:py-10 transition-all duration-300 cursor-pointer ${
                isOpen ? "bg-[#0b0b0b] border-l-2 md:border-l-4 border-[#bff747]" : ""
              }`}
              onClick={() => handleToggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              whileHover={{ backgroundColor: "rgba(11, 11, 11, 0.5)" }}
            >
              {/* Question and Answer */}
              <div className="flex flex-col justify-center md:w-5/6 w-full pl-0 md:pl-4 md:pr-8">
                <motion.h3 
                  className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tight text-left w-full text-white group-hover:text-[#bff747] transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  {faq.question}
                </motion.h3>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      variants={answerVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="mt-3 md:mt-4 overflow-hidden"
                    >
                      <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Toggle Icon */}
              <div className="flex items-center justify-end md:w-1/6 w-full mt-3 md:mt-0">
                <motion.div
                  variants={iconVariants}
                  initial="collapsed"
                  animate={isOpen ? "expanded" : "collapsed"}
                  className="transform transition-colors duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-[#bff747]" />
                  ) : (
                    <ArrowDownRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#bff747]" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FAQSection;