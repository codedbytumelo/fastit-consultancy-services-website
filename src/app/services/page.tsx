"use client";

import React from "react";
import Navbar from "@/sections/Navbar";
import CallToActionAbout from "@/sections/CallToActionAbout";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";

// ─── Animation Presets ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }
  }),
};

// --- DATA STRUCTURE FOR PILLARS ---
const servicesData = [
  {
    id: "01",
    title: "Product Development",
    description: "We design and develop scalable digital products and business solutions from concept to deployment.",
    items: [
      "SaaS Product Development",
      "MVP Development",
      "Web Applications",
      "Business Systems",
      "UI / UX Design",
      "API Integrations"
    ],
    ctaText: "Start A Project",
    ctaLink: "/contact",
    images: [
      "/assets/images/product-development-1.jpg",
      "/assets/images/product-development-2.jpg",
      "/assets/images/product-development-3.jpg"
    ]
  },
  {
    id: "02",
    title: "IT Consultancy Services",
    description: "We provide practical IT solutions, consulting services, and digital transformation support for organizations.",
    items: [
      "IT Consulting",
      "Digital Transformation",
      "Technical Support",
      "Hosting & Deployment",
      "Infrastructure Support",
      "Systems Integration"
    ],
    ctaText: "Book A Service",
    ctaLink: "/contact",
    images: [
      "/assets/images/skin-regeneration-product-still-life.jpg",
      "/assets/images/billboard-street-mockup.jpg",
      "/assets/images/stationery_rorozoa_09.jpg"
    ]
  },
  {
    id: "03",
    title: "Embedded Talent Services",
    description: "We embed experienced technology professionals into teams through leadership, consulting, and operational roles.",
    items: [
      "Fractional CTO",
      "Fractional CIO",
      "IT Management",
      "Product Leadership",
      "Technical Consulting",
      "Team Augmentation"
    ],
    ctaText: "Book A Call",
    ctaLink: "/contact",
    images: [
      "/assets/images/meeting-with-client.jpg",
      "/assets/images/office-teamwork-session.jpg",
      "/assets/images/testing-phase.jpg"
    ]
  }
];

// --- 1. HERO SECTION (Underlay Structure Layout) ---
function ServicesHero() {
  return (
    <section className="relative w-full min-h-[65vh] flex items-center justify-center text-white px-6 text-center font-sans overflow-hidden">
      
      {/* Background Image Underlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/joburg-skyline.jpg" 
          alt="Corporate Building Infrastructure Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-neutral-950/30" />
      </div>

      {/* Hero Headings Content */}
      <div className="relative max-w-5xl mx-auto space-y-5 z-10 pt-36 pb-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white select-none">
          Services
        </h1>
        <div className="w-full max-w-3xl mx-auto border-t border-neutral-700/50 pt-6 grid grid-cols-2 text-left text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          <span>2026</span>
          <span className="text-right">FASTIT CONSULTANCY SERVICES (PTY) LTD.</span>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black antialiased font-sans selection:bg-[#d6ff3f] selection:text-black">
      {/* Navbar Overlay */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <main>
        <ServicesHero />

        {/* --- 2. HEADER BLOCK (Screenshot Text & Subtitle Combo) --- */}
        <section className="w-full bg-white pt-20 pb-12 px-6 md:px-12 lg:px-20 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d6ff3f] bg-neutral-950 px-4 py-1.5 rounded-full shadow-sm">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight max-w-4xl leading-[1.15]">
              [ Technology services designed to build, support, and scale modern organizations. ]
            </h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              fastIT Consultancy Services provides Product Development, Information Technology services, and embedded technology talent to help businesses, startups, entrepreneurs, and government institutions innovate and operate efficiently.
            </p>
          </div>
        </section>

        {/* --- 3. DYNAMIC PILLARS SECTION (Screenshot Asymmetric Layout Framework Grid) --- */}
        <section className="w-full bg-white divide-y divide-neutral-100 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            {servicesData.map((service, idx) => (
              <motion.div 
                key={service.id}
                className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={0.1}
              >
                {/* Column 1: Core Service Identity Meta Label Text */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="text-xs font-mono font-bold text-neutral-400 block tracking-wider">
                    ({service.id})
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Column 2: Detail Description Copy + Sub-Item List Blocks */}
                <div className="lg:col-span-4 space-y-8">
                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                    {service.description}
                  </p>
                  
                  {/* Categorized Bullet Stack Grid */}
                  <ul className="space-y-2.5 pt-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-xs md:text-sm font-medium text-neutral-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Context Action Target Routing Link */}
                  <div className="pt-4">
                    <a 
                      href={service.ctaLink}
                      className="inline-flex items-center justify-center bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#d6ff3f] hover:text-black transition-all duration-300 shadow-sm"
                    >
                      {service.ctaText}
                      <svg className="w-3.5 h-3.5 ml-2 transform transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Column 3: Asymmetrical 3-Image Media Row Grid Deck */}
                <div className="lg:col-span-5 grid grid-cols-3 gap-3 pt-4 lg:pt-0">
                  {service.images.map((imgSrc, i) => (
                    <div 
                      key={i} 
                      className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm relative group border border-neutral-200/40"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${service.title} illustration asset ${i + 1}`} 
                        className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Global Framework Appends */}
      <CallToActionAbout />
      <Footer />
    </div>
  );
}