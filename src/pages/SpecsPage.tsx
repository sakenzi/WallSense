import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Cpu, Eye, Layers, Zap, Monitor, Database, Glasses, Wifi, Activity } from 'lucide-react';
import { ParticleField } from '../components/ParticleField';
import { ParallaxCard } from '../components/ParallaxCard';

interface SpecsPageProps {
  onBack: () => void;
}
export function SpecsPage({
  onBack
}: SpecsPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return <main ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-[#050510] text-white selection:bg-cyan-500/30 perspective-1000">
      <ParticleField />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" style={{
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)'
      }} />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0a1128]/80 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Назад</span>
          </button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20">
        {/* Header */}
        <motion.div style={{
        y: titleY,
        opacity
      }} className="mb-24 text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-950/30 px-4 py-1.5 backdrop-blur-sm">
            <Activity className="mr-2 h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-purple-300">
              СИСТЕМНАЯ АРХИТЕКТУРА v1.0
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Технические 
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              характеристики
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400">
            Углубитесь в процесс обнаружения, требования к оборудованию и
            показатели производительности системы WallSense.
          </p>
        </motion.div>

        {/* System Architecture Diagram */}
        <section className="mb-32">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Спецификация обнаружения
          </h2>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="relative z-10 grid gap-8 md:grid-cols-3 items-center">
              {/* Step 1: Input */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur transition duration-500 group-hover:opacity-40" />
                <div className="relative flex flex-col items-center rounded-lg border border-white/10 bg-[#0a1128] p-6 text-center">
                  <div className="mb-4 rounded-full bg-cyan-500/10 p-4 text-cyan-400">
                    <Monitor className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-white">Источник входного сигнала</h3>
                  <p className="text-sm text-slate-400">
                    Подача с камеры RGB / Поток дронов
                  </p>
                  <div className="mt-2 text-xs font-mono text-cyan-500">
                    1080p @ 60fps
                  </div>
                </div>
              </div>

              {/* Arrow 1
              <div className="hidden md:flex justify-center">
                <motion.div animate={{
                opacity: [0.3, 1, 0.3]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} className="h-1 w-full bg-gradient-to-r from-cyan-500/20 via-cyan-500 to-purple-500/20" />
              </div> */}

              {/* Step 2: Processing */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur transition duration-500 group-hover:opacity-40" />
                <div className="relative flex flex-col items-center rounded-lg border border-white/10 bg-[#0a1128] p-6 text-center">
                  <div className="mb-4 rounded-full bg-purple-500/10 p-4 text-purple-400">
                    <Cpu className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-white">Нейронная модель</h3>
                  <p className="text-sm text-slate-400">
                    Определение объекта и позы
                  </p>
                  <div className="mt-2 text-xs font-mono text-purple-500">
                    &lt;Вывод за 15ms 
                  </div>
                </div>
              </div>

              {/* Arrow 2
              <div className="hidden md:flex justify-center">
                <motion.div animate={{
                opacity: [0.3, 1, 0.3]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }} className="h-1 w-full bg-gradient-to-r from-purple-500/20 via-purple-500 to-cyan-500/20" />
              </div> */}

              {/* Step 3: Visualization */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-green-500 opacity-20 blur transition duration-500 group-hover:opacity-40" />
                <div className="relative flex flex-col items-center rounded-lg border border-white/10 bg-[#0a1128] p-6 text-center">
                  <div className="mb-4 rounded-full bg-cyan-500/10 p-4 text-cyan-400">
                    <Glasses className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-white">Unity VR</h3>
                  <p className="text-sm text-slate-400">
                    3D пространственная визуализация
                  </p>
                  <div className="mt-2 text-xs font-mono text-cyan-500">
                    XR взаимодействие
                  </div>
                </div>
              </div>
            </div>

            {/* Background Flow Lines */}
            <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-32">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Показатели производительности
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{
            label: 'Частота смены кадров',
            value: '90+',
            unit: 'FPS',
            color: 'text-green-400'
          }, {
            label: 'Задержка обнаружения',
            value: '<50',
            unit: 'ms',
            color: 'text-cyan-400'
          }, {
            label: 'Точность отслеживания',
            value: '98.5',
            unit: '%',
            color: 'text-purple-400'
          }, {
            label: 'Ключевые точки позы',
            value: '17',
            unit: 'pts',
            color: 'text-blue-400'
          }].map((metric, i) => <motion.div key={metric.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: i * 0.1
          }} viewport={{
            once: true
          }} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="relative z-10">
                  <div className={`text-4xl font-bold ${metric.color} mb-1`}>
                    {metric.value}{' '}
                    <span className="text-lg text-slate-500">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-300">
                    {metric.label}
                  </div>
                </div>
                <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-20 ${metric.color.replace('text-', 'bg-')}`} />
              </motion.div>)}
          </div>
        </section>

        {/* Core Technologies Grid */}
        <section className="mb-32">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Основные технологии
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 h-[600px] md:h-[400px]">
            <ParallaxCard title="Нейронная модель" description="Современная модель обнаружения объектов в режиме реального времени, оптимизированная для скорости и точности. Обеспечивает одновременное обнаружение нескольких классов и оценку позы человека, обьектов и т.д." icon={Eye} color="cyan" />
            <ParallaxCard title="Unity 2025 LTS" description="Высокоточный движок 3D-рендеринга, поддерживающий виртуальную среду. Использует XR Interaction Toolkit для иммерсивных пространственных манипуляций." icon={Layers} color="purple" />
            <ParallaxCard title="Разметка данных" description="Инструмент для создания аннотаций с помощью компьютерного зрения, используемый для создания пользовательских наборов данных. Поддерживает ограничивающие рамки, полигоны и ключевые точки скелета." icon={Database} color="cyan" />
          </div>
        </section>

        {/* Hardware Requirements */}
        <section className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Системные требования
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Minimum Specs */}
            <div className="rounded-2xl border border-white/10 bg-[#0a1128]/50 p-8 backdrop-blur-md">
              <div className="mb-6 flex items-center gap-3">
                <Zap className="h-6 w-6 text-slate-400" />
                <h3 className="text-xl font-bold text-white">Минимальные технические характеристики</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <div>
                    <span className="block font-medium text-white">
                      Процессор
                    </span>
                    Intel Core i5-9600K / AMD Ryzen 5 3600
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <div>
                    <span className="block font-medium text-white">
                      Графика
                    </span>
                    NVIDIA GTX 1060 6GB / AMD RX 580
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <div>
                    <span className="block font-medium text-white">Память</span>
                    16 GB RAM
                  </div>
                </li>
              </ul>
            </div>

            {/* Recommended Specs */}
            <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-purple-950/30 p-8 backdrop-blur-md">
              <div className="absolute -top-px left-8 flex h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="mb-6 flex items-center gap-3">
                <Zap className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Рекомендуемый</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <div>
                    <span className="block font-medium text-white">
                      Процессор
                    </span>
                    Intel Core i7-12700K / AMD Ryzen 7 5800X
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <div>
                    <span className="block font-medium text-white">
                      Графика
                    </span>
                    NVIDIA RTX 3060 Ti or better
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <div>
                    <span className="block font-medium text-white">Память</span>
                    32 GB RAM
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <div>
                    <span className="block font-medium text-white">
                      Гарнитура VR
                    </span>
                    Meta Quest 2 / 3 or Valve Index
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-12 text-center text-sm text-slate-500">
          <div className="flex justify-center gap-6 mb-8">
            <Wifi className="h-5 w-5 hover:text-cyan-400 transition-colors cursor-pointer" />
            <Database className="h-5 w-5 hover:text-cyan-400 transition-colors cursor-pointer" />
            <Monitor className="h-5 w-5 hover:text-cyan-400 transition-colors cursor-pointer" />
          </div>
          <p>© 2026 WallSense Reality Systems. Академическая лицензия.</p>
        </footer>
      </div>
    </main>;
}