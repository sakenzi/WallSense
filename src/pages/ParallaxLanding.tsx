import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeatureGrid } from '../components/FeatureGrid';
import { TechShowcase } from '../components/TechShowcase';
import { ParticleField } from '../components/ParticleField';
export function ParallaxLanding() {
  return <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a1128] text-white selection:bg-cyan-500/30">
      <ParticleField />

      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0a1128]/80 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-cyan-400 to-purple-500" />
            <span className="text-xl font-bold tracking-tight">WALLSENSE</span>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Платформа
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Оборудование
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Разработчики
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Сообщество
            </a>
          </div>
          <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
            Войти
          </button>
        </div>
      </nav>

      <HeroSection />

      <div className="relative z-10 bg-gradient-to-b from-[#0a1128] to-[#050510]">
        <FeatureGrid />
        <TechShowcase />

        {/* CTA Section */}
        <section className="relative overflow-hidden py-32 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20" />
          <div className="relative z-10 mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Готовы погрузиться в?
            </h2>
            <p className="mb-10 text-xl text-slate-400">
              Присоединяйтесь к тысячам первопроходцев, строящих будущее цифровой реальности.
            </p>
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]">
              <span className="mr-2">Начинайте пробовать прямо сейчас</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#050510] py-12 text-center text-sm text-slate-500">
          <p>© Системы реальности WallSense 2026 года выпуска. Все права защищены.</p>
        </footer>
      </div>
    </main>;
}