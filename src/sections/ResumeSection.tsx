"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown, ExternalLink, FileText, CheckCircle2, Shield, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export function ResumeSection() {
  const handleDownloadConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#00f2fe", "#a855f7", "#10b981", "#ffffff"],
    });
  };

  const resumeHighlights = [
    "Full-Stack Web Development with Next.js, React, Node.js & NestJS",
    "Database Engineering & Data Analysis with SQL, PostgreSQL & MongoDB",
    "Hands-on Internship Experience at Inamigos with API & Application Data",
    "Strong Computer Science Foundation (BCA, Tula's Institute - CGPA: 7.83)",
  ];

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// CURRICULUM VITAE"
          title="Engineering Resume &"
          gradientText="Technical Qualifications"
          subtitle="Download or view my complete technical resume summarizing experience, full-stack development, data analysis, and project outcomes."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard
            enableTilt
            glowColor="cyan"
            className="p-8 sm:p-12 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.15)] relative overflow-hidden"
          >
            {/* Corner Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Icon & Highlights */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {PORTFOLIO_DATA.personal.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 font-medium">
                      {PORTFOLIO_DATA.personal.role} • Updated Edition
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  A comprehensive overview of full-stack engineering proficiencies, data analytics, academic credentials, and internship experience.
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Resume Key Highlights
                  </h4>
                  {resumeHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions Hub */}
              <div className="md:col-span-5 flex flex-col items-stretch gap-4 p-6 rounded-2xl bg-neutral-950/60 border border-white/10 text-center">
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
                  Instant Access
                </span>

                <NeonButton
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  target="_blank"
                  download={PORTFOLIO_DATA.personal.resumeFilename}
                  onClick={handleDownloadConfetti}
                  variant="primary"
                  size="md"
                  icon={<FileDown className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Download PDF
                </NeonButton>

                <NeonButton
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  target="_blank"
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full justify-center"
                >
                  View in Browser
                </NeonButton>

                <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-300 font-mono">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ATS-Optimized & Verified</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
