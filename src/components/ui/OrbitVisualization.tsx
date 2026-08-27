"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, Skill } from "@/data/portfolioData";
import { TechIcon } from "./TechIcon";
import { Sparkles, Info } from "lucide-react";

interface OrbitVisualizationProps {
  onSelectSkill: (skill: Skill) => void;
}

export function OrbitVisualization({ onSelectSkill }: OrbitVisualizationProps) {
  const orbitSkills = PORTFOLIO_DATA.skills.filter((s) => s.inOrbit);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Smooth rotation animation loop
  useEffect(() => {
    // Check reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let frameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        // Slow continuous rotation (0.015 deg per ms ~ 24 seconds for 360 deg)
        setRotation((prev) => (prev + delta * 0.015) % 360);
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  // Dual rings configuration
  const innerRadius = 140; // Inner ring
  const outerRadius = 220; // Outer ring

  const innerSkills = orbitSkills.slice(0, 5);
  const outerSkills = orbitSkills.slice(5);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[500px] sm:h-[580px] flex items-center justify-center select-none overflow-hidden my-6">
      {/* Ambient background glow behind orbit */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[360px] h-[360px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse-slow" />
        <div className="w-[260px] h-[260px] rounded-full bg-purple-600/10 blur-[80px]" />
      </div>

      {/* Orbit Ring 1 (Inner) */}
      <div
        className="absolute rounded-full border border-cyan-500/20 pointer-events-none"
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          boxShadow: "0 0 25px rgba(0, 242, 254, 0.05)",
        }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/40 blur-[1px]" />
      </div>

      {/* Orbit Ring 2 (Outer) */}
      <div
        className="absolute rounded-full border border-purple-500/20 pointer-events-none border-dashed"
        style={{
          width: outerRadius * 2,
          height: outerRadius * 2,
          boxShadow: "0 0 35px rgba(168, 85, 247, 0.05)",
        }}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400/40 blur-[1px]" />
      </div>

      {/* Central Core: FULL STACK Reactor */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 30px rgba(0,242,254,0.3)",
              "0 0 50px rgba(0,242,254,0.6)",
              "0 0 30px rgba(0,242,254,0.3)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border-2 border-cyan-400/60 flex flex-col items-center justify-center text-center p-2 shadow-2xl relative overflow-hidden group"
        >
          {/* Reactor Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 pointer-events-none" />
          
          <Sparkles className="w-4 h-4 text-cyan-400 mb-1 animate-pulse" />
          <span className="text-xs sm:text-sm font-black font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300">
            FULL STACK
          </span>
          <span className="text-[10px] text-neutral-400 font-mono mt-0.5 uppercase tracking-wider">
            CORE HUB
          </span>
        </motion.div>
      </div>

      {/* Render Inner Ring Orbiting Techs */}
      {innerSkills.map((skill, index) => {
        const total = innerSkills.length;
        const angleDeg = (360 / total) * index + rotation;
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * innerRadius;
        const y = Math.sin(angleRad) * innerRadius;
        const isSelected = hoveredSkill?.id === skill.id;

        return (
          <div
            key={skill.id}
            className="absolute z-30"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: isPaused ? "transform 0.15s ease-out" : "none",
            }}
          >
            {/* SVG laser beam connection to center when active */}
            {isSelected && (
              <svg
                className="absolute top-1/2 left-1/2 pointer-events-none -z-10 overflow-visible"
                style={{ width: 1, height: 1 }}
              >
                <line
                  x1={0}
                  y1={0}
                  x2={-x}
                  y2={-y}
                  stroke={skill.color || "#00f2fe"}
                  strokeWidth={2}
                  strokeDasharray="4 2"
                  className="animate-pulse"
                />
              </svg>
            )}

            {/* Orbit Node */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredSkill(skill);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredSkill(null);
              }}
              onClick={() => onSelectSkill(skill)}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg relative ${
                isSelected
                  ? "bg-neutral-900 border-2 shadow-[0_0_25px_rgba(0,242,254,0.7)]"
                  : "bg-neutral-900/80 hover:bg-neutral-900 border border-white/15"
              }`}
              style={{
                borderColor: isSelected ? skill.color : undefined,
              }}
              title={skill.name}
              aria-label={skill.name}
            >
              <TechIcon name={skill.name} className="w-5 h-5 sm:w-6 sm:h-6" color={skill.color} />
            </motion.button>
          </div>
        );
      })}

      {/* Render Outer Ring Orbiting Techs (counter-rotating slightly for dynamic look) */}
      {outerSkills.map((skill, index) => {
        const total = outerSkills.length;
        const angleDeg = (360 / total) * index - rotation * 0.7;
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * outerRadius;
        const y = Math.sin(angleRad) * outerRadius;
        const isSelected = hoveredSkill?.id === skill.id;

        return (
          <div
            key={skill.id}
            className="absolute z-30"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: isPaused ? "transform 0.15s ease-out" : "none",
            }}
          >
            {/* Connection beam to center when active */}
            {isSelected && (
              <svg
                className="absolute top-1/2 left-1/2 pointer-events-none -z-10 overflow-visible"
                style={{ width: 1, height: 1 }}
              >
                <line
                  x1={0}
                  y1={0}
                  x2={-x}
                  y2={-y}
                  stroke={skill.color || "#a855f7"}
                  strokeWidth={2}
                  strokeDasharray="4 2"
                  className="animate-pulse"
                />
              </svg>
            )}

            <motion.button
              type="button"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredSkill(skill);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredSkill(null);
              }}
              onClick={() => onSelectSkill(skill)}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg ${
                isSelected
                  ? "bg-neutral-900 border-2 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  : "bg-neutral-900/80 hover:bg-neutral-900 border border-white/15"
              }`}
              style={{
                borderColor: isSelected ? skill.color : undefined,
              }}
              title={skill.name}
              aria-label={skill.name}
            >
              <TechIcon name={skill.name} className="w-5 h-5 sm:w-6 sm:h-6" color={skill.color} />
            </motion.button>
          </div>
        );
      })}

      {/* Floating Active Info Tooltip Card on Hover */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 bg-neutral-900/90 backdrop-blur-md border border-cyan-400/40 rounded-xl px-4 py-2.5 shadow-[0_0_25px_rgba(0,242,254,0.3)] flex items-center gap-3 pointer-events-none"
        >
          <TechIcon name={hoveredSkill.name} className="w-5 h-5 shrink-0" color={hoveredSkill.color} />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">{hoveredSkill.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                {hoveredSkill.level}%
              </span>
            </div>
            <p className="text-[11px] text-neutral-300 line-clamp-1">{hoveredSkill.shortDesc}</p>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-0.5 shrink-0 pl-1 border-l border-white/10">
            <Info className="w-3 h-3" /> Click
          </span>
        </motion.div>
      )}
    </div>
  );
}
