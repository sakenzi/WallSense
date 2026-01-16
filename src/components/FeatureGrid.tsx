import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxCard } from 'd:/WallSense_desktop/WallSense/src/components/ParallaxCard.tsx';
import { Layers, Zap, Globe, Shield, Cpu, BoxIcon } from 'lucide-react';
const features = [{ 
  title: 'Пространственные вычисления',
  description: 'Перемещайтесь в 3D-среде с помощью естественных жестов и интуитивно понятных элементов управления, разработанных для новой эры Интернета.',
  icon: BoxIcon,
  color: 'cyan'
}, {
  title: 'Нейронный интерфейс',
  description: 'Прямые нейронные пути обеспечивают взаимодействие между мышлением и цифровым исполнением с нулевой задержкой.',
  icon: Zap,
  color: 'purple'
}, {
  title: 'Глобальная сетка',
  description: 'Подключайтесь к децентрализованной сети из любой точки физического мира с помощью резервных спутниковых каналов связи.',
  icon: Globe,
  color: 'cyan'
}, {
  title: 'Квантовая безопасность',
  description: 'Сквозное шифрование, защищенное квантовым распределением ключей, гарантирует, что ваши данные останутся вашими навсегда.',
  icon: Shield,
  color: 'purple'
}, {
  title: 'Многослойная реальность',
  description: 'Легко сочетайте цифровые артефакты с физическим миром, используя наш продвинутый механизм сквозного просмотра.',
  icon: Layers,
  color: 'cyan'
}, {
  title: 'Обработка кромок',
  description: 'Распределенные вычислительные узлы справляются с большими нагрузками на рендеринг, обеспечивая фотореалистичную точность на любом устройстве.',
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
            Основные системы
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Построенный на основе передовой архитектуры, разработанной с
учетом требований метавселенной.
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