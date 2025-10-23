
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Lightbulb, 
  Zap, 
  Bot, 
  Target, 
  Clock,
  Award
} from 'lucide-react'

const About = () => {
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

  const advantages = [
    {
      icon: Lightbulb,
      title: 'Креативный подход',
      description: 'К каждому проекту подхожу индивидуально, создавая уникальные решения',
      color: 'text-yellow-500 bg-yellow-50'
    },
    {
      icon: Zap,
      title: 'Быстрая реализация',
      description: 'Понимаю важность дедлайнов и работаю быстро, не теряя качества',
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: Bot,
      title: 'AI-инструменты',
      description: 'Использую современные нейросети для создания уникального контента',
      color: 'text-purple-500 bg-purple-50'
    },
    {
      icon: Target,
      title: 'Маркетинговое мышление',
      description: 'Понимаю психологию покупателя и создаю дизайн, который продает',
      color: 'text-red-500 bg-red-50'
    },
    {
      icon: Clock,
      title: 'Соблюдение сроков',
      description: 'Всегда сдаю проекты в оговоренные сроки, ценю ваше время',
      color: 'text-green-500 bg-green-50'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Обо мне
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <div className="max-w-3xl mx-auto">
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              Я создаю визуальный контент, который не просто красивый, а эффективный. 
              Мой опыт в графическом дизайне и видеопродакшене помогает брендам 
              выделяться среди конкурентов и достигать своих маркетинговых целей.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Специализируюсь на создании рекламных креативов для Telegram ADS, 
              производстве рилсов и использовании AI-инструментов для генерации 
              уникальных визуальных решений.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '200+', label: 'Проектов выполнено' },
            { number: '50+', label: 'Довольных клиентов' },
            { number: '3+', label: 'Года опыта' },
            { number: '24/7', label: 'Готова к сотрудничеству' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-3xl lg:text-4xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 text-sm lg:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 ${advantage.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 lg:h-8 lg:w-8" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border max-w-4xl mx-auto">
            <Award className="h-16 w-16 text-purple-500 mx-auto mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Готовы увидеть результат?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Давайте обсудим ваш проект и создадим креатив, 
              который выделит ваш бренд среди конкурентов
            </p>
            <button
              onClick={() => {
                const portfolioElement = document.querySelector('#portfolio')
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white gradient-bg-primary rounded-full hover:scale-105 transition-transform duration-300"
            >
              Посмотреть мои работы
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
