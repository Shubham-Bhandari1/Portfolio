"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, Skill } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { OrbitVisualization } from "@/components/ui/OrbitVisualization";
import { TechIconModal } from "@/components/ui/TechIconModal";
import { Sparkles, Layers, Orbit, Search, X } from "lucide-react";

type CategoryFilter = "all" | "frontend" | "backend" | "database" | "programming" | "tools" | "other";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalSkill, setActiveModalSkill] = useState<Skill | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "orbit">("grid");

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database & SQL" },
    { id: "programming", label: "Programming" },
    { id: "tools", label: "Tools & DevOps" },
    { id: "other", label: "Data, AI & Web3" },
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PORTFOLIO_DATA.skills.length };
    PORTFOLIO_DATA.skills.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredSkills = useMemo(() => {
    return PORTFOLIO_DATA.skills.filter((skill) => {
      const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.relevantSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// SKILLS & CAPABILITIES"
          title="Technology"
          gradientText="Stack & Architecture"
          subtitle="Explore the technologies and tools I use across Full-Stack, Databases, and Data Analytics. Click any card to view detailed proficiencies and project applications."
        />

        {/* Search Bar & View Mode Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (viewMode === "orbit") setViewMode("grid");
              }}
              placeholder="Search 25+ technologies (e.g. Next.js, SQL, Python, Docker)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-neutral-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all shadow-sm"
              aria-label="Filter technologies"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Orbit vs Grid Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-neutral-900/80 border border-white/10 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                viewMode === "grid"
                  ? "bg-white/10 text-white shadow-sm font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Grid Matrix</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("orbit")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                viewMode === "orbit"
                  ? "bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,242,254,0.3)] font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>3D Orbit View</span>
            </button>
          </div>
        </div>

        {/* Category Tabs with Count Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-md overflow-x-auto max-w-full mb-10">
          {categories.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id && viewMode === "grid";
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (viewMode === "orbit") setViewMode("grid");
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.2)] font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{cat.label}</span>
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

        {/* Orbit Visualization View */}
        {viewMode === "orbit" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-neutral-900/40 border border-white/10 backdrop-blur-xl p-4 sm:p-8"
          >
            <div className="text-center max-w-md mx-auto mb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Planetary Orbit System
              </span>
              <p className="text-xs text-slate-300 mt-1">
                Hover to pause orbit and lock laser beacon. Click any node for architectural specifications.
              </p>
            </div>
            <OrbitVisualization onSelectSkill={(skill) => setActiveModalSkill(skill)} />
          </motion.div>
        )}

        {/* Categorized Grid Matrix View */}
        {viewMode === "grid" && (
          <>
            {filteredSkills.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-neutral-900/40 border border-white/10">
                <p className="text-slate-300 text-sm mb-3">No technologies matched your search &quot;{searchQuery}&quot;</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium hover:bg-cyan-500/25 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                <AnimatePresence>
                  {filteredSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveModalSkill(skill)}
                        aria-haspopup="dialog"
                        className="w-full group p-5 rounded-2xl bg-neutral-900/70 hover:bg-neutral-900/95 border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(0,242,254,0.2)] cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                      >
                        {/* Hover Glow Background */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                          style={{ backgroundColor: skill.color || "#00f2fe" }}
                        />

                        {/* Icon Container with Scale and Glow */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3.5 border border-white/10 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-300 shadow-sm"
                          style={{
                            backgroundColor: `${skill.color}10` || "rgba(255,255,255,0.03)",
                          }}
                        >
                          <TechIcon
                            name={skill.name}
                            className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6"
                            color={skill.color}
                          />
                        </div>

                        {/* Skill Title & Level */}
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-300 mt-1">
                          {skill.experience}
                        </span>

                        {/* Level bar indicator */}
                        <div className="w-full h-1 bg-neutral-800 rounded-full mt-3 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </>
        )}

        {/* Detailed Tech Modal */}
        <TechIconModal
          skill={activeModalSkill}
          isOpen={!!activeModalSkill}
          onClose={() => setActiveModalSkill(null)}
        />
      </div>
    </section>
  );
}
