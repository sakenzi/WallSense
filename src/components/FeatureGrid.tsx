import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxCard } from 'd:/WallSense_desktop/WallSense/src/components/ParallaxCard.tsx';
import { Layers, Zap, Globe, Shield, Cpu, BoxIcon } from 'lucide-react';
const features = [{ 
  title: 'Spatial Computing',
  description: 'Navigate 3D environments with natural gestures and intuitive controls designed for the next era of web.',
  icon: BoxIcon,
  color: 'cyan'
}, {
  title: 'Neural Interface',
  description: 'Direct neural pathways allow for zero-latency interaction between thought and digital execution.',
  icon: Zap,
  color: 'purple'
}, {
  title: 'Global Mesh',
  description: 'Connect to the decentralized grid from anywhere in the physical world with redundant satellite uplinks.',
  icon: Globe,
  color: 'cyan'
}, {
  title: 'Quantum Security',
  description: 'End-to-end encryption secured by quantum key distribution ensures your data remains yours forever.',
  icon: Shield,
  color: 'purple'
}, {
  title: 'Layered Reality',
  description: 'Seamlessly blend digital artifacts with the physical world using our advanced passthrough engine.',
  icon: Layers,
  color: 'cyan'
}, {
  title: 'Edge Processing',
  description: 'Distributed compute nodes handle heavy rendering loads, delivering photorealistic fidelity to any device.',
  icon: Cpu,
  color: 'purple'
}] as const;
export function FeatureGrid() {
  return <section className="relative z-10 py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Core Systems
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Built on advanced architecture designed to handle the demands of the
            metaverse.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="h-[400px]" 
        >
              <ParallaxCard title={feature.title} description={feature.description} icon={feature.icon} color={feature.color} />
            </motion.div>)}
        </div>
      </div>
    </section>;
}