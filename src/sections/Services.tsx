"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Product Development",
    description: "We design and develop scalable digital products and business solutions from concept to deployment.\n\nServices Include:\n• SaaS Product Development\n• MVP Development\n• Web Applications\n• Business Systems\n• UI / UX Design\n• API Integrations",
    image: "/assets/images/mobile-app-mockup.jpg",
    ctaLink: "/start-a-project",
    ctaText: "Start a Project",
  },
  {
    id: "02",
    title: "IT Consultancy Services",
    description: "We provide practical IT solutions, consulting services, and digital transformation support for organizations.\n\nServices Include:\n• IT Consulting\n• Digital Transformation\n• Technical Support\n• Hosting & Deployment\n• Infrastructure Support\n• Systems Integration",
    image: "/assets/images/network-switch-with-cables.jpg",
    ctaLink: "/book-a-call",
    ctaText: "Book a Call",
  },
  {
    id: "03",
    title: "Embedded Talent Services",
    description: "We embed experienced technology professionals into teams through leadership, consulting, and operational roles.\n\nServices Include:\n• Fractional CTO\n• Fractional CIO\n• IT Management\n• Product Leadership\n• Technical Consulting\n• Team Augmentation",
    image: "/assets/images/businessman-analyzing-performance-metrics-his-computer-workplace.jpg",
    ctaLink: "/contact-us",
    ctaText: "Contact Us",
  },
];

interface ServicesProps {
  onSectionActive?: (theme: "light" | "dark") => void;
}

export default function Services({ onSectionActive }: ServicesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(0); // First service open by default
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: false });

  // Dispatches dark mode request upwards when the section dominates the user screen window viewport
  useEffect(() => {
    if (isInView && onSectionActive) {
      onSectionActive("dark");
    }
  }, [isInView, onSectionActive]);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-neutral-950 text-white py-20 px-6 md:px-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Block Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-16 border-b border-neutral-800">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              At fastIT Consultancy Services, we don&apos;t do templates. <br />
              <span className="text-neutral-400">Every project starts from zero and ends with a punch.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:text-right pt-4 lg:pt-0">
            <span className="text-[#d6ff3f] font-bold uppercase tracking-widest text-xs block mb-2">
              OUR SERVICES
            </span>
            <p className="text-neutral-400 italic text-sm md:text-base leading-relaxed">
              — cuz your brand deserves <br /> more than just &quot;safe&quot;.
            </p>
          </div>
        </div>

        {/* Core Accordion and Visual Display Section Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 items-start">
          
          {/* Left Column Accordion Lists */}
          <div className="lg:col-span-7 flex flex-col split-lines">
            {services.map((service, index) => {
              const isOpen = expandedIndex === index;
              return (
                <div 
                  key={service.id} 
                  className="border-b border-neutral-800/80 last:border-0"
                >
                  <button
                    onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                    className="w-full py-8 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-neutral-500 font-mono font-bold">
                        ({service.id})
                      </span>
                      <span className={`text-xl md:text-2xl font-bold tracking-tight ${isOpen ? 'text-white' : 'text-neutral-400 hover:text-white'}`}>
                        {service.title}
                      </span>
                    </div>

                    {/* Chevron Arrow Icon Indicator - Accent updated to signature brand color */}
                    <div className="text-neutral-400">
                      <svg 
                        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d6ff3f]' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-12 max-w-xl">
                          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                            {service.description}
                          </p>
                          <a 
                            href={service.ctaLink} 
                            className="inline-block text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#d6ff3f] transition-colors"
                          >
                            {service.ctaText}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column Dynamic Asset Device Canvas Frame display block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 pt-8 lg:pt-12 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 border border-neutral-800 p-2 flex items-center justify-center">
              
              {/* Decorative Corner Icon context overlay element from reference design */}
              <div className="absolute top-6 left-6 text-[#d6ff3f] text-3xl font-light pointer-events-none z-20">
                ✳
              </div>

              {/* Dynamic image switching with a graceful fade effect animation */}
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-neutral-950">
                {services.map((srcTarget, idx) => (
                  <motion.img
                    key={srcTarget.id}
                    src={srcTarget.image}
                    alt={srcTarget.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: expandedIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}