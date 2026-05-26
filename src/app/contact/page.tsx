"use client";

import React, { useState } from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Briefcase, HelpCircle, Calendar } from "lucide-react";

// Maintainable shared service structures
const servicesData = {
  project: [
    "SaaS Product Development",
    "MVP Development",
    "Web Applications",
    "Business Systems",
    "UI / UX Design",
    "API Integrations"
  ],
  service: [
    "IT Consulting",
    "Digital Transformation",
    "Technical Support",
    "Hosting & Deployment",
    "Infrastructure Support",
    "Systems Integration"
  ],
  call: [
    "Fractional CTO",
    "Fractional CIO",
    "IT Management",
    "Product Leadership",
    "Technical Consulting",
    "Team Augmentation"
  ]
};

type InquiryType = "project" | "service" | "call";

interface InquiryDetails {
  label: string;
  title: string;
  subtitle: string;
  hoverMessage: string;
  ctaText: string;
  items: string[];
}

const inquiryContent: Record<InquiryType, InquiryDetails> = {
  project: {
    label: "Start A Project",
    title: "Product Development & Architecture Consultation",
    subtitle: "Turn your idea into a production product. Select the type of product development service you need and share your specifications.",
    hoverMessage: "🚀 Routes to senior technical architecture leads.",
    ctaText: "Start Project",
    items: servicesData.project
  },
  service: {
    label: "Book A Service",
    title: "IT Consultancy Services & Ecosystem Optimization",
    subtitle: "Book specialized high-availability engineering consulting, targeted infrastructure support, or digital transformation matrices.",
    hoverMessage: "⚡ Response matrix initiated within 2 business hours.",
    ctaText: "Book Service",
    items: servicesData.service
  },
  call: {
    label: "Book A Call",
    title: "Embedded Talent Systems & Fractional Executive Leadership",
    subtitle: "Secure elite embedded design/engineering talent, fractional technology leadership, and scale operations on demand.",
    hoverMessage: "📆 Synchronizes instantly to scheduling lines.",
    ctaText: "Book Call",
    items: servicesData.call
  }
};

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<InquiryType>("project");
  
  const [formState, setFormState] = useState<Record<string, any>>({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    industry: "",
    department: "",
    serviceRequired: "",
    projectName: "",
    projectDescription: "",
    targetAudience: "",
    businessGoals: "",
    keyFeatures: "",
    existingProduct: "No",
    existingBrandAssets: "No",
    projectStage: "Idea Stage",
    desiredTimeline: "",
    estimatedBudget: "",
    currentChallenge: "",
    existingSystems: "",
    desiredOutcome: "",
    currentTechStack: "",
    supportType: "One-Time Support",
    preferredStartDate: "",
    urgency: "Medium",
    additionalNotes: "",
    engagementType: "Advisory",
    teamSize: "",
    expectedDuration: "",
    proposedStartDate: "",
    responsibilitiesRequired: "",
    preferredDate: "",
    preferredTime: "",
    meetingType: "Online"
  });

  const handleInputChange = (key: string, value: any) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleTabChange = (tab: InquiryType) => {
    setActiveTab(tab);
    handleInputChange("serviceRequired", inquiryContent[tab].items[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting context matrix:", { inquiryContext: activeTab, submittedFields: formState });
  };

  return (
    <div className="min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-[#d6ff3f] selection:text-neutral-950">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/5 backdrop-blur-md">
        <Navbar sectionTheme="dark" />
      </div>

      {/* ─── HERO HUB LAYER ───────────────────────────────── */}
      <div className="relative w-full bg-[#0B0B0C] text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
        
        {/* Adjusted Background Video Engine & Open Gradients */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
          >
            <source src="/assets/videos/dna-video.mp4" type="video/mp4" />
          </video>
          {/* Softer overlays to prevent video crushing */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-[#0B0B0C]/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0B0B0C]/20 to-[#0B0B0C]/80" />
        </div>

        {/* Inner Hub Grid Layout Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Form Header Area */}
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d6ff3f] block">
              Connect Matrix
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
              Let's build systems <br />that scale.
            </h1>
            <p className="text-neutral-300 text-sm md:text-base max-w-xl font-medium leading-relaxed pt-2 drop-shadow-sm">
              Dynamic request configuration routes directly into specialized operations nodes for rapid orchestration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form & Controls Container */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Tab Matrix Nav Array */}
              <div className="grid grid-cols-3 gap-2 bg-[#1F2023]/60 border border-white/10 rounded-2xl p-1.5 backdrop-blur-md">
                {(Object.keys(inquiryContent) as InquiryType[]).map((tab) => {
                  const isActive = activeTab === tab;
                  const icons = {
                    project: <Briefcase className="w-4 h-4" />,
                    service: <HelpCircle className="w-4 h-4" />,
                    call: <Calendar className="w-4 h-4" />
                  };

                  return (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`relative overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-2 text-center sm:text-left text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-500 ease-out z-10
                        ${isActive 
                          ? "text-neutral-950 bg-gradient-to-l from-[#d6ff3f] via-[#d6ff3f] to-[#0B0B0C] bg-[length:200%_100%] bg-right" 
                          : "text-neutral-300 hover:text-neutral-950 bg-transparent bg-gradient-to-l from-[#d6ff3f] via-[#1F2023] to-[#1F2023] bg-[length:200%_100%] bg-right hover:bg-left"
                        }`}
                    >
                      {icons[tab]}
                      <span className="text-[9px] sm:text-xs tracking-widest">{inquiryContent[tab].label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Notification Message Board Container */}
              <div className="bg-[#1F2023]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-md min-h-[115px] relative overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-sm font-bold tracking-wide text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d6ff3f]" />
                      {inquiryContent[activeTab].title}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed max-w-xl transition-colors duration-200 group-hover:text-neutral-200">
                      {inquiryContent[activeTab].subtitle}
                    </p>

                    <div className="absolute right-4 bottom-3 transition-all duration-300 transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                      <span className="text-[9px] font-black tracking-widest bg-black/60 border border-white/10 px-2 py-1 rounded-md text-[#d6ff3f] shadow-xl uppercase">
                        {inquiryContent[activeTab].hoverMessage}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Core Dynamic Interactive Form Block */}
              <form onSubmit={handleSubmit} className="space-y-8 bg-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-8"
                  >
                    
                    {/* OPTION 1: START A PROJECT */}
                    {activeTab === "project" && (
                      <>
                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">1. Contact Information</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Full Name *</label>
                              <input type="text" required placeholder="John Doe" value={formState.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Company / Organization Name</label>
                              <input type="text" placeholder="Acme Analytics" value={formState.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Email Address *</label>
                              <input type="email" required placeholder="john@organization.com" value={formState.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Phone Number *</label>
                              <input type="tel" required placeholder="+27 81 757 6670" value={formState.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Country / Location</label>
                              <input type="text" placeholder="South Africa" value={formState.country} onChange={(e) => handleInputChange("country", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">2. Product Service Selection</h4>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Service Required *</label>
                            <select value={formState.serviceRequired} onChange={(e) => handleInputChange("serviceRequired", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer appearance-none accent-[#d6ff3f]">
                              {inquiryContent.project.items.map((item) => (
                                <option key={item} value={item} className="bg-[#1F2023] text-white">{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">3. Project Details</h4>
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Project Name *</label>
                              <input type="text" required placeholder="Project Vanguard" value={formState.projectName} onChange={(e) => handleInputChange("projectName", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Project Description *</label>
                              <textarea rows={3} required placeholder="Detail the technical specifications..." value={formState.projectDescription} onChange={(e) => handleInputChange("projectDescription", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300 resize-none" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Target Audience</label>
                                <input type="text" placeholder="Enterprise Operators" value={formState.targetAudience} onChange={(e) => handleInputChange("targetAudience", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Business Goals</label>
                                <input type="text" placeholder="Reduce friction parameters" value={formState.businessGoals} onChange={(e) => handleInputChange("businessGoals", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Existing Product?</label>
                                <select value={formState.existingProduct} onChange={(e) => handleInputChange("existingProduct", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer accent-[#d6ff3f]">
                                  <option value="Yes" className="bg-[#1F2023]">Yes</option>
                                  <option value="No" className="bg-[#1F2023]">No</option>
                                </select>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Existing Brand Assets?</label>
                                <select value={formState.existingBrandAssets} onChange={(e) => handleInputChange("existingBrandAssets", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer accent-[#d6ff3f]">
                                  <option value="Yes" className="bg-[#1F2023]">Yes</option>
                                  <option value="No" className="bg-[#1F2023]">No</option>
                                </select>
                              </div>
                              <div className="space-y-1 sm:col-span-2">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Project Stage</label>
                                <select value={formState.projectStage} onChange={(e) => handleInputChange("projectStage", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer accent-[#d6ff3f]">
                                  <option value="Idea Stage" className="bg-[#1F2023]">Idea Stage</option>
                                  <option value="Discovery Stage" className="bg-[#1F2023]">Discovery Stage</option>
                                  <option value="MVP Stage" className="bg-[#1F2023]">MVP Stage</option>
                                  <option value="Existing Product" className="bg-[#1F2023]">Existing Product</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">4. Timeline & Budget</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Desired Timeline</label>
                              <input type="text" placeholder="3-6 Months" value={formState.desiredTimeline} onChange={(e) => handleInputChange("desiredTimeline", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Estimated Budget Range</label>
                              <input type="text" placeholder="R150k - R500k" value={formState.estimatedBudget} onChange={(e) => handleInputChange("estimatedBudget", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* OPTION 2: BOOK A SERVICE */}
                    {activeTab === "service" && (
                      <>
                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">1. Contact Information</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Full Name *</label>
                              <input type="text" required placeholder="Jane Smith" value={formState.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Company Name *</label>
                              <input type="text" required placeholder="Nexus Corp" value={formState.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Email Address *</label>
                              <input type="email" required placeholder="jane@nexus.io" value={formState.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Phone Number *</label>
                              <input type="tel" required placeholder="+27 81 757 6670" value={formState.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1 sm:col-span-2">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Industry</label>
                              <input type="text" placeholder="Fintech Frameworks" value={formState.industry} onChange={(e) => handleInputChange("industry", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">2. Service Selection</h4>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Service Required *</label>
                            <select value={formState.serviceRequired} onChange={(e) => handleInputChange("serviceRequired", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer appearance-none accent-[#d6ff3f]">
                              {inquiryContent.service.items.map((item) => (
                                <option key={item} value={item} className="bg-[#1F2023] text-white">{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">3. Business Information</h4>
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Current Challenge / Problem *</label>
                              <textarea rows={3} required placeholder="Describe configuration blockages..." value={formState.currentChallenge} onChange={(e) => handleInputChange("currentChallenge", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300 resize-none" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Existing Systems</label>
                                <input type="text" placeholder="Legacy data node lines" value={formState.existingSystems} onChange={(e) => handleInputChange("existingSystems", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Desired Outcome</label>
                                <input type="text" placeholder="Microservice automation layers" value={formState.desiredOutcome} onChange={(e) => handleInputChange("desiredOutcome", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                              </div>
                              <div className="space-y-1 sm:col-span-2">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Current Technology Stack</label>
                                <input type="text" placeholder="AWS, Node.js, PostgreSQL" value={formState.currentTechStack} onChange={(e) => handleInputChange("currentTechStack", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Support Type</label>
                                <select value={formState.supportType} onChange={(e) => handleInputChange("supportType", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer accent-[#d6ff3f]">
                                  <option value="One-Time Support" className="bg-[#1F2023]">One-Time Support</option>
                                  <option value="Ongoing Support" className="bg-[#1F2023]">Ongoing Support</option>
                                </select>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Preferred Start Date</label>
                                <input type="date" value={formState.preferredStartDate} onChange={(e) => handleInputChange("preferredStartDate", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 dark:[color-scheme:dark] accent-[#d6ff3f]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* OPTION 3: BOOK A CALL */}
                    {activeTab === "call" && (
                      <>
                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">1. Organization Information</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Full Name *</label>
                              <input type="text" required placeholder="Sarah Jenkins" value={formState.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Company Name *</label>
                              <input type="text" required placeholder="Apex Global" value={formState.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Email Address *</label>
                              <input type="email" required placeholder="sarah@apex.engineering" value={formState.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Phone Number *</label>
                              <input type="tel" required placeholder="+27 81 757 6670" value={formState.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">2. Talent Requirement</h4>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Role Required *</label>
                            <select value={formState.serviceRequired} onChange={(e) => handleInputChange("serviceRequired", e.target.value)} className="w-full bg-[#1F2023]/60 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 cursor-pointer appearance-none accent-[#d6ff3f]">
                              {inquiryContent.call.items.map((item) => (
                                <option key={item} value={item} className="bg-[#1F2023] text-white">{item}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">3. Engagement Details</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Proposed Start Date</label>
                              <input type="date" value={formState.proposedStartDate} onChange={(e) => handleInputChange("proposedStartDate", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 dark:[color-scheme:dark] accent-[#d6ff3f]" />
                            </div>
                          </div>
                          <div className="space-y-4 pt-2">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Current Challenge *</label>
                              <textarea rows={2} required placeholder="What engineering gap are you resolving?" value={formState.currentChallenge} onChange={(e) => handleInputChange("currentChallenge", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300 resize-none" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xs font-black tracking-widest text-[#d6ff3f] uppercase border-b border-white/10 pb-2">4. Meeting Preferences</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Preferred Date</label>
                              <input type="date" value={formState.preferredDate} onChange={(e) => handleInputChange("preferredDate", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none backdrop-blur-md transition-all duration-300 dark:[color-scheme:dark] accent-[#d6ff3f]" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeTab !== "project" && (
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-neutral-300 uppercase tracking-wider block">Notes / Additional Information</label>
                        <textarea rows={3} placeholder="Provide any execution context parameters..." value={formState.additionalNotes} onChange={(e) => handleInputChange("additionalNotes", e.target.value)} className="w-full bg-[#1F2023]/50 border border-white/10 focus:border-[#d6ff3f]/60 rounded-xl px-4 py-3.5 text-xs text-white placeholder-neutral-500 focus:outline-none backdrop-blur-md transition-all duration-300 resize-none" />
                      </div>
                    )}

                    <button 
                      type="submit"
                      className="w-full sm:w-auto relative overflow-hidden inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-l from-[#d6ff3f] via-[#0B0B0C] to-[#0B0B0C] bg-[length:200%_100%] bg-right hover:bg-left hover:text-neutral-950 border border-white/10 hover:border-[#d6ff3f]/40 px-8 py-4 rounded-xl transition-all duration-700 ease-out shadow-lg shadow-black/40 group z-10"
                    >
                      <span>{inquiryContent[activeTab].ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                  </motion.div>
                </AnimatePresence>
              </form>

            </div>

            {/* RIGHT SIDEBAR MODULES */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#1F2023]/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 bg-[#d6ff3f]/10 border border-[#d6ff3f]/20 rounded-lg text-[#d6ff3f]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Inquiries</h2>
                </div>
                <div className="space-y-3 text-xs md:text-sm font-medium">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-0.5">Email Matrix</span>
                    <a href="mailto:hello@fastitconsultancyservices.co.za" className="text-[#EBEAE6] hover:text-[#d6ff3f] transition-colors duration-200 break-all font-semibold">
                      hello@fastitconsultancyservices.co.za
                    </a>
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-0.5">Direct Line</span>
                    <a href="tel:+27817576670" className="text-[#EBEAE6] hover:text-[#d6ff3f] transition-colors duration-200 font-semibold">
                      +27 81 757 6670
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2023]/40 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md space-y-4">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 bg-[#d6ff3f]/10 border border-[#d6ff3f]/20 rounded-lg text-[#d6ff3f]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Our Office</h2>
                </div>
                <div className="text-xs md:text-sm text-neutral-200 font-semibold leading-relaxed space-y-0.5">
                  <p className="text-white">Rustenburg,</p>
                  <p>North West Province,</p>
                  <p className="text-neutral-400">South Africa</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}