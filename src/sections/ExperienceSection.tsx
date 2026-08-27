"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechIcon } from "@/components/ui/TechIcon";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="// TIMELINE & TRAJECTORY"
          title="Career Journey &"
          gradientText="Industry Experience"
          subtitle="A chronicle of engineering milestones, internships, and scalable systems built."
        />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto mt-16">
          {/* Static Background Guide Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-neutral-800" />

          {/* Animated Glowing Progressive Beam Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_15px_#00f2fe]"
          />

          <div className="space-y-12 sm:space-y-16">
            {PORTFOLIO_DATA.experience.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-8 h-8 rounded-full bg-neutral-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.6)]"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <GlassCard className="p-6 sm:p-8 hover:border-cyan-500/40">
                        {/* Period & Role Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                            {item.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-purple-400" />
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mt-1 mb-4">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span className="font-semibold text-white">{item.company}</span>
                          <span>•</span>
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-200 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Key Accomplishments */}
                        <div className="space-y-2 mb-6">
                          {item.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                            >
                              <TechIcon name={tech} className="w-3 h-3" />
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
