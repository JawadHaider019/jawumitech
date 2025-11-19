import { useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link"

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps = [
    { step: "01", title: "Understanding your needs", description: "We start by listening to your challenges and goals to identify your unique IT requirements." },
    { step: "02", title: "Customized consultation", description: "We provide tailored solutions after analyzing your requirements." },
    { step: "03", title: "Collaboration with stakeholders", description: "We collaborate closely with your team for seamless execution." }
  ];

  // Add ref to steps array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    stepsRef.current[index] = el;
  };

useEffect(() => {
  let ctx: any;

  const initGSAP = async () => {
    const gsapModule = await import('gsap');
    const ScrollTriggerModule = await import('gsap/ScrollTrigger');
    const gsap = gsapModule.default;
    const ScrollTrigger = ScrollTriggerModule.default;

    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      // Pin left side on desktop
      if (window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: leftSideRef.current,
          pinSpacing: false,
          anticipatePin: 1,
        });
      }

      // Animate steps
      stepsRef.current.forEach((step) => {
        if (!step) return;
        gsap.fromTo(step,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: window.innerWidth < 768 ? "top 85%" : "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            }
          }
        );
      });
    }, sectionRef);

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx?.revert();
    };
  };

  initGSAP();
}, []);


  return (
    <section ref={sectionRef} className="bg-black text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 lg:top-20 lg:right-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 lg:bottom-20 lg:left-20 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#bff747]/10 rounded-full blur-2xl lg:blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 bg-[#bff747]/5 rounded-full blur-2xl lg:blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
        {/* Left Side - Sticky content */}
        <div ref={leftSideRef} className="lg:w-2/5 lg:sticky lg:top-0 lg:h-screen flex items-start lg:items-center py-8 sm:py-12 lg:py-0">
          <div className="space-y-6 lg:space-y-8 w-full">
            <h3 className="text-[#bff747] text-lg sm:text-xl font-bold">HOW IT WORK</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Streamlining success through proven <span className="text-[#bff747]">process</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              Our step-by-step approach ensures seamless project execution, from understanding your needs to delivering tailored IT solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                             
                              
                               <Link
                                              href="/contact"
                                              className="px-8 py-4 bg-[#bff747] hover:bg-black text-black hover:text-[#bff747] font-semibold rounded-full border border-transparent hover:border-[#bff747] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                              Get Free Quote
                                <FaArrowRight className="w-5 h-5" />
                                            </Link>
                              
                            </div>
          </div>
        </div>

        {/* Right Side - Steps */}
        <div className="lg:w-3/5 flex flex-col gap-12 lg:gap-0">
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="min-h-[60vh] lg:h-screen flex items-center justify-center py-12 sm:py-16 lg:py-0"
              style={{ opacity: 0, transform: 'translateY(80px) scale(0.95)' }}
            >
              <div className="w-full max-w-2xl space-y-4 lg:space-y-6">
                <div className="text-[#bff747] text-base lg:text-lg font-semibold">STEP {step.step}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">{step.title}</h3>
                <p className="text-gray-300 text-base lg:text-lg xl:text-xl leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
