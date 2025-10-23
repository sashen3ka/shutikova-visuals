
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Palette, 
  Bot, 
  Video,
  Star,
  Code,
  Layers
} from 'lucide-react'

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const toolCategories = [
    {
      icon: Palette,
      title: 'Дизайн',
      color: 'text-pink-500 bg-pink-50',
      tools: [
        { name: 'Figma', level: 95, description: 'UI/UX дизайн и прототипирование' },
        { name: 'Adobe Photoshop', level: 90, description: 'Обработка изображений' },
        { name: 'Canva Pro', level: 88, description: 'Быстрый дизайн и шаблоны' },
        { name: 'Adobe Illustrator', level: 85, description: 'Векторная графика' }
      ]
    },
    {
      icon: Bot,
      title: 'AI-инструменты',
      color: 'text-purple-500 bg-purple-50',
      tools: [
        { name: 'Midjourney', level: 92, description: 'AI-генерация изображений' },
        { name: 'DALL-E', level: 87, description: 'Создание уникальных визуалов' },
        { name: 'Stable Diffusion', level: 85, description: 'Локальная AI-генерация' },
        { name: 'Higgsfield AI', level: 83, description: 'Видео и анимация AI' },
        { name: 'Krea AI', level: 80, description: 'Real-time AI генерация' }
      ]
    },
    {
      icon: Video,
      title: 'Видео',
      color: 'text-blue-500 bg-blue-50',
      tools: [
        { name: 'CapCut', level: 90, description: 'Монтаж рилсов и коротких видео' },
        { name: 'Adobe Premiere Pro', level: 82, description: 'Профессиональный монтаж' },
        { name: 'After Effects', level: 78, description: 'Анимация и спецэффекты' }
      ]
    }
  ]

  return (
    <section id="tools" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Инструменты и навыки
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Использую современные инструменты и технологии для создания 
            качественного визуального контента. Постоянно изучаю новые решения и подходы.
          </p>
        </motion.div>

        {/* Tools Categories */}
        <div className="space-y-16">
          {toolCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${category.color} flex items-center justify-center mr-6`}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {category.tools.length} инструмент{category.tools.length > 1 ? (category.tools.length < 5 ? 'а' : 'ов') : ''}
                    </p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + categoryIndex * 0.2 + toolIndex * 0.1 
                      }}
                      className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {tool.description}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-semibold text-gray-700">
                            {tool.level}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${tool.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.8 + categoryIndex * 0.2 + toolIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="gradient-bg-primary h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Постоянно развиваюсь
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Слежу за новыми трендами в дизайне и технологиях. 
                  Регулярно изучаю новые AI-инструменты и совершенствую навыки 
                  для создания более эффективных решений.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code, label: 'Новые технологии', value: 'Каждый месяц' },
                  { icon: Layers, label: 'Онлайн-курсы', value: '12+ в год' },
                  { icon: Bot, label: 'AI-эксперименты', value: 'Ежедневно' },
                  { icon: Star, label: 'Клиентский рейтинг', value: '4.9/5.0' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="h-8 w-8 mx-auto mb-2 opacity-90" />
                      <div className="text-xl lg:text-2xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm opacity-75">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Хотите узнать, как эти инструменты помогут вашему проекту?
          </p>
          <button
            onClick={() => {
              const contactElement = document.querySelector('#contact')
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white gradient-bg-primary rounded-full hover:scale-105 transition-transform duration-300"
          >
            Обсудить возможности
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Tools
