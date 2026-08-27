"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Code,
  Rocket,
  Compass,
  Zap,
  GraduationCap,
  Sparkles,
  Calendar,
  Layers,
  ShieldCheck,
  Search,
  Database,
  Cpu,
  Terminal,
  Activity,
} from "lucide-react";

function CounterItem({
  label,
  targetValue,
  suffix = "+",
}: {
  label: string;
  targetValue: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = targetValue / steps;

    let start = 0;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      start += increment;

      if (currentStep >= steps || start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function AboutSection() {
  const edu = PORTFOLIO_DATA.education;

  const technicalStrengths = [
    {
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      title: "Full-Stack Architecture",
      desc: "Next.js 14 App Router, NestJS modular REST APIs, and React 18 frontend systems.",
    },
    {
      icon: <Search className="w-4 h-4 text-purple-400" />,
      title: "AI Semantic Search",
      desc: "FastAPI, Sentence Transformers vector embeddings, and Elasticsearch fuzzy indexing.",
    },
    {
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      title: "Data & Relational Modeling",
      desc: "PostgreSQL, MySQL, TypeORM schemas, data cleaning, and analytical reporting.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      title: "Security & DevOps",
      desc: "JWT guest isolation, Helmet headers, rate limiting, and Dockerized environments.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// ORIGIN & IDENTITY"
          title="Engineering With"
          gradientText="Purpose & Precision"
          subtitle="Discover my academic progression, engineering journey, and focus on building modern software architectures."
        />

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              label={stat.label}
              targetValue={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>

        {/* Narrative & Milestone Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Full-Stack Narrative + Technical Competencies + Focus */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard className="p-6 sm:p-8 md:p-9 h-full flex flex-col justify-between border border-white/10 space-y-6">
              {/* Header & Bio */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <Compass className="w-4 h-4" /> Professional Background
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Passionate about building scalable software that makes an impact.
                </h3>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {PORTFOLIO_DATA.about.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Core Engineering Disciplines (Fills the space with high-value technical badges) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Core Technical Disciplines
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalStrengths.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-tight">{item.title}</h4>
                        <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Vision & Current Focus Cards */}
              <div className="pt-4 border-t border-white/10 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1.5 font-semibold">
                    <Rocket className="w-4 h-4" /> Career Vision
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {PORTFOLIO_DATA.about.goals}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1.5 font-semibold">
                    <Zap className="w-4 h-4" /> Current Focus
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {PORTFOLIO_DATA.about.currentFocus}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Up-to-Down Animated Academic & Engineering Progression */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between border border-cyan-500/30 relative overflow-hidden space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                    <GraduationCap className="w-4 h-4" /> Academic & Growth Journey
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                    2022 → Present
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs font-mono text-cyan-300/90 mt-0.5">
                  {edu.institute}
                </p>
              </div>

              {/* Vertical Up-to-Down Animated Milestone Stepper */}
              <div className="relative pl-6 space-y-4 my-auto">
                {/* Connecting Glowing Line */}
                <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_10px_#00f2fe]" />

                {edu.milestones?.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Pulsing Node */}
                    <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.6)] group-hover:scale-125 transition-transform">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                    </div>

                    {/* Milestone Card */}
                    <div className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-300">
                          <Calendar className="w-3 h-3 text-purple-400" />
                          {milestone.year}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                          {milestone.badge}
                        </span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                        {milestone.title}
                      </h5>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Active BCA Student & Developer
                </span>
                <span className="text-cyan-400">Continuous Growth</span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => (
            <GlassCard key={idx} enableTilt className="p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} p-0.5 mb-5 shadow-lg`}
              >
                <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center text-white">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
