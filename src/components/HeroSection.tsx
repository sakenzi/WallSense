import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScanFace, Cpu, Grid } from 'lucide-react';
export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  // Parallax transforms
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const droneY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const headsetY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return <section ref={ref} className="relative h-[120vh] w-full overflow-hidden bg-[#050510] perspective-1000">
      {/* Layer 1: Perspective Grid (Farthest) */}
      <motion.div style={{
      y: gridY
    }} className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" style={{
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
      }} />
      </motion.div>

      {/* Layer 2: Abstract Drone Representation (Mid-ground) */}
      <motion.div style={{
      y: droneY
    }} className="absolute left-[10%] top-[20%] z-10 hidden lg:block">
        <div className="relative h-64 w-64 animate-float-slow">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-32 w-32 rotate-45 border-2 border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm">
              <div className="absolute -left-4 -top-4 h-4 w-4 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute -right-4 -top-4 h-4 w-4 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute -bottom-4 -left-4 h-4 w-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-4 -right-4 h-4 w-4 border-b-2 border-r-2 border-cyan-400" />
            </div>
          </div>
          <Cpu className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          {/* Propellers */}
          <div className="absolute left-0 top-0 h-16 w-16 animate-spin-slow rounded-full border border-dashed border-cyan-500/40" />
          <div className="absolute right-0 top-0 h-16 w-16 animate-spin-slow rounded-full border border-dashed border-cyan-500/40" />
          <div className="absolute bottom-0 left-0 h-16 w-16 animate-spin-slow rounded-full border border-dashed border-cyan-500/40" />
          <div className="absolute bottom-0 right-0 h-16 w-16 animate-spin-slow rounded-full border border-dashed border-cyan-500/40" />
        </div>
      </motion.div>

      {/* Layer 3: VR Headset Representation (Foreground) */}
      <motion.div style={{
      y: headsetY
    }} className="absolute right-[5%] top-[15%] z-20 hidden lg:block">
        <div className="relative h-96 w-96 animate-float">
          {/* Main Visor */}
          <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-purple-500/50 bg-purple-900/20 backdrop-blur-md shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl">
              <div className="h-[1px] w-full bg-purple-500/50 blur-[1px] animate-scan" />
            </div>
            {/* Lens reflections */}
            <div className="absolute left-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-purple-400/10 blur-md" />
            <div className="absolute right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-purple-400/10 blur-md" />
          </div>

          {/* Strap/Frame hints */}
          <div className="absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border border-white/10" />

          {/* Floating UI Elements around headset */}
          <div className="absolute -right-10 top-20 flex flex-col gap-2">
            <div className="h-1 w-12 bg-cyan-500/50" />
            <div className="h-1 w-8 bg-cyan-500/30" />
            <div className="h-1 w-16 bg-cyan-500/70" />
          </div>

          <ScanFace className="absolute -left-8 top-10 h-12 w-12 text-purple-400 opacity-80" />
        </div>
      </motion.div>

      {/* Main Content (Centered) */}
      <motion.div style={{
      y: textY,
      opacity: textOpacity
    }} className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          <span className="ml-3 text-sm font-medium tracking-wide text-cyan-300">
            ПОГРУЖЕНИЕ В НОВОЕ ПОКОЛЕНИЕ
          </span>
        </div>

        <h1 className="mb-8 max-w-4xl text-6xl font-bold tracking-tight text-white md:text-8xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Virtual
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient">
            Reality
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-slate-400 md:text-xl">
          Окунитесь в мир цифровых технологий с беспрецедентной глубиной и присутствием.
          Здесь физические ограничения растворяются в бесконечных возможностях.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105">
            <span className="relative z-10">Войдите в симуляцию</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            Просмотр спецификаций
          </button>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#0a1128] to-transparent z-40" />
    </section>;
}