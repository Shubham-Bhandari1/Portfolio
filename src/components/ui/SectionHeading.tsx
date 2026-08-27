"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  gradientText,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-14 md:mb-20", alignClasses, className)}>
      {/* Cyber Tag Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>{badge}</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
      >
        {title}{" "}
        {gradientText && (
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            {gradientText}
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Futuristic accent beam */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80px", opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn(
          "h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-6",
          align === "left" && "from-cyan-400 to-transparent"
        )}
      />
    </div>
  );
}
