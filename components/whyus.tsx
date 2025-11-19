"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Trusted Experts",
    description: "Proven track record with startups and businesses. Real projects, real results.",
    bg: "bg-[#0b0b0b] text-white border border-white/10",
    numberBg: "text-[#bff747]",
    arrowColor: "text-[#bff747]",
    rotate: "rotate-[-3deg]",
  },
  {
    number: "02",
    title: "Clear Communication",
    description: "No hidden costs or delays. We deliver exactly what we promise, transparently.",
    bg: "bg-[#0b0b0b] text-white border border-white/10",
    numberBg: "text-[#bff747]",
    arrowColor: "text-[#bff747]",
    rotate: "rotate-[2deg]",
  },
  {
    number: "03",
    title: "Reliable Support",
    description: "Ongoing maintenance and updates to keep your digital products performing perfectly.",
    bg: "bg-[#0b0b0b] text-white border border-white/10",
    numberBg: "text-[#bff747]",
    arrowColor: "text-[#bff747]",
    rotate: "rotate-[-2deg]",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description: "Tailored solutions built for performance, scalability, and real business impact.",
    bg: "bg-[#0b0b0b] text-white border border-white/10",
    numberBg: "text-[#bff747]",
    arrowColor: "text-[#bff747]",
    rotate: "rotate-[3deg]",
  },
];

export default function WhyChooseUs() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Add card to refs array
  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    // Simple intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#bff747]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h3 className="text-[#bff747] text-lg md:text-xl font-bold mb-4 uppercase tracking-wider">
            Trusted Expertise
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-[#bff747]">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {SERVICES.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => addToCardsRef(el, idx)}
              className={`relative rounded-2xl p-6 min-h-[200px] flex flex-col justify-between backdrop-blur-sm transform transition-all duration-500 ease-out opacity-0 translate-y-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#bff747]/20 ${item.bg} ${item.rotate}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`flex items-center justify-center font-bold text-5xl ${item.numberBg}`}>
                  {item.number}
                </span>
                <ArrowUpRight className={`w-6 h-6 ${item.arrowColor}`} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}