"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToActionAbout() {
  return (
    <section className="relative w-full bg-[#f4f3f0] text-black py-20 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 selection:bg-neutral-900 selection:text-white">
      
      {/* 1. Full-Section Underlay Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-right-bottom opacity-15 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/images/CTA-bg.jpg')" }} // Replace with your section background structural asset path
      />

      {/* 2. Full-Section Gray Tone Layout Overlay Shield */}
      <div className="absolute inset-0 z-0 bg-neutral-900/[0.02] pointer-events-none" />

      {/* Core Content Container - Elevated above background visuals */}
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Core CTA Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-neutral-300/80">
          
          {/* Left Column Canvas Block Frame */}
          <div className="lg:col-span-5 relative w-full aspect-[4/4] md:aspect-[4/3] lg:aspect-[1/1] rounded-[2rem] overflow-hidden bg-neutral-200 shadow-sm group">
            <img 
              src="/assets/images/american-businessman-man-business-person.jpg" 
              alt="Brand Impact Media" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Context Custom Overlay Badge Accent */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="bg-neutral-950 text-[#d6ff3f] font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                THRIVE ON CHAOS
              </span>
            </div>
          </div>

          {/* Right Column Core Messaging & Navigation Target */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2 lg:pt-6">
            
            {/* Top Minimal Accent Tagline */}
            <span className="text-neutral-500 font-serif italic text-sm md:text-base tracking-tight mb-4 block">
              — design for impact, not approval.
            </span>

            {/* Heavy Punch Header Title Typography */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-neutral-400 mb-10">
              <span className="text-black">Helping brands to go loud</span> with storytelling that hits where it matters.
            </h2>

            {/* Custom Micro-Action Action Pill Button Anchor Component */}
            <a 
              href="/contact" 
              className="inline-flex items-center gap-4 px-7 py-4 bg-neutral-950 text-white rounded-full font-medium text-sm hover:bg-neutral-800 transition-all shadow-md w-fit group"
            >
              <span>Work with us</span>
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </a>

          </div>
        </div>

        

      </div>
    </section>
  );
}