"use client";

import React from "react";

export function CyberGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark base with subtle gradient */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Cyberpunk ambient neon glowing orbs */}
      <div className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] -right-[10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[160px] pointer-events-none animate-pulse-slow delay-1000" />
      <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-500/8 blur-[150px] pointer-events-none" />

      {/* Futuristic digital perspective grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)",
        }}
      />

      {/* Subtle scanline effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)",
        }}
      />
    </div>
  );
}
