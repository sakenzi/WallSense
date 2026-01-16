import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useMouseTilt } from "../hooks/useMouseTilt";
import type { LucideIcon } from "lucide-react";

interface ParallaxCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: "cyan" | "purple";
}

export function ParallaxCard({ title, description, icon: Icon, color = "cyan" }: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY } = useMouseTilt(ref, { maxTilt: 10, stiffness: 200, damping: 20 });

  const colorClasses =
    color === "cyan"
      ? "border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/50"
      : "border-purple-500/30 shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group-hover:border-purple-400/50";

  const iconColor = color === "cyan" ? "text-cyan-400" : "text-purple-400";
  const glowColor = color === "cyan" ? "bg-cyan-500" : "bg-purple-500";

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative h-full"
    >
      <div
        className={`
          group relative h-full overflow-hidden rounded-xl border bg-[#0a1128]/80 p-8 backdrop-blur-sm transition-colors duration-300
          ${colorClasses}
        `}
        style={{ transform: "translateZ(0px)" }}
      >
        <div
          className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${glowColor} opacity-[0.05] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.1]`}
        />

        <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
          <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>

        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
    </motion.div>
  );
}
