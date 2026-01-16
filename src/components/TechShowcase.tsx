import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
export function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  return <section ref={containerRef} className="relative overflow-hidden py-32">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-600/20 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2 lg:items-center">
        <motion.div style={{
        y,
        rotate
      }} className="relative mx-auto aspect-square w-full max-w-md lg:mx-0">
          {/* Abstract 3D Cube Representation */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md" />
            <div className="absolute inset-4 rounded-2xl border border-cyan-500/20 bg-cyan-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 shadow-lg shadow-cyan-500/20" />
                <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 opacity-80 shadow-lg shadow-purple-500/20" />
                <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 opacity-80 shadow-lg shadow-emerald-500/20" />
                <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 opacity-80 shadow-lg shadow-orange-500/20" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Engineered for <span className="text-cyan-400">Performance</span>
          </h2>
          <p className="mb-8 text-lg text-slate-400">
            Our proprietary rendering engine optimizes 3D assets in real-time,
            ensuring buttery smooth 120fps experiences across all supported
            devices.
          </p>

          <ul className="space-y-4">
            {['Zero-latency physics engine', 'Real-time ray tracing support', 'Adaptive resolution scaling', 'Cloud-native asset streaming', 'Cross-platform synchronization'].map((item, i) => <motion.li key={item} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }} className="flex items-center text-slate-300">
                <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  <Check className="h-3.5 w-3.5" />
                </div>
                {item}
              </motion.li>)}
          </ul>
        </div>
      </div>
    </section>;
}