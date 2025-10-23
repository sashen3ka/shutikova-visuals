
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Megaphone, 
  Video, 
  Sparkles, 
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: Megaphone,
      title: 'Рекламные креативы',
      description: 'Создаю эффективные визуалы для рекламных кампаний',
      features: [
        'Баннеры для Telegram ADS',
        'Креативы для социальных сетей',
        'A/B тестирование визуалов',
        'Анализ конверсии'
      ],
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      icon: Video,
      title: 'Видео-контент',
      description: 'Производство динамичного видео для различных платформ',
      features: [
        'Рилсы для Instagram/TikTok',
        'Промо-ролики (до 60 сек)',
        'Анимированные баннеры',
        'Stories и анимация'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: Sparkles,
      title: 'AI-генерация',
      description: 'Использование нейросетей для создания уникальных визуалов',
      features: [
        'Уникальные визуалы с помощью AI',
        'Стилизация под бренд',
        'Быстрая итерация идей',
        'Экспериментальные решения'
      ],
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: Palette,
      title: 'Дизайн для соцсетей',
      description: 'Комплексное оформление профилей и контента',
      features: [
        'Оформление профилей',
        'Сторис и посты',
        'Единый визуальный стиль',
        'Шаблоны для контента'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ]

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Чем могу помочь
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Предлагаю полный спектр услуг по созданию визуального контента, 
            который помогает брендам выделяться и эффективно взаимодействовать с аудиторией
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${service.bgColor} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 lg:h-10 lg:w-10 ${service.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.6 + index * 0.2 + featureIndex * 0.1 
                        }}
                        className="flex items-center"
                      >
                        <CheckCircle className={`h-5 w-5 ${service.textColor} mr-3 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                  {/* CTA */}
                  <button
                    onClick={() => {
                      const contactElement = document.querySelector('#contact')
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className={`inline-flex items-center ${service.textColor} font-semibold hover:underline transition-all duration-300 group-hover:translate-x-2`}
                  >
                    Обсудить проект
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Я открыта к нестандартным проектам и всегда готова обсудить 
              индивидуальные решения для вашего бренда
            </p>
            <button
              onClick={() => {
                const contactElement = document.querySelector('#contact')
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Написать мне
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
