"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Zap, CheckCircle2, Sparkles, FolderGit2 } from "lucide-react";
import { Skill } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { scrollToSection } from "@/lib/utils";

interface TechIconModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectTitle: string) => void;
}

export function TechIconModal({
  skill,
  isOpen,
  onClose,
  onSelectProject,
}: TechIconModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!skill) return null;

  const categoryNames = {
    frontend: "Frontend Architecture",
    backend: "Backend & Systems",
    database: "Database & Storage",
    programming: "Core Programming",
    tools: "Tools & DevOps CI/CD",
    other: "Emerging & AI/Web3",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl bg-neutral-900/95 border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,242,254,0.2)] z-10 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tech-modal-title"
          >
            {/* Ambient Background Gradient */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[90px] pointer-events-none opacity-20"
              style={{ backgroundColor: skill.color || "#00f2fe" }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/15 shadow-lg shrink-0"
                style={{
                  backgroundColor: `${skill.color}15` || "rgba(0, 242, 254, 0.1)",
                  borderColor: `${skill.color}40` || "rgba(0, 242, 254, 0.3)",
                }}
              >
                <TechIcon name={skill.name} className="w-9 h-9" color={skill.color} />
              </div>

              <div>
                <span className="inline-block text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider mb-1">
                  {categoryNames[skill.category]}
                </span>
                <h3 id="tech-modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Experience: <span className="text-neutral-200 font-medium">{skill.experience}</span>
                </p>
              </div>
            </div>

            {/* Proficiency Bar */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" /> Proficiency Level
                </span>
                <span className="text-cyan-300 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-neutral-800 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_10px_#00f2fe]"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Overview</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{skill.detailedDesc}</p>
            </div>

            {/* Sub-skills / Key Competencies */}
            {skill.relevantSkills && skill.relevantSkills.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.relevantSkills.map((subSkill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      {subSkill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Projects */}
            {skill.relatedProjects && skill.relatedProjects.length > 0 && (
              <div className="mt-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-purple-400" /> Applied In Projects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.relatedProjects.map((projectName, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onClose();
                        scrollToSection("projects");
                        if (onSelectProject) onSelectProject(projectName);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition-all group cursor-pointer"
                    >
                      <span>{projectName}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
