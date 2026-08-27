"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  glowColor?: "cyan" | "purple" | "emerald" | "amber" | "rose";
  onClick?: () => void;
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  enableTilt = false,
  glowColor = "cyan",
  onClick,
  interactive = false,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseClientX = e.clientX - rect.left;
    const mouseClientY = e.clientY - rect.top;

    setMousePos({ x: mouseClientX, y: mouseClientY });

    if (enableTilt) {
      const width = rect.width;
      const height = rect.height;
      const xPct = mouseClientX / width - 0.5;
      const yPct = mouseClientY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (enableTilt) {
      x.set(0);
      y.set(0);
    }
  };

  const glowColors = {
    cyan: "rgba(0, 242, 254, 0.15)",
    purple: "rgba(168, 85, 247, 0.18)",
    emerald: "rgba(16, 185, 129, 0.15)",
    amber: "rgba(245, 158, 11, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)",
  };

  return (
    <motion.div
      ref={cardRef}
      style={enableTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden transition-all duration-300",
        interactive && "cursor-pointer hover:border-cyan-500/40 hover:shadow-[0_8px_32px_0_rgba(0,242,254,0.15)]",
        className
      )}
      {...(props as any)}
    >
      {/* Radial mouse-following ambient glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 -z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* Top subtle highlight border line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      {/* Card Content with relative z-index */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
