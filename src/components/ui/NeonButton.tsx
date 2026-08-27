"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  download?: string | boolean;
}

export function NeonButton({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "left",
  className,
  download,
  onClick,
  ...props
}: NeonButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-medium gap-2",
    md: "px-6 py-3 text-sm font-semibold gap-2.5",
    lg: "px-8 py-4 text-base font-semibold gap-3",
  }[size];

  const variantClasses = {
    primary:
      "relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] border border-cyan-300/40 hover:border-cyan-200",
    secondary:
      "bg-white/[0.05] hover:bg-white/[0.1] text-neutral-200 hover:text-white border border-white/10 hover:border-cyan-500/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    outline:
      "bg-transparent text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(0,242,254,0.25)]",
    ghost:
      "bg-transparent text-neutral-300 hover:text-cyan-400 hover:bg-white/[0.04]",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span className="tracking-wide">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
      
      {/* Subtle shine highlight effect */}
      <span className="absolute inset-0 -z-10 rounded-xl overflow-hidden pointer-events-none">
        <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </span>
    </>
  );

  const baseClassName = cn(
    "group inline-flex items-center justify-center rounded-xl transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
    sizeClasses,
    variantClasses,
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        download={download}
        className={baseClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick as any}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={baseClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}
