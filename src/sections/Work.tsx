"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Auto Reach Innovations",
    industry: "Automotive Technology",
    description: "Lead generation platform and operational systems supporting customer acquisition, dealership workflows, and digital business operations.",
    badge: "LIVE",
    slug: "/work/auto-reach-innovations", // Destination path for redirection
    defaultImage: "/assets/images/Auto-Reach-Innovations.jpg",
    projectImage: "/assets/images/Auto-Reach-Innovations-logo.png",
  },
  {
    id: 2,
    title: "Assentia",
    industry: "Business Systems / Enterprise Software",
    description: "Modern business operations platform focused on streamlining workflows, management visibility, and organizational operations.",
    badge: "COMING SOON",
    slug: "/work/assentia", // Destination path for redirection
    defaultImage: "/assets/images/digital-tablet-online-learning.jpg", 
    projectImage: "/assets/images/Assentia Logo.png",
  },
  {
    id: 3,
    title: "Devlaunch",
    industry: "Product Development",
    description: "Concept platform designed to help founders and businesses accelerate product launches and digital development initiatives.",
    badge: "CONCEPT PROJECT",
    slug: "/work/devlaunch", // Destination path for redirection
    defaultImage: "/assets/images/Devlaunch Icon.png",
    projectImage: "/assets/images/Devlaunch Logo_1.png",
  },
];

export default function Work() {
  return (
    <section className="w-full bg-white text-black py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Main Container Panel */}
      <div className="relative rounded-[2.5rem] border border-neutral-200/60 p-8 md:p-12 lg:p-16 overflow-hidden bg-[#f4f3f0]">
        
        {/* LAYER 1: Your Custom Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="/assets/images/joburg-skyline.jpg" 
            alt="Background pattern" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* LAYER 2: The "Graying Out" Tint Overlay */}
        <div className="absolute inset-0 bg-[#f4f3f0]/90 pointer-events-none z-10 mix-blend-normal" />

        {/* LAYER 3: The Content */}
        <div className="relative z-20">
          
          {/* Header Row Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-12 lg:pb-16">
            {/* Left Sub-Label */}
            <div className="lg:col-span-4 pt-2">
              <p className="text-neutral-500 italic text-sm md:text-base leading-relaxed font-medium">
                — From operational systems and digital platforms to internal products and concepts, our work focuses on creating practical solutions that drive efficiency, innovation, and growth.
              </p>
            </div>

            {/* Right Hero Statement */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-800 leading-[1.15] max-w-3xl">
                Building products, systems, and technology solutions that solve real business challenges.
              </h2>
            </div>
          </div>

          {/* Grid Cards Row Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                href={project.slug}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover="hover" // Triggers children variants named "hover"
                className="flex flex-col gap-4 group cursor-pointer decoration-none"
              >
                {/* Project Image Canvas */}
                <div className="relative aspect-[4/5] w-full rounded-[1.75rem] overflow-hidden bg-neutral-200/30 border border-neutral-300/40 shadow-sm">
                  
                  {/* 1. Default Image */}
                  <motion.img
                    src={project.defaultImage}
                    alt=""
                    variants={{
                      hover: { scale: 1.05, opacity: 0.2 }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 object-cover w-full h-full"
                  />

                  {/* 2. Project Reveal Image */}
                  <motion.img
                    src={project.projectImage}
                    alt={project.title}
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1, scale: 1.02 }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 object-cover w-full h-full z-10"
                  />
                  
                  {/* Brand Custom Highlighting Badge */}
                  <div className="absolute bottom-5 right-5 bg-[#d6ff3f] text-black text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm z-20">
                    {project.badge}
                  </div>
                </div>

                {/* Descriptions & Typography labels beneath card */}
                <div className="px-1 space-y-1">
                  {/* Title text switches to color #d6ff3f on hover */}
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900 group-hover:text-[#d6ff3f] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-bold tracking-wider uppercase">
                    {project.industry}
                  </p>
                  <p className="text-xs text-gray-500 font-medium tracking-normal leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

        </div> {/* End Content Layer */}

      </div>
    </section>
  );
}