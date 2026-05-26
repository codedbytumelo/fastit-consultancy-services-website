"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-8 px-6 md:px-12 lg:px-20 tracking-tight selection:bg-[#d6ff3f] selection:text-black">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[480px]">
        
        {/* Top Content Information Grid Deck Layout Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* Column 1: Corporate Headquarters Physical Identity Address Markers */}
          <div className="md:col-span-3 space-y-5">
            <span className="text-neutral-500 text-xs md:text-sm font-normal block tracking-normal">
              (Our office)
            </span>
            <p className="text-neutral-200 text-sm md:text-base font-medium leading-relaxed max-w-[220px]">
              Rustenburg,<br />
              North West Province, South Africa
            </p>
            <div className="pt-4 space-y-1">
              <span className="text-neutral-500 text-xs md:text-sm block tracking-normal">
                (Contact us)
              </span>
              <a 
                href="tel:+3221234567" 
                className="text-neutral-200 text-sm md:text-base font-medium block hover:text-white transition-colors"
              >
                +27 81 757 6620
              </a>
            </div>
          </div>

          {/* Column 2: Structural Navigation Router Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <span className="text-neutral-500 text-xs md:text-sm block tracking-normal">
              (Navigation)
            </span>
            <nav className="flex flex-col space-y-3.5 font-medium text-sm md:text-base text-neutral-200">
              <Link href="/" className="hover:text-white w-fit transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-white w-fit transition-colors">
                About Us
              </Link>
              <Link href="/services" className="hover:text-white w-fit transition-colors">
                Services
              </Link>
              <Link href="/work" className="hover:text-white w-fit transition-colors">
                Work
              </Link>
              <Link href="/approach" className="hover:text-white w-fit transition-colors">
                Our Approach
              </Link>
            </nav>
          </div>

          {/* Column 3: Primary Destination Communication Anchor & Social Platforms Bar */}
          <div className="md:col-span-6 flex flex-col space-y-12 md:pl-4">
            
            {/* Communication Call Point Layout Block - Decreased font sizes to safely support long address strings */}
            <div className="space-y-3">
              <span className="text-neutral-500 text-xs md:text-sm italic font-serif tracking-tight block">
                — let&apos;s get in touch
              </span>
              <a 
                href="mailto:hello@fastitconsultancyservices.co.za" 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tighter text-white border-b border-neutral-700 pb-4 block hover:text-neutral-200 transition-colors break-words"
              >
                hello@fastitconsultancyservices.co.za
              </a>
            </div>

            {/* Social Media Interactive Profile Icons Cluster Group */}
            <div className="space-y-4">
              <span className="text-neutral-500 text-xs md:text-sm block tracking-normal">
                (Social media)
              </span>
              <div className="flex items-center gap-3">
                {/* X Profile Icon */}
                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 transition-all"
                  aria-label="X Profile Link"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-3.5 h-3.5"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram Profile Icon */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 transition-all"
                  aria-label="Instagram Profile Link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* LinkedIn Profile Icon */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-neutral-500 transition-all"
                  aria-label="LinkedIn Profile Link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Area: Large Brutalist Typography Banner Display & Compliance Strip */}
        <div className="mt-20 space-y-6">
          
          {/* Main Giant Structural Branding Visual Wordmark Signature - Adjusted to avoid cutoff */}
          <div className="w-full select-none overflow-hidden">
            <h1 className="-ml-1.5 text-[12.5vw] md:text-[13vw] font-bold tracking-tighter leading-[0.8] text-white text-left whitespace-nowrap font-sans">
              Built to Disrupt
            </h1>
          </div>

          {/* Minimalist Multi-Anchor Compliance Legal Tracking Details Subbar */}
          <div className="pt-6 border-t border-neutral-900/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-medium text-neutral-500 tracking-normal font-mono">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="sm:order-none order-last text-neutral-600 font-sans tracking-wide">
              Copyright © 2026 fastIT Consultancy Services Pty Ltd
            </span>
            <Link href="/terms-and-conditions" className="hover:text-neutral-300 transition-colors">
              Terms and Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}