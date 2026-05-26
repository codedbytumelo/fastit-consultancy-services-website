"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Users, ArrowRight, Sparkles } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      
      {/* Top Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-gray-100 items-start">
        
        {/* Left Side: Tagline Badge & Secondary Subtext Anchor */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-black bg-[#d6ff3f] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm inline-block">
            ABOUT fastIT Consultancy Services
          </span>
          <div className="pt-2">
            <p className="text-neutral-400 italic text-sm font-medium leading-relaxed">
              — Driving technical transformation, software engineering excellence, and digital operational scale.
            </p>
          </div>
        </div>

        {/* Right Side: Main Heading, Descriptions & Actions */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-4xl">
            We build digital products, deliver IT solutions, and help organizations grow through technology.
          </h1>

          <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
            <p>
              fastIT Consultancy Services is a Product Development and Information Technology company focused on helping businesses, startups, entrepreneurs, and government institutions transform ideas into scalable digital solutions.
            </p>
            <p>
              We combine product thinking, technical expertise, and business understanding to develop modern systems, support operations, and drive digital transformation initiatives.
            </p>
          </div>
          
          {/* CTA & Brand Accents Row */}
          <div className="flex flex-row items-center justify-between pt-6">
            <a
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-black text-white rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 group"
            >
              <span>More About Us</span>
              <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>

            {/* Overlapping Team Avatars + Brand Tech Dot */}
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-neutral-200">
                <img src="/assets/images/avatar1.jpg" alt="Team professional" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-neutral-300">
                <img src="/assets/images/avatar2.jpg" alt="Team professional" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#d6ff3f] border-2 border-white flex items-center justify-center text-black">
                <Sparkles className="w-4 h-4 fill-black" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Features Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
        
        {/* Card 01: Product Development */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] hover:border-neutral-400 transition-colors duration-300"
        >
          <div>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-8">
              <Cpu className="w-5 h-5 text-neutral-800" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-3">
              Product Development
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-normal">
              We design and develop digital products, business systems, and scalable platforms from concept to deployment.
            </p>
          </div>
          <a href="/services/product-development" className="text-sm font-bold underline underline-offset-4 tracking-tight inline-block pt-6 hover:text-neutral-600 transition-colors">
            Learn more
          </a>
        </motion.div>

        {/* Card 02: IT Solutions & Consulting (Highlighted Center Accent Deck) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#f4f3f0] rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#ebeae6] transition-colors duration-300"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-[#d6ff3f] flex items-center justify-center mb-8">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-3">
              IT Solutions & Consulting
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-normal">
              We provide practical IT services, technology consulting, and digital transformation solutions for organizations.
            </p>
          </div>
          <a href="/services/it-solutions" className="text-sm font-bold underline underline-offset-4 tracking-tight inline-block pt-6 hover:text-neutral-600 transition-colors">
            Learn more
          </a>
        </motion.div>

        {/* Card 03: Embedded Talent Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border border-gray-200 rounded-[2rem] p-8 flex flex-col justify-between min-h-[340px] hover:border-neutral-400 transition-colors duration-300"
        >
          <div>
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-8">
              <Users className="w-5 h-5 text-neutral-800" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 mb-3">
              Embedded Talent Services
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-normal">
              We embed experienced technology professionals into teams through fractional and operational leadership roles.
            </p>
          </div>
          <a href="/services/talent-services" className="text-sm font-bold underline underline-offset-4 tracking-tight inline-block pt-6 hover:text-neutral-600 transition-colors">
            Learn more
          </a>
        </motion.div>

      </div>
    </section>
  );
}