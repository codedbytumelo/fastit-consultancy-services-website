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

// ─── Contextual Project Data ────────────────────────────────────
const projects = [
  {
    id: "01",
    title: "Auto Reach Innovations",
    status: "LIVE",
    industry: "Automotive Technology",
    projectType: "Client Project",
    overview: "Auto Reach Innovations is an automotive-focused platform supporting lead generation, customer acquisition, dealership workflows, and digital business operations. The project involved building digital experiences and supporting operational systems designed to improve visibility, engagement, and business processes.",
    bgImage: "/assets/images/Auto-Reach-Innovations.png", 
    isLocked: false,
  },
  {
    id: "02",
    title: "Assentia",
    status: "LOCKED • COMING SOON",
    industry: "Business Systems / Enterprise Software",
    projectType: "Internal Product",
    overview: "Assentia is an upcoming business operations platform focused on helping organizations improve visibility, workflows, operational management, and internal processes. The project is currently under development and details remain private until public release.",
    bgImage: "/assets/images/Assentia Logo.png", 
    isLocked: true,
  },
  {
    id: "03",
    title: "Devlaunch",
    status: "CONCEPT PROJECT",
    industry: "Product Development",
    projectType: "Concept Initiative",
    overview: "Devlaunch is a concept initiative exploring product development workflows and solutions aimed at helping founders, startups, and businesses accelerate digital product launches. The project is currently in concept and planning stages.",
    bgImage: "/assets/images/Devlaunch Logo_1.png", 
    isLocked: false,
  }
];

// --- 1. IMMERSIVE HERO SECTION (Video Background) ---
function WorkHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start text-white px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      
      {/* Video Background Layer covering the absolute space */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          src="/assets/videos/hero-bg-2.mp4" 
        />
        {/* Dark brand filter matching home page aesthetics */}
        <div className="absolute inset-0 bg-neutral-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
      </div>

      {/* Hero Typography Content */}
      <div className="relative max-w-4xl z-10 space-y-6 pt-24">
        <motion.span 
          className="text-[#d6ff3f] text-xs font-mono font-bold tracking-[0.25em] block uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          OUR PORTFOLIO
        </motion.span>
        
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Work.
        </motion.h1>

        <motion.div 
          className="space-y-4 pt-4 max-w-2xl border-t border-neutral-800"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h2 className="text-lg md:text-xl font-bold text-neutral-200 tracking-tight">
            Building Products, Systems & Technology Solutions
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed font-normal">
            Our work focuses on solving operational challenges, building digital products, and delivering practical technology solutions for businesses and organizations. From client projects to internal products and concept initiatives, we combine product thinking and technical execution to create scalable digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Downward Navigation Indicator Tag */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 z-10 animate-bounce text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
        Scroll to Explore
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// --- MAIN INTERACTIVE SCROLL DECK ---
export default function WorkPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white antialiased font-sans selection:bg-[#d6ff3f] selection:text-black">
      
      {/* Absolute positioning mapping navbar completely over transparent video overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="relative z-10">
        {/* Render Primary Video Underlay Block */}
        <WorkHero />

        {/* --- STACKED IMMERSIVE DECK SCROLL PATTERN --- */}
        <section className="relative w-full">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="sticky top-0 w-full h-screen flex items-end justify-start overflow-hidden border-b border-neutral-900"
              style={{ zIndex: 10 + index }}
            >
              
              {/* IMMERSIVE BACKDROP IMAGE FRAME LINKED TO PROJECT CONTEXT */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.bgImage} 
                  alt={`${project.title} Interface Preview Layout Canvas`} 
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ${
                    project.isLocked ? "blur-2xl scale-105" : "scale-100"
                  }`}
                />
                
                {/* Asymmetric Light/Dark Overlay Controls */}
                <div className={`absolute inset-0 transition-opacity ${
                  project.isLocked ? "bg-neutral-950/85" : "bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-neutral-950/20"
                }`} />
              </div>

              {/* CORE METADATA CARD AND DATA PANEL WRAPPER */}
              <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                
                {/* Left Cluster: Structural Typography Panel */}
                <motion.div 
                  className="lg:col-span-7 space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
                      /{project.id}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest px-3 py-1 rounded-full uppercase font-bold border ${
                      project.isLocked 
                        ? "bg-red-500/10 text-red-400 border-red-500/30" 
                        : "bg-[#d6ff3f]/10 text-[#d6ff3f] border-[#d6ff3f]/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                    {project.overview}
                  </p>

                  {/* UI Restriction State Handling */}
                  <div className="pt-2">
                    {project.isLocked ? (
                      <div className="inline-flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 backdrop-blur-md px-5 py-3 rounded-full text-xs text-neutral-400 font-mono tracking-wide">
                        <span className="text-red-400 text-sm">🔒</span> Access Restricted • NDA Enforced
                      </div>
                    ) : (
                      <a 
                        href={`/work/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center bg-white text-black hover:bg-[#d6ff3f] hover:text-black text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-full transition-all duration-300 shadow-lg group"
                      >
                        Explore Case Study
                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Right Cluster: Architectural Specifications Panel */}
                <motion.div 
                  className="lg:col-span-5 lg:pl-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800/80 pt-6 lg:pt-2 text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeUp}
                >
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      Industry Sector
                    </span>
                    <span className="text-xs font-bold text-neutral-200 block mt-1 tracking-tight">
                      {project.industry}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      Project Allocation
                    </span>
                    <span className="text-xs font-bold text-neutral-200 block mt-1 tracking-tight">
                      {project.projectType}
                    </span>
                  </div>

                  {project.isLocked && (
                    <div className="col-span-2">
                      <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase block">
                        Availability Matrix
                      </span>
                      <span className="text-xs font-bold text-neutral-400 block mt-1 tracking-tight">
                        Restricted Internal Infrastructure
                      </span>
                    </div>
                  )}
                </motion.div>

              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Global Interface Append Blocks */}
      <div className="relative z-40 bg-neutral-950">
        <CallToActionAbout />
        <Footer />
      </div>
    </div>
  );
}