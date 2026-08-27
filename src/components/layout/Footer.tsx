"use client";

import React from "react";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub", href: PORTFOLIO_DATA.personal.github, icon: <FaGithub className="w-4 h-4" /> },
    { label: "LinkedIn", href: PORTFOLIO_DATA.personal.linkedin, icon: <FaLinkedin className="w-4 h-4" /> },
    { label: "Email", href: `mailto:${PORTFOLIO_DATA.personal.email}`, icon: <Mail className="w-4 h-4" /> },
    ...(PORTFOLIO_DATA.personal.twitter
      ? [{ label: "Twitter / X", href: PORTFOLIO_DATA.personal.twitter, icon: <FaXTwitter className="w-3.5 h-3.5" /> }]
      : []),
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-neutral-950/80 backdrop-blur-xl overflow-hidden">
      {/* Top Cyber Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-white tracking-wider">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM: ONLINE • READY FOR WORK</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {["about", "skills", "projects", "experience", "certifications", "contact"].map((sec) => (
                <li key={sec}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(sec)}
                    className="hover:text-cyan-300 transition-colors uppercase tracking-wider font-mono cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
                  >
                    // {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="min-w-[40px] min-h-[40px] rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {currentYear} Shubham Bhandari. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-300">
            <span>Built with Next.js 15, TypeScript & Tailwind CSS</span>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-mono cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2 py-1"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
