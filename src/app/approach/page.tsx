"use client";

import React from "react";
import Navbar from "@/sections/Navbar";
import CallToActionAbout from "@/sections/CallToActionAbout";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";

// ─── Animation Tokens ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// ─── Structural Approach Steps Data ─────────────────────────────
const steps = [
  {
    id: "01",
    phase: "Step 01",
    title: "Discovery & Consultation",
    overview: "We begin by understanding your business, goals, operational challenges, and technology requirements.",
    bgImage: "/assets/images/meeting-with-client.jpg", 
    colLabelLeft: "Core Focus",
    colValueLeft: "Operational Context",
    colLabelRight: "Key Initiatives",
    activities: [
      "Requirement Gathering",
      "Business Analysis",
      "Stakeholder Discussions",
      "Opportunity Identification"
    ]
  },
  {
    id: "02",
    phase: "Step 02",
    title: "Planning & Strategy",
    overview: "We define project scope, solution architecture, delivery plans, and implementation strategy.",
    bgImage: "/assets/images/office-teamwork-session.jpg", 
    colLabelLeft: "Core Focus",
    colValueLeft: "Architecture & Scope",
    colLabelRight: "Key Initiatives",
    activities: [
      "Product Planning",
      "Technical Strategy",
      "Solution Design",
      "Roadmapping"
    ]
  },
  {
    id: "03",
    phase: "Step 03",
    title: "Design & Development",
    overview: "We design and build digital products, systems, and technology solutions aligned with business objectives.",
    bgImage: "/assets/images/development-phase.jpg", 
    colLabelLeft: "Core Focus",
    colValueLeft: "Technical Execution",
    colLabelRight: "Key Initiatives",
    activities: [
      "UI / UX Design",
      "Product Development",
      "System Development",
      "API Integrations"
    ]
  },
  {
    id: "04",
    phase: "Step 04",
    title: "Testing & Optimization",
    overview: "Solutions are tested, refined, and optimized to ensure performance, reliability, and usability.",
    bgImage: "/assets/images/testing-phase.jpg", 
    colLabelLeft: "Core Focus",
    colValueLeft: "Quality Assurance",
    colLabelRight: "Key Initiatives",
    activities: [
      "Testing",
      "Quality Assurance",
      "Optimization",
      "Performance Review"
    ]
  },
  {
    id: "05",
    phase: "Step 05",
    title: "Deployment & Support",
    overview: "We deploy solutions and continue supporting operations through maintenance, consulting, and technical assistance.",
    bgImage: "/assets/images/deployment-phase.jpg", 
    colLabelLeft: "Core Focus",
    colValueLeft: "Continuous Value",
    colLabelRight: "Key Initiatives",
    activities: [
      "Deployment",
      "Technical Support",
      "Maintenance",
      "Continuous Improvement"
    ]
  }
];

// --- 1. IMMERSIVE HERO SECTION ---
function ApproachHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start text-white px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      
      {/* Immersive Video Background Underlay Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          src="/assets/videos/hero-bg-2.mp4" 
        />
        <div className="absolute inset-0 bg-neutral-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
      </div>

      {/* Primary Hero Typography Core Canvas */}
      <div className="relative max-w-4xl z-10 space-y-6 pt-24">
        <motion.span 
          className="text-[#d6ff3f] text-xs font-mono font-bold tracking-[0.25em] block uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          METHODOLOGY
        </motion.span>
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Our Approach.
        </motion.h1>

        <motion.div 
          className="space-y-4 pt-4 max-w-2xl border-t border-neutral-800"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="text-lg md:text-xl font-bold text-neutral-200 tracking-tight">
            Building Solutions Through Strategy, Technology & Execution
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            At fastIT Consultancy Services, we believe technology should solve real business problems, improve operations, and create long-term value. Our approach combines product thinking, technical expertise, and business understanding to deliver practical and scalable solutions for businesses, startups, entrepreneurs, and government institutions.
          </p>
        </motion.div>
      </div>

      {/* Downward Navigation Indicator */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10 animate-bounce text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
        Scroll to Explore Framework
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// --- MAIN PORTFOLIO-STYLE STACKED DECK CANVAS ---
export default function ApproachPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white antialiased font-sans selection:bg-[#d6ff3f] selection:text-black">
      
      {/* Fixed top absolute navbar alignment overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="relative z-10">
        {/* Render Immersive Video Hero */}
        <ApproachHero />

        {/* --- STACKED DECK PRESENTATION SYSTEM WRAPPER --- */}
        <section className="relative w-full">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="sticky top-0 w-full h-screen flex items-end justify-start overflow-hidden border-b border-neutral-900"
              style={{ zIndex: 10 + index }}
            >
              
              {/* FULL BLEED BACKGROUND LAYER */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={step.bgImage} 
                  alt={`${step.title} Backdrop view canvas`} 
                  className="w-full h-full object-cover object-center"
                />
                {/* Dark brand gradient overlay for high contrast text layout */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/20" />
              </div>

              {/* CONTENT DISPLAY BLOCK METADATA GRID */}
              <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                
                {/* Left Block: Structural Description Framework */}
                <motion.div 
                  className="lg:col-span-7 space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
                      /{step.id}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full uppercase font-bold border bg-[#d6ff3f]/10 text-[#d6ff3f] border-[#d6ff3f]/20">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                    {step.title}
                  </h3>

                  <p className="text-neutral-300 text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                    {step.overview}
                  </p>
                </motion.div>

                {/* Right Block: Process Activities Blueprint Data Panel */}
                <motion.div 
                  className="lg:col-span-5 lg:pl-12 grid grid-cols-1 gap-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-6 lg:pt-2 text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                >
                  <div className="grid grid-cols-2 gap-4 pb-2">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                        {step.colLabelLeft}
                      </span>
                      <span className="text-xs font-bold text-neutral-200 block mt-1 tracking-tight">
                        {step.colValueLeft}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                        Operational Model
                      </span>
                      <span className="text-xs font-bold text-neutral-200 block mt-1 tracking-tight">
                        Consultancy & Delivery
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-900 pt-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#d6ff3f] uppercase block mb-3">
                      {step.colLabelRight}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-center text-xs font-medium text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d6ff3f] mr-2.5 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Global Interface Append Blocks */}
      <div className="relative z-40 bg-neutral-950 border-t border-neutral-900">
        
        {/* Core Operational Commitment Frame */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 border-b border-neutral-900">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-[#d6ff3f] uppercase tracking-widest block">
              Our Commitment
            </span>
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-relaxed">
              We focus on delivering practical, scalable, and business-oriented solutions that help organizations innovate, operate efficiently, and grow with confidence.
            </p>
          </div>
        </div>

        <CallToActionAbout />
        <Footer />
      </div>
    </div>
  );
}