"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SVGProps } from "react";
import Link from "next/link";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-5 h-5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={`w-3.5 h-3.5 ${props.className ?? ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Our Approach", href: "/approach" },
];

interface NavbarProps {
  // 'light' means the page section is light (requires dark text/emblems on scroll)
  // 'dark' means the page section is dark (requires white/lime text/emblems on scroll)
  sectionTheme?: 'light' | 'dark';
}

export default function Navbar({ sectionTheme = 'light' }: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, [handleScroll]);

  if (!mounted) return null;

  const isLightSection = sectionTheme === 'light';

  // FIX: Stays transparent at the top. Turns into a blurry background container on scroll.
  const navbarBgStyles = hasScrolled
    ? isLightSection 
      ? 'bg-white/80 text-black border-b border-neutral-200/50 shadow-md backdrop-blur-md'
      : 'bg-neutral-950/80 text-white border-b border-white/5 shadow-xl backdrop-blur-md'
    : 'bg-transparent text-white'; // Pristine transparent state at top

  // Pill styling logic based on scroll positions
  const pillLinkStyles = hasScrolled
    ? isLightSection
      ? 'bg-neutral-100/80 text-neutral-800 hover:bg-neutral-200 hover:text-black'
      : 'bg-white/[0.08] text-white/70 hover:bg-white/[0.15] hover:text-white'
    : 'bg-white/[0.1] text-white hover:bg-white/[0.2] backdrop-blur-sm';

  // PROVISION FOR ALL EMBLEMS: Rotates assets dynamically based on background state
  const getEmblemSrc = () => {
    if (isLightSection) {
      // Scrolled state over light page backgrounds (e.g., /services text)
      // Switch to "/assets/images/fastIT-emblem-light.png" for solid black if preferred
      return "/assets/images/fastIT-emblem-vivide-red.png";
    } else {
      // Scrolled state over dark page backgrounds
      // Switch to "/assets/images/fastIT-emblem-dark.png" for solid white if preferred
      return "/assets/images/fastIT-emblem-lime-green.png";
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navbarBgStyles}`}>
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Morphing Logo Container */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center h-10 overflow-visible group">
                <motion.div 
                  layout
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-start"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {!hasScrolled ? (
                      // 1. Full Initial Logo (Stays visible at the top)
                      <motion.img
                        key="full-logo"
                        src="/assets/images/fastIT-logo-2.png"
                        alt="Fast IT Full Logo"
                        className="h-7 w-auto block object-left"
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      />
                    ) : (
                      // 2. Dynamic Emblem (Revealed on Scroll)
                      <motion.img
                        key="emblem-logo"
                        src={getEmblemSrc()}
                        alt="Fast IT Emblem"
                        className="h-8 w-auto block"
                        initial={{ opacity: 0, scale: 0.75, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.75, rotate: 10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </div>

            {/* Center Links */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <AnimatePresence>
                {!hasScrolled && (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {navItems.map((item) => (
                      <div key={item.label} className="relative py-2">
                        <Link
                          href={item.href}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${pillLinkStyles}`}
                        >
                          <span>{item.label}</span>
                        </Link>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {!hasScrolled && (
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="hidden lg:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-bold rounded-full transition-all duration-200 bg-[#d6ff3f] text-black hover:bg-[#cbf235]"
                  >
                    <span>Contact Us</span>
                    <ArrowRightIcon />
                  </motion.a>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsMenuOpen(true)}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  hasScrolled ? 'lg:inline-flex' : 'lg:hidden'
                } ${
                  hasScrolled && isLightSection ? 'bg-neutral-100 text-black hover:bg-neutral-200' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <MenuIcon />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#d6ff3f] text-black flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex justify-end p-2">
              <button onClick={() => setIsMenuOpen(false)} className="bg-black text-[#d6ff3f] p-3 rounded-full">
                <CloseIcon />
              </button>
            </div>
            
            <div className="flex flex-col gap-2 mt-8 px-4 text-2xl font-bold tracking-tight">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="border-b-2 border-black/10 py-3"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-black text-[#d6ff3f] rounded-2xl py-4 mt-6 text-center text-lg font-bold flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}