"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const FAQS = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope a standard website typically takes 3–5 weeks, an MVP app 6–10 weeks, and custom software varies based on complexity. We'll give you a clear timeline after a free scoping call.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every project is quoted individually based on features and complexity no vague estimates. Book a free call and we'll give you a fixed price before any work starts.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "Yes, full ownership. You get the complete codebase no vendor lock-in, no ongoing dependency on us to make changes.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Every project includes a post-launch support window, plus optional maintenance packages for updates and new features after that.",
  },
  {
    question: "What if I'm not technical?",
    answer:
      "That's fine  we explain everything in plain language and handle the technical decisions, so you can focus on your business goals.",
  },
  {
    question: "What makes your agency different?",
    answer:
      "We build custom software, websites, and mobile apps under one team so you get one point of contact and one consistent process, instead of juggling separate vendors.",
  },
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const faqContainerRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const isFaqContainerInView = useInView(faqContainerRef, {
    once: true,
    margin: "-50px",
  });

  // Scroll words animation setup (matching Services)
  const { scrollYProgress: headerScroll } = useScroll({
    target: headerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothHeaderProgress = useSpring(headerScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerText = "Answers to the questions we hear most about our process, pricing, timelines, and support. Reach out  we're happy to help. No question is too small when it comes to getting your project right";
  const words = headerText.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const answerVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 45 },
  };

  const handleToggle = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(index);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setExpandedIndex((prev) =>
        prev !== null ? Math.min(prev + 1, FAQS.length - 1) : 0,
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setExpandedIndex((prev) =>
        prev !== null ? Math.max(prev - 1, 0) : FAQS.length - 1,
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white pb-12 md:pb-20 px-4 md:px-8 lg:px-12 relative z-20 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Background Dots UI (matching Services) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `40px 40px`
        }}
      />

      {/* Section Header - Grid Style matching Services */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 mb-20 pt-16">
          <div className="lg:col-span-5">
            <span className="text-8xl font-bold text-[#bff747] uppercase leading-none block">
              QUICK <br /> <span className="text-[#fff]/80 ">ANSWERS</span>
            </span>
          </div>
          <div className="lg:col-span-7 pt-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1">
              {words.map((word, i) => (
                <Word key={i} word={word} progress={smoothHeaderProgress} index={i} total={words.length} />
              ))}
            </h2>
          </div>
        </div>

        {/* FAQ List - Styled like Services Accordion */}
        <motion.div
          ref={faqContainerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isFaqContainerInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto flex flex-col divide-y divide-white/10 relative z-10"
        >
          {FAQS.map((faq, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group flex flex-col md:flex-row items-center justify-between md:items-start px-4 md:px-8 py-8 md:py-12 transition-all duration-500 cursor-pointer border-t border-white/10 ${isOpen
                  ? "bg-white/5"
                  : "hover:bg-white/5"
                  }`}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
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
      </div>
    </section>
  );
};

function Word({ word, progress, index, total }) {
  const start = index / total;
  const end = Math.min(1, (index + 4) / total);

  // Transitions from neutral-700 to white
  const color = useTransform(progress, [start, end], ["#404040", "#ffffff"]);
  const opacity = useTransform(progress, [start, end], [0.4, 1]);

  return (
    <motion.span style={{ color, opacity }} className="relative">
      {word}
    </motion.span>
  );
}

export default FAQSection;
