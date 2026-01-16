import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}
export function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    // Generate random particles
    const particleCount = 40;
    const newParticles = Array.from({
      length: particleCount
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);
  return <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(p => <motion.div key={p.id} className="absolute rounded-full bg-cyan-400 blur-[1px]" style={{
      left: `${p.x}%`,
      top: `${p.y}%`,
      width: p.size,
      height: p.size,
      opacity: p.opacity
    }} animate={{
      y: [0, -100, 0],
      opacity: [p.opacity, p.opacity * 1.5, p.opacity]
    }} transition={{
      duration: p.duration,
      repeat: Infinity,
      ease: 'linear',
      delay: p.delay
    }} />)}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1128]/80" />
    </div>;
}