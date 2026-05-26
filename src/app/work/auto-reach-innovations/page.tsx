"use client";

import React from "react";
import Navbar from "@/sections/Navbar";
import CallToActionAbout from "@/sections/CallToActionAbout";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

// ─── ANIMATION SCHEMAS ──────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1], delay },
  }),
};

export default function AutoReachInnovations() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans antialiased selection:bg-[#ff5c5b] selection:text-white transition-colors duration-300">
      
      {/* Fixed Transparent Header Floating Directly Over Background Image */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
        <Navbar sectionTheme="dark" />
      </div>

      <main className="pt-0 pb-0">
        
        {/* ─── HERO BANNER SECTION WITH IMAGE BACKGROUND ─────────── */}
        <section className="relative w-full overflow-hidden bg-[#1F2023] text-white pt-36 pb-24 lg:pt-44 lg:pb-32 mb-20">
          
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/assets/images/Auto-Reach-Innovations.png')" }} 
          />
          
          {/* Subtle Dark Gray Matte Overlays to maximize text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#1F2023]/80 to-[#0B0B0C]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-white/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Metadata Badges Array */}
              <div className="flex flex-wrap gap-2">
                {["LIVE", "AUTOMOTIVE", "WEBSITE DEVELOPMENT", "BRANDING", "IT MANAGEMENT"].map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                      idx === 0 
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm" 
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
                  Project Case Study
                </motion.span>
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
                  custom={0.2} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Auto Reach Innovations
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl font-medium text-neutral-300 max-w-3xl leading-relaxed pt-2"
                  custom={0.3} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Automotive Lead Generation Platform & Digital Operations Support
                </motion.p>
              </div>
            </div>

            {/* Project Metadata Sidebar - MADE TRANSPARENT GLASSMORPHISM */}
            <motion.div 
              className="lg:col-span-4 bg-[#0B0B0C]/30 border border-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 shadow-2xl text-white"
              custom={0.4} initial="hidden" animate="visible" variants={fadeInUp}
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Client</span>
                  <span className="text-sm font-semibold text-[#EBEAE6]">Auto Reach Innovations</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Industry</span>
                  <span className="text-sm font-semibold text-[#EBEAE6]">Automotive Technology</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Project Type</span>
                  <span className="text-xs font-semibold leading-relaxed text-neutral-300 block">
                    Website Development • Branding • IT Management • Digital Operations
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
                Auto Reach Innovations required a professional digital presence and supporting operational systems to strengthen customer acquisition, improve visibility, and support internal business operations.
              </p>
              <p>
                The project involved developing the company website, establishing the visual identity and digital brand experience, and supporting operational technology functions across multiple business activities.
              </p>
              <p>
                The engagement extended beyond website delivery into IT management responsibilities, supporting digital infrastructure, technology operations, and system administration activities.
              </p>
            </div>
          </motion.div>

          {/* The Challenge Card - REVERTED TO SOLID DEEP BLACK SHAPE */}
          <motion.div 
            className="lg:col-span-6 space-y-6 bg-[#0B0B0C] text-white p-8 md:p-10 rounded-[2rem] shadow-xl"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp} custom={0.2}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#EBEAE6]">The Challenge</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The organization required a technology and branding foundation capable of supporting growth and operational efficiency across the following:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium pt-2">
              {[
                "Professional company website & digital presence",
                "Consistent branding & visual identity",
                "Marketing materials & digital assets",
                "Lead collection workflows & customer tools",
                "Website deployment & infrastructure support",
                "Technology operations & IT support",
                "Improved organization of systems & data"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c5b] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
                title: "Product & Web Development",
                items: [
                  "Website Design & Development",
                  "Frontend Development",
                  "Website Migration & Deployment",
                  "Static Website Conversion",
                  "Hosting Configuration",
                  "DNS Migration Support",
                  "Platform Administration"
                ]
              },
              {
                title: "Branding & Digital Identity",
                items: [
                  "Brand Direction & Visual Feel",
                  "Marketing Material Support",
                  "QR Code Integration",
                  "Digital Asset Management",
                  "Website Experience Alignment",
                  "Visual Consistency Management"
                ]
              },
              {
                title: "IT Management & Operations",
                items: [
                  "IT Management Support",
                  "Systems Administration",
                  "Infrastructure Management",
                  "Platform Management",
                  "Technical Documentation",
                  "Information Organization",
                  "Digital Operations Support",
                  "Technology Coordination"
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
                  <span className="text-[10px] font-black text-white bg-[#ff5c5b] px-2.5 py-1 rounded-md inline-block uppercase tracking-wider">
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
                <h2 className="text-3xl font-bold tracking-tight text-white">Brand Identity</h2>
                <p className="text-sm text-neutral-400 max-w-xl">
                  Establishing a clean, corporate visual ecosystem tailored for modern automotive-focused digital platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Direction Pillar */}
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Visual Direction</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    The visual language focused entirely on professionalism, high clean visibility, trust, digital-first presentation, and scalable operational alignment.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Professionalism", "Visibility", "Trust", "Digital-First", "Operational Support"].map((item, i) => (
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
                        <span className="text-[10px] text-neutral-400 block font-normal">Primary Brand</span>
                        <span>#0B0B0C</span>
                      </div>
                      <div className="p-3 bg-[#1F2023] text-white rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-400 block font-normal">Secondary Brand</span>
                        <span>#1F2023</span>
                      </div>
                      <div className="p-3 bg-[#ff5c5b] text-white rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-100 block font-normal">Accent Matrix</span>
                        <span>#ff5c5b</span>
                      </div>
                      <div className="p-3 bg-[#EBEAE6] text-black rounded-xl flex flex-col justify-between h-20">
                        <span className="text-[10px] text-neutral-500 block font-normal">Support Tone</span>
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
                        <p className="text-[11px] text-neutral-400 mt-0.5">Usage: Hero Sections, Titles, Highlights</p>
                      </div>
                      <div className="border-t border-neutral-800 pt-3">
                        <span className="text-[10px] text-neutral-400 block mb-1">Secondary Typeface (Body Layouts)</span>
                        <p className="font-medium text-sm text-neutral-300">Inter Regular Suite</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Usage: Interface Components, Technical Paragraphs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset Applications & Logo Matrices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="border border-neutral-800 rounded-3xl p-6 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">System Logos</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Primary Logo Provision */}
                    <div className="relative aspect-video w-full bg-[#1F2023] rounded-xl overflow-hidden flex items-center justify-center border border-neutral-800 group p-4">
                      <Image 
                        src="/assets/images/Auto-Reach-Innovations-logo.png" 
                        alt="Auto Reach Innovations Primary Logo" 
                        fill
                        priority
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-w-768px) 33vw, 20vw"
                      />
                    </div>
                    {/* Secondary Logo Provision */}
                    <div className="relative aspect-video w-full bg-[#0B0B0C] rounded-xl overflow-hidden flex items-center justify-center border border-neutral-800 group p-4">
                      <Image 
                        src="/assets/images/auto-reach-logo-5.png" 
                        alt="Auto Reach Innovations Secondary Logo" 
                        fill
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-w-768px) 33vw, 20vw"
                      />
                    </div>
                    {/* Brand Mark Icon Provision */}
                    <div className="relative aspect-video w-full bg-[#1F2023] rounded-xl overflow-hidden flex items-center justify-center border border-neutral-800 group p-4">
                      <Image 
                        src="/assets/images/auto-reach-logo-6.png" 
                        alt="Auto Reach Innovations Brand Mark Icon" 
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-w-768px) 33vw, 20vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-3xl p-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Applications Checklist</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs font-medium text-neutral-300">
                    {["Website Experience", "Marketing Materials", "QR Campaign Assets", "Digital Graphics", "Business Documents", "Company Identity"].map((app, idx) => (
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
                  <h3 className="text-2xl font-bold tracking-tight text-white">The Implemented Solution</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    A digital ecosystem was implemented to support customer engagement, operational activities, and company visibility across every functional organizational touchpoint.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Company website development",
                      "Brand experience development",
                      "Lead collection workflows",
                      "Website migration and deployment",
                      "Hosting transition support",
                      "Google Forms management",
                      "QR integrations",
                      "Credential organization",
                      "Documentation support",
                      "Operational technology management"
                    ].map((sol, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-neutral-200">
                        <svg className="w-4 h-4 flex-shrink-0 fill-[#ff5c5b] text-neutral-950" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {sol}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#1F2023] border border-neutral-800/60 rounded-3xl p-8 space-y-6">
                  <h4 className="text-lg font-bold tracking-tight text-white">Measurable Outcomes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Improved digital presence", desc: "Refreshed brand awareness pipelines" },
                      { title: "Structured operational assets", desc: "Centralized operational structures" },
                      { title: "Better workflow visibility", desc: "Cross-system resource clarity" },
                      { title: "Stable website deployment", desc: "Zero-downtime hosting solutions" },
                      { title: "Consolidated resources", desc: "Unified enterprise tech ecosystems" },
                      { title: "Strengthened tech processes", desc: "Integrated multi-tier delivery framework" },
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
                <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Services Delivered</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product Development", "Website Development", "Frontend Development", "Deployment & Hosting",
                    "Branding", "Brand Identity Support", "Marketing Materials", "Digital Assets",
                    "IT Services", "IT Management", "Systems Support", "Infrastructure Coordination", "Operational Technology"
                  ].map((srv, idx) => (
                    <span key={idx} className="text-xs font-medium bg-[#1F2023] px-3.5 py-1.5 rounded-full text-neutral-300 border border-neutral-800">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Technology & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Website Development Stack", "GitHub", "Vercel", "Afrihost Hosting", "Google Workspace", "Google Forms", "QR Systems"].map((tech, idx) => (
                    <span key={idx} className="text-xs font-bold bg-[#ff5c5b]/5 text-[#ff5c5b] border border-[#ff5c5b]/30 px-3.5 py-1.5 rounded-full">
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
                &ldquo;Auto Reach Innovations became an example of combining Product Development, Branding, and IT Management within a growing organization. The project highlighted the importance of aligning technology, operations, and digital experiences to support business growth, visibility, and operational efficiency.&rdquo;
              </p>
            </section>

            {/* ─── VIDEO FOOTER GRID INJECTIONS ─────────────────────── */}
            <section className="relative w-full aspect-video md:min-h-[60vh] bg-neutral-950 overflow-hidden flex items-center justify-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
              >
                <source src="/assets/videos/footer-ambient-loop.mp4" type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/80 to-[#0B0B0C] z-10" />
              
              <div className="relative z-20 text-center space-y-6 max-w-xl px-6">
                <span className="text-[10px] font-bold tracking-widest text-[#ff5c5b] uppercase block">
                  Automotive Engineering Redefined
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Driving the Future of Digital Mobility.
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