"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { scrollToSection } from "@/lib/utils";
import { NeonButton } from "../ui/NeonButton";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-neutral-950/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1"
            aria-label="Navigate to Home"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 font-mono">
                SB<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-neutral-900/70 border border-white/[0.08] backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive ? "text-cyan-300 font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,242,254,0.2)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <NeonButton
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              size="sm"
              variant="secondary"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              Resume
            </NeonButton>
            <NeonButton
              onClick={() => handleNavClick("contact")}
              size="sm"
              variant="primary"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Let&apos;s Talk
            </NeonButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-neutral-950/95 border-b border-cyan-500/30 p-6 backdrop-blur-2xl shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`min-h-[44px] flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}
            </nav>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10">
              <NeonButton
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                size="sm"
                variant="secondary"
                icon={<FileText className="w-3.5 h-3.5" />}
                className="w-full"
              >
                Resume
              </NeonButton>
              <NeonButton
                onClick={() => handleNavClick("contact")}
                size="sm"
                variant="primary"
                className="w-full"
              >
                Contact
              </NeonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
