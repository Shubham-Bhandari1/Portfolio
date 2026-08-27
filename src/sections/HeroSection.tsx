"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileDown,
  Eye,
  Send,
  Mail,
  ChevronDown,
  Terminal,
  Activity,
  Cpu,
  Copy,
  Check,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { NeonButton } from "@/components/ui/NeonButton";
import { TechIcon } from "@/components/ui/TechIcon";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const [typedRoleIndex, setTypedRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const roles = PORTFOLIO_DATA.personal.typedRoles;

  // Typewriter effect
  useEffect(() => {
    const targetRole = roles[typedRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetRole.length) {
          setCurrentText(targetRole.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(targetRole.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTypedRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, typedRoleIndex, roles]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const floatingBadges = [
    { name: "Next.js", color: "#ffffff", x: -20, y: -30, delay: 0 },
    { name: "TypeScript", color: "#3178C6", x: 40, y: -40, delay: 1 },
    { name: "PostgreSQL", color: "#4169E1", x: -35, y: 50, delay: 2 },
    { name: "Docker", color: "#2496ED", x: 45, y: 40, delay: 3 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Cyber Status Pill & Dual-Focus Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(0,242,254,0.18)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-semibold">{PORTFOLIO_DATA.personal.availability}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>Full-Stack + Data Analytics</span>
            </div>
          </motion.div>

          {/* Main Hero Heading with Text Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h2 className="text-lg sm:text-xl font-mono text-cyan-400/90 font-medium">
              Hi, I&apos;m
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
          </motion.div>

          {/* Animated Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-12 sm:h-14 flex items-center my-3"
            aria-live="polite"
          >
            <span className="text-2xl sm:text-4xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              {currentText}
            </span>
            <span className="w-0.5 h-8 sm:h-10 bg-cyan-400 ml-1.5 animate-pulse" />
          </motion.div>

          {/* Description with enhanced contrast & balanced typography */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed mt-2"
            style={{ textWrap: "pretty" as any }}
          >
            {PORTFOLIO_DATA.personal.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <NeonButton
              onClick={() => scrollToSection("projects")}
              variant="primary"
              size="md"
              icon={<Eye className="w-4 h-4" />}
            >
              View Projects
            </NeonButton>

            <NeonButton
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              download={PORTFOLIO_DATA.personal.resumeFilename}
              variant="secondary"
              size="md"
              icon={<FileDown className="w-4 h-4" />}
            >
              Download Resume
            </NeonButton>

            <NeonButton
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="md"
              icon={<Send className="w-4 h-4" />}
            >
              Contact Me
            </NeonButton>
          </motion.div>

          {/* Social Links, One-Click Copy Email & Quick Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-6 border-t border-white/10 w-full"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect:</span>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 flex items-center justify-center transition-all shadow-md focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Quick One-Click Copy Email Pill */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D Holographic Visual Card & Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[90px] pointer-events-none" />

          {/* Futuristic Terminal Card */}
          <div className="relative w-full max-w-md rounded-2xl bg-neutral-900/90 border border-cyan-500/30 p-5 shadow-[0_0_50px_rgba(0,242,254,0.15)] backdrop-blur-2xl overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>shubham@dev-core:~$</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <Activity className="w-3 h-3 animate-pulse" /> LIVE
              </div>
            </div>

            {/* Terminal Body with Dynamic Telemetry */}
            <div className="py-4 space-y-3 font-mono text-xs">
              <div className="text-slate-300">
                <span className="text-cyan-400">const</span> developer = &#123;
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-purple-400">name</span>: <span className="text-emerald-300">&apos;Shubham Bhandari&apos;</span>,
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-purple-400">focus</span>: <span className="text-emerald-300">&apos;Full Stack + Data Analytics&apos;</span>,
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-purple-400">stack</span>: [<span className="text-cyan-300">&apos;Next.js&apos;</span>, <span className="text-cyan-300">&apos;NestJS&apos;</span>, <span className="text-cyan-300">&apos;SQL/PostgreSQL&apos;</span>, <span className="text-cyan-300">&apos;Docker&apos;</span>],
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-purple-400">internship</span>: <span className="text-amber-300">&apos;Inamigos (Completed)&apos;</span>,
              </div>
              <div className="pl-4 text-slate-200">
                <span className="text-purple-400">status</span>: <span className="text-emerald-400">&apos;Open for Opportunities 🚀&apos;</span>
              </div>
              <div className="text-slate-300">&#125;;</div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" /> CPU: 1.2%
                </span>
                <span>HEAP: 58MB</span>
                <span className="text-cyan-400">60 FPS</span>
              </div>
            </div>

            {/* Subtle scanline line */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-400/[0.03] to-transparent animate-pulse" />
          </div>

          {/* Floating Technology Badges with Smooth Physics */}
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={badge.name}
              animate={{
                y: [0, -12, 0],
                x: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + idx,
                ease: "easeInOut",
                delay: badge.delay,
              }}
              style={{
                top: `${20 + idx * 22}%`,
                left: idx % 2 === 0 ? "-8%" : "85%",
              }}
              className="absolute hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-white/15 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md z-20"
            >
              <TechIcon name={badge.name} className="w-4 h-4" color={badge.color} />
              <span className="text-xs font-semibold text-white font-mono">{badge.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">EXPLORE SYSTEM</span>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </motion.button>
    </section>
  );
}
