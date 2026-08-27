"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Maximize2, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechIcon } from "@/components/ui/TechIcon";
import { NeonButton } from "@/components/ui/NeonButton";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "AI & Cloud", "Developer Tool"];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PORTFOLIO_DATA.projects.length };
    PORTFOLIO_DATA.projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// PORTFOLIO ARTIFACTS"
          title="Engineered Products &"
          gradientText="Interactive Projects"
          subtitle="Explore selected applications designed for performance, resilience, and scale. Click View Details for problem statements, system architectures, and technical challenges."
        />

        {/* Filter Pills with Counts */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)] font-semibold"
                    : "bg-neutral-900/60 text-slate-300 hover:text-white border border-white/10 hover:bg-white/5"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-cyan-500/30 text-cyan-200" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects 3D Tilt Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <GlassCard
                  enableTilt
                  glowColor="cyan"
                  className="h-full flex flex-col justify-between p-6 sm:p-8 group border border-white/10 hover:border-cyan-500/50"
                >
                  <div>
                    {/* Project Header & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub Source Code`}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                          >
                            <SiGithub className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Live Demo`}
                            className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-300/90 font-mono mt-1 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-200 leading-relaxed mb-6">
                      {project.overview}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                        >
                          <TechIcon name={tech} className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>VIEW FULL ARCHITECTURE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.demoUrl ? (
                        <NeonButton
                          href={project.demoUrl}
                          target="_blank"
                          size="sm"
                          variant="primary"
                          icon={<ExternalLink className="w-3.5 h-3.5" />}
                          iconPosition="right"
                        >
                          Demo
                        </NeonButton>
                      ) : (
                        <NeonButton
                          href={project.githubUrl}
                          target="_blank"
                          size="sm"
                          variant="secondary"
                          icon={<SiGithub className="w-3.5 h-3.5" />}
                        >
                          GitHub
                        </NeonButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
