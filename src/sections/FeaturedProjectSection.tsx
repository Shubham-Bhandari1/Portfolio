"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  Maximize2,
  Terminal,
  Activity,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NeonButton } from "@/components/ui/NeonButton";
import { TechIcon } from "@/components/ui/TechIcon";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function FeaturedProjectSection() {
  const project = PORTFOLIO_DATA.featuredProject;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// SPOTLIGHT SYSTEM"
          title="Flagship Architecture"
          gradientText="Featured Project"
          subtitle="A deep dive into my featured project exploring intelligent search and full-stack engineering."
        />

        {/* Cinematic Card Container */}
        <div className="relative rounded-3xl bg-neutral-900/80 border border-cyan-500/30 p-6 sm:p-10 md:p-12 shadow-[0_0_60px_rgba(0,242,254,0.15)] backdrop-blur-2xl overflow-hidden">
          {/* Ambient Cyber Beams */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Project Narrative & Architecture Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider">
                  ★ FEATURED SHOWCASE
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-cyan-300/90 font-medium mt-2">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Key Features Checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Architectural Highlights
                </h4>
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Engineered With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-neutral-200"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                {project.demoUrl ? (
                  <NeonButton
                    href={project.demoUrl}
                    target="_blank"
                    variant="primary"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Launch Demo
                  </NeonButton>
                ) : null}

                <NeonButton
                  href={project.githubUrl}
                  target="_blank"
                  variant={project.demoUrl ? "secondary" : "primary"}
                  size="md"
                  icon={<SiGithub className="w-4 h-4" />}
                >
                  GitHub Repository
                </NeonButton>

                <NeonButton
                  onClick={() => setIsModalOpen(true)}
                  variant="outline"
                  size="md"
                  icon={<Maximize2 className="w-4 h-4" />}
                >
                  View Details & Architecture
                </NeonButton>
              </div>
            </div>

            {/* Right: Live Interactive Architecture Diagram Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-neutral-950/90 border border-white/15 p-6 shadow-2xl overflow-hidden group">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-4 h-4" /> System Topology
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Activity className="w-3 h-3 animate-pulse" /> REPO: ACTIVE
                  </span>
                </div>

                {/* Architecture Layers Flow Diagram */}
                <div className="py-6 space-y-4">
                  {/* Layer 1 */}
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Interactive Query Interface</span>
                        <span className="text-[10px] text-cyan-300 font-mono">Modern UI • Fast Query Dispatch</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Client</span>
                  </div>

                  {/* Connect arrow */}
                  <div className="flex justify-center -my-2 text-cyan-400/60 font-mono text-xs">
                    ↓ Retrieval Pipeline
                  </div>

                  {/* Layer 2 */}
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">AI Processing & Synthesis Layer</span>
                        <span className="text-[10px] text-purple-300 font-mono">Intelligent Retrieval • Parsing</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">AI / LLM</span>
                  </div>

                  {/* Connect arrow */}
                  <div className="flex justify-center -my-2 text-purple-400/60 font-mono text-xs">
                    ↓ Version Controlled
                  </div>

                  {/* Layer 3 */}
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <SiGithub className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">Public GitHub Source Code</span>
                        <span className="text-[10px] text-emerald-300 font-mono">Shubham-Bhandari1/ai-search-engine</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Git</span>
                  </div>
                </div>

                {/* Telemetry Metric */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>CATEGORY: <span className="text-cyan-400 font-bold">AI & Web</span></span>
                  <span>STATUS: <span className="text-emerald-400 font-bold">Open Source</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Modal */}
        <ProjectModal
          project={project as any}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
