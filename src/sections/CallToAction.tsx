"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
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

        {/* Bottom Context - Meet The Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-start">
          
          {/* Label Subtitle Row Column descriptor block */}
          <div className="lg:col-span-5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 font-mono pt-1">
              MEET THE TEAM
            </h4>
          </div>

          {/* Core Multi-Column Team Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            
            {/* Team Member 1 */}
            <div className="flex flex-col justify-between space-y-3">
              <p className="text-neutral-800 text-sm md:text-base font-medium leading-relaxed tracking-tight">
                Driving technology vision, cloud alignment, and custom architecture. Delivering strategic high-performance systems to support growth.
              </p>
              <div>
                <span className="text-xs font-bold text-black block">Tumelo Mokalane</span>
                <span className="text-[11px] text-neutral-500 block">Founder & CEO</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col justify-between space-y-3">
              <p className="text-neutral-800 text-sm md:text-base font-medium leading-relaxed tracking-tight">
                Managing embedded talents, client product scopes, and seamless deployment workflows to ensure fast execution.
              </p>
              <div>
                <span className="text-xs font-bold text-black block">Jeminah Tau</span>
                <span className="text-[11px] text-neutral-500 block">VP of Business Development</span>
              </div>
            </div>

          </div>

          {/* Bottom Navigation Redirection Accent */}
          <div className="lg:col-span-12 flex justify-end pt-4 lg:pt-0">
            <a 
              href="/about" 
              className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-[#d6ff3f] pb-0.5 hover:text-neutral-600 hover:border-neutral-400 transition-all font-mono"
            >
              Learn more about us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}