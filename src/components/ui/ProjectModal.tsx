"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  AlertTriangle,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { NeonButton } from "./NeonButton";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setActiveTab("overview");
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-lg transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-3xl rounded-3xl bg-neutral-900/95 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,242,254,0.25)] z-10 overflow-hidden max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 border-b border-white/10 shrink-0">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{project.category}</span>
              </div>

              <h2 id="project-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 mt-2 font-normal">
                {project.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {project.demoUrl && (
                  <NeonButton
                    href={project.demoUrl}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Live Demo
                  </NeonButton>
                )}
                {project.githubUrl && (
                  <NeonButton
                    href={project.githubUrl}
                    target="_blank"
                    size="sm"
                    variant="secondary"
                    icon={<SiGithub className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    Source Code
                  </NeonButton>
                )}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10 px-6 sm:px-8 bg-black/20 shrink-0">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === "overview"
                    ? "border-cyan-400 text-cyan-300 font-semibold"
                    : "border-transparent text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Overview & Features
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === "architecture"
                    ? "border-cyan-400 text-cyan-300 font-semibold"
                    : "border-transparent text-neutral-400 hover:text-neutral-200"
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab("challenges")}
                className={`py-3.5 px-4 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  activeTab === "challenges"
                    ? "border-cyan-400 text-cyan-300 font-semibold"
                    : "border-transparent text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Engineering Challenges
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-neutral-300">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Problem & Solution Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                      <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider mb-2">
                        <AlertTriangle className="w-4 h-4" /> The Problem
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
                        <CheckCircle2 className="w-4 h-4" /> The Solution
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" /> Key Features & Capabilities
                    </h4>
                    <div className="space-y-2.5">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                        >
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <ArrowRight className="w-2.5 h-2.5 text-cyan-400" />
                          </div>
                          <span className="text-neutral-200 text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" /> Architecture Flow & Tech Breakdown
                  </h4>
                  <div className="space-y-3">
                    {project.architecture.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                          <Cpu className="w-3.5 h-3.5" /> Component 0{idx + 1}
                        </div>
                        <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">{layer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "challenges" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" /> Architectural Challenges & Solutions
                  </h4>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20"
                      >
                        <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs uppercase tracking-wider mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Challenge #{idx + 1}
                        </div>
                        <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 border border-white/10 text-xs font-medium text-neutral-200"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-black/40 flex justify-end gap-3 shrink-0">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
