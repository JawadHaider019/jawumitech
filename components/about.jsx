"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const text = "At Jawumitech, we help businesses build custom software, websites, and mobile apps designed for growth. We create fast, scalable, and easy-to-manage digital solutions that give brands full control over their business and customer experience.";
  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-16 bg-white text-black overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-3">
            <span className="text-md font-bold text-gray-500 uppercase pl-10 pt-10">Who We Are</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-2xl md:text-3xl font-medium leading-[1.3] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-1">
              {words.map((word, i) => (
                <Word key={i} word={word} progress={smoothProgress} index={i} total={words.length} />
              ))}
            </h2>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Image 1 */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-[4/4] overflow-hidden rounded-[2.5rem]"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                alt="Our meeting 1"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Image 2 */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/4] overflow-hidden rounded-[2.5rem]"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
                alt="Our meeting 2"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* CTA Text & Button */}
          <div className="lg:col-span-4 pb-4 flex flex-col justify-end">
            <div className="mb-5 space-y-4">
              {[
                "5+ Years of Industry Experience",
                "100+ Projects Successfully Delivered",
                "Trusted by Growing Businesses",
                "Custom Solutions Built for Scale",
                "Fast & Reliable Project Delivery",
                "Long-Term Support & Maintenance",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#bff747] flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-black group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-600 font-semibold text-base lg:text-md group-hover:text-black transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold leading-tight">
                Our Bold and  Brilliant Thinkers
              </h3>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#bff747] hover:bg-black text-black hover:text-white font-bold rounded-full transition-all duration-300 group shadow-lg shadow-[#bff747]/20"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({ word, progress, index, total }) {
  // Creating a wider window for each word to transition (slower feel)
  const start = index / total;
  const end = Math.min(1, (index + 4) / total);

  const color = useTransform(progress, [start, end], ["#d1d5db", "#000000"]);
  const opacity = useTransform(progress, [start, end], [0.5, 1]);

  return (
    <motion.span style={{ color, opacity }}>
      {word}
    </motion.span>
  );
}



