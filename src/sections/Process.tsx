// components/Process.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const processSteps = [
  { id: 1, label: "Ideation & Research", image: "/assets/images/process-1.jpg" },
  { id: 2, label: "Design & Prototyping", image: "/assets/images/process-2.jpg" },
  { id: 3, label: "Development & Testing", image: "/assets/images/process-3.jpg" },
  { id: 4, label: "Launch & Optimization", image: "/assets/images/process-4.jpg" },
  { id: 5, label: "fastIT Consultancy Services", image: null }, // Center Logo placeholder
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Cycle through 0 to 4 (ending on the center logo)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1200); // 1.2 seconds per step

    return () => clearInterval(interval);
  }, []);

  // Dynamic classes for the glowing border effect
    const getBorderClasses = (index: number): string => {
      const baseClasses = "w-full aspect-[4/3] overflow-hidden bg-neutral-900 transition-all duration-700 ease-in-out rounded-[2rem] rounded-b-[6rem] shadow-2xl";
      if (activeStep === index) {
        return `${baseClasses} border-2 border-[#d6ff3f] shadow-[0_0_30px_rgba(214,255,63,0.4)]`;
      }
      return `${baseClasses} border border-neutral-800/50`;
    };

  return (
    // Outer wrapper for page alignment
    <section className="w-full px-4 sm:px-6 lg:px-8 my-12">
      <div className="bg-neutral-950 text-white py-24 rounded-3xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Understand The Business <br />
                <span className="text-[#d6ff3f]">Process.</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                We strive to develop real-world web solutions that are ideal for small to large projects with bespoke project requirements.
              </p>
            </div>
            
            <Link
              href="/work"
              className="inline-flex items-center w-fit px-8 py-4 bg-[#d6ff3f] text-black rounded-full font-bold text-base hover:scale-105 transition-all group"
            >
              More Projects
              <div className="ml-3 w-6 h-6 rounded-full border border-black/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Process Flow Layout (Visible on md screens and up) */}
          <motion.div 
            className="relative hidden md:block h-[600px] lg:h-[700px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            
            {/* Connecting Arrows */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
              <div className="absolute top-[28%] left-[28%] w-[20%] h-[2px] bg-gradient-to-r from-neutral-800 to-[#d6ff3f] rotate-[25deg] origin-left"></div>
              <div className="absolute top-[28%] right-[28%] w-[20%] h-[2px] bg-gradient-to-l from-neutral-800 to-[#d6ff3f] -rotate-[25deg] origin-right"></div>
              <div className="absolute bottom-[28%] left-[30%] w-[18%] h-[2px] bg-gradient-to-r from-[#d6ff3f] to-neutral-800 -rotate-[25deg] origin-left"></div>
              <div className="absolute bottom-[28%] right-[30%] w-[18%] h-[2px] bg-gradient-to-l from-[#d6ff3f] to-neutral-800 rotate-[25deg] origin-right"></div>
            </div>

            {/* 1. Top Left */}
            <motion.div className="absolute top-0 left-0 w-[35%] z-10 group" variants={itemVariants}>
              <div className={getBorderClasses(0)}>
                {processSteps[0].image ? (
                  <Image src={processSteps[0].image} alt={processSteps[0].label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold text-neutral-300 pl-4">{processSteps[0].label}</p>
            </motion.div>

            {/* 2. Top Right */}
            <motion.div className="absolute top-0 right-0 w-[35%] z-10 group" variants={itemVariants}>
              <div className={getBorderClasses(1)}>
                {processSteps[1].image ? (
                  <Image src={processSteps[1].image} alt={processSteps[1].label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold text-neutral-300 text-right pr-4">{processSteps[1].label}</p>
            </motion.div>

            {/* 3. Bottom Left */}
            <motion.div className="absolute bottom-0 left-[5%] w-[35%] z-10 group" variants={itemVariants}>
              <div className={getBorderClasses(2)}>
                {processSteps[2].image ? (
                  <Image src={processSteps[2].image} alt={processSteps[2].label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold text-neutral-300 pl-4">{processSteps[2].label}</p>
            </motion.div>

            {/* 4. Bottom Right */}
            <motion.div className="absolute bottom-0 right-[5%] w-[35%] z-10 group" variants={itemVariants}>
              <div className={getBorderClasses(3)}>
                {processSteps[3].image ? (
                  <Image src={processSteps[3].image} alt={processSteps[3].label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold text-neutral-300 text-right pr-4">{processSteps[3].label}</p>
            </motion.div>

            {/* 5. Center Main Placeholder Logo */}
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] z-20" variants={itemVariants}>
              <div className={`${getBorderClasses(4)} rounded-[2.5rem] rounded-b-[7rem] flex items-center justify-center`}>
                
                {/* Logo Placeholder UI */}
                <div className="text-center z-10 p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#d6ff3f]/10 border-2 border-[#d6ff3f]/40 flex items-center justify-center">
                    <span className="text-4xl font-black text-[#d6ff3f]">f</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">fastIT Consultancy Services</h3>
                  <p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Your Logo Here</p>
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* Mobile Layout Fallback */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden">
            {processSteps.map((step, index) => (
              <div key={step.id} className={`${index === 4 ? 'sm:col-span-2' : ''}`}>
                <div className={`${getBorderClasses(index)} ${index === 4 ? 'rounded-[2.5rem] rounded-b-[7rem]' : 'rounded-[2rem] rounded-b-[5rem]'}`}>
                  {step.image ? (
                    <Image src={step.image} alt={step.label} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                       <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#d6ff3f]/10 border border-[#d6ff3f]/40 flex items-center justify-center">
                            <span className="text-2xl font-black text-[#d6ff3f]">f</span>
                          </div>
                          <h3 className="text-base font-bold text-white">fastIT Consultancy Services</h3>
                       </div>
                    </div>
                  )}
                </div>
                {index !== 4 && <p className="mt-3 text-sm font-semibold text-neutral-300">{step.label}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}