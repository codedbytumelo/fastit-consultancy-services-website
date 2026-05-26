"use client";

import { motion } from "framer-motion";
import { SVGProps } from "react";

// ─── Icons ─────────────────────────────────────────────────────
const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-4 h-4 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// ─── Animations ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }
  },
};

const scrollBounce = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1000px] overflow-hidden bg-black selection:bg-[#d6ff3f] selection:text-black">
      
      {/* ─── Background Video Layer ─── */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image */}
        <img
          src="/assets/images/hero-desk-setup.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/images/hero-desk-setup.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/hero-bg-1.mp4" type="video/mp4" />
        </video>

        {/* Shadow Overlay Mixes for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ─── Main Content Structural Overlay ─── */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Core Content Layout Area with optimized upper-mid placement */}
        <div className="flex-1 flex items-center pt-20 sm:pt-24 lg:pt-28 px-6 sm:px-10 lg:px-14 xl:px-20 pb-6">
          <div className="max-w-[760px] text-left">
            
            {/* Small Monospaced Tagline Accent */}
            <motion.p
              className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-bold text-[#d6ff3f] mb-3 sm:mb-4"
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              BOLD IT SOLUTIONS
            </motion.p>

            {/* Headline Block */}
            <motion.h1
              className="text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.6rem] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-4 sm:mb-5"
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              We build digital products and deliver reliable IT solutions for businesses ready to grow.
            </motion.h1>

            {/* Subheadline Descriptive Block */}
            <motion.p
              className="text-neutral-300 text-xs sm:text-sm lg:text-base leading-relaxed tracking-tight max-w-[660px] mb-6 sm:mb-8 opacity-90"
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              fastIT Consultancy Services helps businesses, startups, entrepreneurs, and government institutions build scalable products, streamline operations, and accelerate digital transformation through Product Development and IT services.
            </motion.p>

            {/* Dual CTA Interface Anchor Deck */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5"
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {/* Primary Action Button */}
              <a
                href="/start-a-project"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 bg-[#d6ff3f] text-black text-sm font-bold rounded-full hover:bg-[#cbf235] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(214,255,63,0.15)]"
              >
                <span>Start A Project With Us</span>
                <ArrowRightIcon className="stroke-[2.5]" />
              </a>

              {/* Secondary Action Button */}
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Bottom Section Wrap — Recalibrated Fluid Signature Stamp */}
        <div className="pb-6 px-6 sm:px-10 lg:px-14 xl:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 border-t border-white/10 pt-4 sm:pt-5">
              
              {/* Massive Signature Stamp Typography Element — Formatted safely for standard fold bounds */}
              <div className="overflow-hidden select-none flex-1">
                <h2 className="-ml-0.5 text-[7vw] sm:text-[6.5vw] lg:text-[5vw] xl:text-[4.5vw] font-extrabold leading-[0.9] tracking-tighter text-white/90 uppercase">
                  fastIT Consultancy Services<span className="text-[#d6ff3f] normal-case font-normal text-[0.4em] relative -top-[0.4em] ml-0.5">®</span>
                </h2>
              </div>

              {/* Right Side Info Trackers */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-end w-full lg:w-auto gap-3 min-w-[240px] lg:pb-1">
                <p className="text-[10px] text-neutral-400 tracking-wider uppercase font-mono">
                  © 2026 fastIT. All Rights Reserved.
                </p>
                
                <motion.div
                  className="hidden sm:flex items-center gap-1.5 text-neutral-400 font-mono"
                  variants={scrollBounce}
                  animate="animate"
                >
                  <span className="text-[9px] tracking-[0.2em] uppercase">Scroll</span>
                  <ChevronDownIcon className="w-3.5 h-3.5 stroke-[2]" />
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}