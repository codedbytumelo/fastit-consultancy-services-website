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

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }
  },
};

// --- 1. HERO SECTION ---
function AboutHero() {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center text-white px-6 text-center font-sans overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/joburg-skyline.jpg" 
          alt="Corporate Office Skyline Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      <div className="relative max-w-5xl mx-auto space-y-6 z-10 pt-32 pb-20">
        <motion.span 
          className="text-[#d6ff3f] text-xs font-bold uppercase tracking-widest block"
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          ABOUT US
        </motion.span>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Building Products.<br />
          <span className="text-neutral-400">Delivering Technology Solutions.</span>
        </motion.h1>
        
        <motion.p
          className="text-neutral-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-normal pt-2"
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          fastIT Consultancy Services is a Product Development and Information Technology company focused on helping businesses, startups, entrepreneurs, and government institutions leverage technology to solve problems, improve operations, and accelerate growth.
        </motion.p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-vignette pointer-events-none" />
    </section>
  );
}

// --- 2. LOGO TICKER (With Infinite Right-To-Left Continuous Animation using Images) ---
function LogoTicker() {
  // Array containing path metadata for your client/partner logo image assets
  const baseLogos = [
    { src: "/assets/images/Assentia_Logo-2.png", alt: "Partner Company Logo 1" },
    { src: "/assets/images/Auto-Reach-Innovations-logo-3.png", alt: "Partner Company Logo 2" },
    { src: "/assets/images/devlaunch-logo-light.png", alt: "Partner Company Logo 3" },
  ];

  // Triplicate array copies to feed a seamless, unbroken marquee loop
  const tickerLogos = [...baseLogos, ...baseLogos, ...baseLogos];

  return (
    <section className="w-full bg-white py-12 border-b border-neutral-100 overflow-hidden px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
          Trusted by companies around the world
        </span>

        {/* Masking container gives clean fade-out transitions on both edges */}
        <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex items-center gap-20 w-max opacity-40 grayscale contrast-150"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 30, // Adjusted speed slightly for a premium, readable pace
              repeat: Infinity,
            }}
          >
            {tickerLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 h-9 w-auto flex items-center justify-center select-none">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-full w-auto object-contain max-w-[140px]" 
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- 3. VALUES & PRINCIPLES SECTION ---
function Principles() {
  const values = [
    {
      title: "Innovation & Reliability",
      desc: "We combine product thinking with technical execution to deliver stable, scalable systems that keep you ahead.",
      icon: (
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2" />
      ),
    },
    {
      title: "Collaboration & Trust",
      desc: "We prioritize long-term strategic relationships over simple transactions, working alongside you to ensure results.",
      icon: (
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      ),
    },
    {
      title: "Continuous Improvement",
      desc: "Technology moves fast. We systematically evolve our engineering frameworks to ensure execution efficiency.",
      icon: (
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      ),
    },
  ];

  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <motion.div
          className="lg:col-span-4 space-y-4"
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Guided by Purpose and Principles
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
            We believe technology should not only look modern — it should solve problems, improve efficiency, and create business value.
          </p>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-neutral-200/70 rounded-[1.75rem] p-8 flex flex-col justify-between space-y-8 shadow-[0_4px_20px_rgba(0,0,0,0.005)]"
              custom={0.3 + (index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {val.icon}
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                  {val.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 4. CORPORATE MISSION / VISION REMARKS ---
function CEORemarks() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-8 font-sans">
      <motion.div
        className="max-w-7xl mx-auto bg-gradient-to-br from-[#f7f6f2] via-[#f3f2ee] to-[#eae9e4] rounded-[2.5rem] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden relative border border-neutral-200/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
      >
        <div className="lg:col-span-5">
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-200 shadow-sm">
            <img 
              src="/assets/images/coworkers-engaging-problem-solving-meeting-corporation.jpg" 
              alt="Team strategy workshop operations setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 lg:pl-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
              Our Vision & Operational Story
            </h2>
            <p className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed max-w-xl italic">
              &ldquo;fastIT Consultancy Services was established to go beyond traditional IT support. We combine product development, enterprise consulting, and scalable operational talent under one robust framework to confidently transform high-impact technology goals into reality.&rdquo;
            </p>
          </div>
          <div>
            <span className="text-base font-bold text-neutral-900 block tracking-tight">
              Our Mission Blueprint
            </span>
            <span className="text-xs text-neutral-500 font-medium tracking-normal block max-w-md mt-1">
              To become a leading technology provider delivering impactful infrastructure solutions for businesses, enterprise startups, and modern government institutions.
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- 5. THE TEAM SECTION GRID ---
function TeamSection() {
  const team = [
    { name: "Tumelo Mokalane", role: "Founder & CEO", image: "/assets/images/Tumelo-Mokalane-CEO.jpg" },
    { name: "Jeminah Tau", role: "VP of Business Development", image: "/assets/images/Jeminah-Tau-VP.jpg" },
  ];

  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
            The Minds Behind fastIT Consultancy Services
          </h2>
          <p className="text-neutral-500 text-sm md:text-base font-normal max-w-xl mx-auto">
            Together, we turn complex technical workflows into powerful, automated solutions for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className="space-y-4 group"
              custom={0.2 + (index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                />
              </div>
              <div className="space-y-1 pt-1 text-center sm:text-left">
                <h4 className="text-sm md:text-base font-bold text-neutral-900 tracking-tight">
                  {member.name}
                </h4>
                <span className="text-xs text-neutral-400 font-medium tracking-normal block">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MAIN WRAPPER COMPONENT ---
export default function About() {
  return (
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#d6ff3f] selection:text-black">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <main>
        <AboutHero />
        <LogoTicker />
        <Principles />
        <CEORemarks />
        <TeamSection />
      </main>

      <CallToActionAbout />
      <Footer />
    </div>
  );
}