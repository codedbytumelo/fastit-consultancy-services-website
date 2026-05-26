"use client";

import React from "react";
import Navbar from "@/sections/Navbar";
import CallToActionAbout from "@/sections/CallToActionAbout";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";

// ─── ANIMATION SCHEMAS ──────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1], delay },
  }),
};

export default function DevlaunchCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans antialiased selection:bg-[#d6ff3f] selection:text-black transition-colors duration-300">
      
      {/* Fixed Transparent Header Floating Directly Over Background Image */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
        <Navbar sectionTheme="dark" />
      </div>

      <main className="pt-0 pb-0">
        
        {/* ─── HERO BANNER SECTION WITH IMAGE BACKGROUND ─────────── */}
        <section className="relative w-full overflow-hidden bg-[#1F2023] text-white pt-36 pb-24 lg:pt-44 lg:pb-32 mb-20">
          
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: "url('/assets/images/Devlaunch Logo_1.png')" }} 
          />
          
          {/* Subtle Dark Gray Matte Overlays to maximize text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#1F2023]/80 to-[#0B0B0C]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-white/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Metadata Badges Array */}
              <div className="flex flex-wrap gap-2">
                {["CONCEPT PROJECT", "PRODUCT DEVELOPMENT", "STARTUP ECOSYSTEM", "INTERNAL INITIATIVE"].map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                      idx === 0 
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30 backdrop-blur-sm" 
                        : "bg-white/10 text-[#EBEAE6] border-white/10 backdrop-blur-sm"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <motion.span 
                  className="text-xs font-bold uppercase tracking-widest text-neutral-400 block"
                  custom={0.1} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Product Launch Platform Concept
                </motion.span>
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
                  custom={0.2} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Devlaunch
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl font-medium text-neutral-300 max-w-3xl leading-relaxed pt-2"
                  custom={0.3} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Product Launch Platform Concept for Founders & Builders
                </motion.p>
              </div>
            </div>

            {/* Project Metadata Sidebar - Transparent Glassmorphism */}
            <motion.div 
              className="lg:col-span-4 bg-[#0B0B0C]/30 border border-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 shadow-2xl text-white"
              custom={0.4} initial="hidden" animate="visible" variants={fadeInUp}
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Client</span>
                  <span className="text-sm font-semibold text-[#EBEAE6]">Internal Initiative</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/50 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    CONCEPT
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Industry</span>
                  <span className="text-sm font-semibold text-[#EBEAE6]">Product Dev / Startups</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Project Type</span>
                  <span className="text-xs font-semibold leading-relaxed text-neutral-300 block">
                    Concept Product • Platform Design • Product Strategy
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PROJECT OVERVIEW & CHALLENGE ───────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-8 mb-24 text-neutral-950">
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp} custom={0.1}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0B0B0C]">Project Overview</h2>
            <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Devlaunch is a concept initiative exploring how founders, startups, entrepreneurs, and builders can accelerate product launches and digital development initiatives.
              </p>
              <p>
                The project aims to simplify the journey from idea to product by providing structured tools, workflows, and resources that support planning, development, and launch activities.
              </p>
              <p>
                Devlaunch is currently in the concept and planning phase and serves as an internal product initiative within fastIT Consultancy Services.
              </p>
            </div>
          </motion.div>

          {/* The Challenge Card - Solid Deep Black Shape */}
          <motion.div 
            className="lg:col-span-6 space-y-6 bg-[#0B0B0C] text-white p-8 md:p-10 rounded-[2rem] shadow-xl"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp} custom={0.2}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#EBEAE6]">The Challenge</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Many founders and businesses face challenges when moving from idea to execution, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium pt-2">
              {[
                "Limited product planning experience",
                "Difficulty moving from concept to MVP",
                "Lack of technical guidance",
                "Fragmented launch processes",
                "Limited access to development resources",
                "Challenges validating & structuring ideas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d6ff3f] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-800">
              The objective behind Devlaunch is to create a structured environment that supports product development and launch activities.
            </p>
          </motion.div>
        </section>

        {/* ─── SCOPE OF WORK ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24 text-neutral-950">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B0B0C]">Scope of Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Development",
                items: [
                  "Product Discovery",
                  "Product Strategy",
                  "Platform Planning",
                  "User Experience Design",
                  "Product Architecture",
                  "Concept Validation",
                  "MVP Planning"
                ]
              },
              {
                title: "Platform Experience",
                items: [
                  "Founder Journey Design",
                  "Workflow Design",
                  "User Experience Mapping",
                  "Dashboard Concepts",
                  "Product Lifecycle Flows",
                  "Startup Enablement Features"
                ]
              },
              {
                title: "Research & Strategy",
                items: [
                  "Startup Ecosystem Research",
                  "Product Development Research",
                  "Market Exploration",
                  "User Problem Identification",
                  "Product Positioning",
                  "Product Identity",
                  "Product Direction"
                ]
              }
            ].map((category, idx) => (
              <motion.div 
                key={idx}
                className="bg-neutral-50/70 border border-neutral-200/80 p-8 rounded-3xl space-y-6 shadow-sm"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={idx * 0.1}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-[#d6ff3f] bg-[#0B0B0C] px-2.5 py-1 rounded-md inline-block uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight pt-2 text-[#0B0B0C]">{category.title}</h3>
                </div>
                <ul className="space-y-2.5 border-t border-neutral-200 pt-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-neutral-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── BLENDED ENVIRONMENT HIGH-CONTRAST BRIDGE ─────────── */}
        <div className="bg-gradient-to-b from-white via-[#0B0B0C] to-[#0B0B0C] pt-1">
          <div className="bg-[#0B0B0C] text-white pt-24 pb-1 transition-colors duration-300">
            
            {/* ─── BRAND IDENTITY DESIGN SYSTEM ─────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
              <div className="space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">Product Identity</h2>
                <p className="text-sm text-neutral-400 max-w-xl">
                  Establishing a modular blueprint architecture optimized for founders, system accelerators, and builder operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Direction Pillar */}
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Product Vision</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    The platform strategy centers around moving concepts directly into clear, functional implementation stages while stripping out multi-layer procedural friction.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Product Building", "Founder Enablement", "Simplicity", "Launch Acceleration", "Innovation", "Startup Support"].map((item, i) => (
                      <span key={i} className="text-xs bg-[#1F2023] border border-neutral-800 px-3 py-1 rounded-md text-neutral-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design Swatches & Typography */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Palette Dynamic Configurations */}
                  <div className="space-y-4 bg-[#1F2023]/40 border border-neutral-800/70 rounded-3xl p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Brand Color Matrix</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                      <div className="p-3 bg-[#0B0B0C] text-white rounded-xl flex flex-col justify-between h-20 border border-neutral-800">
                        <span className="text-[10px] text-neutral-400 block font-normal">Primary Color</span>
                        <span>#0B0B0C</span>
                      </div>
                      <div className="p-3 bg-[#1F2023] text-white rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-400 block font-normal">Secondary Color</span>
                        <span>#1F2023</span>
                      </div>
                      <div className="p-3 bg-[#d6ff3f] text-black rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-700 block font-normal">Accent Color</span>
                        <span>#D6FF3F</span>
                      </div>
                      <div className="p-3 bg-[#EBEAE6] text-black rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-500 block font-normal">Support Color</span>
                        <span>#EBEAE6</span>
                      </div>
                    </div>
                  </div>

                  {/* Typography Structure */}
                  <div className="space-y-4 bg-[#1F2023]/40 border border-neutral-800/70 rounded-3xl p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Typography Blueprint</h4>
                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">Primary Typeface (Headings)</span>
                        <p className="font-bold text-sm tracking-tight text-white">Plus Jakarta Sans / Inter Tight</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Usage: Product Titles, Hero Sections, Highlights</p>
                      </div>
                      <div className="border-t border-neutral-800 pt-3">
                        <span className="text-[10px] text-neutral-400 block mb-1">Secondary Typeface (Body / Interface)</span>
                        <p className="font-medium text-sm text-neutral-300">Inter Regular Suite</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Usage: Supporting Content, Platform UI, Documentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset Applications & Logo Matrices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="border border-neutral-800 rounded-3xl p-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Logo System</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-video bg-[#1F2023] rounded-xl flex items-center justify-center border border-neutral-800 p-4">
                      <span className="text-[10px] text-neutral-400 text-center font-medium">Primary Logo Mock</span>
                    </div>
                    <div className="aspect-video bg-[#0B0B0C] rounded-xl flex items-center justify-center border border-neutral-800 p-4">
                      <span className="text-[10px] text-neutral-500 text-center font-medium">Secondary Logo Mock</span>
                    </div>
                    <div className="aspect-video bg-[#1F2023] rounded-xl flex items-center justify-center border border-neutral-800 p-4">
                      <span className="text-[10px] text-neutral-400 text-center font-medium">Product Mark Icon</span>
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-3xl p-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Planned Applications</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-neutral-300">
                    {["Product Platform", "Website Experience", "Product Marketing", "Startup Resources", "Launch Materials", "Documentation"].map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-emerald-400 text-xs">✔</span>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ─── THE SOLUTION & OUTCOME CONSOLE ───────────────────── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
              <div className="bg-[#1F2023]/40 border border-neutral-800/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-white">Proposed Solution</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Devlaunch aims to provide an ecosystem supporting product creation and launch workflows. Planned capabilities include structured execution models across several key tracks:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Product planning support",
                      "MVP guidance",
                      "Launch workflows",
                      "Startup resources",
                      "Development support frameworks",
                      "Product documentation tools",
                      "Founder enablement experiences"
                    ].map((sol, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                        <svg className="w-4 h-4 flex-shrink-0 fill-[#d6ff3f] text-neutral-950" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {sol}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#1F2023] border border-neutral-800/60 rounded-3xl p-8 space-y-6">
                  <h4 className="text-lg font-bold tracking-tight text-white">Expected Outcomes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Accelerate launches", desc: "Drastically reduce overall time-to-market metrics" },
                      { title: "Reduce uncertainty", desc: "Strip out standard deployment ambiguities" },
                      { title: "Structure workflows", desc: "Organize architecture validation milestones" },
                      { title: "Improve product readiness", desc: "Verify key functional launch parameters" },
                      { title: "Support MVP initiatives", desc: "Refine features into core structural code bases" },
                      { title: "Enable innovation activities", desc: "Foster research inside startup frameworks" },
                    ].map((out, i) => (
                      <div key={i} className="border-l-2 border-white pl-3 py-1">
                        <span className="text-xs font-bold block text-white">{out.title}</span>
                        <span className="text-[11px] text-neutral-400 block">{out.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* ─── SERVICES & TECHNOLOGIES STACK ────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Services Involved</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product Development", "Product Strategy", "MVP Planning", "Platform Design",
                    "Research & Innovation", "Market Research", "Product Exploration", "Startup Research",
                    "Design", "UI / UX Planning", "Workflow Design", "Product Identity"
                  ].map((srv, idx) => (
                    <span key={idx} className="text-xs font-medium bg-[#1F2023] px-3.5 py-1.5 rounded-full text-neutral-300 border border-neutral-800">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Planned Technology Directions</h4>
                <div className="flex flex-wrap gap-2">
                  {["Web Platform", "Product Dashboard", "Workflow Systems", "Resource Modules", "API Integrations"].map((tech, idx) => (
                    <span key={idx} className="text-xs font-bold bg-[#d6ff3f]/5 text-[#d6ff3f] border border-[#d6ff3f]/30 px-3.5 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ─── PROJECT REFLECTION ───────────────────────────────── */}
            <section className="max-w-3xl mx-auto px-6 text-center pt-12 border-t border-neutral-800 mb-24">
              <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-4">Project Reflection</h4>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed italic">
                &ldquo;Devlaunch represents an exploration into startup enablement and product acceleration. The initiative reflects fastIT Consultancy Services’ interest in supporting founders and businesses through structured product development experiences.&rdquo;
              </p>
            </section>

            {/* ─── VIDEO FOOTER GRID INJECTIONS ─────────────────────── */}
            <section className="relative w-full aspect-video md:min-h-[60vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-luminosity"
              >
                <source src="/assets/videos/footer-ambient-loop.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-[#0B0B0C] z-10" />
              
              <div className="relative z-20 text-center space-y-6 max-w-xl px-6">
                <span className="text-[10px] font-bold tracking-widest text-[#d6ff3f] uppercase block">
                  Accelerated Engineering Infrastructure
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Empowering Builders to Create What's Next.
                </h3>
              </div>
            </section>

          </div>
        </div>
      </main>

      <CallToActionAbout />
      <Footer />
    </div>
  );
}