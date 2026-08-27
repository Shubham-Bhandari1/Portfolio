"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[data-clickable='true']") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Inner glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f2fe]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />

      {/* Outer magnetic follower ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? "rgba(0, 242, 254, 0.15)" : "rgba(0, 242, 254, 0.02)",
          borderColor: isHovered ? "#00f2fe" : "rgba(0, 242, 254, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </div>
  );
}
