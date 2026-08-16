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

export default function WayaziPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 font-sans antialiased selection:bg-[#cbeb70] selection:text-neutral-950 transition-colors duration-300">
      
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
            style={{ backgroundImage: "url('/assets/images/wayazi-emblem.png')" }} 
          />
          
          {/* Subtle Dark Gray Matte Overlays to maximize text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#1F2023]/85 to-[#0B0B0C]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-white/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Metadata Badges Array */}
              <div className="flex flex-wrap gap-2">
                {["OPERATIONAL INTELLIGENCE", "REAL-TIME MONITORING", "WORKFLOW AUTOMATION", "IOT & OT CONNECTIVITY"].map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                      idx === 0 
                        ? "bg-[#cbeb70]/20 text-[#cbeb70] border-[#cbeb70]/40 backdrop-blur-sm" 
                        : "bg-white/10 text-[#EBEAE6] border-white/10 backdrop-blur-sm"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <motion.span 
                  className="text-xs font-bold uppercase tracking-widest text-[#cbeb70] block"
                  custom={0.1} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Flagship Product Platform
                </motion.span>
                <motion.h1 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white"
                  custom={0.2} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Wayazi
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl font-medium text-neutral-300 max-w-3xl leading-relaxed pt-2"
                  custom={0.3} initial="hidden" animate="visible" variants={fadeInUp}
                >
                  Wayazi is an Operational Intelligence Platform that unifies assets, people, infrastructure, and operational data into a single intelligent operating environment, enabling organizations to monitor, automate, and optimize their operations in real time.
                </motion.p>
              </div>
            </div>

            {/* Product Metadata Sidebar - TRANSPARENT GLASSMORPHISM */}
            <motion.div 
              className="lg:col-span-4 bg-[#0B0B0C]/40 border border-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6 shadow-2xl text-white"
              custom={0.4} initial="hidden" animate="visible" variants={fadeInUp}
            >
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Platform</span>
                  <span className="text-sm font-semibold text-[#EBEAE6]">Wayazi Operational OS</span>
                </div>
                
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Category</span>
                  <span className="text-sm font-semibold text-[#cbeb70]">Operational Intelligence</span>
                </div>
                
                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Deployment Architecture</span>
                  <span className="text-xs font-semibold leading-relaxed text-neutral-300 block">
                    Cloud • Edge IoT • Mobile Workspaces • Enterprise API Integrations
                  </span>
                </div>

                <div className="col-span-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">Target Sector</span>
                  <span className="text-xs font-semibold leading-relaxed text-neutral-300 block">
                    Asset-Intensive & Complex Field Operations
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PLATFORM OVERVIEW & CORE MISSION ────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-8 mb-24 text-neutral-950">
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp} custom={0.1}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0B0B0C]">Platform Overview</h2>
            <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
              <p>
                Wayazi connects people, assets, infrastructure, and operational data into a single intelligent operating environment. Designed for asset-intensive industries, Wayazi enables organizations to monitor operations in real time, automate workflows, coordinate field teams, and gain actionable insights from every stage of their operations.
              </p>
              <p>
                Rather than replacing existing enterprise systems, Wayazi integrates seamlessly with an organization's current infrastructure—including ERP systems, IoT devices, SCADA platforms, CRMs, fleet management solutions, GIS platforms, and business intelligence tools—to provide a unified operational view.
              </p>
              <p>
                The platform transforms fragmented operational data into intelligent workflows, giving decision-makers complete visibility across the organization.
              </p>
            </div>
          </motion.div>

          {/* What Wayazi Does Card */}
          <motion.div 
            className="lg:col-span-6 space-y-6 bg-[#0B0B0C] text-white p-8 md:p-10 rounded-[2rem] shadow-xl"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp} custom={0.2}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#EBEAE6]">What Wayazi Does</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Wayazi empowers organizations to streamline complex environments and maximize efficiency:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium pt-2">
              {[
                "Monitor critical operations in real time",
                "Manage assets throughout their lifecycle",
                "Coordinate field teams and technicians",
                "Automate operational workflows",
                "Detect incidents & generate work orders automatically",
                "Track operational performance",
                "Improve response times",
                "Reduce operational costs",
                "Increase asset availability",
                "Provide executive-level operational intelligence"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cbeb70] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ─── CORE PLATFORM PRODUCTS ─────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24 text-neutral-950">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B0B0C]">Core Platform Ecosystem</h2>
            <p className="text-sm text-neutral-600 max-w-2xl">
              Wayazi consists of several integrated products designed to work in synergy across office, field, edge, and access governance tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wayazi Core",
                tagline: "Central Operational Command",
                description: "The central operational platform where organizations manage operations, assets, workflows, customers, suppliers, reports, and core business processes."
              },
              {
                title: "Wayazi Field",
                tagline: "Mobile Field Workspace",
                description: "A mobile-first workspace for technicians, inspectors, engineers, sales teams, and field personnel to receive assignments, complete work orders, capture proof of work, and synchronize data in real time."
              },
              {
                title: "Wayazi Edge",
                tagline: "Operational Monitoring Layer",
                description: "Connects IoT devices, smart equipment, industrial sensors, telemetry, cameras, and edge devices to provide live visibility into physical assets and infrastructure."
              },
              {
                title: "Wayazi Cync",
                tagline: "Identity & Access Management",
                description: "Identity and access management that securely manages users, authentication, permissions, teams, organizations, and system access across the platform."
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                className="bg-neutral-50/70 border border-neutral-200/80 p-8 rounded-3xl space-y-4 shadow-sm flex flex-col justify-between"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeInUp} custom={idx * 0.1}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-neutral-950 bg-[#cbeb70] px-2.5 py-1 rounded-md inline-block uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0B0B0C]">{product.title}</h3>
                  <span className="text-xs font-semibold text-neutral-500 block uppercase tracking-wider">{product.tagline}</span>
                  <p className="text-xs text-neutral-600 leading-relaxed border-t border-neutral-200/80 pt-3">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── BLENDED ENVIRONMENT HIGH-CONTRAST BRIDGE ─────────── */}
        <div className="bg-gradient-to-b from-white via-[#0B0B0C] to-[#0B0B0C] pt-1">
          <div className="bg-[#0B0B0C] text-white pt-24 pb-1 transition-colors duration-300">
            
            {/* ─── BUILT FOR INDUSTRIES & KEY CAPABILITIES ─────────── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
              <div className="space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">Built For Complex Operations</h2>
                <p className="text-sm text-neutral-400 max-w-xl">
                  Engineered specifically for organizations operating complex physical assets and mission-critical field operations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Target Industries */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#cbeb70]">Target Industries</h3>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {[
                      "Telecommunications", "Mining", "Construction", "Manufacturing",
                      "Logistics", "Transportation", "Utilities", "Energy",
                      "Agriculture", "Government", "Public Infrastructure",
                      "Field Service Ops", "Insurance Operations", "Facilities Management"
                    ].map((industry, i) => (
                      <div key={i} className="text-xs bg-[#1F2023] border border-neutral-800 px-3 py-2 rounded-lg text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cbeb70]" />
                        <span>{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities Matrix */}
                <div className="lg:col-span-7 bg-[#1F2023]/40 border border-neutral-800/70 rounded-3xl p-8 space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#cbeb70]">Key Capabilities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {[
                      "Operational Command Center", "Asset Management", "Work Order Management",
                      "Preventive Maintenance", "Incident Management", "Field Service Management",
                      "Fleet Monitoring", "Attendance & Workforce", "Proof of Work",
                      "Live Dashboards", "Reporting & Analytics", "Operational Intelligence",
                      "Workflow Automation", "Customer & Supplier Hub", "Inventory Integration",
                      "Notifications & Alerts", "API Integrations", "IoT Connectivity",
                      "Role-Based Access", "Audit Trails"
                    ].map((cap, i) => (
                      <div key={i} className="p-3 bg-[#0B0B0C] border border-neutral-800/80 rounded-xl text-neutral-300 flex items-center justify-center text-center font-medium">
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ─── VISION, MISSION & VALUE PROPOSITION ─────────────── */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
              <div className="bg-[#1F2023]/40 border border-neutral-800/80 rounded-[2.5rem] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Vision & Mission */}
                <div className="lg:col-span-6 space-y-8">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-widest text-[#cbeb70] uppercase block">
                      Platform Vision
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white">The Operating System for Industrial Ops</h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      Wayazi's vision is to become the operating system for industrial and operational organizations by connecting operational technology (OT), information technology (IT), and human workflows into one intelligent platform.
                    </p>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      The platform empowers organizations to move beyond isolated systems and spreadsheets, creating a connected operational ecosystem where every asset, task, employee, and event contributes to a single source of operational truth.
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-neutral-800 pt-6">
                    <span className="text-[10px] font-bold tracking-widest text-[#cbeb70] uppercase block">
                      Mission Statement
                    </span>
                    <p className="text-sm font-medium text-neutral-200 leading-relaxed">
                      To help organizations operate more efficiently through intelligent software that provides real-time visibility, automation, and operational insights across every aspect of their business.
                    </p>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="lg:col-span-6 bg-[#1F2023] border border-neutral-800/60 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-white mb-4">Value Proposition</h4>
                    <p className="text-xs text-neutral-400 mb-6">
                      Wayazi unlocks tangible operational efficiency and clarity for enterprise leaders:
                    </p>
                    <div className="space-y-3">
                      {[
                        "See everything happening across their operations.",
                        "Respond faster to incidents and service requests.",
                        "Improve collaboration between office and field teams.",
                        "Make data-driven operational decisions.",
                        "Maximize asset utilization and uptime.",
                        "Reduce operational costs through automation.",
                        "Scale operations without increasing complexity."
                      ].map((val, i) => (
                        <div key={i} className="flex items-start gap-3 border-l-2 border-[#cbeb70] pl-3 py-1">
                          <span className="text-xs font-semibold text-white">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
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
              
              <div className="relative z-20 text-center space-y-6 max-w-2xl px-6">
                <span className="text-[10px] font-bold tracking-widest text-[#cbeb70] uppercase block">
                  Strategic Clarity in Motion
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  Connecting OT, IT & Human Workflows.
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