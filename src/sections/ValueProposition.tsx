// components/ValueProposition.tsx

"use client";

import { motion } from "framer-motion";

// Animation for the entire container to fade in
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2 // Stagger the animation of child elements
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ValueProposition() {
  return (
    // Outer wrapper — full width, no margin, just padding to set the inset
    <section className="w-full px-4 sm:px-6 lg:px-8">
      {/* Inner grey card with rounded corners */}
      <div className="bg-neutral-800 text-white py-24 rounded-2xl overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              Technology That Works for Your Business — Not Against It
            </motion.h2>

            {/* Main Copy - The Problem */}
            <motion.p 
              className="text-lg sm:text-xl text-neutral-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Most businesses struggle with slow systems, disconnected tools, or ideas that never get built.
            </motion.p>

            {/* Main Copy - The Solution */}
            <motion.p 
              className="text-lg sm:text-xl text-neutral-300 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              At fastIT Consultancy Services, we bridge the gap between ideas and execution — helping you turn concepts into functional, scalable digital products.
            </motion.p>

            {/* Main Copy - The Philosophy/Differentiator */}
            <motion.p 
              className="text-xl sm:text-2xl font-semibold text-[#d6ff3f] italic leading-relaxed"
              variants={itemVariants}
            >
              We don't just build.
              <br />
              We think, design, and deliver solutions that move your business forward.
            </motion.p>
          </motion.div>
        </div>

        {/* Visual Separator */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <hr className="border-neutral-700" />
        </div>
      </div>
    </section>
  );
}